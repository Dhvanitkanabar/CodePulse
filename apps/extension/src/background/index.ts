// ========================
// Background Service Worker
// ========================

import { setupContextMenus } from '../context-menu';
import { setupCommands } from '../commands';

// Install event
chrome.runtime.onInstalled.addListener((details) => {
  console.warn('[NeuroLens] Extension installed:', details.reason);
  setupContextMenus();
});

// Setup keyboard shortcuts
setupCommands();

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.warn('[NeuroLens] Message received:', message, 'from:', sender.tab?.url);

  switch (message.type) {
    case 'EXTRACT_CONTENT':
      // TODO: handle content extraction
      sendResponse({ success: true, data: null });
      break;
    case 'PAGE_INFO':
      // TODO: handle page info
      sendResponse({ success: true, data: null });
      break;
    case 'SAVE_BOOKMARK':
      // TODO: handle bookmark saving
      sendResponse({ success: true, data: null });
      break;
    default:
      sendResponse({ success: false, error: 'Unknown message type' });
  }

  return true; // Keep message channel open for async response
});

// Side panel behavior
chrome.sidePanel?.setPanelBehavior?.({ openPanelOnActionClick: false }).catch(console.error);
