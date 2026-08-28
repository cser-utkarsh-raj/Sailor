"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import WaveBackground from "@/components/illustrations/WaveBackground";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#070b19] overflow-x-hidden selection:bg-teal-400/30">
      
      {/* Deep Ocean Dreamy Pastel Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-500/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-pink-500/15 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-blue-600/20 blur-[150px] mix-blend-screen" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-4 left-4 right-4 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl">
        <Link href="/" className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
          <SailorLogo className="w-8 h-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
          <span className="font-heading font-extrabold text-xl tracking-[0.25em] text-white">SAILOR</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#features" className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white/70 transition-all hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Explore</a>
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 hidden sm:inline-flex rounded-xl font-medium tracking-wide">
            Log In
          </Button>
          <Button variant="primary" className="rounded-xl bg-gradient-to-r from-coral-400 to-pink-500 px-6 py-2.5 text-sm font-bold shadow-[0_0_20px_rgba(242,144,138,0.4)] hover:shadow-[0_0_30px_rgba(242,144,138,0.6)] border border-white/20 transition-all">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[750px] h-screen flex-col items-center justify-center overflow-hidden px-4 text-center z-10">
        <div className="absolute inset-0 z-0 opacity-40">
          <WaveBackground variant="hero" />
        </div>
        
        <div className="z-10 flex flex-col items-center max-w-4xl mx-auto mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 40, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl font-heading text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] md:text-8xl lg:text-[clamp(5rem,10vw,9rem)] leading-[0.9]"
          >
            SAILOR
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg font-light leading-relaxed text-white/80 md:text-2xl tracking-wide"
          >
            The ocean is vast. <br className="hidden md:block" />
            <span className="font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Someone is waiting to meet you.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Link href="/onboarding">
              <Button size="lg" className="min-w-[200px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:scale-105 transition-all duration-300 font-bold text-lg tracking-wide group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">Set Sail <span className="group-hover:translate-x-1 transition-transform">→</span></span>
              </Button>
            </Link>
            <Button size="lg" className="min-w-[200px] border border-white/5 bg-transparent text-white/70 font-semibold hover:bg-white/5 hover:text-white shadow-none rounded-2xl transition-all duration-300" onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore the Sea
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-teal-200/90 flex items-center gap-3 shadow-[0_0_20px_rgba(45,212,191,0.15)]"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,1)]"></span>
            </div>
            184 sailors are currently at sea
          </motion.div>
        </div>
      </section>      {/* Features Section */}
      <section id="features" className="relative z-20 bg-[#070b19] px-4 py-32 overflow-hidden border-t border-white/5">
        {/* Pastel Floating Orbs in Dark Env */}
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-teal-400 drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">The Sailor way</p>
          <h2 className="mb-24 text-center font-heading text-4xl font-extrabold text-white md:text-5xl tracking-tight">
            Go a little deeper.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative mb-8 p-6 rounded-2xl bg-white/5 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    <path d="M2 6c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 12c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 18c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-white mb-4 tracking-wide">Set Sail</h3>
                <p className="relative text-white/60 font-light leading-relaxed">Meet someone new with a single tap. No profiles to browse, no endless swiping.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative mb-8 p-6 rounded-2xl bg-white/5 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:border-teal-400/30 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(45,212,191,0.5)]">
                    <path d="M12 22v-7l-2-2" />
                    <path d="M12 15l2-2" />
                    <path d="M17 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                    <path d="M4 22h16" />
                    <path d="M7 22v-4" />
                    <path d="M17 22v-4" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-white mb-4 tracking-wide">Explore Islands</h3>
                <p className="relative text-white/60 font-light leading-relaxed">Join themed communities floating in the sea. From music lovers to night owls.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative mb-8 p-6 rounded-2xl bg-white/5 shadow-inner border border-white/10 group-hover:scale-110 transition-transform duration-500 group-hover:border-pink-400/30 group-hover:shadow-[0_0_30px_rgba(244,114,182,0.2)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-white mb-4 tracking-wide">Build Your Crew</h3>
                <p className="relative text-white/60 font-light leading-relaxed">Found someone you click with? Bring them aboard your ship to sail together.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>n>

      {/* Philosophy Section */}
      <section className="bg-ocean-50 py-20 px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="italic text-xl md:text-2xl text-navy-800 font-medium mb-12">
            &quot;We believe the best connections happen when you&apos;re not looking for them.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-navy-700 font-semibold">
            <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-ocean-100 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Privacy First
            </span>
            <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-ocean-100 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Real Conversations
            </span>
            <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-ocean-100 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Global Community
            </span>
            <span className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-ocean-100 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
              Safe Space
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white/70 py-12 px-6 relative z-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <SailorLogo className="w-6 h-6 text-white/50" />
            <span className="font-heading font-bold tracking-wider text-white">SAILOR</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm">© 2026 Sailor. Nobody sails alone.</p>
            <div className="hidden md:block w-px h-4 bg-white/20"></div>
            {/* .dot Ecosystem Footer */}
            <div className="flex items-center gap-1.5 opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">Presented by</span>
              <DotLogo width={16} height={16} />
              <span className="font-heading font-extrabold text-sm text-white tracking-tight">.dot</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
