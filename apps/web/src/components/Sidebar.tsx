import { NavLink, useLocation } from 'react-router-dom';
import { useUIStore } from '@/stores/ui.store';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Dashboard', icon: '📊' },
  { path: '/history', label: 'History', icon: '📜' },
  { path: '/bookmarks', label: 'Bookmarks', icon: '🔖' },
  { path: '/memory', label: 'Memory', icon: '🧠' },
  { path: '/knowledge', label: 'Knowledge', icon: '🕸️' },
  { path: '/workspace', label: 'Workspace', icon: '📁' },
  { path: '/analytics', label: 'Analytics', icon: '📈' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  const location = useLocation();
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <motion.aside
      className="fixed left-0 top-0 h-full z-40 flex flex-col bg-surface-950/80 backdrop-blur-2xl border-r border-white/5"
      animate={{ width: sidebarCollapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-white/5">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg shadow-violet-500/25">
          N
        </div>
        {!sidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-sm font-semibold text-white whitespace-nowrap">NeuroLens AI</h2>
            <p className="text-[10px] text-white/40">v0.1.0</p>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto scrollbar-hide">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600/20 to-indigo-600/10 text-white border-l-2 border-violet-500'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {!sidebarCollapsed && (
                    <span className="whitespace-nowrap">{item.label}</span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-white/5">
        <button
          onClick={toggleSidebar}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm"
        >
          {sidebarCollapsed ? '→' : '← Collapse'}
        </button>
      </div>
    </motion.aside>
  );
}
