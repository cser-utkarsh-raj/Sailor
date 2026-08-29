"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { useSailor } from "@/lib/store/sailor-context";

export default function LandingPage() {
  const { isOnboarded } = useSailor();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallTip, setShowInstallTip] = useState(false);

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

      {/* ==========================================
          NAVIGATION
          ========================================== */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-2.5">
          <SailorLogo className="w-7 h-7 text-slate-800" />
          <span className="font-heading font-extrabold tracking-[0.25em] text-slate-800 text-base uppercase">Sailor</span>
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            <Link href="/explore" className="hover:text-slate-800 transition-colors">Explore</Link>
            <Link href="/islands" className="hover:text-slate-800 transition-colors">Islands</Link>
            <Link href="/about" className="hover:text-slate-800 transition-colors">About</Link>
            {!isOnboarded && <Link href="/onboarding" className="hover:text-slate-800 transition-colors">Log In</Link>}
          </div>

          <div className="flex items-center gap-3 relative">
            <button
              onClick={() => {
                if (deferredPrompt) {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                } else {
                  setShowInstallTip(true);
                  setTimeout(() => setShowInstallTip(false), 5000);
                }
              }}
              className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download App
            </button>
            
            {showInstallTip && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl z-50 border border-slate-700 animate-in fade-in slide-in-from-top-2">
                <p>To install, click the <strong>install icon</strong> in your browser's address bar (near the bookmark star).</p>
                <div className="absolute -top-1 right-8 w-2 h-2 bg-slate-900 rotate-45 border-l border-t border-slate-700"></div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ==========================================
          THE SHORE — SINGLE HERO
          ========================================== */}
      <section className="relative w-full min-h-[100dvh] lg:min-h-screen flex flex-col justify-end lg:flex-row lg:items-center overflow-hidden bg-[#FDFBF7]">

        {/* ---- ILLUSTRATED SCENE (Background on desktop, Top half on mobile) ---- */}
        <div className="absolute top-0 left-0 w-full h-[65vh] lg:h-full lg:inset-0 z-0">
          <svg className="absolute w-0 h-0">
            <defs>
              {/* DESKTOP MASK: Organic split, keeps left side pure white */}
              <clipPath id="shore-mask-desktop" clipPathUnits="objectBoundingBox">
                <path d="
                  M 0.48,0
                  L 1,0
                  L 1,1
                  L 0.20,1
                  C 0.24,0.93 0.30,0.86 0.36,0.78
                  C 0.42,0.70 0.38,0.63 0.40,0.56
                  C 0.42,0.49 0.46,0.42 0.44,0.35
                  C 0.42,0.28 0.40,0.22 0.44,0.14
                  C 0.46,0.08 0.47,0.04 0.48,0
                  Z
                " />
              </clipPath>
              {/* MOBILE MASK: Flows from top, smooth wave at bottom */}
              <clipPath id="shore-mask-mobile" clipPathUnits="objectBoundingBox">
                <path d="
                  M 0,0
                  L 1,0
                  L 1,0.85
                  C 0.7,0.95 0.5,0.75 0.3,0.85
                  C 0.1,0.95 0.05,0.8 0,0.9
                  Z
                " />
              </clipPath>
            </defs>
          </svg>

          {/* Desktop Image */}
          <div
            className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/coastal_ship_hero.jpg')",
              clipPath: "url(#shore-mask-desktop)",
              WebkitClipPath: "url(#shore-mask-desktop)",
            }}
          />
          {/* Mobile Image (Restricted Height) */}
          <div
            className="block lg:hidden absolute inset-0 w-full h-full bg-cover bg-[center_top]"
            style={{
              backgroundImage: "url('/coastal_ship_hero.jpg')",
              clipPath: "url(#shore-mask-mobile)",
              WebkitClipPath: "url(#shore-mask-mobile)",
            }}
          />
        </div>

        {/* ---- HERO TEXT ---- */}
        <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-20 pt-[55vh] pb-10 lg:pt-0 lg:pb-0">
          <div className="max-w-md lg:max-w-lg mx-auto lg:mx-0">
            <p className="text-[10px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-3 sm:mb-5">
              Connect anonymously
            </p>
            <h1 className="font-heading text-[3.8rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[5.5rem] font-extrabold text-slate-800 tracking-tight leading-[0.9] uppercase mb-4 sm:mb-6">
              Go<br />Offshore
            </h1>
            <p className="font-heading text-slate-500 text-lg sm:text-xl font-semibold tracking-wide max-w-sm mb-8 sm:mb-10">
              Meet your people
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={isOnboarded ? "/sea" : "/onboarding"}>
                <Button className="rounded-full bg-coral-500 text-white hover:bg-coral-600 font-bold px-8 sm:px-10 py-3.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] border-none shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Set Sail
                </Button>
              </Link>
              <Link href="/islands" className="text-slate-500 hover:text-slate-800 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] transition-colors mt-2 sm:mt-0">
                Explore Islands →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SMOOTH WAVE TRANSITION (Hero → Features)
          Animated SVG waves that flow from the image
          ========================================== */}
      <div className="relative w-full z-10 -mt-1">
        {/* Layer 1: softest, tallest wave */}
        <motion.svg
          viewBox="0 0 1440 160"
          className="relative w-full block"
          preserveAspectRatio="none"
          style={{ height: "clamp(80px, 10vw, 160px)" }}
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <path d="M0,80 C200,160 400,40 700,100 C900,140 1100,30 1440,90 L1440,160 L0,160 Z" fill="#e0f2fe" opacity="0.5"/>
          <path d="M0,100 C300,50 500,130 800,70 C1000,30 1200,110 1440,60 L1440,160 L0,160 Z" fill="#bae6fd" opacity="0.35"/>
          <path d="M0,120 C250,90 450,140 750,100 C950,70 1150,130 1440,80 L1440,160 L0,160 Z" fill="#7dd3fc" opacity="0.2"/>
        </motion.svg>
      </div>

      {/* ==========================================
          FEATURES on OCEAN GRADIENT
          The "how it works" cards sit on the ocean band
          ========================================== */}
      <section className="relative w-full overflow-hidden z-20">
        {/* Ocean gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#e0f2fe] z-0" />

        {/* Subtle animated wave lines in background */}
        <svg className="absolute top-[30%] left-0 w-full h-40 opacity-10 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C200,90 400,30 600,70 C800,100 1000,40 1200,75 C1350,90 1400,60 1440,70"
            fill="none" stroke="#0284c7" strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M0,80 C300,50 500,90 700,55 C900,30 1100,80 1440,45"
            fill="none" stroke="#0284c7" strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          />
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28">

          {/* Section header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-700/60 mb-4">The sea awaits</p>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight uppercase leading-tight mb-4">
              There&apos;s a world<br />beyond this shore.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto font-medium">
              No algorithms, no followers, no noise. Just real conversations with real people.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Feature 1 */}
            <motion.div
              className="group relative p-8 lg:p-10 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(2,132,199,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-full h-20 opacity-[0.08] pointer-events-none">
                <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0,40 C100,70 200,10 300,50 C350,65 380,40 400,45 L400,80 L0,80 Z" fill="#0ea5e9"/>
                </svg>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-sky-100/80 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">⛵</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Meet People</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Drift into the open ocean and connect with a random stranger. No profiles, no algorithms—just conversation.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group relative p-8 lg:p-10 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(244,63,94,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-full h-20 opacity-[0.08] pointer-events-none">
                <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0,45 C80,15 180,60 280,30 C340,20 380,50 400,40 L400,80 L0,80 Z" fill="#f43f5e"/>
                </svg>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-rose-100/80 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">🏝️</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Islands</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Find themed communities. Drop anchor at Midnight Thoughts, Music Lovers, or Code &amp; Coffee.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group relative p-8 lg:p-10 bg-white/90 backdrop-blur-sm rounded-3xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-full h-20 opacity-[0.08] pointer-events-none">
                <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M0,35 C120,65 220,15 320,50 C370,60 390,35 400,40 L400,80 L0,80 Z" fill="#6366f1"/>
                </svg>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-100/80 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">📨</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Bottles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Write a thought, seal it in a bottle, and toss it into the digital sea. See who finds it.</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href={isOnboarded ? "/sea" : "/onboarding"}>
              <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 font-bold px-10 py-3.5 text-xs uppercase tracking-[0.2em] border-none shadow-lg hover:-translate-y-0.5 transition-all">
                Start Sailing
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom wave transition back to white */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "clamp(30px, 4vw, 60px)" }}>
          <path d="M0,0 C200,50 500,10 800,35 C1000,50 1300,15 1440,30 L1440,60 L0,60 Z" fill="#FDFBF7"/>
        </svg>
      </section>

      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="bg-[#FDFBF7] text-slate-500 py-16 px-6 relative z-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <SailorLogo className="w-8 h-8 text-slate-300" />
            <span className="font-heading font-extrabold tracking-widest text-slate-400 text-lg mt-1">SAILOR</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm font-medium">© 2026 Sailor. Nobody Sails Alone</p>
            <div className="hidden md:block w-px h-6 bg-slate-200"></div>
            <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Presented by</span>
              <DotLogo width={18} height={18} className="text-slate-700" />
              <span className="font-heading font-extrabold text-base text-slate-700 tracking-tight">.dot</span>
            </div>
          </div>

          <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
            <Link href="/about" className="hover:text-slate-700 transition-colors">Privacy</Link>
            <Link href="/about" className="hover:text-slate-700 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
