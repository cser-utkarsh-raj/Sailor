'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  hover = false,
  padding = 'md',
  onClick,
}: CardProps) {
  const Component = (hover || onClick ? motion.div : 'div') as any;
  const motionProps = hover || onClick
    ? {
        whileHover: { scale: 1.02, y: -2 },
        whileTap: onClick ? { scale: 0.98 } : undefined,
        transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
      }
    : {};

  return (
    <Component
      className={`
        bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)]
        ${hover || onClick ? 'cursor-pointer hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300' : ''}
        ${paddingStyles[padding]}
        ${className}
      `}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </Component>
  );
}
