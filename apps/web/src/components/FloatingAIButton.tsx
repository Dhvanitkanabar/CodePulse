import { motion } from 'framer-motion';
import { useChatStore } from '@/stores/chat.store';

export function FloatingAIButton() {
  const { toggle, isOpen } = useChatStore();

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <span className="text-2xl">{isOpen ? '✕' : '🧠'}</span>
    </motion.button>
  );
}
