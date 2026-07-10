import { cn } from '../lib/utils';

// ========================
// Skeleton loader
// ========================

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-xl bg-white/10',
        className,
      )}
    />
  );
}
