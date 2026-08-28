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
        bg-white rounded-2xl shadow-sm border border-ocean-100
        ${hover || onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
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
