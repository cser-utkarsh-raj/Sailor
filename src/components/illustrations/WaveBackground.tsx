'use client';

import { motion } from 'motion/react';

interface WaveBackgroundProps {
  className?: string;
  variant?: 'hero' | 'subtle' | 'full';
}

export default function WaveBackground({ className = '', variant = 'subtle' }: WaveBackgroundProps) {
  if (variant === 'hero') {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Sky gradient - Deep Navy to Ocean Midnight */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e3a8a]" />

        {/* Clouds - Ghostly blue */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-32 h-12 bg-indigo-200/5 rounded-full blur-xl"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[15%] right-[20%] w-40 h-14 bg-indigo-200/5 rounded-full blur-xl"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[8%] right-[40%] w-24 h-8 bg-indigo-200/5 rounded-full blur-xl"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Distant mountains/islands - Dark silhouettes */}
        <div className="absolute bottom-[35%] left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 200 L0 120 Q100 60 200 100 Q300 140 400 80 Q500 20 600 60 Q700 100 800 50 Q900 0 1000 40 Q1100 80 1200 30 Q1300 60 1440 80 L1440 200 Z"
              fill="#0f172a"
              opacity="0.8"
            />
            <path
              d="M0 200 L0 140 Q150 100 300 130 Q450 160 600 110 Q750 60 900 90 Q1050 120 1200 80 Q1350 100 1440 120 L1440 200 Z"
              fill="#0b1121"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Ocean water - Deep ocean colors */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-[#1e3a8a] to-[#082f49]">
          {/* Wave layers */}
          <motion.svg
            viewBox="0 0 1440 100"
            className="absolute -top-[50px] left-0 w-[200%] h-[60px]"
            preserveAspectRatio="none"
            animate={{ x: [0, -720] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M0 40 Q90 20 180 40 Q270 60 360 40 Q450 20 540 40 Q630 60 720 40 Q810 20 900 40 Q990 60 1080 40 Q1170 20 1260 40 Q1350 60 1440 40 L1440 100 L0 100 Z"
              fill="#1e3a8a"
            />
          </motion.svg>
          <motion.svg
            viewBox="0 0 1440 100"
            className="absolute -top-[30px] left-0 w-[200%] h-[50px]"
            preserveAspectRatio="none"
            animate={{ x: [-720, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M0 40 Q90 55 180 40 Q270 25 360 40 Q450 55 540 40 Q630 25 720 40 Q810 55 900 40 Q990 25 1080 40 Q1170 55 1260 40 Q1350 25 1440 40 L1440 100 L0 100 Z"
              fill="#172554"
              opacity="0.8"
            />
          </motion.svg>

          {/* Bioluminescent Water shimmer */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-4 left-[20%] w-20 h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,1)] rounded-full" />
            <div className="absolute top-12 left-[50%] w-16 h-1 bg-teal-400/50 shadow-[0_0_10px_rgba(45,212,191,1)] rounded-full" />
            <div className="absolute top-8 left-[70%] w-12 h-1 bg-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,1)] rounded-full" />
            <div className="absolute top-20 left-[35%] w-14 h-1 bg-teal-400/50 shadow-[0_0_10px_rgba(45,212,191,1)] rounded-full" />
          </div>
        </div>

        {/* Small sailing boat */}
        <motion.div
          className="absolute bottom-[38%] left-[15%] md:left-[25%]"
          animate={{ y: [0, -6, 0], rotate: [0, 2, 0, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
            <line x1="28" y1="5" x2="28" y2="35" stroke="#7BB8E0" strokeWidth="2" />
            <path d="M26 8 L26 32 L12 27 Z" fill="#F2908A" opacity="0.8" />
            <path d="M30 12 L30 30 L42 25 Z" fill="#F5D76E" opacity="0.7" />
            <path d="M12 36 L48 36 L44 44 L16 44 Z" fill="#7BB8E0" />
          </svg>
        </motion.div>

        {/* Distant boat */}
        <motion.div
          className="absolute bottom-[42%] right-[15%] md:right-[20%] opacity-40"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <svg width="30" height="25" viewBox="0 0 30 25" fill="none">
            <line x1="14" y1="3" x2="14" y2="17" stroke="#7BB8E0" strokeWidth="1.5" />
            <path d="M13 5 L13 15 L6 12 Z" fill="#F2908A" opacity="0.6" />
            <path d="M15 7 L15 14 L21 12 Z" fill="#F5D76E" opacity="0.5" />
            <path d="M6 18 L24 18 L22 22 L8 22 Z" fill="#7BB8E0" />
          </svg>
        </motion.div>

        {/* Sun */}
        <motion.div
          className="absolute top-[6%] right-[12%]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="18" fill="#FFE082" />
            <circle cx="40" cy="40" r="24" fill="#FFE082" opacity="0.3" />
            <circle cx="40" cy="40" r="32" fill="#FFE082" opacity="0.1" />
          </svg>
        </motion.div>

        {/* Birds */}
        <motion.svg
          className="absolute top-[12%] left-[35%]"
          width="60" height="20" viewBox="0 0 60 20"
          animate={{ x: [0, 40, 80], y: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M5 10 Q10 4 15 10" stroke="#5C8FA8" strokeWidth="1.5" fill="none" />
          <path d="M20 8 Q26 2 32 8" stroke="#5C8FA8" strokeWidth="1.5" fill="none" />
          <path d="M38 12 Q42 7 46 12" stroke="#5C8FA8" strokeWidth="1.2" fill="none" opacity="0.6" />
        </motion.svg>

        {/* Lighthouse on distant island */}
        <div className="absolute bottom-[36%] right-[8%] md:right-[12%]">
          <svg width="40" height="70" viewBox="0 0 40 70" fill="none">
            {/* Island base */}
            <ellipse cx="20" cy="65" rx="20" ry="5" fill="#7AADCC" opacity="0.5" />
            {/* Lighthouse body */}
            <path d="M15 30 L17 65 L23 65 L25 30 Z" fill="#F5F5F5" stroke="#B0BEC5" strokeWidth="0.5" />
            <rect x="16" y="40" width="8" height="3" fill="#EF5350" opacity="0.7" rx="0.5" />
            <rect x="16" y="50" width="8" height="3" fill="#EF5350" opacity="0.7" rx="0.5" />
            {/* Lighthouse top */}
            <rect x="14" y="27" width="12" height="5" fill="#455A64" rx="1" />
            <path d="M17 27 L20 20 L23 27 Z" fill="#EF5350" />
            {/* Light glow */}
            <motion.circle cx="20" cy="24" r="3" fill="#FFEB3B" opacity="0.6"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Tropical fish — detailed SVG */}
        <motion.div
          className="absolute bottom-[28%] left-[60%]"
          animate={{ y: [0, -5, 0], x: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
            <ellipse cx="16" cy="12" rx="12" ry="7" fill="#FF8A65" />
            <path d="M28 12 L36 5 L36 19 Z" fill="#FF8A65" />
            <ellipse cx="16" cy="12" rx="9" ry="5" fill="#FFAB91" />
            <circle cx="10" cy="10" r="1.5" fill="#37474F" />
            <circle cx="9.5" cy="9.5" r="0.5" fill="white" />
            <path d="M5 12 Q8 14 11 12" stroke="#E64A19" strokeWidth="0.8" fill="none" />
            <path d="M14 7 Q16 5 18 7" stroke="#E64A19" strokeWidth="0.6" fill="none" opacity="0.5" />
            <path d="M14 17 Q16 19 18 17" stroke="#E64A19" strokeWidth="0.6" fill="none" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Seashell — detailed SVG */}
        <motion.div
          className="absolute bottom-[22%] left-[30%] opacity-70"
          animate={{ y: [0, -4, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 C6 2 2 8 2 14 C2 18 6 22 12 22 C18 22 22 18 22 14 C22 8 18 2 12 2 Z" fill="#FFCCBC" stroke="#FFAB91" strokeWidth="0.8" />
            <path d="M12 4 Q8 10 12 20" stroke="#FF8A65" strokeWidth="0.6" fill="none" />
            <path d="M12 4 Q16 10 12 20" stroke="#FF8A65" strokeWidth="0.6" fill="none" />
            <path d="M6 10 Q12 8 18 10" stroke="#FF8A65" strokeWidth="0.5" fill="none" />
            <path d="M4 14 Q12 12 20 14" stroke="#FF8A65" strokeWidth="0.5" fill="none" />
          </svg>
        </motion.div>

        {/* Jellyfish */}
        <motion.div
          className="absolute bottom-[18%] right-[40%] opacity-50"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <path d="M2 12 Q2 2 10 2 Q18 2 18 12 Z" fill="#CE93D8" opacity="0.6" />
            <path d="M5 12 Q6 20 4 28" stroke="#CE93D8" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M10 12 Q10 22 9 28" stroke="#CE93D8" strokeWidth="1" fill="none" opacity="0.4" />
            <path d="M15 12 Q14 18 16 28" stroke="#CE93D8" strokeWidth="1" fill="none" opacity="0.4" />
          </svg>
        </motion.div>
      </div>
    );
  }

  // Subtle variant — used on inner pages
  return (
    <div className={`absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-[200%] h-[80px]"
        preserveAspectRatio="none"
        animate={{ x: [0, -720] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0 60 Q90 40 180 60 Q270 80 360 60 Q450 40 540 60 Q630 80 720 60 Q810 40 900 60 Q990 80 1080 60 Q1170 40 1260 60 Q1350 80 1440 60 L1440 120 L0 120 Z"
          fill="#EBF5FF"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 120"
        className="absolute bottom-0 left-0 w-[200%] h-[60px]"
        preserveAspectRatio="none"
        animate={{ x: [-720, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M0 60 Q90 75 180 60 Q270 45 360 60 Q450 75 540 60 Q630 45 720 60 Q810 75 900 60 Q990 45 1080 60 Q1170 75 1260 60 Q1350 45 1440 60 L1440 120 L0 120 Z"
          fill="#D6EBFF"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
}
