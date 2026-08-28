import Link from "next/link";
import SailorLogo from "@/components/illustrations/SailorLogo";
import Button from "@/components/ui/Button";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-8 md:px-16 border-b border-slate-200/50">
        <Link href="/" className="flex items-center gap-3">
          <SailorLogo className="w-8 h-8 text-slate-800" />
          <span className="font-heading font-extrabold tracking-widest text-slate-800 text-xl">SAILOR</span>
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-slate-700">
          <Link href="/explore" className="text-sky-600 transition-colors">Explore</Link>
          <Link href="/islands" className="hover:text-sky-600 transition-colors">Islands</Link>
          <Link href="/about" className="hover:text-sky-600 transition-colors">About</Link>
        </div>
        <Link href="/onboarding">
          <Button className="rounded-full bg-slate-900 text-white hover:bg-sky-600 font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-2.5 border-none">
            Start Sailing
          </Button>
        </Link>
      </nav>

      <header className="px-6 py-16 md:py-24 md:px-16 lg:px-24 max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95] mb-6">
          Explore The Ocean
        </h1>
        <p className="font-serif text-xl md:text-2xl text-slate-600 leading-relaxed italic max-w-2xl mx-auto mb-16">
          Discover a vast network of anonymous sailors, floating communities, and hidden messages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-6">🌊</div>
            <h3 className="font-heading font-extrabold text-2xl mb-3">Open Waters</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Drift freely and match with random sailors from around the world. Every encounter is fleeting unless you choose to bring them aboard your crew.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-6">🏝️</div>
            <h3 className="font-heading font-extrabold text-2xl mb-3">Themed Islands</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Drop anchor at curated islands like "Midnight Thoughts", "Music Lovers", or "Code & Coffee". Meet people who share your current wavelength.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xl mb-6">📨</div>
            <h3 className="font-heading font-extrabold text-2xl mb-3">Message in a Bottle</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Write a thought, seal it in a bottle, and toss it into the digital sea. See who finds it, or discover messages washed up on your own shores.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mb-6">⚓</div>
            <h3 className="font-heading font-extrabold text-2xl mb-3">Your Crew</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              When you find a genuine connection, send a crew invite. Build a small, trusted circle of friends on your personal ship.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl mb-6">🗺️</div>
            <h3 className="font-heading font-extrabold text-2xl mb-3">Voyage Map</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              Look back at your journey. See the beautiful map of all the countries your past connections sailed from.
            </p>
          </div>

           {/* Card 6 */}
           <div className="bg-slate-900 p-8 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-white flex flex-col justify-center items-center text-center">
            <h3 className="font-heading font-extrabold text-3xl mb-4">Ready to go?</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-6">
              The ocean is waiting.
            </p>
            <Link href="/onboarding">
              <Button className="rounded-full bg-sky-500 text-white hover:bg-sky-400 font-bold uppercase tracking-widest px-8 py-3 border-none">
                Set Sail
              </Button>
            </Link>
          </div>
        </div>
      </header>

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
