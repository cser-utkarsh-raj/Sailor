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
    <div className="relative min-h-screen bg-[#58c5d0] overflow-x-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <SailorLogo className="w-8 h-8 text-white" />
          <span className="font-heading font-extrabold text-lg tracking-[0.2em] text-white">SAILOR</span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <a href="#features" className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:text-white">Explore</a>
          <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 hidden sm:inline-flex">
            Log In
          </Button>
          <Button variant="primary" className="rounded-md bg-coral-400 px-5 py-2.5 text-sm shadow-none hover:bg-coral-500">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[720px] h-screen flex-col items-center justify-start overflow-hidden px-4 pt-[18vh] text-center">
        <div className="absolute inset-0 z-0">
          <WaveBackground variant="hero" />
        </div>
        
        <div className="z-10 flex flex-col items-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="max-w-4xl font-heading text-5xl font-extrabold tracking-[-0.04em] text-white drop-shadow-lg md:text-7xl lg:text-[clamp(4.5rem,9vw,8rem)]"
          >
            SAILOR
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base font-medium text-white/90 drop-shadow-md md:text-xl"
          >
            Find a new perspective, a new story, or your next great connection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link href="/onboarding">
              <Button size="lg" className="min-w-[180px] rounded-md border-none bg-coral-400 text-white shadow-none hover:bg-coral-500">
                Set Sail
              </Button>
            </Link>
            <Button size="lg" className="min-w-[180px] border-none bg-white text-navy-900 font-bold hover:bg-white/90 shadow-none" onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Explore the Sea
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-sm font-medium text-white/80 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M2 12c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6"/></svg>
            184 sailors are currently at sea
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-20 bg-gradient-to-b from-[#e0f7fa] via-[#fce4ec] to-white px-4 py-32 overflow-hidden">
        {/* Pastel Floating Orbs */}
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-teal-200/50 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-pink-200/50 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-100/60 rounded-full blur-[100px] mix-blend-multiply pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-coral-500">The Sailor way</p>
          <h2 className="mb-20 text-center font-heading text-4xl font-extrabold text-navy-900 md:text-5xl">
            Go a little deeper.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/60 transition-all">
                <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-200 shadow-sm border border-white/50">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 12c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 18c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                  </svg>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Set Sail</h3>
                <p className="text-navy-700 font-medium leading-relaxed">Meet someone new with a single tap. No profiles to browse, no endless swiping.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/60 transition-all">
                <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-sm border border-white/50">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-7l-2-2" />
                    <path d="M12 15l2-2" />
                    <path d="M17 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                    <path d="M4 22h16" />
                    <path d="M7 22v-4" />
                    <path d="M17 22v-4" />
                  </svg>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Explore Islands</h3>
                <p className="text-navy-700 font-medium leading-relaxed">Join themed communities floating in the sea. From music lovers to night owls.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="h-full"
            >
              <div className="h-full rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-2 hover:bg-white/60 transition-all">
                <div className="mb-8 p-5 rounded-2xl bg-gradient-to-br from-orange-100 to-rose-200 shadow-sm border border-white/50">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Build Your Crew</h3>
                <p className="text-navy-700 font-medium leading-relaxed">Found someone you click with? Bring them aboard your ship to sail together.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
