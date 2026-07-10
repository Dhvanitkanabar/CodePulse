import { motion } from 'framer-motion';
import { PageHeader, EmptyState, SearchBar } from '@/components/ui';

export default function Bookmarks() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader
        title="Bookmarks"
        description="AI-enhanced bookmarks with summaries and tags."
        action={
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all">
            + Add Bookmark
          </button>
        }
      />
      <div className="mb-6">
        <SearchBar placeholder="Search bookmarks..." />
      </div>
      <EmptyState
        icon="🔖"
        title="No bookmarks yet"
        description="Save pages with AI-generated summaries and smart tags."
      />
    </motion.div>
  );
}
