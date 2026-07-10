/**
 * Side Panel — full-featured AI chat and tools.
 */
export default function App() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950">
      {/* Header */}
      <header className="flex items-center gap-3 px-4 py-3 border-b border-white/10 backdrop-blur-xl">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
        <h1 className="text-sm font-semibold text-white flex-1">NeuroLens AI</h1>
        <div className="flex gap-1">
          <button className="h-7 w-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all text-xs">
            ⚙
          </button>
        </div>
      </header>

      {/* Chat area — stub */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="h-20 w-20 mb-4 rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 flex items-center justify-center">
            <span className="text-3xl">🧠</span>
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">NeuroLens AI</h2>
          <p className="text-white/50 text-sm max-w-[240px]">
            Ask me anything about this page, or let me help you understand the content.
          </p>
        </div>
      </main>

      {/* Input area — stub */}
      <footer className="p-3 border-t border-white/10">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about this page..."
            className="flex-1 h-10 rounded-xl bg-white/5 border border-white/10 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/50"
          />
          <button className="h-10 w-10 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
            ↑
          </button>
        </div>
      </footer>
    </div>
  );
}
