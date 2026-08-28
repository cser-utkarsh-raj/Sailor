"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import DotLogo from "@/components/illustrations/DotLogo";
import Button from "@/components/ui/Button";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#F7F9FC] overflow-x-hidden font-sans selection:bg-sky-200">
      
      {/* 
        60% Blue / 40% White Split Layout 
        The right side is a massive, HD coastal summer image (60% width on desktop).
        The left side is the soft white UI (40% width).
      */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-[100vh] z-0">
        {/* High-quality HD image of a boat sailing on a beautiful blue ocean */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat shadow-2xl lg:rounded-bl-[120px]"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        {/* Soft coastal gradient overlay to ensure the blue pops but isn't blinding */}
        <div className="absolute inset-0 bg-sky-900/10 lg:rounded-bl-[120px]" />
      </div>

      {/* Taskbar / Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 w-full">
        {/* Left: Sailor Logo */}
        <Link href="/" className="flex items-center gap-3 text-slate-900 hover:opacity-80 transition-opacity z-20">
          <SailorLogo className="w-8 h-8 text-sky-600 drop-shadow-sm" />
          <span className="font-heading font-extrabold text-xl tracking-[0.2em] text-slate-800">SAILOR</span>
        </Link>
        
        {/* Right: 2 Menus (Log in, Sign up) */}
        <div className="flex items-center gap-4 z-20">
          <Button variant="ghost" className="text-white lg:text-slate-800 hover:text-sky-700 hover:bg-sky-100/50 font-bold tracking-wide rounded-xl mix-blend-difference lg:mix-blend-normal">
            Log in
          </Button>
          <Link href="/onboarding">
            <Button variant="primary" className="rounded-xl bg-sky-600 text-white px-6 py-2.5 text-sm font-bold shadow-[0_8px_20px_rgba(2,132,199,0.3)] hover:bg-sky-700 hover:-translate-y-0.5 transition-all border-none">
              Sign up
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center min-h-screen px-6 md:px-12 w-full lg:w-[45%] z-10 pt-20 pb-20">
        
        {/* The "Trail" and Ship Graphic bridging the white screen to the ocean */}
        <div className="absolute top-[45%] left-[20%] w-[150%] h-[300px] pointer-events-none opacity-80 z-[-1] hidden lg:block">
          {/* SVG Trail leaving a mark on the white screen */}
          <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              d="M 50 150 C 200 150, 300 250, 600 50" 
              fill="none" 
              stroke="#bae6fd" 
              strokeWidth="4" 
              strokeDasharray="12 12"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
              d="M 40 165 C 190 165, 310 265, 610 65" 
              fill="none" 
              stroke="#e0f2fe" 
              strokeWidth="2" 
            />
          </svg>
          
          {/* Top-down Ship SVG sailing towards the ocean */}
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50 }}
            animate={{ opacity: 1, x: 550, y: -100 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-[130px] left-[0px]"
            style={{ rotate: "-25deg" }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <path d="M12 2L10 16H14L12 2Z" fill="#f8fafc" stroke="#0ea5e9" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M4 18C4 18 6 17.5 8 17.5C10 17.5 11 19 12 19C13 19 14 17.5 16 17.5C18 17.5 20 18 20 18L19.5 21C19.5 21 17.5 21 16 21C14.5 21 13.5 22 12 22C10.5 22 9.5 21 8 21C6.5 21 4.5 21 4.5 21L4 18Z" fill="#0ea5e9"/>
            </svg>
          </motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-sky-500">
            A New Horizon
          </p>
          <h1 className="font-heading text-6xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tight text-slate-800 leading-[1.05] drop-shadow-sm">
            Go Offshore. <br /> Meet Random People.
          </h1>
          <p className="mt-6 max-w-md text-lg md:text-xl font-medium text-slate-500 leading-relaxed">
            The ocean is vast. Sail into the unknown and onboard new connections anonymously.
          </p>
          
          <div className="mt-10 flex items-center gap-4">
            <Link href="/onboarding">
              <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-sky-600 hover:scale-105 hover:shadow-[0_10px_20px_rgba(2,132,199,0.2)] transition-all duration-300 font-bold px-10 py-4 text-lg">
                Set Sail
              </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Decorative elements for the white section */}
        <div className="absolute bottom-12 left-12 flex items-center gap-4 text-sm font-semibold text-slate-400">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            184 sailors at sea
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-20 bg-white px-6 py-32 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.3em] text-sky-500">The Sailor way</p>
          <h2 className="mb-24 text-center font-heading text-4xl font-extrabold text-slate-800 md:text-5xl tracking-tight">
            Go a little deeper.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-slate-100 bg-[#F7F9FC] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative mb-8 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 group-hover:border-sky-200 group-hover:shadow-[0_0_30px_rgba(2,132,199,0.1)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 6c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 12c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                    <path d="M2 18c.6 0 1.2-.2 1.8-.6.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6s1.2-.2 1.8-.6c.6-.4 1.2-.6 1.8-.6s1.2.2 1.8.6c.6.4 1.2.6 1.8.6" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-slate-800 mb-4 tracking-wide">Set Sail</h3>
                <p className="relative text-slate-500 font-medium leading-relaxed">Meet someone new with a single tap. No profiles to browse, no endless swiping.</p>
              </div>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-slate-100 bg-[#F7F9FC] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative mb-8 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 group-hover:border-sky-200 group-hover:shadow-[0_0_30px_rgba(2,132,199,0.1)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-7l-2-2" />
                    <path d="M12 15l2-2" />
                    <path d="M17 8c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" />
                    <path d="M4 22h16" />
                    <path d="M7 22v-4" />
                    <path d="M17 22v-4" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-slate-800 mb-4 tracking-wide">Explore Islands</h3>
                <p className="relative text-slate-500 font-medium leading-relaxed">Join themed communities floating in the sea. From music lovers to night owls.</p>
              </div>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="h-full group"
            >
              <div className="relative h-full rounded-3xl border border-slate-100 bg-[#F7F9FC] p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="relative mb-8 p-6 rounded-2xl bg-white shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 group-hover:border-sky-200 group-hover:shadow-[0_0_30px_rgba(2,132,199,0.1)]">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="3" />
                    <line x1="12" y1="22" x2="12" y2="8" />
                    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
                  </svg>
                </div>
                <h3 className="relative font-heading font-bold text-2xl text-slate-800 mb-4 tracking-wide">Build Your Crew</h3>
                <p className="relative text-slate-500 font-medium leading-relaxed">Found someone you click with? Bring them aboard your ship to sail together.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F7F9FC] text-slate-500 py-12 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <SailorLogo className="w-6 h-6 text-slate-400" />
            <span className="font-heading font-bold tracking-wider text-slate-600">SAILOR</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-sm font-medium">© 2026 Sailor. Nobody sails alone.</p>
            <div className="hidden md:block w-px h-4 bg-slate-300"></div>
            {/* .dot Ecosystem Footer */}
            <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Presented by</span>
              <DotLogo width={16} height={16} className="text-slate-800" />
              <span className="font-heading font-extrabold text-sm text-slate-800 tracking-tight">.dot</span>
            </div>
          </div>

          <div className="flex gap-4 text-sm font-semibold">
            <a href="#" className="hover:text-sky-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Guidelines</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
