import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-8 md:px-16 border-b border-slate-200/50">
        <Link href="/" className="flex items-center gap-3">
          <SailorLogo className="w-8 h-8 text-slate-800" />
          <span className="font-heading font-extrabold tracking-widest text-slate-800 text-xl">SAILOR</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-700">
          <Link href="/explore" className="hover:text-sky-600 transition-colors">Explore</Link>
          <Link href="/islands" className="hover:text-sky-600 transition-colors">Islands</Link>
          <Link href="/about" className="text-sky-600 transition-colors">About</Link>
        </div>
        <Link href="/onboarding">
          <Button className="rounded-full bg-slate-900 text-white hover:bg-sky-600 font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-2.5 border-none">
            Start Sailing
          </Button>
        </Link>
      </nav>

      {/* Hero */}
      <header className="px-6 py-24 md:px-16 lg:px-24 max-w-5xl mx-auto text-center">
        <p className="font-sans font-medium tracking-[0.2em] uppercase text-sky-600 mb-6">The Vision</p>
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] mb-8">
          Nobody Sails Alone.
        </h1>
        <p className="font-serif text-xl md:text-2xl text-slate-600 leading-relaxed italic max-w-3xl mx-auto">
          Sailor is an anonymous social experiment designed to strip away the noise of modern social media. No algorithms, no follower counts, no performative feeds. Just you, the ocean, and the people you meet along the way.
        </p>
      </header>

      {/* The Journey Flow */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight uppercase mb-4">The Journey</h2>
            <p className="text-slate-500 font-medium tracking-wide">How Sailor works from shore to sea.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
             {/* Flow lines for desktop */}
             <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-slate-100 -z-10"></div>
             
             {/* Step 1 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-2xl bg-[#FDFBF7] border-2 border-slate-200 flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:border-sky-300 transition-all bg-white">🏖️</div>
               <h3 className="font-bold text-lg mb-2">1. The Shore</h3>
               <p className="text-sm text-slate-500">Pick an avatar and a boat. Leave your real identity behind.</p>
             </div>

             {/* Step 2 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-2xl bg-[#e0f2fe] border-2 border-sky-200 flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:border-sky-400 transition-all bg-white">🌊</div>
               <h3 className="font-bold text-lg mb-2">2. The Sea</h3>
               <p className="text-sm text-slate-500">Set sail into the open ocean. You are now adrift in the network.</p>
             </div>

             {/* Step 3 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:border-indigo-400 transition-all bg-white">🧭</div>
               <h3 className="font-bold text-lg mb-2">3. Discover</h3>
               <p className="text-sm text-slate-500">Encounter other live sailors randomly, or visit themed Islands.</p>
             </div>

             {/* Step 4 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:border-rose-400 transition-all bg-white">💬</div>
               <h3 className="font-bold text-lg mb-2">4. Talk</h3>
               <p className="text-sm text-slate-500">Engage in ephemeral, 1-on-1 conversations with strangers.</p>
             </div>

             {/* Step 5 */}
             <div className="flex flex-col items-center text-center group">
               <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:border-amber-400 transition-all bg-white">⚓</div>
               <h3 className="font-bold text-lg mb-2">5. Crew</h3>
               <p className="text-sm text-slate-500">Click with someone? Bring them aboard to keep in touch forever.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FDFBF7] text-slate-500 py-16 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
          <SailorLogo className="w-8 h-8 text-slate-300" />
          <p className="text-sm font-medium">© 2026 Sailor.</p>
        </div>
      </footer>
    </div>
  );
}
