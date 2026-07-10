/**
 * KnowledgeGraphView — stub for knowledge graph visualization.
 */
export function KnowledgeGraphView() {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Knowledge Graph</h3>
      <div className="h-96 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center relative overflow-hidden">
        {/* Decorative nodes */}
        <div className="absolute top-12 left-20 h-4 w-4 rounded-full bg-violet-500/40 animate-float" />
        <div className="absolute top-24 right-32 h-3 w-3 rounded-full bg-indigo-500/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-40 h-5 w-5 rounded-full bg-cyan-500/40 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 left-60 h-3 w-3 rounded-full bg-purple-500/40 animate-float" style={{ animationDelay: '0.5s' }} />
        <p className="text-white/30 text-sm z-10">Knowledge graph visualization placeholder</p>
      </div>
    </div>
  );
}
