import { cn } from '../lib/utils';

// ========================
// Avatar
// ========================

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
};

export function Avatar({ src, alt, fallback, size = 'md', className }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? fallback}
        className={cn(
          'rounded-full object-cover ring-2 ring-white/20',
          sizeClasses[size],
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-600 font-semibold text-white ring-2 ring-white/20',
        sizeClasses[size],
        className,
      )}
    >
      {fallback}
    </div>
  );
}
