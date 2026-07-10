import { cn } from '../lib/utils';

// ========================
// Tooltip (CSS-only)
// ========================

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ content, children, side = 'top', className }: TooltipProps) {
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className={cn('relative group inline-flex', className)}>
      {children}
      <span
        className={cn(
          'absolute z-50 hidden group-hover:block',
          'px-3 py-1.5 text-xs font-medium text-white',
          'bg-slate-900 border border-white/20 rounded-lg backdrop-blur-sm',
          'whitespace-nowrap shadow-xl',
          positionClasses[side],
        )}
      >
        {content}
      </span>
    </div>
  );
}
