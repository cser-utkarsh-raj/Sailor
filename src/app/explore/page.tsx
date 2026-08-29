"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-x-hidden font-sans">
      
      {/* 
        ==================================================
        HERO SCENE: HD LUXURY IMAGE
        ==================================================
      */}
      <div className="relative w-full h-[85vh] lg:h-[100vh] bg-[#FDFBF7] overflow-hidden">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/coastal_ship_hero.jpg')" }}
        >
          {/* Elegant dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#FDFBF7]"></div>
        </div>

        {/* 
          ==================================================
          HERO CONTENT (LUXURY TYPOGRAPHY)
          ==================================================
        */}
        <div className="absolute bottom-[10%] left-0 w-full z-40 flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-12 md:pb-20">
          <div className="max-w-4xl text-left">
            <p className="font-sans font-medium tracking-[0.4em] uppercase text-xs md:text-sm text-white/90 mb-6 drop-shadow-md">
              Discover a vast network of anonymous sailors
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] font-medium text-white tracking-tight leading-[0.95] mb-10 drop-shadow-xl">
              Explore <br/><span className="italic font-light">The Ocean.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-start gap-6 mt-8">
              <Link href="/onboarding">
                <Button className="rounded-full bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 font-sans font-bold px-12 py-5 text-xs uppercase tracking-[0.2em] border-none shadow-xl hover:-translate-y-1">
                  Start Sailing
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Header / Navigation (Overlays the entire scene cleanly) */}
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-16">
          <Link href="/" className="flex items-center gap-3">
            <SailorLogo className="w-8 h-8 text-white drop-shadow-md" />
            <span className="font-sans font-bold tracking-[0.3em] text-white text-lg uppercase drop-shadow-md">SAILOR</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-12 text-xs font-bold uppercase tracking-[0.2em] text-white/90 drop-shadow-md">
            <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
            <Link href="/islands" className="hover:text-white transition-colors">Islands</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-6">
            {deferredPrompt && (
              <button 
                onClick={() => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                }}
                className="hidden md:flex items-center gap-2 text-white/90 hover:text-white font-bold tracking-[0.2em] uppercase text-xs transition-colors drop-shadow-md"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Install App
              </button>
            )}
            <Link href="/login" className="hidden md:block text-white/90 hover:text-white font-bold tracking-[0.2em] uppercase text-xs transition-colors drop-shadow-md">
              Log In
            </Link>
          </div>
        </nav>
      </div>

      {/* 
        ==================================================
        HERO SCENE: VECTOR ILLUSTRATED LANDSCAPE
        ==================================================
      */}
      <div className="relative w-full h-[85vh] lg:h-[100vh] bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] overflow-hidden">
        
        {/* BACKGROUND: Sky & Clouds */}
        <div className="absolute top-10 left-10 opacity-60">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="#ffffff">
             <path d="M20 20 C20 10 35 10 40 15 C50 0 70 0 80 15 C90 10 110 15 105 25 C115 30 110 40 95 40 L20 40 C5 40 5 25 20 20 Z" />
          </svg>
        </div>
        <div className="absolute top-24 right-32 opacity-40 scale-75">
          <svg width="120" height="40" viewBox="0 0 120 40" fill="#ffffff">
             <path d="M20 20 C20 10 35 10 40 15 C50 0 70 0 80 15 C90 10 110 15 105 25 C115 30 110 40 95 40 L20 40 C5 40 5 25 20 20 Z" />
          </svg>
        </div>

        {/* DISTANT MOUNTAINS / ISLANDS */}
        <div className="absolute top-[25%] left-0 w-full h-[30%] z-0">
          <svg viewBox="0 0 1440 300" className="w-full h-full" preserveAspectRatio="none">
            {/* Mountain Layer 1 */}
            <path d="M0,300 L0,200 C200,100 400,250 600,150 C800,50 1000,200 1440,100 L1440,300 Z" fill="#93c5fd" opacity="0.6"/>
            {/* Mountain Layer 2 */}
            <path d="M0,300 L0,250 C300,150 500,250 800,100 C1100,-50 1300,150 1440,200 L1440,300 Z" fill="#7dd3fc" opacity="0.8"/>
          </svg>
        </div>

        {/* MIDDLE GROUND: Ocean Horizon & Waves */}
        <div className="absolute top-[45%] left-0 w-full h-[55%] z-10 bg-gradient-to-b from-[#38bdf8] to-[#0284c7]">
           {/* Decorative ocean waves */}
           <svg viewBox="0 0 1440 100" className="absolute top-0 w-full opacity-30" preserveAspectRatio="none">
             <path d="M0,20 C300,80 600,-20 1000,40 C1200,70 1350,10 1440,30 L1440,100 L0,100 Z" fill="#0284c7"/>
           </svg>
        </div>

        {/* 
          ==================================================
          BOAT & WAKE
          ==================================================
        */}
        <motion.div 
          className="absolute top-[55%] left-[55%] lg:left-[60%] z-20 flex flex-col items-center"
          animate={{ 
            y: [0, -6, 0], // Gentle bobbing
            rotate: [-1, 1, -1], // Subtle rocking
            x: [0, 20, 0] // extremely subtle drifting
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          
          {/* Boat SVG */}
          <div className="relative w-20 h-20 md:w-28 md:h-28 z-20 drop-shadow-xl">
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
               {/* Hull Bottom */}
               <path d="M15 70L85 70L75 82L25 82L15 70Z" fill="#1e293b"/>
               {/* Hull Top */}
               <path d="M15 70L85 70L75 74L25 74L15 70Z" fill="#cbd5e1"/>
               {/* Mast */}
               <rect x="49" y="20" width="2" height="50" fill="#94a3b8"/>
               {/* Back Sail */}
               <path d="M48 25L48 68L20 68C20 68 35 45 48 25Z" fill="#f1f5f9"/>
               {/* Front Sail */}
               <path d="M52 28L52 65L75 65C75 65 65 45 52 28Z" fill="#ffffff"/>
               {/* Flag */}
               <path d="M51 20L65 15L51 10V20Z" fill="#f43f5e"/>
             </svg>
          </div>

          {/* Water Wake System (Layered SVG Paths) */}
          <div className="absolute top-[75%] left-[45%] -translate-x-1/2 w-[250px] h-[150px] -z-10 pointer-events-none">
             
             {/* Base Foam Blob (Stern) */}
             <motion.div 
               className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/60 rounded-full blur-[2px]"
               animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* V-Shaped Trailing Wake Lines */}
             <svg className="absolute top-4 left-0 w-full h-full" viewBox="0 0 250 150">
               {/* Left Trail */}
               <motion.path 
                 d="M125,0 C100,20 50,60 10,120"
                 fill="none"
                 stroke="#bae6fd"
                 strokeWidth="4"
                 strokeLinecap="round"
                 animate={{ strokeDashoffset: [200, 0], opacity: [0.8, 0] }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                 strokeDasharray="20 30"
               />
               <motion.path 
                 d="M125,0 C110,30 70,80 30,140"
                 fill="none"
                 stroke="#ffffff"
                 strokeWidth="2"
                 strokeLinecap="round"
                 animate={{ strokeDashoffset: [200, 0], opacity: [0.6, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                 strokeDasharray="15 25"
               />

               {/* Right Trail */}
               <motion.path 
                 d="M125,0 C150,20 200,60 240,120"
                 fill="none"
                 stroke="#bae6fd"
                 strokeWidth="4"
                 strokeLinecap="round"
                 animate={{ strokeDashoffset: [200, 0], opacity: [0.8, 0] }}
                 transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                 strokeDasharray="20 30"
               />
               <motion.path 
                 d="M125,0 C140,30 180,80 220,140"
                 fill="none"
                 stroke="#ffffff"
                 strokeWidth="2"
                 strokeLinecap="round"
                 animate={{ strokeDashoffset: [200, 0], opacity: [0.6, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
                 strokeDasharray="15 25"
               />
             </svg>

             {/* Tiny Splashes/Foam Particles */}
             <motion.div className="absolute top-4 left-[40%] w-2 h-2 bg-white rounded-full blur-[1px]" animate={{ x: [-5, -20], y: [0, 30], opacity: [1, 0], scale: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
             <motion.div className="absolute top-4 left-[60%] w-2 h-2 bg-white rounded-full blur-[1px]" animate={{ x: [5, 20], y: [0, 30], opacity: [1, 0], scale: [1, 0] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }} />
          </div>

        </motion.div>

        {/* 
          ==================================================
          FOREGROUND: ORGANIC WHITE SHAPE
          ==================================================
        */}
        <div className="absolute bottom-[-2px] left-0 w-full h-[60%] z-30 pointer-events-none drop-shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <svg viewBox="0 0 1440 600" className="w-full h-full" preserveAspectRatio="none">
            {/* 
              This creates a massive, sweeping organic paper-like cutout.
              It starts high on the left, dips smoothly into the middle, and waves out to the right.
            */}
            <path 
              d="M0,600 L0,50 C250,250 500,350 850,200 C1150,50 1350,150 1440,80 L1440,600 Z" 
              fill="#FDFBF7" 
            />
          </svg>
        </div>

        {/* 
          ==================================================
          HERO CONTENT (TEXT INSIDE FOREGROUND)
          ==================================================
        */}
        {/* Adjusted to pin firmly to the bottom so it doesn't overlap the blue ocean */}
        <div className="absolute bottom-6 md:bottom-12 lg:bottom-16 left-0 w-full z-40 px-6 md:px-16 lg:px-24 pointer-events-none">
          <div className="max-w-xl text-left pointer-events-auto">
            <h1 className="font-heading text-6xl md:text-7xl lg:text-[6rem] font-extrabold text-slate-800 tracking-tight uppercase leading-[0.95] mb-4 md:mb-6">
              Go Offshore
            </h1>
            <p className="font-sans font-medium tracking-[0.2em] uppercase text-sm md:text-base text-slate-500 mb-8 md:mb-10">
              Go offshore, meet your people.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/onboarding">
                <Button className="rounded-full bg-coral-500 text-white hover:bg-coral-600 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-extrabold px-12 py-4 text-sm md:text-base uppercase tracking-widest border-none">
                  Set Sail
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Header / Navigation (Overlays the entire scene cleanly) */}
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-16">
          <Link href="/" className="flex items-center gap-3">
            <SailorLogo className="w-8 h-8 text-slate-800" />
            <span className="font-heading font-extrabold tracking-widest text-slate-800 text-xl">SAILOR</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-700">
            <Link href="/explore" className="hover:text-sky-600 transition-colors">Explore</Link>
            <Link href="/islands" className="hover:text-sky-600 transition-colors">Islands</Link>
            <Link href="/about" className="hover:text-sky-600 transition-colors">About</Link>
          </div>

          <div className="flex items-center gap-4">
            {deferredPrompt && (
              <button 
                onClick={() => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                }}
                className="hidden md:flex items-center gap-2 text-slate-700 hover:text-sky-600 font-bold tracking-widest uppercase text-xs transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Install App
              </button>
            )}
            <Link href="/onboarding">
              <Button className="rounded-full bg-slate-900 text-white hover:bg-sky-600 hover:-translate-y-0.5 hover:shadow-lg transition-all font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-2.5 border-none">
                Start Sailing
              </Button>
            </Link>
          </div>
        </nav>

      </div>

      {/* 
        ==================================================
        FEATURES & FOOTER (Rest of the Shore)
        ==================================================
      */}
      <div className="relative bg-[#FDFBF7] w-full flex flex-col items-center justify-start pt-10 pb-24 px-6 z-20">
        
        {/* Features Section - Now using matching vector graphics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-40">
          
          {/* Feature 1: Set Sail */}
          <div className="group rounded-[32px] p-10 bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)] transition-all duration-500 hover:-translate-y-2 text-left">
            <div className="mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              {/* Custom Vector Icon matching hero */}
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <circle cx="50" cy="50" r="50" fill="#e0f2fe" />
                <path d="M0 65 C 30 75 70 55 100 65 L 100 100 L 0 100 Z" fill="#38bdf8" />
                {/* Mini Boat */}
                <path d="M35 60L65 60L60 65L40 65Z" fill="#1e293b"/>
                <rect x="49" y="35" width="2" height="25" fill="#94a3b8"/>
                <path d="M52 38L52 58L65 58Z" fill="#ffffff"/>
                <path d="M48 35L48 58L35 58Z" fill="#f1f5f9"/>
              </svg>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-800 mb-4 tracking-tight">Set Sail</h3>
            <p className="text-slate-500 leading-relaxed font-medium">Leave the shore behind. Connect with someone entirely new through a single tap. No profiles, no algorithms.</p>
          </div>
          
          {/* Feature 2: Explore Islands */}
          <div className="group rounded-[32px] p-10 bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)] transition-all duration-500 hover:-translate-y-2 text-left">
            <div className="mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
               {/* Custom Vector Icon matching hero */}
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <circle cx="50" cy="50" r="50" fill="#e0f2fe" />
                <path d="M0 65 C 30 75 70 55 100 65 L 100 100 L 0 100 Z" fill="#38bdf8" />
                {/* Mini Island & Tree */}
                <path d="M30 62 C 40 50 60 50 70 62 Z" fill="#fde047" />
                <path d="M50 55 Q 55 40 65 30" fill="none" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
                <path d="M65 30 Q 55 35 50 40" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
                <path d="M65 30 Q 75 35 80 40" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
                <path d="M65 30 Q 65 20 70 15" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-800 mb-4 tracking-tight">Explore Islands</h3>
            <p className="text-slate-500 leading-relaxed font-medium">Join themed communities floating in the sea. Drop anchor at Music Island or find deep conversations at midnight.</p>
          </div>
          
          {/* Feature 3: Build Your Crew */}
          <div className="group rounded-[32px] p-10 bg-white border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] transition-all duration-500 hover:-translate-y-2 text-left">
            <div className="mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
               {/* Custom Vector Icon matching hero */}
               <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <circle cx="50" cy="50" r="50" fill="#e0f2fe" />
                {/* Two overlapping crew members */}
                <circle cx="40" cy="45" r="12" fill="#7dd3fc" />
                <path d="M20 85 C 20 65 60 65 60 85" fill="#38bdf8" />
                <circle cx="65" cy="55" r="10" fill="#bae6fd" />
                <path d="M45 85 C 45 70 85 70 85 85" fill="#7dd3fc" />
              </svg>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-800 mb-4 tracking-tight">Build Your Crew</h3>
            <p className="text-slate-500 leading-relaxed font-medium">Found someone you genuinely click with? Bring them aboard your ship so you never lose each other at sea.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FDFBF7] text-slate-500 py-16 px-6 relative z-20 border-t border-slate-200">
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
