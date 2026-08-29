'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Anchor, Ship, MapPin, Mail, Waves, TreePalm, Map as MapIcon, ArrowUpRight, Compass } from 'lucide-react';
import { useSailor } from '@/lib/store/sailor-context';
import Button from '@/components/ui/Button';
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
      className="space-y-12"
    >
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 pb-2">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-slate-800 uppercase">
            {greeting},<br />Sailor
          </h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50/50 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-sky-700 shadow-sm self-start sm:self-auto">
          <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" /> Live at sea
        </div>
      </header>

      {/* Main CTA Section (Ocean Band style) */}
      <section className="relative w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(2,132,199,0.08)]">
        {/* Gradient ocean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc] z-0" />
        
        {/* Subtle animated wave lines */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-30" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C200,80 400,20 600,60 C800,90 1000,30 1200,65 C1350,80 1400,50 1440,60 L1440,100 L0,100 Z" fill="none" stroke="#0284c7" strokeWidth="2"/>
        </svg>

        <div className="relative z-10 p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center md:items-end justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-800/70">Open waters / 01</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-800 uppercase leading-[1.1] mb-4">
              Ready to meet<br />someone new?
            </h2>
            <p className="max-w-md text-slate-600 font-medium text-sm lg:text-base mx-auto md:mx-0">
              Set sail into the unknown and match with a random sailor. No algorithms, just the ocean.
            </p>
            
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-700/80 mt-8 flex items-center justify-center md:justify-start gap-2">
              <Waves size={16} /> {activeSailorsCount.toLocaleString()} sailors currently at sea
            </p>
          </div>
          
          <div className="shrink-0">
            <Button 
              className="rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold px-10 py-4 text-[11px] uppercase tracking-[0.2em] border-none shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2"
              onClick={() => router.push('/voyage/matching')}
            >
              Set sail <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <QuickActionCard 
          href="/islands" 
          icon={<TreePalm size={22} className="text-rose-500" />} 
          title="Explore Islands" 
          subtitle="Find common interests" 
          bgClass="bg-rose-50"
          accentColor="#f43f5e"
        />
        <QuickActionCard 
          href="/bottles" 
          icon={<Mail size={22} className="text-indigo-500" />} 
          title="Message in a Bottle" 
          subtitle="Send thoughts to sea" 
          bgClass="bg-indigo-50"
          accentColor="#6366f1" 
        />
        <QuickActionCard 
          href="/map" 
          icon={<MapIcon size={22} className="text-emerald-500" />} 
          title="View Map" 
          subtitle="See your journey" 
          bgClass="bg-emerald-50"
          accentColor="#10b981"
        />
        <QuickActionCard 
          href="/crew" 
          icon={<Anchor size={22} className="text-amber-500" />} 
          title="My Crew" 
          subtitle="Manage connections" 
          bgClass="bg-amber-50"
          accentColor="#f59e0b"
        />
      </div>

      {voyageHistory && voyageHistory.length > 0 && (
        <div className="mt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-6">Recent Voyages</p>
          <div className="space-y-4">
            {voyageHistory.slice(0, 3).map((voyage: any) => (
              <div key={voyage.id} className="p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all cursor-pointer group">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-800 text-lg">{voyage.metSailorName}</h3>
                    <p className="text-sm font-medium text-slate-500">
                      {new Date(voyage.date).toLocaleDateString()} • {voyage.islandName || 'Random Waters'}
                    </p>
                  </div>
                </div>
                {voyage.broughtAboard && (
                  <span className="hidden sm:inline-block px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Crew
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function QuickActionCard({ href, icon, title, subtitle, bgClass, accentColor }: { href: string, icon: React.ReactNode, title: string, subtitle: string, bgClass: string, accentColor: string }) {
  const router = useRouter();
  
  return (
    <motion.div
      className="group relative p-6 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer h-full"
      onClick={() => router.push(href)}
    >
      <div className="absolute bottom-0 left-0 w-full h-16 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,30 C100,60 200,0 300,40 C350,55 380,30 400,35 L400,60 L0,60 Z" fill={accentColor}/>
        </svg>
      </div>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ${bgClass}`}>
        {icon}
      </div>
      <h3 className="font-heading font-bold text-base text-slate-800 mb-1 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-xs font-medium">{subtitle}</p>
    </motion.div>
  );
}
}
