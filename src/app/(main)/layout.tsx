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
    <div className="min-h-screen chart-grid">
      {/* Desktop Navigation */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 h-[72px] bg-[#f5f8f7]/90 backdrop-blur-md border-b border-navy-200/60 z-50 items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <SailorLogo size={36} />
          <span className="font-heading font-extrabold text-[17px] tracking-[0.22em] text-navy-900">SAILOR</span>
        </Link>
        
        <nav className="flex items-center gap-1 rounded-full border border-navy-200/70 bg-white/60 p-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
            const Icon = item.icon;
            
            return (
              <Link 
                key={item.name} 
                href={item.path}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'bg-navy-900 text-white shadow-sm' 
                    : 'text-navy-500 hover:bg-white hover:text-navy-900'
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Notifications" className="flex h-9 w-9 items-center justify-center rounded-full text-navy-500 transition-colors hover:bg-white hover:text-navy-900">
            <Bell size={18} />
          </button>
          <Link href="/profile" aria-label="Open profile" className="flex items-center justify-center w-9 h-9 rounded-full bg-coral-400 text-white hover:bg-coral-500 transition-colors">
            <User size={18} />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative pt-6 pb-24 md:pt-28 md:pb-12 max-w-6xl mx-auto px-4 min-h-screen">
        {children}


      </main>

      {/* Mobile Navigation */}
      <nav className="flex md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#f5f8f7]/95 backdrop-blur-md border-t border-navy-200/70 z-50 justify-around items-center pb-2 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 ${
                isActive ? 'text-ocean-600' : 'text-navy-500'
              }`}
            >
              <Icon size={20} className={isActive ? 'stroke-2' : 'stroke-[1.5]'} />
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
