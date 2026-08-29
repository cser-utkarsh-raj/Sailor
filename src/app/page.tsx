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
            <Link href="/login" className="hover:text-slate-800 transition-colors">Log In</Link>
          </div>

          <div className="flex items-center gap-3">
            {deferredPrompt && (
              <button
                onClick={() => {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult: any) => {
                    if (choiceResult.outcome === 'accepted') setDeferredPrompt(null);
                  });
                }}
                className="hidden md:flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-semibold tracking-[0.1em] uppercase text-[11px] transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Install
              </button>
            )}
            <Link href="/onboarding">
              <button className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors">
                Set Sail
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* ==========================================
          THE SHORE — SINGLE HERO
          ==========================================

          Layout: Carbonex-inspired asymmetric editorial composition.
          - Left side: text in white/cream negative space
          - Right side: coastal illustration with organic irregular SVG mask
          - The illustration bleeds into the whitespace via the mask edge
      */}
      <section className="relative w-full min-h-screen flex items-end lg:items-center overflow-hidden">

        {/* ---- ILLUSTRATED SCENE (Right / Background) ---- */}
        {/* The image is positioned to cover the right ~55% of the viewport
            and masked with an irregular organic SVG shape on its left edge,
            so the white page naturally bleeds into the coastline. */}
        <div className="absolute inset-0 z-0">
          {/* The SVG clipPath defines the organic irregular silhouette */}
          <svg className="absolute" width="0" height="0">
            <defs>
              <clipPath id="shore-mask" clipPathUnits="objectBoundingBox">
                {/* 
                  This path creates an organic, asymmetric mask.
                  Left edge is the irregular coastline silhouette.
                  The shape keeps roughly the right 55% of the image visible.
                  
                  Reads as: start top-center, go to top-right corner,
                  down to bottom-right, across bottom, then up the left
                  side with an organic wavy coastline edge.
                */}
                <path d="
                  M 0.35,0
                  L 1,0
                  L 1,1
                  L 0.15,1
                  C 0.18,0.92 0.22,0.85 0.28,0.78
                  C 0.34,0.70 0.30,0.62 0.32,0.55
                  C 0.34,0.48 0.40,0.42 0.38,0.35
                  C 0.36,0.28 0.30,0.22 0.32,0.15
                  C 0.34,0.08 0.33,0.04 0.35,0
                  Z
                " />
              </clipPath>
            </defs>
          </svg>

          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/coastal_ship_hero.jpg')",
              clipPath: "url(#shore-mask)",
              WebkitClipPath: "url(#shore-mask)",
            }}
          />

          {/* Subtle gradient at the bottom so content below transitions cleanly */}
          <div
            className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent z-10"
          />
        </div>

        {/* ---- HERO TEXT (Left side, in the negative space) ---- */}
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pt-32 pb-20 lg:pt-0 lg:pb-0">
          <div className="max-w-lg lg:max-w-xl">

            {/* Eyebrow */}
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 mb-5">
              Sail anonymously
            </p>

            {/* Headline */}
            <h1 className="font-heading text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-slate-800 tracking-tight leading-[0.92] uppercase mb-6">
              Go<br />Offshore.
            </h1>

            {/* Supporting text */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-sm mb-10 font-medium">
              Meet someone you&apos;ve never met.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <Link href="/onboarding">
                <Button className="rounded-full bg-coral-500 text-white hover:bg-coral-600 font-bold px-10 py-3.5 text-xs uppercase tracking-[0.2em] border-none shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Set Sail
                </Button>
              </Link>
              <Link href="/islands" className="text-slate-500 hover:text-slate-800 text-xs font-semibold uppercase tracking-[0.15em] transition-colors">
                Explore Islands →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FEATURES (Clean, minimal cards)
          ========================================== */}
      <section className="relative bg-[#FDFBF7] w-full py-24 lg:py-32 px-6 md:px-12 lg:px-20 z-20">
        <div className="max-w-6xl mx-auto">

          {/* Section header */}
          <div className="mb-16 max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-4">How it works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight uppercase leading-tight">
              Leave the shore behind.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

            {/* Feature 1 */}
            <div className="group p-8 lg:p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(2,132,199,0.06)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-lg mb-6">⛵</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Meet People</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Drift into the open ocean and connect with a random stranger. No profiles, no algorithms—just conversation.</p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 lg:p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(244,63,94,0.06)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-lg mb-6">🏝️</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Islands</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Find themed communities. Drop anchor at Midnight Thoughts, Music Lovers, or Code &amp; Coffee.</p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 lg:p-10 bg-white rounded-3xl border border-slate-100 hover:shadow-[0_16px_40px_rgba(99,102,241,0.06)] transition-all duration-500 hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-lg mb-6">📨</div>
              <h3 className="font-heading font-bold text-lg text-slate-800 mb-3 tracking-tight">Bottles</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Write a thought, seal it in a bottle, and toss it into the digital sea. See who finds it.</p>
            </div>
          </div>
        </div>
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
