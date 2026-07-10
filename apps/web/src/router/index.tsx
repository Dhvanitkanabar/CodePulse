import { Routes, Route } from 'react-router-dom';
import { DashboardLayout } from '@/layouts/DashboardLayout';

// Pages
import Dashboard from '@/pages/Dashboard';
import History from '@/pages/History';
import Bookmarks from '@/pages/Bookmarks';
import Settings from '@/pages/Settings';
import Memory from '@/pages/Memory';
import KnowledgeGraph from '@/pages/KnowledgeGraph';
import Workspace from '@/pages/Workspace';
import Analytics from '@/pages/Analytics';

export function AppRouter() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/knowledge" element={<KnowledgeGraph />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
