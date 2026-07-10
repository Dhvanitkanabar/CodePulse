import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const HoverCard = ({ data }) => {
  if (!data) return null;

  return (
    <motion.div
      className="fixed z-50 pointer-events-auto p-4 rounded-xl glass-card bg-white/80 shadow-xl w-64"
      style={{ top: data.y, left: data.x }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="flex items-start gap-3">
        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-slate-800 text-sm mb-1">{data.title || 'Quick Peek'}</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {data.description || 'Preview content will appear here when connected to the AI backend.'}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HoverCard;
