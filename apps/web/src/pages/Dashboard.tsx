import { motion } from 'framer-motion';
import { StatCard } from '@/components/ui';
import { ReadingDashboard } from '@/components/ReadingDashboard';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export default function Dashboard() {
  return (
    <motion.div {...fadeIn} className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon="📄" label="Pages Analyzed" value="0" trend="+0%" trendUp />
        <StatCard icon="💬" label="Conversations" value="0" />
        <StatCard icon="🔖" label="Bookmarks" value="0" />
        <StatCard icon="🧠" label="Memories" value="0" />
      </div>

      {/* Reading Activity */}
      <ReadingDashboard />

      {/* Recent Activity — stub */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
        <div className="flex items-center justify-center py-12">
          <p className="text-white/30 text-sm">No recent activity yet. Start browsing!</p>
        </div>
      </div>
    </motion.div>
  );
}
