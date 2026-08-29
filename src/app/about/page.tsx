"use client";

import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { useSailor } from "@/lib/store/sailor-context";

export default function AboutPage() {
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
            <Link href="/explore" className="hover:text-slate-800 transition-colors">Explore</Link>
            <Link href="/islands" className="hover:text-slate-800 transition-colors">Islands</Link>
            <Link href="/about" className="text-slate-800">About</Link>
            <Link href="/login" className="hover:text-slate-800 transition-colors">Log In</Link>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                } else {
                  alert("To install the app, look for the install icon in your browser's address bar or menu (Add to Home Screen).");
                }
              }}
              className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative px-6 py-20 md:py-28 md:px-12 lg:px-20 max-w-5xl overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 500 400" fill="none" className="w-full h-full">
            <path d="M0,200 C100,280 200,120 300,220 C400,320 450,180 500,250" stroke="#0284c7" strokeWidth="2" fill="none"/>
            <circle cx="350" cy="180" r="100" stroke="#0284c7" strokeWidth="0.5"/>
          </svg>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-5">The Vision</p>
        <h1 className="font-heading text-[3rem] md:text-[4.5rem] font-extrabold text-slate-800 tracking-tight leading-[0.92] uppercase mb-6">
          Nobody Sails<br />Alone.
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg font-medium">
          Sailor is an anonymous social experiment designed to strip away the noise of modern social media. No algorithms, no follower counts, no performative feeds. Just you, the ocean, and the people you meet along the way.
        </p>
      </header>

      {/* Wave transition */}
      <div className="relative w-full h-16">
        <svg viewBox="0 0 1440 60" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,30 C200,60 400,0 600,40 C800,70 1000,10 1200,45 C1350,60 1400,30 1440,35 L1440,60 L0,60 Z" fill="#e0f2fe" opacity="0.4"/>
          <path d="M0,40 C300,10 500,50 800,25 C1000,10 1200,45 1440,20 L1440,60 L0,60 Z" fill="#bae6fd" opacity="0.2"/>
        </svg>
      </div>

      {/* The Journey */}
      <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#0284c7" strokeWidth="1"/>
            <circle cx="200" cy="200" r="130" stroke="#0284c7" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="max-w-5xl relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-6">How it works</p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg mb-4 mx-auto md:mx-0">🏖️</div>
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-2 uppercase tracking-wide">1. The Shore</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Pick an avatar and a boat. Leave your real identity behind.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg mb-4 mx-auto md:mx-0">🌊</div>
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-2 uppercase tracking-wide">2. The Sea</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Set sail into the open ocean. You are now adrift in the network.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg mb-4 mx-auto md:mx-0">🧭</div>
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-2 uppercase tracking-wide">3. Discover</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Encounter other live sailors randomly, or visit themed Islands.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-lg mb-4 mx-auto md:mx-0">💬</div>
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-2 uppercase tracking-wide">4. Talk</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Engage in ephemeral, 1-on-1 conversations with strangers.</p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-lg mb-4 mx-auto md:mx-0">⚓</div>
              <h3 className="font-heading font-bold text-sm text-slate-800 mb-2 uppercase tracking-wide">5. Crew</h3>
              <p className="text-slate-500 text-xs leading-relaxed">Click with someone? Bring them aboard to keep in touch forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean band CTA */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0f2fe] via-[#bae6fd] to-[#7dd3fc] z-0" />
        <svg className="absolute top-0 left-0 w-full h-10" viewBox="0 0 1440 40" preserveAspectRatio="none">
          <path d="M0,40 C300,10 600,35 900,15 C1100,5 1300,30 1440,10 L1440,0 L0,0 Z" fill="#FDFBF7"/>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-10" viewBox="0 0 1440 40" preserveAspectRatio="none">
          <path d="M0,0 C200,30 500,5 800,25 C1000,35 1300,10 1440,20 L1440,40 L0,40 Z" fill="#FDFBF7"/>
        </svg>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight uppercase leading-tight mb-6">
            The ocean is waiting.
          </h2>
          <Link href={isOnboarded ? "/sea" : "/onboarding"}>
            <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold px-10 py-3.5 text-xs uppercase tracking-[0.2em] border-none shadow-lg hover:-translate-y-0.5 transition-all">
              Start Sailing
            </Button>
          </Link>
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
