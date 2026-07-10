import { motion } from 'framer-motion';
import { PageHeader, StatCard } from '@/components/ui';

export default function Analytics() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Analytics" description="Insights into your browsing and AI usage." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon="⏱️" label="Total Read Time" value="0h" />
        <StatCard icon="📊" label="Pages Analyzed" value="0" />
        <StatCard icon="🤖" label="AI Queries" value="0" />
        <StatCard icon="🌐" label="Unique Domains" value="0" />
      </div>

      {/* Charts — stub */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-6">
          <h3 className="text-base font-semibold text-white mb-4">Daily Activity</h3>
          <div className="h-48 rounded-xl bg-white/5 flex items-center justify-center">
            <p className="text-white/30 text-sm">Activity chart placeholder</p>
          </div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-base font-semibold text-white mb-4">Top Domains</h3>
          <div className="h-48 rounded-xl bg-white/5 flex items-center justify-center">
            <p className="text-white/30 text-sm">Domains chart placeholder</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
