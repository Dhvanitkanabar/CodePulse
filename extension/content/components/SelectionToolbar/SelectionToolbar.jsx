import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelection } from '../../hooks/useSelection';
import { Sparkles, Languages, FileText, Code } from 'lucide-react';

const SelectionToolbar = () => {
  const selection = useSelection();

  if (!selection.text || !selection.rect) return null;

  const getActions = () => {
    switch (selection.type) {
      case 'code':
        return [
          { icon: <Code className="w-4 h-4" />, label: 'Explain Code' },
          { icon: <Sparkles className="w-4 h-4" />, label: 'Optimize' }
        ];
      case 'url':
        return [
          { icon: <FileText className="w-4 h-4" />, label: 'Summarize Link' }
        ];
      default:
        return [
          { icon: <Sparkles className="w-4 h-4" />, label: 'Explain' },
          { icon: <FileText className="w-4 h-4" />, label: 'Summarize' },
          { icon: <Languages className="w-4 h-4" />, label: 'Translate' }
        ];
    }
  };

  const style = {
    top: selection.rect.top - 50,
    left: selection.rect.left + selection.rect.width / 2,
    transform: 'translateX(-50%)'
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed z-50 pointer-events-auto flex gap-2 p-2 rounded-full glass-card bg-white/70 shadow-lg"
        style={style}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.9 }}
      >
        {getActions().map((action, idx) => (
          <button 
            key={idx}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-100/50 rounded-full transition-colors"
          >
            {action.icon}
            {action.label}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SelectionToolbar;
