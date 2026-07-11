import { forwardRef } from 'react';
import { cn } from '@/utils';

const variants = {
  primary:
    'bg-white text-black hover:bg-[#e5e5e5] border border-white font-semibold',
  secondary:
    'bg-transparent hover:bg-[#151515] text-white border border-surface-700',
  ghost:
    'bg-transparent hover:bg-[#151515] text-surface-400 hover:text-white',
  danger:
    'bg-transparent border border-white text-white hover:bg-[#151515]',
  outline:
    'bg-transparent border border-surface-700 text-white hover:bg-[#151515]',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-base',
  icon: 'p-2',
};

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-xl font-medium',
          'transition-all duration-200 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-primary-500/40',
          'disabled:opacity-50 disabled:pointer-events-none',
          'active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
