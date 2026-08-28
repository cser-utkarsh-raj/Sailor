interface AvatarProps {
  name: string;
  color?: string;
  countryFlag?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeStyles = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-xl',
  xl: 'w-20 h-20 text-2xl',
};

const flagSizes = {
  sm: 'w-4 h-4 text-[10px] -bottom-0.5 -right-0.5',
  md: 'w-5 h-5 text-xs -bottom-0.5 -right-0.5',
  lg: 'w-6 h-6 text-sm -bottom-1 -right-1',
  xl: 'w-7 h-7 text-base -bottom-1 -right-1',
};

export default function Avatar({
  name,
  color = '#2B7DE9',
  countryFlag,
  size = 'md',
  className = '',
}: AvatarProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`relative inline-flex ${className}`}>
      <div
        className={`
          ${sizeStyles[size]}
          rounded-full flex items-center justify-center
          font-heading font-bold text-white
          ring-2 ring-white shadow-sm
        `}
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      {countryFlag && (
        <span
          className={`
            absolute ${flagSizes[size]}
            flex items-center justify-center
            bg-white rounded-full shadow-sm border border-ocean-100
          `}
        >
          {countryFlag}
        </span>
      )}
    </div>
  );
}
