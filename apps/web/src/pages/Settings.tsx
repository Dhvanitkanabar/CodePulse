import { motion } from 'framer-motion';
import { PageHeader } from '@/components/ui';

export default function Settings() {
  const sections = [
    { label: 'General', icon: '⚙️', description: 'Language, startup behavior' },
    { label: 'AI Provider', icon: '🤖', description: 'Gemini, Ollama configuration' },
    { label: 'Appearance', icon: '🎨', description: 'Theme, font size, animations' },
    { label: 'Privacy', icon: '🔒', description: 'Data retention, analytics' },
    { label: 'Notifications', icon: '🔔', description: 'Alerts and sounds' },
    { label: 'Shortcuts', icon: '⌨️', description: 'Keyboard shortcuts' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <PageHeader title="Settings" description="Configure your NeuroLens AI experience." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <div key={section.label} className="glass-card-hover p-5 cursor-pointer">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{section.icon}</span>
              <h3 className="text-base font-semibold text-white">{section.label}</h3>
            </div>
            <p className="text-sm text-white/40 ml-9">{section.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
