export default function SailorLogo({ className = '', size = 48 }: { className?: string; size?: number }) {
  const scale = size / 120;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Sailor logo"
    >
      {/* Mast */}
      <line x1="60" y1="20" x2="60" y2="78" stroke="#7BB8E0" strokeWidth="3" strokeLinecap="round" />

      {/* Left sail — coral/pink */}
      <path
        d="M58 24 L58 72 L30 62 Z"
        fill="#F2908A"
        opacity="0.9"
      />

      {/* Right sail — sunny yellow */}
      <path
        d="M62 28 L62 68 L85 58 Z"
        fill="#F5D76E"
        opacity="0.85"
      />

      {/* Boat hull — sky blue */}
      <path
        d="M30 76 L90 76 L82 90 L38 90 Z"
        fill="#7BB8E0"
        rx="4"
      />

      {/* Hull highlight */}
      <path
        d="M34 80 L86 80 L82 88 L38 88 Z"
        fill="#9DCFEF"
        opacity="0.5"
      />

      {/* Water waves */}
      {/* Wave 1 — blue */}
      <path
        d="M20 94 Q35 88 50 94 Q65 100 80 94 Q95 88 100 94"
        stroke="#7BB8E0"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Wave 2 — yellow */}
      <path
        d="M18 100 Q33 94 48 100 Q63 106 78 100 Q93 94 102 100"
        stroke="#F5D76E"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Wave 3 — pink */}
      <path
        d="M22 106 Q37 100 52 106 Q67 112 82 106 Q97 100 104 106"
        stroke="#F2908A"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
