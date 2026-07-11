import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';
import { cn } from '@/utils';

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const colors = {
  success: 'border-surface-700 bg-[#111111] text-white',
  error: 'border-surface-700 bg-[#111111] text-white',
  warning: 'border-surface-700 bg-[#111111] text-white',
  info: 'border-surface-700 bg-[#111111] text-white',
};

export default function Toast({ message, type = 'info', duration = 4000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = icons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 200);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-glass',
            colors[type]
          )}
        >
          <Icon size={18} />
          <span className="text-sm font-medium text-surface-100">{message}</span>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 200);
            }}
            className="ml-auto p-1 rounded hover:bg-white/10 transition-colors"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Toast Container — render at app root
export function ToastContainer({ toasts = [], removeToast }) {
  return (
    <div className="fixed top-4 right-4 z-[100] space-y-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  );
}
