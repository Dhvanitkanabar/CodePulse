import { useState, useEffect } from 'react';

export const useSelection = () => {
  const [selection, setSelection] = useState({ text: '', rect: null, type: 'none' });

  useEffect(() => {
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) {
        setSelection({ text: '', rect: null, type: 'none' });
        return;
      }

      const text = sel.toString().trim();
      if (!text) return;

      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      let type = 'text';
      if (text.startsWith('http')) type = 'url';
      else if (text.includes('const ') || text.includes('function') || text.includes('=>')) type = 'code';

      setSelection({ text, rect, type });
    };

    document.addEventListener('mouseup', handleSelectionChange);
    document.addEventListener('keyup', handleSelectionChange);

    return () => {
      document.removeEventListener('mouseup', handleSelectionChange);
      document.removeEventListener('keyup', handleSelectionChange);
    };
  }, []);

  return selection;
};
