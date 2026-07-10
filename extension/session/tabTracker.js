import { sessionEvents } from './sessionEvents.js';
import { tabManager } from './tabManager.js';

export class TabTracker {
    constructor() {
        this.active = false;
    }

    startTracking() {
        if (typeof chrome !== 'undefined' && chrome.tabs) {
            chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                if (changeInfo.status === 'complete') {
                    tabManager.updateTab(tabId, tab);
                }
            });
            chrome.tabs.onRemoved.addListener((tabId) => {
                tabManager.removeTab(tabId);
            });
        }
        this.active = true;
    }
}

export const tabTracker = new TabTracker();
