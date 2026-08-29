'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import SailorLogo from '@/components/illustrations/SailorLogo';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { mockSailors } from '@/lib/mock-data/sailors';

type MatchStage = 'departing' | 'searching' | 'found';

export default function MatchingPage() {
  const router = useRouter();
  const [stage, setStage] = useState<MatchStage>('departing');
  const [matchedSailor, setMatchedSailor] = useState<any>(null);

  const startMatching = () => {
    setStage('departing');
    
    // Pick a random sailor
    const randomSailor = mockSailors[Math.floor(Math.random() * mockSailors.length)];
    setMatchedSailor(randomSailor);

    // Sequence timeouts
    const timer1 = setTimeout(() => {
      setStage('searching');
    }, 2000);

    const timer2 = setTimeout(() => {
      setStage('found');
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  useEffect(() => {
    const cleanup = startMatching();
    return cleanup;
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-ocean-50 to-ocean-100 overflow-hidden">
      <AnimatePresence mode="wait">
        
        {stage === 'departing' && (
          <motion.div
            key="departing"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <SailorLogo size={100} />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-2xl font-heading font-bold text-ocean-800"
            >
              Leaving harbor...
            </motion.h2>
          </motion.div>
        )}

        {stage === 'searching' && (
          <motion.div
            key="searching"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="flex flex-col items-center relative h-64 justify-center"
          >
            {/* Whirlpool effect */}
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full border-t-2 border-r-2 ${
                  i % 2 === 0 ? 'border-ocean-400' : 'border-coral-300'
                } border-dashed opacity-70`}
                style={{
                  width: `${(i + 1) * 60}px`,
                  height: `${(i + 1) * 60}px`,
                }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                transition={{
                  rotate: { repeat: Infinity, duration: 3 + i, ease: "linear" },
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
              />
            ))}
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="z-10 bg-white rounded-full p-2 shadow-lg"
            >
              <SailorLogo size={60} />
            </motion.div>
            
            <motion.div className="mt-12 text-xl font-heading font-medium text-ocean-700 flex items-center gap-1 z-10">
              Searching the waters
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, times: [0, 0.5, 1] }}
              >
                ...
              </motion.span>
            </motion.div>
          </motion.div>
        )}

        {stage === 'found' && matchedSailor && (
          <motion.div
            key="found"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="w-full max-w-sm px-4 flex flex-col items-center"
          >
            <h2 className="text-3xl font-heading font-bold text-ocean-800 mb-8">You found a Sailor!</h2>
            
            <motion.div 
              className="bg-white rounded-3xl p-6 w-full shadow-xl border border-ocean-100 flex flex-col items-center text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Avatar 
                name={matchedSailor.sailorName}
                countryFlag={matchedSailor.countryFlag}
                size="lg"
                color={matchedSailor.avatarColor}
                className="w-24 h-24 mb-4"
              />
              
              <h3 className="text-2xl font-heading font-bold text-slate-800">{matchedSailor.sailorName}</h3>
              <p className="text-slate-400 mb-4">{matchedSailor.countryFlag} {matchedSailor.country}</p>
              
              <p className="italic text-slate-500 mb-6 text-sm px-4">&quot;{matchedSailor.bio}&quot;</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {matchedSailor.interests?.map((interest: string) => (
                  <Badge key={interest} variant="ocean" className="bg-ocean-50 text-ocean-700">
                    {interest}
                  </Badge>
                ))}
              </div>
              
              <div className="w-full space-y-3">
                <Button 
                  variant="primary" 
                  className="w-full text-lg py-6"
                  onClick={() => router.push(`/voyage/chat?sailor=${matchedSailor.id}`)}
                >
                  Say Ahoy 👋
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-slate-400"
                  onClick={startMatching}
                >
                  Keep Sailing
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
