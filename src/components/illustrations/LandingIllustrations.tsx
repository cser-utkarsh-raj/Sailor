// Detailed vector illustrations for Sailor landing page
// Coastal neobrutalism style — rich, layered, not minimalistic

export function WavesIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky gradient */}
      <rect width="200" height="100" fill="#e0f7fa" />
      {/* Sun */}
      <circle cx="155" cy="35" r="22" fill="#FFD166" stroke="#1a1a2e" strokeWidth="2.5" />
      <circle cx="155" cy="35" r="16" fill="#FFE599" />
      {/* Sun rays */}
      <line x1="155" y1="5" x2="155" y2="12" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="180" y1="18" x2="175" y2="23" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="185" y1="35" x2="178" y2="35" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="125" y1="18" x2="130" y2="23" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="125" y1="35" x2="132" y2="35" stroke="#FFD166" strokeWidth="2.5" strokeLinecap="round" />
      {/* Clouds */}
      <ellipse cx="50" cy="28" rx="22" ry="10" fill="white" stroke="#1a1a2e" strokeWidth="2" />
      <ellipse cx="42" cy="25" rx="12" ry="8" fill="white" />
      <ellipse cx="58" cy="24" rx="10" ry="7" fill="white" />
      <ellipse cx="105" cy="20" rx="16" ry="7" fill="white" stroke="#1a1a2e" strokeWidth="2" />
      <ellipse cx="98" cy="17" rx="9" ry="6" fill="white" />
      {/* Sailboat */}
      <polygon points="78,42 78,82 55,72" fill="#F2908A" stroke="#1a1a2e" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="82,48 82,78 102,68" fill="#7BB8E0" stroke="#1a1a2e" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="80" y1="38" x2="80" y2="86" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" />
      {/* Flag */}
      <polygon points="80,38 80,46 88,42" fill="#F06449" stroke="#1a1a2e" strokeWidth="2" strokeLinejoin="round" />
      {/* Hull */}
      <path d="M55 86 L105 86 L98 100 L62 100 Z" fill="#2B7DE9" stroke="#1a1a2e" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M60 90 L100 90 L97 96 L63 96 Z" fill="#479FFF" opacity="0.5" />
      {/* Ocean */}
      <rect y="100" width="200" height="60" fill="#7BB8E0" />
      {/* Wave layers */}
      <path d="M0 105 Q20 95 40 105 T80 105 T120 105 T160 105 T200 105 L200 115 Q180 105 160 115 T120 115 T80 115 T40 115 T0 115 Z" fill="#63a4d8" />
      <path d="M0 118 Q25 110 50 118 T100 118 T150 118 T200 118 L200 130 Q175 120 150 130 T100 130 T50 130 T0 130 Z" fill="#4a8ec0" />
      <path d="M0 132 Q30 124 60 132 T120 132 T180 132 T200 132 L200 160 L0 160 Z" fill="#3678a8" />
      {/* Birds */}
      <path d="M30 15 Q33 10 36 15" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38 12 Q41 7 44 12" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M125 8 Q128 3 131 8" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IslandIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky */}
      <rect width="200" height="100" fill="#FFF5F0" />
      {/* Ocean base */}
      <rect y="100" width="200" height="60" fill="#7BB8E0" />
      {/* Island land mass */}
      <ellipse cx="100" cy="105" rx="65" ry="18" fill="#F5D76E" stroke="#1a1a2e" strokeWidth="2.5" />
      <ellipse cx="100" cy="102" rx="55" ry="12" fill="#FFE599" />
      {/* Palm tree trunk */}
      <path d="M90 100 Q85 70 88 50" stroke="#8B6B4A" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M90 100 Q95 72 92 52" stroke="#A07850" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Palm leaves */}
      <path d="M88 50 Q70 35 55 42" stroke="#2BB89A" strokeWidth="3" fill="#43D7AF" strokeLinejoin="round" />
      <path d="M88 50 Q75 28 65 30" stroke="#2BB89A" strokeWidth="3" fill="#43D7AF" strokeLinejoin="round" />
      <path d="M88 50 Q95 25 110 32" stroke="#22937B" strokeWidth="3" fill="#43D7AF" strokeLinejoin="round" />
      <path d="M88 50 Q105 30 118 40" stroke="#22937B" strokeWidth="3" fill="#2BB89A" strokeLinejoin="round" />
      <path d="M88 50 Q82 30 78 25" stroke="#2BB89A" strokeWidth="3" fill="#43D7AF" strokeLinejoin="round" />
      {/* Coconuts */}
      <circle cx="86" cy="52" r="3" fill="#8B6B4A" stroke="#1a1a2e" strokeWidth="1.5" />
      <circle cx="91" cy="50" r="3" fill="#A07850" stroke="#1a1a2e" strokeWidth="1.5" />
      {/* Small hut */}
      <rect x="110" y="85" width="22" height="18" fill="#F5D76E" stroke="#1a1a2e" strokeWidth="2" rx="2" />
      <polygon points="107,85 121,72 135,85" fill="#F06449" stroke="#1a1a2e" strokeWidth="2" strokeLinejoin="round" />
      <rect x="118" y="92" width="7" height="11" fill="#8B6B4A" stroke="#1a1a2e" strokeWidth="1.5" rx="1" />
      {/* Waves */}
      <path d="M0 115 Q20 108 40 115 T80 115 T120 115 T160 115 T200 115 L200 130 Q180 122 160 130 T120 130 T80 130 T40 130 T0 130 Z" fill="#63a4d8" />
      <path d="M0 132 Q25 125 50 132 T100 132 T150 132 T200 132 L200 160 L0 160 Z" fill="#4a8ec0" />
      {/* Small boat in distance */}
      <polygon points="28,108 28,100 22,104" fill="#F2908A" stroke="#1a1a2e" strokeWidth="1.5" />
      <line x1="28" y1="98" x2="28" y2="110" stroke="#1a1a2e" strokeWidth="1.5" />
      <path d="M22 110 L34 110 L32 114 L24 114 Z" fill="#2B7DE9" stroke="#1a1a2e" strokeWidth="1.5" />
      {/* Birds */}
      <path d="M145 25 Q148 20 151 25" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M155 18 Q158 13 161 18" fill="none" stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CrewIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Sky */}
      <rect width="200" height="110" fill="#EBF5FF" />
      {/* Ocean */}
      <rect y="110" width="200" height="50" fill="#7BB8E0" />
      {/* Large ship hull */}
      <path d="M30 110 L170 110 L155 135 L45 135 Z" fill="#2B7DE9" stroke="#1a1a2e" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M40 115 L160 115 L150 128 L50 128 Z" fill="#479FFF" opacity="0.4" />
      {/* Deck */}
      <rect x="45" y="90" width="110" height="20" fill="#F5D76E" stroke="#1a1a2e" strokeWidth="2.5" rx="3" />
      <line x1="70" y1="90" x2="70" y2="110" stroke="#1a1a2e" strokeWidth="1.5" />
      <line x1="100" y1="90" x2="100" y2="110" stroke="#1a1a2e" strokeWidth="1.5" />
      <line x1="130" y1="90" x2="130" y2="110" stroke="#1a1a2e" strokeWidth="1.5" />
      {/* Cabin */}
      <rect x="65" y="70" width="70" height="20" fill="#FFE599" stroke="#1a1a2e" strokeWidth="2.5" rx="2" />
      <rect x="75" y="74" width="10" height="10" fill="#87CEEB" stroke="#1a1a2e" strokeWidth="1.5" rx="1" />
      <rect x="95" y="74" width="10" height="10" fill="#87CEEB" stroke="#1a1a2e" strokeWidth="1.5" rx="1" />
      <rect x="115" y="74" width="10" height="10" fill="#87CEEB" stroke="#1a1a2e" strokeWidth="1.5" rx="1" />
      {/* Mast */}
      <line x1="100" y1="25" x2="100" y2="70" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" />
      {/* Flag */}
      <polygon points="100,25 100,38 115,31" fill="#F06449" stroke="#1a1a2e" strokeWidth="2" strokeLinejoin="round" />
      {/* Crew member 1 */}
      <circle cx="72" cy="62" r="6" fill="#FFD4B8" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="68" y="55" width="8" height="4" fill="#F06449" stroke="#1a1a2e" strokeWidth="1.5" rx="2" />
      {/* Crew member 2 */}
      <circle cx="100" cy="60" r="6" fill="#FFD4B8" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="96" y="53" width="8" height="4" fill="#2B7DE9" stroke="#1a1a2e" strokeWidth="1.5" rx="2" />
      {/* Crew member 3 */}
      <circle cx="128" cy="62" r="6" fill="#FFD4B8" stroke="#1a1a2e" strokeWidth="2" />
      <rect x="124" y="55" width="8" height="4" fill="#43D7AF" stroke="#1a1a2e" strokeWidth="1.5" rx="2" />
      {/* Waves */}
      <path d="M0 125 Q15 118 30 125 T60 125 T90 125 T120 125 T150 125 T180 125 T200 125 L200 140 Q185 133 170 140 T140 140 T110 140 T80 140 T50 140 T20 140 T0 140 Z" fill="#63a4d8" />
      <path d="M0 142 Q25 136 50 142 T100 142 T150 142 T200 142 L200 160 L0 160 Z" fill="#4a8ec0" />
    </svg>
  );
}
