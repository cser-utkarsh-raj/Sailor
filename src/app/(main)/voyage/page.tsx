'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Waves, TreePalm } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useSailor } from '@/lib/store/sailor-context';

export default function VoyagePage() {
  const router = useRouter();
  const { voyageHistory, crew } = useSailor();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const uniqueCountries = new Set(crew.map((c: any) => c.country)).size;

  return (
    <div className="space-y-6">
      <header className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-navy-900">Choose Your Voyage</h1>
        <p className="text-navy-500 mt-2">How would you like to set sail today?</p>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-6"
      >
        <motion.div variants={item}>
          <Card className="h-full bg-gradient-to-b from-ocean-50 to-ocean-100 p-8 border-ocean-200 flex flex-col items-center text-center">
            <div className="text-6xl mb-6">🌊</div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">Random Waters</h2>
            <p className="text-navy-700 mb-4">Set sail into the unknown. Meet a random compatible Sailor.</p>
            <p className="italic text-navy-500 text-sm mb-8">"You don't know who you'll find — and that's the beauty of it."</p>
            <div className="mt-auto w-full">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full"
                onClick={() => router.push('/voyage/matching')}
              >
                Set Sail
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="h-full bg-gradient-to-b from-seafoam-50 to-seafoam-100 p-8 border-seafoam-200 flex flex-col items-center text-center">
            <div className="text-6xl mb-6">🏝️</div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">Island Voyage</h2>
            <p className="text-navy-700 mb-8">Travel to a themed island and meet people who share your specific interests.</p>
            <div className="mt-auto w-full">
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full bg-seafoam-500 text-white hover:bg-seafoam-600 border-none"
                onClick={() => router.push('/islands')}
              >
                Explore Islands
              </Button>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-12"
      >
        <h3 className="text-lg font-heading font-semibold text-navy-900 mb-4">Your Voyage Stats</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-ocean-600">{voyageHistory.length}</div>
            <div className="text-xs text-navy-500 uppercase tracking-wider mt-1">Voyages</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-coral-600">{crew.length}</div>
            <div className="text-xs text-navy-500 uppercase tracking-wider mt-1">Crew</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-seafoam-600">{uniqueCountries}</div>
            <div className="text-xs text-navy-500 uppercase tracking-wider mt-1">Countries</div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
