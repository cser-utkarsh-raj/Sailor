'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { mockSailors } from '@/lib/mock-data/sailors';
import { useSailor } from '@/lib/store/sailor-context';

type Stage = 'prompt' | 'animating' | 'done';

function BringAboardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sailorId = searchParams.get('sailor');
  
  const [stage, setStage] = useState<Stage>('prompt');
  const { setCrew } = useSailor();
  
  const sailor = mockSailors.find((s: any) => s.userId === sailorId) || mockSailors[0];

  const handleBringAboard = () => {
    setStage('animating');
    
    setCrew((prev: any) => {
      if (prev.some((c: any) => c.sailorProfile.userId === sailor.userId)) return prev;
      return [...prev, {
        id: `crew-${Date.now()}`,
        sailorProfile: sailor,
        addedAt: new Date().toISOString(),
        metOn: 'Random Waters'
      }];
    });

    setTimeout(() => {
      setStage('done');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm overflow-hidden p-4">
      <AnimatePresence mode="wait">
        
        {stage === 'prompt' && (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-ocean-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-coral-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-coral-100">
              ⚓
            </div>
            
            <h1 className="text-2xl font-heading font-bold text-navy-900 mb-2">Enjoying the voyage?</h1>
            
            <div className="flex items-center gap-3 my-6 p-4 bg-ocean-50 rounded-2xl w-full justify-center">
              <Avatar 
                name={sailor.sailorName} 
                countryFlag={sailor.countryFlag}
                color={sailor.avatarColor}
                size="md"
              />
              <span className="font-heading font-bold text-lg text-ocean-900">{sailor.sailorName}</span>
            </div>
            
            <p className="text-navy-600 mb-8">Would you like to add them to your crew?</p>
            
            <div className="w-full space-y-3">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full bg-coral-500 hover:bg-coral-600 text-white border-none"
                onClick={handleBringAboard}
              >
                Bring Aboard
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="w-full text-navy-500"
                onClick={() => router.push('/sea')}
              >
                Not this time
              </Button>
            </div>
          </motion.div>
        )}

        {stage === 'animating' && (
          <motion.div
            key="animating"
            className="flex items-center justify-center relative"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ type: "spring", bounce: 0.6, duration: 1 }}
              className="text-8xl relative z-10"
            >
              ⚓
            </motion.div>
            
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-coral-400"
                initial={{ x: 0, y: 0, scale: 0 }}
                animate={{ 
                  x: (Math.random() - 0.5) * 300, 
                  y: (Math.random() - 0.5) * 300,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        )}

        {stage === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="max-w-md w-full bg-white rounded-3xl p-8 shadow-xl border border-coral-200 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-coral-400 to-ocean-500" />
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Avatar 
                name={sailor.sailorName} 
                countryFlag={sailor.countryFlag}
                color={sailor.avatarColor}
                size="lg"
              />
            </div>
            
            <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
              <span className="text-coral-500">⚓</span> {sailor.sailorName} joined your Crew!
            </h2>
            <p className="text-navy-500 mb-8">You can now view their profile and send them direct messages anytime.</p>
            
            <div className="w-full space-y-3">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full"
                onClick={() => router.push('/crew')}
              >
                View Crew
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="w-full"
                onClick={() => router.push('/sea')}
              >
                Keep Sailing
              </Button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default function BringAboardPage() {
  return (
    <Suspense fallback={<div className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm" />}>
      <BringAboardContent />
    </Suspense>
  );
}
