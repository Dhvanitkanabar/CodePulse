import { cn } from '@/utils';

export default function Card({ className, children, hover = false, glow = false, ...props }) {
  return (
    <div
      className={cn(
        'glass-card bg-[#111111] border border-surface-700 rounded-[18px]',
        hover && 'hover:bg-[#1e1e1e] hover:border-surface-600 transition-all duration-200 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ className, children }) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-lg font-semibold text-white', className)}>
      {children}
    </h3>
  );
};

Card.Content = function CardContent({ className, children }) {
  return <div className={cn('', className)}>{children}</div>;
};
