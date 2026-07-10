/**
 * Extension Popup — main UI for quick actions.
 */
export default function App() {
  return (
    <div className="flex flex-col min-h-[500px] bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950">
      {/* Header */}
      <header className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
          N
        </div>
        <div>
          <h1 className="text-base font-semibold text-white">NeuroLens AI</h1>
          <p className="text-xs text-white/50">Browser Companion</p>
        </div>
      </header>

      {/* Body — stub */}
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="h-16 w-16 mx-auto mb-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-2xl">🧠</span>
          </div>
          <p className="text-white/60 text-sm">Ready to analyze this page</p>
          <p className="text-white/40 text-xs mt-1">Press Alt+S to open side panel</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs text-white/40">v0.1.0</span>
        <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
          Settings
        </button>
      </footer>
    </div>
  );
}
