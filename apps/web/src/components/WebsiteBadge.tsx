/**
 * WebsiteBadge — displays website type with an icon.
 */

interface WebsiteBadgeProps {
  type: string;
  domain: string;
  favicon?: string;
}

const typeConfig: Record<string, { emoji: string; color: string }> = {
  article: { emoji: '📄', color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/20' },
  ecommerce: { emoji: '🛍️', color: 'from-amber-500/20 to-orange-500/20 border-amber-500/20' },
  social: { emoji: '💬', color: 'from-pink-500/20 to-rose-500/20 border-pink-500/20' },
  documentation: { emoji: '📚', color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/20' },
  video: { emoji: '🎬', color: 'from-red-500/20 to-rose-500/20 border-red-500/20' },
  news: { emoji: '📰', color: 'from-violet-500/20 to-purple-500/20 border-violet-500/20' },
  unknown: { emoji: '🌐', color: 'from-slate-500/20 to-gray-500/20 border-slate-500/20' },
};

export function WebsiteBadge({ type, domain, favicon }: WebsiteBadgeProps) {
  const config = typeConfig[type] ?? typeConfig.unknown;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r ${config.color} border backdrop-blur-sm`}>
      {favicon ? (
        <img src={favicon} alt="" className="h-4 w-4 rounded" />
      ) : (
        <span className="text-sm">{config.emoji}</span>
      )}
      <span className="text-xs font-medium text-white/70">{domain}</span>
    </div>
  );
}
