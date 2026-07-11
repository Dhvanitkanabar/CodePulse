import { Globe, Shield, ShieldCheck, ShieldAlert } from 'lucide-react';
import { cn } from '@/utils';

const trustColors = {
  high: { bg: 'bg-[#111111]', border: 'border-surface-700', text: 'text-white', icon: ShieldCheck },
  medium: { bg: 'bg-[#111111]', border: 'border-surface-700', text: 'text-surface-200', icon: Shield },
  low: { bg: 'bg-[#111111]', border: 'border-surface-700', text: 'text-surface-400', icon: ShieldAlert },
  unknown: { bg: 'bg-[#111111]', border: 'border-surface-700', text: 'text-surface-500', icon: Globe },
};

export default function WebsiteBadge({ url, trust = 'unknown', className }) {
  const style = trustColors[trust];
  const TrustIcon = style.icon;

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm',
        style.bg,
        style.border,
        className
      )}
    >
      <TrustIcon size={14} className={style.text} />
      <span className="text-surface-300 truncate max-w-[200px]">
        {url || 'unknown'}
      </span>
    </div>
  );
}
