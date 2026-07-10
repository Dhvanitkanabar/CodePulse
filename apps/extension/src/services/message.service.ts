// ========================
// Message Service
// ========================

export const messageService = {
  async sendToBackground<T = unknown>(message: unknown): Promise<T> {
    return new Promise((resolve) => {
      chrome.runtime.sendMessage(message, (response: T) => resolve(response));
    });
  },

  async sendToTab<T = unknown>(tabId: number, message: unknown): Promise<T> {
    return new Promise((resolve) => {
      chrome.tabs.sendMessage(tabId, message, (response: T) => resolve(response));
    });
  },

  async sendToActiveTab<T = unknown>(message: unknown): Promise<T> {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error('No active tab found');
    return this.sendToTab<T>(tab.id, message);
  },
};
