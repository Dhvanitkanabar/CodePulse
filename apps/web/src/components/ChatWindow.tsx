import { motion, AnimatePresence } from 'framer-motion';
import { useChatStore } from '@/stores/chat.store';

export function ChatWindow() {
  const { isOpen, close } = useChatStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 z-50 w-96 h-[500px] glass-card flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-lg">🧠</span>
              <h3 className="text-sm font-semibold text-white">NeuroLens Chat</h3>
            </div>
            <button
              onClick={close}
              className="h-7 w-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all text-xs"
            >
              ✕
            </button>
          </div>

          {/* Messages — stub */}
          <div className="flex-1 overflow-y-auto p-4 scrollbar-thin flex items-center justify-center">
            <p className="text-white/40 text-sm text-center">
              Chat with NeuroLens AI about any webpage.
            </p>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 h-9 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
              />
              <button className="h-9 w-9 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white text-sm">
                ↑
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
