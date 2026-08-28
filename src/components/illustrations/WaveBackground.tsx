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
        {/* Sky gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F4FD] via-[#B8E0F7] to-[#7BB8E0]" />

        {/* Clouds */}
        <motion.div
          className="absolute top-[10%] left-[10%] w-32 h-12 bg-white/60 rounded-full blur-sm"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[15%] right-[20%] w-40 h-14 bg-white/50 rounded-full blur-sm"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[8%] right-[40%] w-24 h-8 bg-white/40 rounded-full blur-sm"
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Distant mountains/islands */}
        <div className="absolute bottom-[35%] left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
            <path
              d="M0 200 L0 120 Q100 60 200 100 Q300 140 400 80 Q500 20 600 60 Q700 100 800 50 Q900 0 1000 40 Q1100 80 1200 30 Q1300 60 1440 80 L1440 200 Z"
              fill="#8FBFDB"
              opacity="0.3"
            />
            <path
              d="M0 200 L0 140 Q150 100 300 130 Q450 160 600 110 Q750 60 900 90 Q1050 120 1200 80 Q1350 100 1440 120 L1440 200 Z"
              fill="#7AADCC"
              opacity="0.4"
            />
          </svg>
        </div>

        {/* Ocean water */}
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-b from-[#4DA8D8] to-[#2B7DE9]">
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
              fill="#4DA8D8"
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
              fill="#3E95CB"
              opacity="0.7"
            />
          </motion.svg>

          {/* Water shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-[20%] w-20 h-1 bg-white/50 rounded-full" />
            <div className="absolute top-12 left-[50%] w-16 h-1 bg-white/40 rounded-full" />
            <div className="absolute top-8 left-[70%] w-12 h-1 bg-white/30 rounded-full" />
            <div className="absolute top-20 left-[35%] w-14 h-1 bg-white/40 rounded-full" />
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

        {/* Floating sea elements */}
        <motion.div
          className="absolute bottom-[28%] left-[60%] text-2xl"
          animate={{ y: [0, -5, 0], x: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          🐠
        </motion.div>
        <motion.div
          className="absolute bottom-[22%] left-[30%] text-lg opacity-60"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        >
          🐚
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
