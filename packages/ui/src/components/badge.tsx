import { type HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-violet-500/30 bg-violet-500/20 text-violet-300',
        secondary:
          'border-white/20 bg-white/10 text-white/70',
        success:
          'border-emerald-500/30 bg-emerald-500/20 text-emerald-300',
        warning:
          'border-amber-500/30 bg-amber-500/20 text-amber-300',
        destructive:
          'border-red-500/30 bg-red-500/20 text-red-300',
        outline:
          'border-white/30 bg-transparent text-white/60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} className={cn(badgeVariants({ variant, className }))} {...props} />
  ),
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants };
