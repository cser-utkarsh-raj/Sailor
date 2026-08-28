interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'ocean' | 'coral' | 'seafoam' | 'sunny' | 'lavender';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  default: 'bg-ocean-50 text-ocean-700 border-ocean-200',
  ocean: 'bg-ocean-100 text-ocean-800 border-ocean-200',
  coral: 'bg-coral-50 text-coral-700 border-coral-200',
  seafoam: 'bg-seafoam-50 text-seafoam-700 border-seafoam-200',
  sunny: 'bg-sunny-50 text-sunny-700 border-sunny-200',
  lavender: 'bg-lavender-50 text-lavender-700 border-lavender-200',
};

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1
        rounded-full border font-medium
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
