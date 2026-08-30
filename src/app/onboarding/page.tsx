"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { useSailor } from "@/lib/store/sailor-context";
import SailorLogo from "@/components/illustrations/SailorLogo";
import WaveBackground from "@/components/illustrations/WaveBackground";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { Input } from "@/components/ui/Input";

const COUNTRY_FLAGS: Record<string, string> = {
  "Afghanistan": "🇦🇫", "Albania": "🇦🇱", "Algeria": "🇩🇿", "Argentina": "🇦🇷", "Armenia": "🇦🇲",
  "Australia": "🇦🇺", "Austria": "🇦🇹", "Azerbaijan": "🇦🇿", "Bangladesh": "🇧🇩", "Belgium": "🇧🇪",
  "Bolivia": "🇧🇴", "Brazil": "🇧🇷", "Bulgaria": "🇧🇬", "Cambodia": "🇰🇭", "Cameroon": "🇨🇲",
  "Canada": "🇨🇦", "Chile": "🇨🇱", "China": "🇨🇳", "Colombia": "🇨🇴", "Costa Rica": "🇨🇷",
  "Croatia": "🇭🇷", "Cuba": "🇨🇺", "Czech Republic": "🇨🇿", "Denmark": "🇩🇰", "Dominican Republic": "🇩🇴",
  "Ecuador": "🇪🇨", "Egypt": "🇪🇬", "El Salvador": "🇸🇻", "Ethiopia": "🇪🇹", "Finland": "🇫🇮",
  "France": "🇫🇷", "Georgia": "🇬🇪", "Germany": "🇩🇪", "Ghana": "🇬🇭", "Greece": "🇬🇷",
  "Guatemala": "🇬🇹", "Hungary": "🇭🇺", "Iceland": "🇮🇸", "India": "🇮🇳", "Indonesia": "🇮🇩",
  "Iran": "🇮🇷", "Iraq": "🇮🇶", "Ireland": "🇮🇪", "Israel": "🇮🇱", "Italy": "🇮🇹",
  "Jamaica": "🇯🇲", "Japan": "🇯🇵", "Jordan": "🇯🇴", "Kazakhstan": "🇰🇿", "Kenya": "🇰🇪",
  "Kuwait": "🇰🇼", "Latvia": "🇱🇻", "Lebanon": "🇱🇧", "Lithuania": "🇱🇹", "Malaysia": "🇲🇾",
  "Mexico": "🇲🇽", "Morocco": "🇲🇦", "Myanmar": "🇲🇲", "Nepal": "🇳🇵", "Netherlands": "🇳🇱",
  "New Zealand": "🇳🇿", "Nigeria": "🇳🇬", "Norway": "🇳🇴", "Oman": "🇴🇲", "Pakistan": "🇵🇰",
  "Panama": "🇵🇦", "Paraguay": "🇵🇾", "Peru": "🇵🇪", "Philippines": "🇵🇭", "Poland": "🇵🇱",
  "Portugal": "🇵🇹", "Qatar": "🇶🇦", "Romania": "🇷🇴", "Russia": "🇷🇺", "Saudi Arabia": "🇸🇦",
  "Serbia": "🇷🇸", "Singapore": "🇸🇬", "Slovakia": "🇸🇰", "Slovenia": "🇸🇮", "South Africa": "🇿🇦",
  "South Korea": "🇰🇷", "Spain": "🇪🇸", "Sri Lanka": "🇱🇰", "Sudan": "🇸🇩", "Sweden": "🇸🇪",
  "Switzerland": "🇨🇭", "Syria": "🇸🇾", "Taiwan": "🇹🇼", "Tanzania": "🇹🇿", "Thailand": "🇹🇭",
  "Tunisia": "🇹🇳", "Turkey": "🇹🇷", "UAE": "🇦🇪", "UK": "🇬🇧", "Ukraine": "🇺🇦",
  "Uruguay": "🇺🇾", "USA": "🇺🇸", "Uzbekistan": "🇺🇿", "Venezuela": "🇻🇪", "Vietnam": "🇻🇳",
  "Yemen": "🇾🇪", "Zimbabwe": "🇿🇼",
};

function findCountryFlag(name: string): { name: string; flag: string } | null {
  if (!name.trim()) return null;
  const lower = name.trim().toLowerCase();
  const exact = Object.entries(COUNTRY_FLAGS).find(([k]) => k.toLowerCase() === lower);
  if (exact) return { name: exact[0], flag: exact[1] };
  const partial = Object.entries(COUNTRY_FLAGS).find(([k]) => k.toLowerCase().startsWith(lower));
  if (partial) return { name: partial[0], flag: partial[1] };
  return { name: name.trim(), flag: "🏴‍☠️" };
}

function getCountrySuggestions(query: string): { name: string; flag: string }[] {
  if (!query.trim()) return [];
  const lower = query.trim().toLowerCase();
  return Object.entries(COUNTRY_FLAGS)
    .filter(([k]) => k.toLowerCase().includes(lower))
    .slice(0, 6)
    .map(([name, flag]) => ({ name, flag }));
}

const TITLES = [
  { name: "Captain", flag: "⚓" },
  { name: "Navigator", flag: "🧭" },
  { name: "Explorer", flag: "🔭" },
  { name: "Drifter", flag: "🌊" },
  { name: "Observer", flag: "👁️" },
  { name: "Voyager", flag: "⛵" },
];

const LANGUAGES = [
  "English", "Hindi", "Spanish", "French", "Japanese", "Korean",
  "Portuguese", "German", "Arabic", "Mandarin", "Russian", "Italian"
];

import { 
  Music, Book, Gamepad2, Moon, Plane, ChefHat, 
  Camera, Palette, Laptop, Trophy, Heart, Clapperboard, 
  Leaf, Cat, Lightbulb, Guitar 
} from 'lucide-react';

const INTERESTS = [
  { label: "Music", icon: <Music size={18} /> },
  { label: "Books", icon: <Book size={18} /> },
  { label: "Gaming", icon: <Gamepad2 size={18} /> },
  { label: "Night Owl", icon: <Moon size={18} /> },
  { label: "Travel", icon: <Plane size={18} /> },
  { label: "Cooking", icon: <ChefHat size={18} /> },
  { label: "Photography", icon: <Camera size={18} /> },
  { label: "Art", icon: <Palette size={18} /> },
  { label: "Tech", icon: <Laptop size={18} /> },
  { label: "Sports", icon: <Trophy size={18} /> },
  { label: "Wellness", icon: <Heart size={18} /> },
  { label: "Movies", icon: <Clapperboard size={18} /> },
  { label: "Nature", icon: <Leaf size={18} /> },
  { label: "Animals", icon: <Cat size={18} /> },
  { label: "Philosophy", icon: <Lightbulb size={18} /> },
  { label: "Instruments", icon: <Guitar size={18} /> },
];

export default function OnboardingPage() {
  const router = useRouter();
  const { setIsOnboarded, setCurrentProfile, currentUser, setCurrentUser } = useSailor();
  
  const [step, setStep] = useState(0);
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAuth, setShowAuth] = useState(false);
  
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [country, setCountry] = useState<{name: string, flag: string} | null>(null);
  const [countrySearch, setCountrySearch] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);

  const handleNext = () => setStep((s) => Math.min(s + 1, 5));
  const handleBack = () => {
    if (step === 0 && showAuth) {
      setShowAuth(false);
      return;
    }
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleComplete = () => {
    if (email) {
      setCurrentUser({
        id: currentUser?.id || `user-${Date.now()}`,
        email: email,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString(),
        moderationStatus: 'normal'
      });
    }

    setCurrentProfile({
      userId: "mock-user-id",
      sailorName: name || "Anonymous Sailor",
      isAnonymous,
      country: country?.name || "Unknown",
      countryFlag: country?.flag || "🏴‍☠️",
      gender: gender || "Not specified",
      title: "Drifter",
      titleFlag: "🌊",
      languages,
      interests,
      createdAt: new Date().toISOString(),
      bio: "Sailing the digital seas.",
      conversationPreferences: ['deep'],
      avatarColor: 'ocean-500'
    });
    setIsOnboarded(true);
    router.push("/sea");
  };

  const toggleLanguage = (lang: string) => {
    setLanguages((prev) => 
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) => {
      if (prev.includes(interest)) return prev.filter((i) => i !== interest);
      if (prev.length >= 6) return prev;
      return [...prev, interest];
    });
  };

  const stepVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] overflow-hidden flex flex-col">
      {/* Progress Bar */}
      {step > 0 && (
        <div className="absolute top-8 left-0 right-0 z-50 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full transition-colors ${
                i <= step ? "bg-slate-800" : "bg-slate-200"
              }`} 
            />
          ))}
        </div>
      )}

      {/* Back Button */}
      {(step > 0 || showAuth) && step < 5 && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBack}
          className="absolute top-6 left-6 z-50 text-slate-500 hover:text-slate-800"
        >
          <ChevronLeft className="w-5 h-5 mr-1" /> Back
        </Button>
      )}

      <div className="flex-1 flex flex-col justify-center items-center px-6 relative z-10 w-full max-w-lg mx-auto">
        <AnimatePresence mode="wait">
          {step === 0 && !showAuth && (
            <motion.div 
              key="step0-choice"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center w-full flex flex-col items-center max-w-sm"
            >
              <SailorLogo className="w-16 h-16 text-slate-800 mb-6" />
              <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-slate-900 mb-4 tracking-tight">
                Welcome aboard.
              </h1>
              <p className="text-slate-500 text-sm mb-10 font-medium">
                Choose how you want to navigate the sea.
              </p>
              
              <div className="flex flex-col gap-4 w-full">
                <button 
                  onClick={() => setShowAuth(true)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-[2rem] py-4 px-6 flex flex-col items-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1"
                >
                  <span className="font-bold text-[11px] tracking-[0.2em] uppercase mb-1">Create Verified Account</span>
                  <span className="text-xs text-slate-400 font-medium normal-case tracking-normal">Save progress, friends, and history</span>
                </button>
                
                <button 
                  onClick={() => {
                    setIsAnonymous(true);
                    handleNext();
                  }}
                  className="w-full bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-[2rem] py-4 px-6 flex flex-col items-center shadow-sm transition-all hover:-translate-y-1"
                >
                  <span className="font-bold text-[11px] tracking-[0.2em] uppercase mb-1">Surf Anonymously</span>
                  <span className="text-xs text-slate-500 font-medium normal-case tracking-normal">Data stays on this browser only</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 0 && showAuth && (
            <motion.div 
              key="step0-auth"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-center w-full flex flex-col items-center max-w-sm"
            >
              <h2 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                Verified Account
              </h2>
              <p className="text-slate-500 text-sm mb-8">
                Your email is never shared with anyone you meet.
              </p>
              
              <div className="flex flex-col gap-4 w-full mb-8">
                <input 
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email address" 
                  className="w-full text-center text-sm py-5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-slate-400 transition-colors"
                />
                <input 
                  type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Password" 
                  className="w-full text-center text-sm py-5 rounded-2xl bg-white border border-slate-200 outline-none focus:border-slate-400 transition-colors"
                />
              </div>

              <button 
                className="w-full rounded-[2rem] bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 text-[11px] uppercase tracking-[0.2em] shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (email && password) {
                    setIsAnonymous(false);
                    handleNext();
                  }
                }}
                disabled={!email || !password}
              >
                Sign In & Continue
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div 
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center text-center max-w-sm"
            >
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 mb-8 tracking-tight">
                Choose your Sailor name
              </h2>
              <Input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="e.g. Captain Luna" 
                className="w-full text-center text-lg py-6 mb-2 rounded-2xl bg-white border border-slate-200 outline-none focus:border-slate-400 transition-colors"
              />
              <p className="text-slate-500 font-medium text-sm mb-10">Your real name is never shared.</p>
              
              <Button 
                className="w-full rounded-[2rem] bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 text-[11px] uppercase tracking-[0.2em] shadow-md hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={!name.trim()}
              >
                Continue
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center max-w-md"
            >
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-slate-900 mb-8 tracking-tight text-center">
                About You
              </h2>
              
              <div className="w-full space-y-6 mb-8">
                {/* Country */}
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Country</label>
                  <Input 
                    placeholder="Type your country..." 
                    value={countrySearch}
                    onChange={(e) => {
                      const val = e.target.value;
                      setCountrySearch(val);
                      const found = findCountryFlag(val);
                      if (found && found.flag !== "🏴‍☠️") {
                        setCountry(found);
                      } else {
                        setCountry(null);
                      }
                    }}
                    className="w-full bg-white border-slate-200"
                  />
                  {countrySearch.trim() && !country && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-lg overflow-hidden z-20">
                      {getCountrySuggestions(countrySearch).map((c) => (
                        <button
                          key={c.name}
                          onClick={() => {
                            setCountry(c);
                            setCountrySearch(c.name);
                          }}
                          className="w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-slate-50 transition-colors border-b border-slate-50 last:border-b-0"
                        >
                          <span className="text-2xl">{c.flag}</span>
                          <span className="font-medium text-slate-800">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                  {country && (
                    <div className="mt-3 flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-2xl">{country.flag}</span>
                      <span className="font-bold text-slate-800">{country.name}</span>
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Gender</label>
                  <select 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-white border border-slate-200 outline-none focus:border-slate-400 transition-colors"
                  >
                    <option value="">Select your gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>
              
              <Button 
                className="w-full rounded-[2rem] bg-slate-900 text-white hover:bg-slate-800 font-bold py-4 text-[11px] uppercase tracking-[0.2em] shadow-md hover:-translate-y-0.5 transition-all mb-4"
                onClick={handleNext}
                disabled={!country && !gender}
              >
                Continue
              </Button>

              <button 
                className="text-slate-500 font-semibold uppercase tracking-widest text-[10px] hover:text-slate-800 transition-colors" 
                onClick={handleNext}
              >
                Skip this step
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 mb-8 text-center">
                What languages do you speak?
              </h2>
              
              <div className="flex flex-wrap justify-center gap-3 w-full mb-10">
                {LANGUAGES.map((lang) => {
                  const isSelected = languages.includes(lang);
                  return (
                    <button key={lang} onClick={() => toggleLanguage(lang)}>
                      <Badge 
                        variant={isSelected ? 'ocean' : 'default'}
                        className={`text-sm py-2 px-4 cursor-pointer transition-all ${
                          isSelected ? 'scale-105' : 'hover:bg-slate-200'
                        }`}
                      >
                        {lang}
                      </Badge>
                    </button>
                  );
                })}
              </div>
              
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleNext}
                disabled={languages.length === 0}
              >
                Continue
              </Button>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center"
            >
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-navy-900 mb-2 text-center">
                What are you into?
              </h2>
              <p className="text-navy-500 mb-8 text-center">Pick up to 6 interests</p>
              
              <div className="flex flex-wrap justify-center gap-3 w-full mb-10">
                {INTERESTS.map((interest) => {
                  const isSelected = interests.includes(interest.label);
                  return (
                    <button key={interest.label} onClick={() => toggleInterest(interest.label)}>
                      <Badge 
                        className={`text-sm py-2 px-4 cursor-pointer transition-all flex items-center gap-2 ${
                          isSelected 
                            ? 'bg-coral-100 text-coral-700 border-coral-300 scale-105 shadow-sm' 
                            : 'hover:bg-slate-200 bg-white border border-slate-200 text-navy-700'
                        }`}
                      >
                        <span>{interest.icon}</span>
                        {interest.label}
                      </Badge>
                    </button>
                  );
                })}
              </div>
              
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleNext}
                disabled={interests.length === 0}
              >
                Continue
              </Button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div 
              key="step5"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full flex flex-col items-center text-center"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6"
              >
                <SailorLogo className="w-[100px] h-[100px] text-ocean-600" />
              </motion.div>
              
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-navy-900 mb-8">
                You're ready to sail!
              </h2>
              
              <div className="bg-ocean-50 border border-ocean-100 rounded-2xl p-6 w-full mb-10 text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country?.flag}</span>
                  <div>
                    <h3 className="font-bold text-navy-900 text-xl">{name || 'Anonymous Sailor'}</h3>
                    <p className="text-navy-600 text-sm">{country?.name}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-navy-500 font-semibold uppercase tracking-wider mb-2">Speaks</p>
                  <div className="flex flex-wrap gap-2">
                    {languages.map(l => <span key={l} className="text-sm text-navy-700 bg-white px-2 py-1 rounded shadow-sm">{l}</span>)}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-navy-500 font-semibold uppercase tracking-wider mb-2">Into</p>
                  <div className="flex flex-wrap gap-2">
                    {interests.map(i => <span key={i} className="text-sm text-navy-700 bg-white px-2 py-1 rounded shadow-sm">{i}</span>)}
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-coral-500 hover:bg-coral-600 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all" 
                onClick={handleComplete}
              >
                Set Sail
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 right-0 z-0 opacity-50 pointer-events-none">
        <WaveBackground variant="subtle" />
      </div>
    </div>
  );
}
