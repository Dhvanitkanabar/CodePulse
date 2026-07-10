import { motion } from 'framer-motion';
import { PageHeader, EmptyState } from '@/components/ui';

export default function Memory() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Memory" description="Long-term memories stored by NeuroLens AI." />
      <EmptyState
        icon="🧠"
        title="No memories stored"
        description="NeuroLens AI will remember important facts, preferences, and insights as you browse."
      />
    </motion.div>
  );
}
