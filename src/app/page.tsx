"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import WaveBackground from "@/components/illustrations/WaveBackground";
import { WavesIllustration, IslandIllustration, CrewIllustration } from "@/components/illustrations/LandingIllustrations";
import Button from "@/components/ui/Button";

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
      <section id="features" className="relative z-20 bg-[#F5F8F7] px-4 py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-coral-500">The Sailor way</p>
          <h2 className="mb-20 text-center font-heading text-4xl font-extrabold text-navy-900 md:text-5xl tracking-tight">
            Go a little deeper.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border-[2.5px] border-navy-900 bg-white p-0 shadow-[5px_5px_0px_0px_#0F2B4A] hover:shadow-[8px_8px_0px_0px_#0F2B4A] hover:-translate-y-1 hover:-translate-x-0.5 transition-all overflow-hidden">
                <div className="border-b-[2.5px] border-navy-900 overflow-hidden rounded-t-[calc(0.75rem-1px)]">
                  <WavesIllustration className="w-full h-auto" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Set Sail</h3>
                  <p className="text-navy-600 leading-relaxed">Meet someone new with a single tap. No profiles to browse, no algorithms — just the open sea and a stranger waiting to be found.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border-[2.5px] border-navy-900 bg-white p-0 shadow-[5px_5px_0px_0px_#22937B] hover:shadow-[8px_8px_0px_0px_#22937B] hover:-translate-y-1 hover:-translate-x-0.5 transition-all overflow-hidden">
                <div className="border-b-[2.5px] border-navy-900 overflow-hidden rounded-t-[calc(0.75rem-1px)]">
                  <IslandIllustration className="w-full h-auto" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Explore Islands</h3>
                  <p className="text-navy-600 leading-relaxed">Join themed communities floating in the sea. Music lovers, night owls, deep thinkers — every island has its own vibe.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border-[2.5px] border-navy-900 bg-white p-0 shadow-[5px_5px_0px_0px_#D44A30] hover:shadow-[8px_8px_0px_0px_#D44A30] hover:-translate-y-1 hover:-translate-x-0.5 transition-all overflow-hidden">
                <div className="border-b-[2.5px] border-navy-900 overflow-hidden rounded-t-[calc(0.75rem-1px)]">
                  <CrewIllustration className="w-full h-auto" />
                </div>
                <div className="p-7">
                  <h3 className="font-heading font-extrabold text-2xl text-navy-900 mb-3">Build Your Crew</h3>
                  <p className="text-navy-600 leading-relaxed">Found someone you click with? Bring them aboard. Your crew stays with you across every voyage — no more losing great connections.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-20 px-4 relative z-20 border-t-[2.5px] border-navy-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="italic text-xl md:text-2xl text-navy-800 font-medium mb-12">
            &quot;We believe the best connections happen when you&apos;re not looking for them.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-2 bg-seafoam-50 px-5 py-2.5 rounded-full border-2 border-navy-900 shadow-[3px_3px_0px_0px_#22937B] font-bold text-sm text-navy-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Privacy First
            </span>
            <span className="flex items-center gap-2 bg-ocean-50 px-5 py-2.5 rounded-full border-2 border-navy-900 shadow-[3px_3px_0px_0px_#1E5FB8] font-bold text-sm text-navy-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              Real Conversations
            </span>
            <span className="flex items-center gap-2 bg-lavender-50 px-5 py-2.5 rounded-full border-2 border-navy-900 shadow-[3px_3px_0px_0px_#6B47BF] font-bold text-sm text-navy-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              Global Community
            </span>
            <span className="flex items-center gap-2 bg-coral-50 px-5 py-2.5 rounded-full border-2 border-navy-900 shadow-[3px_3px_0px_0px_#D44A30] font-bold text-sm text-navy-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
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
