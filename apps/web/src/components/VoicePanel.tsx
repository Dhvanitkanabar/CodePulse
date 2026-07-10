/**
 * VoicePanel component — stub for voice interaction UI.
 */
export function VoicePanel() {
  return (
    <div className="glass-card p-6 flex flex-col items-center justify-center gap-4">
      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border-2 border-violet-500/30 flex items-center justify-center animate-pulse-glow">
        <span className="text-3xl">🎙️</span>
      </div>
      <p className="text-white/60 text-sm">Voice interaction ready</p>
      <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
        Start Listening
      </button>
    </div>
  );
}
