import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui';
import { KnowledgeGraphView } from '@/components/KnowledgeGraphView';

export default function KnowledgeGraph() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Knowledge Graph" description="Visualize connections between concepts you've explored." />
      <KnowledgeGraphView />
    </motion.div>
  );
}
