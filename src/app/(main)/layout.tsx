'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Waves, Compass, TreePalm, Anchor, Map as MapIcon, User, Bell } from 'lucide-react';
import SailorLogo from '@/components/illustrations/SailorLogo';
import DotLogo from '@/components/illustrations/DotLogo';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: 'Sea', path: '/sea', icon: Waves },
    { name: 'Voyage', path: '/voyage', icon: Compass },
    { name: 'Islands', path: '/islands', icon: TreePalm },
    { name: 'Crew', path: '/crew', icon: Anchor },
    { name: 'Map', path: '/map', icon: MapIcon },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Desktop Navigation */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-[80px] bg-[#FDFBF7]/90 backdrop-blur-md border-b border-slate-200/50 z-50 items-center justify-between px-8 lg:px-20 transition-all">
        <Link href="/" className="flex items-center gap-2.5">
          <SailorLogo className="w-7 h-7 text-slate-800" />
          <span className="font-heading font-extrabold tracking-[0.25em] text-slate-800 text-base uppercase">Sailor</span>
        </Link>
        
        <nav className="flex items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.15em] text-slate-500">
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
            
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`transition-colors flex items-center gap-2 ${
                  isActive 
                    ? 'text-slate-900' 
                    : 'hover:text-slate-800'
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-4">
          <button type="button" aria-label="Notifications" className="text-slate-400 hover:text-slate-800 transition-colors">
            <Bell size={20} strokeWidth={2} />
          </button>
          <Link href="/profile" aria-label="Open profile" className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white hover:bg-slate-700 transition-colors shadow-sm">
            <User size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative pt-6 pb-24 md:pt-32 md:pb-12 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 min-h-screen">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#FDFBF7]/95 backdrop-blur-md border-t border-slate-200/50 z-50 justify-around items-center pb-2 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? 'text-slate-900' : 'text-slate-400'
              }`}
            >
              <Icon size={20} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'} />
              <span className="text-[10px] font-bold tracking-wider uppercase">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
