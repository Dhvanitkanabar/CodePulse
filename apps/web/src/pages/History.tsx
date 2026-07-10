import { motion } from 'framer-motion';
import { PageHeader, EmptyState, SearchBar } from '@/components/ui';

export default function History() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Reading History" description="Track and revisit pages you've explored." />
      <div className="mb-6">
        <SearchBar placeholder="Search history..." />
      </div>
      <EmptyState
        icon="📜"
        title="No reading history"
        description="Your browsing history with NeuroLens will appear here."
      />
    </motion.div>
  );
}
