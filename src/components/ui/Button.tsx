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
    'bg-coral-500 hover:bg-coral-600 text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-white hover:bg-ocean-50 text-navy-800 border-2 border-ocean-200 hover:border-ocean-300 shadow-sm',
  ghost:
    'bg-transparent hover:bg-ocean-50 text-navy-700 hover:text-navy-900',
  danger:
    'bg-danger-500 hover:bg-danger-600 text-white shadow-md',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
  xl: 'px-10 py-5 text-xl rounded-3xl',
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
