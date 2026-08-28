"use client";

import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { motion } from 'motion/react';
import { Navigation, Home, MapPin, TreePalm } from 'lucide-react';
import Link from 'next/link';

export default function MapPage() {
  const { voyageHistory } = useSailor();

  // Generate some pseudo-random positions for history nodes for illustration purposes
  const getPositions = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      // Flowing path pattern (sine wave-ish)
      const x = 20 + (i * (60 / Math.max(1, count - 1)));
      const y = 50 + Math.sin(i * 1.5) * 30;
      return { x, y };
    });
  };

  const positions = getPositions(voyageHistory?.length || 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col min-h-[calc(100vh-80px)]">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h1 className="font-heading text-4xl font-bold text-navy-900 mb-2">Your Voyage Map</h1>
          <p className="text-navy-600 text-lg">Every conversation is a journey.</p>
        </div>
        <Link href="/map/journal">
          <Button variant="secondary">View Your Journal</Button>
        </Link>
      </div>

      <Card className="flex-grow min-h-[500px] relative overflow-hidden bg-[#e0f7fa] border-ocean-100 p-8 shadow-inner rounded-3xl">
        {/* Fictional Map Underlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 100 Q 150 50 250 150 T 450 100 T 650 200 T 750 100 L 750 500 Q 600 550 450 450 T 250 500 T 50 400 Z" fill="#b2dfdb" />
            <path d="M 100 200 Q 200 150 250 250 T 400 200 T 500 300 T 700 250 L 700 450 Q 550 500 400 400 T 200 450 T 100 350 Z" fill="#80cbc4" />
            <path d="M 150 250 Q 250 200 300 300 T 450 250 T 550 350 T 650 300 L 650 400 Q 500 450 350 350 T 150 400 Z" fill="#4db6ac" />
            <circle cx="200" cy="300" r="10" fill="#00695c" />
            <circle cx="450" cy="250" r="10" fill="#00695c" />
            <circle cx="600" cy="350" r="10" fill="#00695c" />
          </svg>
        </div>

        <div className="relative w-full h-full min-h-[400px]">
          {/* Start Node */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute z-10 flex flex-col items-center"
            style={{ left: '10%', top: '50%', transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-ocean-500 z-10">
              <Home className="text-ocean-600 w-5 h-5" />
            </div>
            <div className="mt-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-navy-700 shadow-sm border border-navy-100 flex items-center gap-1.5">
              <span>🇮🇳</span> India
            </div>
          </motion.div>

          {/* Connectors and Nodes */}
          {voyageHistory?.map((voyage, i) => {
            const pos = positions[i];
            const isLast = i === voyageHistory.length - 1;
            const prevPos = i === 0 ? { x: 10, y: 50 } : positions[i - 1];

            return (
              <div key={voyage.id || i}>
                {/* SVG Path connecting to previous */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                    d={`M ${prevPos.x}% ${prevPos.y}% Q ${(prevPos.x + pos.x)/2}% ${prevPos.y - 20}% ${pos.x}% ${pos.y}%`}
                    fill="none"
                    stroke="url(#blue-gradient)"
                    strokeWidth="3"
                    strokeDasharray="8 8"
                    className="opacity-60"
                  />
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1 + (i * 0.2), type: "spring" }}
                  className="absolute z-10 flex flex-col items-center"
                  style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-ocean-300 hover:scale-110 transition-transform cursor-pointer">
                    {voyage.type === 'island' ? <TreePalm size={18} className="text-seafoam-600" /> : <MapPin size={18} className="text-ocean-600" />}
                  </div>
                  
                  {isLast && (
                    <motion.div 
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute w-14 h-14 bg-ocean-400 rounded-full -z-10 top-[-8px] left-[-8px]"
                    />
                  )}
                </motion.div>
              </div>
            );
          })}

          {/* Empty State Map Graphic if no history */}
          {(!voyageHistory || voyageHistory.length === 0) && (
            <div className="absolute inset-0 flex items-center justify-center flex-col text-center opacity-60">
              <Navigation className="w-16 h-16 text-ocean-300 mb-4" />
              <p className="text-navy-600 font-medium">Your map is empty.</p>
              <p className="text-sm text-navy-500">Take a voyage to discover new lands.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
