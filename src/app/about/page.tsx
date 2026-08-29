"use client";

import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import { useState, useEffect } from "react";

export default function AboutPage() {
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
          <Link href="/onboarding">
            <button className="bg-slate-900 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 rounded-full hover:bg-slate-700 transition-colors">
              Set Sail
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 py-20 md:py-28 md:px-12 lg:px-20 max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-5">The Vision</p>
        <h1 className="font-heading text-[3rem] md:text-[4.5rem] font-extrabold text-slate-800 tracking-tight leading-[0.92] uppercase mb-6">
          Nobody Sails<br />Alone.
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-lg font-medium">
          Sailor is an anonymous social experiment designed to strip away the noise of modern social media. No algorithms, no follower counts, no performative feeds. Just you, the ocean, and the people you meet along the way.
        </p>
      </header>

      {/* The Journey */}
      <section className="px-6 md:px-12 lg:px-20 pb-24">
        <div className="max-w-5xl">
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
