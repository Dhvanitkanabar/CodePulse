export const extractSelection = () => { const sel = window.getSelection(); return sel ? { text: sel.toString(), isCollapsed: sel.isCollapsed } : null; };
