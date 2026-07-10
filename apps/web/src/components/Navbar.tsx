import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Dashboard',
  '/history': 'Reading History',
  '/bookmarks': 'Bookmarks',
  '/settings': 'Settings',
  '/memory': 'Memory',
  '/knowledge': 'Knowledge Graph',
  '/workspace': 'Workspace',
  '/analytics': 'Analytics',
};

export function Navbar() {
  const location = useLocation();
  const title = pageTitles[location.pathname] ?? 'NeuroLens AI';

  return (
    <header className="h-16 border-b border-white/5 bg-surface-950/50 backdrop-blur-xl flex items-center justify-between px-6 sticky top-0 z-30">
      {/* Page title */}
      <h1 className="text-lg font-semibold text-white">{title}</h1>

      {/* Right section */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-56 rounded-xl bg-white/5 border border-white/10 px-4 pl-9 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
        </div>

        {/* Notifications */}
        <button className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all">
          🔔
        </button>

        {/* Avatar */}
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-semibold text-xs">
          U
        </div>
      </div>
    </header>
  );
}
