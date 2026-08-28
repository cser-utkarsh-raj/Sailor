"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden font-sans">
      
      {/* 
        Top Image Section with Curved Mask
        Matches the "Look Deep Into Nature" double screen UI.
      */}
      <div className="relative w-full h-[65vh] lg:h-[75vh] bg-sky-900">
        
        {/* The Boat/Shore Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518182170546-076616fd6251?q=80&w=2000')" }}
        />
        {/* A subtle blue overlay to ensure text/nav visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-transparent to-transparent" />

        {/* Header / Navigation */}
        <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 text-white">
          <div className="flex gap-8 items-center text-xs md:text-sm font-bold uppercase tracking-widest pt-8">
            <Link href="/" className="hover:text-sky-200 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-sky-200 transition-colors hidden sm:block">Blog</Link>
            <Link href="/faq" className="hover:text-sky-200 transition-colors hidden sm:block">FAQ</Link>
          </div>
          
          <div className="flex items-center gap-2 bg-white rounded-bl-3xl px-6 py-4 shadow-lg absolute top-0 right-0">
            <SailorLogo className="w-6 h-6 text-indigo-500" />
            <span className="font-heading font-extrabold text-lg tracking-widest text-indigo-900 ml-2">SAILOR</span>
          </div>
        </nav>

        {/* Top Section Text */}
        <div className="absolute top-[25%] lg:top-[30%] w-full text-center z-10 px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-widest drop-shadow-lg uppercase">
            Go Offshore
          </h1>
          <p className="font-serif text-3xl md:text-5xl text-white mt-2 drop-shadow-md italic opacity-90">
            meet random people
          </p>
        </div>

        {/* The Dynamic Trail leaving the boat and going into the white screen */}
        <svg className="absolute top-[40%] left-0 w-full h-[60vh] z-20 pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="none">
          {/* Main Trail */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            d="M720,100 C900,200 1100,300 800,450 C600,550 500,500 400,600"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            strokeDasharray="15 15"
            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
          {/* Secondary Wake Effect */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
            d="M700,90 C880,190 1080,290 780,440 C580,540 480,490 380,590"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
        </svg>

        {/* The Sweeping White Curve (The Double Screen UI Mask) */}
        <div className="absolute bottom-[-1px] left-0 w-full leading-none z-10">
          <svg viewBox="0 0 1440 320" className="w-full h-[25vh] md:h-[35vh]" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,0 C400,400 1100,350 1440,100 L1440,320 L0,320 Z"></path>
          </svg>
        </div>
      </div>

      {/* 
        Bottom White Section 
      */}
      <div className="relative bg-white w-full flex flex-col items-center justify-start pt-8 pb-12 px-6 z-20 -mt-8">
        
        <p className="max-w-2xl text-center text-slate-500 font-medium leading-relaxed mb-8 text-sm md:text-base">
          The ocean is vast and full of mysteries. Onboard new connections anonymously. No profiles, no algorithms—just you, the sea, and the people you meet along the way.
        </p>

        <Link href="/onboarding">
          <Button className="rounded-full bg-indigo-500 text-white hover:bg-indigo-600 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(99,102,241,0.3)] transition-all duration-300 font-bold px-12 py-3 text-sm uppercase tracking-widest border-none">
            Set Sail
          </Button>
        </Link>

        {/* Social Icons (Matching reference layout) */}
        <div className="flex gap-4 mt-12 mb-6">
          <div className="w-8 h-8 rounded bg-[#7E88F4] flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </div>
          <div className="w-8 h-8 rounded bg-[#7E88F4] flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </div>
          <div className="w-8 h-8 rounded bg-[#7E88F4] flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </div>
        </div>

        <p className="text-slate-400 text-sm font-medium flex items-center gap-1 mt-2">
          designed by <span className="font-bold text-slate-700">Sailor</span>
        </p>

      </div>
    </div>
  );
}
