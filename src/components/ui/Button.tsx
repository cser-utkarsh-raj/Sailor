'use client';

import { motion } from 'motion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  fullWidth?: boolean;
  icon?: ReactNode;
}

const variantStyles = {
  primary:
    'bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg uppercase tracking-wider font-bold text-xs',
  secondary:
    'bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 border border-slate-200 hover:border-slate-300 shadow-sm uppercase tracking-wider font-bold text-xs',
  ghost:
    'bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-900 font-semibold',
  danger:
    'bg-rose-500 hover:bg-rose-600 text-white shadow-md uppercase tracking-wider font-bold text-xs',
};

const sizeStyles = {
  sm: 'px-4 py-2 rounded-full',
  md: 'px-6 py-3 rounded-full',
  lg: 'px-8 py-4 rounded-full',
  xl: 'px-10 py-5 rounded-full',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  icon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.03 }}
      whileTap={disabled ? undefined : { scale: 0.97 }}
      className={`
        inline-flex items-center justify-center gap-2
        font-heading font-semibold
        transition-colors duration-200
        cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
}
