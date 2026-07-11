import { useState } from 'react';
import { Send, Bot, User, Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const demoMessages = [
  { id: 1, role: 'assistant', content: 'Hello! I\'m NeuroLens AI. How can I help you today?' },
];

export default function ChatPanel({ className }) {
  const [messages] = useState(demoMessages);
  const [input, setInput] = useState('');

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              'flex gap-3 max-w-[85%]',
              msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''
            )}
          >
            <div
              className={cn(
                'w-8 h-8 rounded-xl flex items-center justify-center shrink-0',
                msg.role === 'user'
                  ? 'bg-white text-black'
                  : 'bg-[#151515] border border-surface-700 text-white'
              )}
            >
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div
              className={cn(
                'px-4 py-3 rounded-2xl text-sm leading-relaxed',
                msg.role === 'user'
                  ? 'bg-white text-black rounded-tr-md font-medium'
                  : 'bg-[#1e1e1e] border border-surface-700 text-white rounded-tl-md'
              )}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-surface-700">
        <div className="glass-input flex items-center gap-2">
          <button className="p-1.5 rounded-lg hover:bg-[#151515] text-surface-500 hover:text-surface-300 transition-colors">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Send a message..."
            className="bg-transparent border-none outline-none text-sm w-full text-surface-200 placeholder:text-surface-500"
          />
          <button
            className={cn(
              'p-2 rounded-xl transition-all',
              input.trim()
                ? 'bg-white text-black hover:bg-[#e5e5e5]'
                : 'text-surface-600 bg-transparent'
            )}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
