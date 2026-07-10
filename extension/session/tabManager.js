import { sessionEvents } from './sessionEvents.js';

export class TabManager {
    constructor() {
        this.tabs = new Map();
        this.recentClosed = [];
    }

    updateTab(tabId, tabData) {
        this.tabs.set(tabId, { ...tabData, lastAccessed: Date.now() });
    }

    removeTab(tabId) {
        if (this.tabs.has(tabId)) {
            this.recentClosed.push(this.tabs.get(tabId));
            this.tabs.delete(tabId);
        }
    }

    getActiveTabs() {
        return Array.from(this.tabs.values());
    }
}

export const tabManager = new TabManager();
