// ========================
// Context Menu Setup
// ========================

export function setupContextMenus() {
  // Remove existing menus
  chrome.contextMenus.removeAll();

  // Create context menu items
  chrome.contextMenus.create({
    id: 'neurolens-summarize',
    title: 'Summarize with NeuroLens',
    contexts: ['page'],
  });

  chrome.contextMenus.create({
    id: 'neurolens-explain',
    title: 'Explain Selected Text',
    contexts: ['selection'],
  });

  chrome.contextMenus.create({
    id: 'neurolens-bookmark',
    title: 'Save to NeuroLens',
    contexts: ['page', 'link'],
  });

  chrome.contextMenus.create({
    id: 'neurolens-ask',
    title: 'Ask NeuroLens about this',
    contexts: ['selection'],
  });

  // Handle context menu clicks
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case 'neurolens-summarize':
        // TODO: trigger page summarization
        console.warn('[NeuroLens] Summarize page:', tab?.url);
        break;
      case 'neurolens-explain':
        // TODO: explain selected text
        console.warn('[NeuroLens] Explain:', info.selectionText);
        break;
      case 'neurolens-bookmark':
        // TODO: save bookmark
        console.warn('[NeuroLens] Bookmark:', info.linkUrl ?? tab?.url);
        break;
      case 'neurolens-ask':
        // TODO: open chat with selected text as query
        console.warn('[NeuroLens] Ask about:', info.selectionText);
        break;
    }
  });
}
