class EventBus {
  constructor() {
    this.listeners = new Map();

    // Attach native Chrome message listener for cross-context bridging
    if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
      chrome.runtime.onMessage.addListener((message, sender) => {
        if (message && message.type === 'EVENT_BUS_EMIT') {
          this._trigger(message.event, message.payload, sender);
        }
      });
    }
  }

  /**
   * Subscribe to an event
   * @param {string} event 
   * @param {Function} callback 
   */
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event).add(callback);
  }

  /**
   * Subscribe to an event once
   * @param {string} event 
   * @param {Function} callback 
   */
  once(event, callback) {
    const wrapper = (payload, sender) => {
      this.off(event, wrapper);
      callback(payload, sender);
    };
    this.on(event, wrapper);
  }

  /**
   * Unsubscribe from an event
   * @param {string} event 
   * @param {Function} callback 
   */
  off(event, callback) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).delete(callback);
    }
  }

  /**
   * Remove all listeners for an event (or all events if event is undefined)
   * @param {string} [event] 
   */
  removeAllListeners(event) {
    if (event) {
      this.listeners.delete(event);
    } else {
      this.listeners.clear();
    }
  }

  /**
   * Get the number of listeners for an event
   * @param {string} event 
   * @returns {number}
   */
  listenerCount(event) {
    return this.listeners.has(event) ? this.listeners.get(event).size : 0;
  }

  /**
   * Internal local trigger logic
   * @private
   */
  _trigger(event, payload, sender) {
    if (this.listeners.has(event)) {
      for (const callback of this.listeners.get(event)) {
        try {
          callback(payload, sender);
        } catch (error) {
          console.error(`[EventBus] Error executing listener for event ${event}:`, error);
        }
      }
    }
  }

  /**
   * Emit an event globally across all Chrome extension contexts (Content Scripts, Background, Popups)
   * @param {string} event 
   * @param {any} payload 
   */
  async emit(event, payload = {}) {
    // Trigger local listeners in the current execution context
    this._trigger(event, payload, { id: 'local' });

    // Broadcast across contexts
    if (typeof chrome !== 'undefined' && chrome.runtime) {
      const message = { type: 'EVENT_BUS_EMIT', event, payload };
      
      // 1. Send to background/popup/sidepanel via runtime
      try {
        chrome.runtime.sendMessage(message).catch(() => {});
      } catch (err) {}

      // 2. If we have access to chrome.tabs (Background or Popup), broadcast to all content scripts
      if (chrome.tabs && typeof chrome.tabs.query === 'function') {
        try {
          const tabs = await chrome.tabs.query({});
          tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, message).catch(() => {});
          });
        } catch (err) {}
      }
    }
  }
}

// Export singleton instance
export const eventBus = new EventBus();
export default eventBus;
