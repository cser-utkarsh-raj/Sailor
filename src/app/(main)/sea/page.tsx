'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Anchor, Ship, MapPin, Mail, Waves, TreePalm, Map as MapIcon, ArrowUpRight, Compass } from 'lucide-react';
import { useSailor } from '@/lib/store/sailor-context';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function SeaPage() {
  const router = useRouter();
  const { voyageHistory } = useSailor();
  
  // Greeting based on time
  const hour = new Date().getHours();
  let greeting = 'Good evening';
  if (hour < 12) greeting = 'Good morning';
  else if (hour < 18) greeting = 'Good afternoon';
  
  const activeSailorsCount = 1342; // Mock count

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="flex items-end justify-between gap-4 pt-2 pb-1">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-coral-600">Thursday, 27 August</p>
          <h1 className="text-3xl font-heading font-extrabold tracking-tight text-navy-900">{greeting}, Sailor</h1>
          <p className="text-navy-500 mt-1">Your next conversation is out there.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-seafoam-200 bg-seafoam-50 px-3 py-2 text-xs font-bold text-seafoam-700">
          <span className="h-2 w-2 rounded-full bg-seafoam-500" /> Live at sea
        </div>
      </header>

      <Card className="bg-navy-900 text-white p-0 border-none shadow-xl overflow-hidden relative">
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(122,187,255,0.9),transparent_62%)]" />
        <div className="absolute right-8 top-8 opacity-20 pointer-events-none">
          <Compass size={150} strokeWidth={1} />
        </div>
        
        <div className="relative z-10 grid gap-8 p-7 sm:p-9 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ocean-300">Open waters / 01</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight">Ready to meet someone new?</h2>
            <p className="mt-3 max-w-md text-ocean-100">Set sail into the unknown and match with a random sailor.</p>
          </div>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="mt-2 font-bold bg-coral-400 text-white hover:bg-coral-500 border-none"
            onClick={() => router.push('/voyage/matching')}
          >
            Set sail <ArrowUpRight size={18} />
          </Button>
          
          <p className="text-sm text-ocean-200 flex items-center gap-2 md:col-span-2">
            <span><Waves size={16} /></span> {activeSailorsCount.toLocaleString()} sailors are currently at sea
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <QuickActionCard 
          href="/islands" 
          icon={<TreePalm size={24} className="text-seafoam-600" />} 
          title="Explore Islands" 
          subtitle="Find common interests" 
          bgClass="bg-seafoam-50" 
        />
        <QuickActionCard 
          href="/bottles" 
          icon={<Mail size={24} className="text-sunny-600" />} 
          title="Message in a Bottle" 
          subtitle="Send thoughts to sea" 
          bgClass="bg-sunny-50" 
        />
        <QuickActionCard 
          href="/map" 
          icon={<MapIcon size={24} className="text-lavender-600" />} 
          title="View Map" 
          subtitle="See your journey" 
          bgClass="bg-lavender-50" 
        />
        <QuickActionCard 
          href="/crew" 
          icon={<Anchor size={24} className="text-coral-600" />} 
          title="My Crew" 
          subtitle="Manage connections" 
          bgClass="bg-coral-50" 
        />
      </div>

      {voyageHistory && voyageHistory.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-heading font-bold text-navy-900 mb-4">Recent Voyages</h2>
          <div className="space-y-3">
            {voyageHistory.slice(0, 3).map((voyage: any) => (
              <Card key={voyage.id} className="p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="bg-ocean-50 p-2 rounded-full text-ocean-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900">{voyage.metSailorName}</h3>
                    <p className="text-xs text-navy-500">
                      {new Date(voyage.date).toLocaleDateString()} • {voyage.islandName || 'Random Waters'}
                    </p>
                  </div>
                </div>
                {voyage.broughtAboard && (
                  <Badge className="bg-coral-100 text-coral-700 border-coral-200">Brought aboard</Badge>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function QuickActionCard({ href, icon, title, subtitle, bgClass }: { href: string, icon: React.ReactNode, title: string, subtitle: string, bgClass: string }) {
  const router = useRouter();
  
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card 
        className="p-4 h-full cursor-pointer hover:shadow-md transition-shadow border-ocean-100"
        onClick={() => router.push(href)}
      >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${bgClass}`}>
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-navy-900 text-sm md:text-base leading-tight">{title}</h3>
        <p className="text-xs text-navy-500 mt-1">{subtitle}</p>
      </Card>
    </motion.div>
  );
}
