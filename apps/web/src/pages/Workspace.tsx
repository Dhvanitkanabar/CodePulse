import { motion } from 'framer-motion';
import { PageHeader, EmptyState } from '@/components/ui';

export default function Workspace() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader
        title="Workspaces"
        description="Organize your research into focused workspaces."
        action={
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
            + New Workspace
          </button>
        }
      />
      <EmptyState
        icon="📁"
        title="No workspaces"
        description="Create workspaces to group bookmarks, conversations, and knowledge nodes by topic."
      />
    </motion.div>
  );
}
