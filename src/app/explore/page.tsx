"use client";

import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { useSailor } from "@/lib/store/sailor-context";

export default function ExplorePage() {
  const { isOnboarded } = useSailor();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-x-hidden font-sans">

      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2.5">
          <SailorLogo className="w-7 h-7 text-slate-800" />
          <span className="font-heading font-extrabold tracking-[0.25em] text-slate-800 text-base uppercase">Sailor</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            <Link href="/explore" className="text-slate-800">Explore</Link>
            <Link href="/islands" className="hover:text-slate-800 transition-colors">Islands</Link>
            <Link href="/about" className="hover:text-slate-800 transition-colors">About</Link>
            <Link href="/login" className="hover:text-slate-800 transition-colors">Log In</Link>
          </div>
          <div className="flex items-center gap-3">
            {deferredPrompt ? (
              <button
                onClick={() => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                }}
                className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download App
              </button>
            ) : (
              <Link href={isOnboarded ? "/sea" : "/onboarding"}>
                <button className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  Set Sail
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Hero header with subtle ocean accent */}
      <header className="relative px-6 py-20 md:py-28 md:px-12 lg:px-20 max-w-5xl overflow-hidden">
        {/* Background wave decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 500 400" fill="none" className="w-full h-full">
            <path d="M0,200 C100,280 200,120 300,220 C400,320 450,180 500,250" stroke="#0284c7" strokeWidth="2" fill="none"/>
            <path d="M0,250 C150,180 250,300 380,200 C450,160 480,230 500,210" stroke="#0284c7" strokeWidth="1.5" fill="none"/>
            <circle cx="400" cy="150" r="80" stroke="#0284c7" strokeWidth="0.5"/>
          </svg>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-5">Discover</p>
        <h1 className="font-heading text-[3rem] md:text-[4.5rem] font-extrabold text-slate-800 tracking-tight leading-[0.92] uppercase mb-6">
          Explore<br />The Ocean.
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md font-medium">
          A vast network of anonymous sailors, floating communities, and hidden messages—waiting to be found.
        </p>
      </header>

      {/* Wave transition */}
      <div className="relative w-full h-16">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C200,60 400,0 600,40 C800,70 1000,10 1200,45 C1350,60 1400,30 1440,35 L1440,60 L0,60 Z" fill="#e0f2fe" opacity="0.4"/>
          <path d="M0,40 C300,10 500,50 800,25 C1000,10 1200,45 1440,20 L1440,60 L0,60 Z" fill="#bae6fd" opacity="0.2"/>
        </svg>
      </div>

      {/* Features */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        {/* Subtle background ocean circles */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#0284c7" strokeWidth="1"/>
            <circle cx="200" cy="200" r="130" stroke="#0284c7" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl relative z-10">

          <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(2,132,199,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,25 C100,50 200,0 300,35 C350,45 380,20 400,30 L400,50 L0,50 Z" fill="#0ea5e9"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform">🌊</div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Open Waters</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Drift freely and match with random sailors from around the world. Every encounter is fleeting unless you choose to bring them aboard.</p>
          </div>

          <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(244,63,94,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,30 C80,5 180,45 280,20 C340,10 380,35 400,25 L400,50 L0,50 Z" fill="#f43f5e"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform">🏝️</div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Themed Islands</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Drop anchor at curated islands like Midnight Thoughts, Music Lovers, or Code &amp; Coffee.</p>
          </div>

          <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(168,85,247,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,20 C120,50 220,5 320,35 C370,45 390,20 400,25 L400,50 L0,50 Z" fill="#a855f7"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform">📨</div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Message in a Bottle</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Write a thought, seal it in a bottle, and toss it into the digital sea.</p>
          </div>

          <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(99,102,241,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,30 C100,50 200,10 300,40 C350,50 380,30 400,35 L400,50 L0,50 Z" fill="#6366f1"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform">⚓</div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Your Crew</h3>
            <p className="text-slate-500 text-sm leading-relaxed">When you find a genuine connection, send a crew invite. Build a small, trusted circle of friends.</p>
          </div>

          <div className="group relative p-8 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(16,185,129,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-12 opacity-[0.06] pointer-events-none">
              <svg viewBox="0 0 400 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,25 C150,50 250,10 350,35 C380,42 400,28 400,30 L400,50 L0,50 Z" fill="#10b981"/>
              </svg>
            </div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform">🗺️</div>
            <h3 className="font-heading font-bold text-lg text-slate-800 mb-3">Voyage Map</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Look back at your journey. See the beautiful map of all the countries your past connections sailed from.</p>
          </div>

          <div className="p-8 bg-slate-900 rounded-3xl text-white flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-all duration-500">
            <h3 className="font-heading font-bold text-2xl mb-3">Ready?</h3>
            <p className="text-slate-400 text-sm mb-6">The ocean is waiting.</p>
            <Link href={isOnboarded ? "/sea" : "/onboarding"}>
              <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 font-bold uppercase tracking-[0.15em] px-8 py-3 text-xs border-none">
                Set Sail
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFBF7] text-slate-500 py-16 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <SailorLogo className="w-8 h-8 text-slate-300" />
            <span className="font-heading font-extrabold tracking-widest text-slate-400 text-lg mt-1">SAILOR</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm font-medium">© 2026 Sailor. Nobody sails alone.</p>
            <div className="hidden md:block w-px h-6 bg-slate-200"></div>
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Presented by</span>
              <DotLogo width={18} height={18} className="text-slate-700" />
              <span className="font-heading font-extrabold text-base text-slate-700 tracking-tight">.dot</span>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
