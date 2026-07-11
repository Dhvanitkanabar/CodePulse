import { motion } from 'framer-motion';
import {
  MessageSquare,
  Brain,
  Clock,
  Bookmark,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  Zap,
} from 'lucide-react';
import Card from '@/components/ui/Card';
import { ReadingDashboard } from '@/components';

const quickActions = [
  { label: 'Start Chat', icon: MessageSquare, color: 'bg-transparent border border-surface-700' },
  { label: 'Knowledge', icon: Brain, color: 'bg-transparent border border-surface-700' },
  { label: 'History', icon: Clock, color: 'bg-transparent border border-surface-700' },
  { label: 'Bookmarks', icon: Bookmark, color: 'bg-transparent border border-surface-700' },
];

const recentActivity = [
  { title: 'Welcome to NeuroLens AI', time: 'Just now', type: 'system' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Dashboard() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="page-container"
    >
      {/* Header */}
      <motion.div variants={item} className="page-header">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="page-title">Welcome back</h1>
          <Sparkles className="text-white" size={24} />
        </div>
        <p className="page-subtitle">
          Your AI-powered browsing companion is ready to assist you.
        </p>
      </motion.div>

      {/* Stats Banner */}
      <motion.div variants={item}>
        <div className="glass-card bg-[#111111] border border-surface-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-[#151515] border border-surface-700">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">NeuroLens AI is Active</p>
                <p className="text-sm text-surface-400">Ready to analyze and assist with your browsing</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-[#e5e5e5] transition-colors">
              Get Started <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={item}>
        <h2 className="text-lg font-semibold text-white mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="glass-card hover:bg-[#151515] transition-all duration-200 group cursor-pointer text-left"
            >
              <div
                className={`w-10 h-10 rounded-xl ${action.color} flex items-center justify-center mb-3 transition-colors`}
              >
                <action.icon size={20} className="text-white" />
              </div>
              <p className="text-sm font-medium text-white">{action.label}</p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Reading Dashboard */}
      <motion.div variants={item}>
        <h2 className="text-lg font-semibold text-white mb-3">Reading Overview</h2>
        <ReadingDashboard />
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={item}>
        <h2 className="text-lg font-semibold text-white mb-3">Recent Activity</h2>
        <Card>
          <div className="space-y-3">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#151515] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#151515] border border-surface-700 flex items-center justify-center">
                  <TrendingUp size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-surface-200 truncate">{act.title}</p>
                  <p className="text-xs text-surface-500">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
