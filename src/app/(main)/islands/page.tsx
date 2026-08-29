"use client";

import { mockIslands } from '@/lib/mock-data/islands';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { motion } from 'motion/react';
import { Ship, Compass, Search, Map as MapIcon, User } from 'lucide-react';
import Link from 'next/link';

export default function IslandsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-bold text-slate-800 mb-2">Explore Islands</h1>
        <p className="text-slate-500 text-lg">Each island is a community. Find yours.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {mockIslands.map((island) => (
          <motion.div key={island.id} variants={itemVariants}>
            <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div 
                className="h-32 relative overflow-hidden p-4 rounded-t-xl"
                style={{ 
                  background: `linear-gradient(to right, ${island.gradientFrom || '#3b82f6'}, ${island.gradientTo || '#8b5cf6'})` 
                }}
              >
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <Badge variant="default" className="bg-white/90 text-ocean-700 backdrop-blur-sm border-none shadow-sm flex gap-1 items-center">
                    <User size={14} /> {island.activeSailors || 0} sailors
                  </Badge>
                  <div className="text-4xl bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm">
                    <MapIcon className="text-ocean-500 w-8 h-8" />
                  </div>
                </div>
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                </motion.div>

                {/* Subtle wave SVG at bottom */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                  <svg className="relative block w-full h-[30px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.5,198.71,109.21Z" className="fill-white"></path>
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-slate-800">{island.name}</h3>
                <p className="text-slate-400 text-sm font-medium mt-1 mb-3">{island.theme}</p>
                <p className="text-slate-500 mb-6 line-clamp-2 min-h-[3rem]">{island.description}</p>
                
                <div className="flex items-center justify-end">
                  <Link href="/voyage/matching">
                    <Button variant="secondary" size="sm" className="group-hover:bg-ocean-500 group-hover:text-white transition-colors">
                      Enter Island
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
