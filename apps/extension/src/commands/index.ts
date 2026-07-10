// ========================
// Keyboard Commands Setup
// ========================

export function setupCommands() {
  chrome.commands.onCommand.addListener((command, tab) => {
    switch (command) {
      case 'toggle-sidepanel':
        if (tab?.id) {
          chrome.sidePanel.open({ tabId: tab.id }).catch(console.error);
        }
        break;
      case 'quick-chat':
        // TODO: open quick chat overlay
        console.warn('[NeuroLens] Quick chat triggered');
        break;
      case 'extract-content':
        // TODO: extract content from current tab
        if (tab?.id) {
          chrome.tabs.sendMessage(tab.id, { type: 'EXTRACT_CONTENT' });
        }
        break;
      case 'voice-input':
        // TODO: start voice input
        console.warn('[NeuroLens] Voice input triggered');
        break;
      default:
        console.warn('[NeuroLens] Unknown command:', command);
    }
  });
}
