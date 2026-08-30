"use client";

import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';
import { motion } from 'motion/react';
import { Shield, Award, MapPin, Users, Navigation, Compass } from 'lucide-react';

export default function ProfilePage() {
  const { currentProfile, achievements, voyageHistory, crew } = useSailor();

  const uniqueCountries = new Set(voyageHistory?.map(v => v.metSailorCountry).filter(Boolean)).size;
  const uniqueIslands = new Set(voyageHistory?.filter(v => v.type === 'island').map(v => v.islandName).filter(Boolean)).size;

  const stats = [
    { label: 'Voyages', value: voyageHistory?.length || 0, icon: Navigation },
    { label: 'Crew', value: crew?.length || 0, icon: Users },
    { label: 'Countries', value: uniqueCountries || 0, icon: MapPin },
    { label: 'Islands', value: uniqueIslands || 0, icon: Compass },
  ];

  if (!currentProfile) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-ocean-500 to-ocean-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
      >
        {/* Abstract decorative shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-coral-400 opacity-10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <Avatar 
            size="xl" 
            name={currentProfile.sailorName}
            color={currentProfile.avatarColor} 
            countryFlag={currentProfile.countryFlag} 
            className="ring-4 ring-white/20 shadow-xl"
          />
          <div className="flex-1 mt-2">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
              <h1 className="text-3xl font-heading font-bold">{currentProfile.sailorName}</h1>
              {!currentProfile.isAnonymous && (
                <div className="flex items-center gap-1 bg-white/20 text-white px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                  <Shield size={12} fill="currentColor" />
                  Verified
                </div>
              )}
            </div>
            <p className="text-white/80 flex items-center justify-center sm:justify-start gap-1.5 text-lg mb-4">
              <span>{currentProfile.countryFlag}</span> {currentProfile.country}
            </p>
            <p className="italic text-white/90 max-w-xl text-sm sm:text-base leading-relaxed">
              &quot;{currentProfile.bio || 'Sailing the digital seas in search of good conversation.'}&quot;
            </p>
            
            <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-2">
              {currentProfile.languages?.map(lang => (
                <span key={lang} className="px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-md text-xs font-medium border border-white/20">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Row - Overlapping */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-12 relative z-20 px-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
          >
            <Card className="p-4 sm:p-5 text-center shadow-lg hover:shadow-xl transition-shadow bg-white/90 backdrop-blur border-none ring-1 ring-black/5">
              <div className="text-2xl font-heading font-bold text-ocean-600 mb-0.5">{stat.value}</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Interests */}
          <section>
            <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 px-1">Interests</h2>
            <Card className="p-6">
              <div className="flex flex-wrap gap-2">
                {currentProfile.interests?.map(interest => (
                  <Badge key={interest} variant="default" className="bg-navy-50 text-slate-500 hover:bg-navy-100 transition-colors py-1.5 px-3">
                    {interest}
                  </Badge>
                ))}
                {(!currentProfile.interests || currentProfile.interests.length === 0) && (
                  <p className="text-slate-400 text-sm">No interests added yet.</p>
                )}
              </div>
            </Card>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 px-1">I enjoy...</h2>
            <Card className="p-6">
              <div className="flex flex-wrap gap-3">
                {currentProfile.conversationPreferences?.map(pref => (
                  <Badge key={pref} variant="seafoam" className="py-1.5 px-3 rounded-full">
                    {pref}
                  </Badge>
                ))}
              </div>
            </Card>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Achievements Snippet */}
          <section>
            <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 flex items-center gap-2 px-1">
              <Award className="w-5 h-5 text-sunny-500" /> Milestones
            </h2>
            <Card className="p-5">
              <div className="space-y-4">
                {achievements?.slice(0, 4).map(achievement => (
                  <div key={achievement.id} className={`flex items-center gap-3 ${!achievement.unlockedAt ? 'opacity-50 grayscale' : ''}`}>
                    <div className="text-2xl bg-navy-50 p-2 rounded-lg">{achievement.emoji}</div>
                    <div>
                      <div className="font-medium text-slate-800 text-sm">{achievement.name}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>
      </div>

      {/* Privacy Note */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center gap-2 text-sm text-slate-400 pt-8"
      >
        <Shield className="w-4 h-4" />
        <p>Your real identity is never shared with other sailors.</p>
      </motion.div>
    </div>
  );
}
