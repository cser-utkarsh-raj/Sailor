"use client";

import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { motion } from 'motion/react';
import { Award, Lock, Calendar, MapPin, Users, Navigation, TreePalm, Anchor, Compass, Waves, Mail, Globe, Moon } from 'lucide-react';
import { Achievement } from '@/types';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Compass, Anchor, Waves, Mail, Globe, Navigation, TreePalm, Moon,
};

export default function JournalPage() {
  const { voyageHistory, crew, achievements } = useSailor();

  const uniqueCountries = new Set(voyageHistory?.map(v => v.metSailorCountry).filter(Boolean)).size;
  const uniqueIslands = new Set(voyageHistory?.filter(v => v.type === 'island').map(v => v.islandName).filter(Boolean)).size;

  const stats = [
    { label: 'Voyages', value: voyageHistory?.length || 0, icon: Navigation },
    { label: 'Countries', value: uniqueCountries || 0, icon: MapPin },
    { label: 'Crew Members', value: crew?.length || 0, icon: Users },
    { label: 'Islands Visited', value: uniqueIslands || 0, icon: Calendar },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-2 text-ocean-500 opacity-80">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-heading font-bold text-ocean-600 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-navy-600 uppercase tracking-wider">{stat.label}</div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <div>
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-8 flex items-center gap-2">
          <Calendar className="text-ocean-500" />
          Your Journey
        </h2>
        
        <div className="relative pl-4 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-navy-100"></div>

          <div className="space-y-8">
            {voyageHistory?.map((voyage, index) => {
              const isEven = index % 2 === 0;
              const broughtAboard = voyage.broughtAboard;

              return (
                <motion.div 
                  key={voyage.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center md:justify-center"
                >
                  {/* Left Side (Desktop) */}
                  <div className={`hidden md:block w-1/2 pr-8 text-right ${isEven ? '' : 'md:hidden'}`}>
                    {isEven && (
                      <span className="text-sm font-medium text-navy-500">
                        {new Date(voyage.date || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white shadow-sm z-10 flex items-center justify-center bg-white">
                    <div className={`w-3 h-3 rounded-full ${broughtAboard ? 'bg-seafoam-500' : 'bg-ocean-400'}`}></div>
                  </div>

                  {/* Right Side / Mobile Layout */}
                  <div className={`w-full ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-8' : 'md:pr-8 md:text-right'}`}>
                    {/* Mobile Date */}
                    <div className="md:hidden text-xs font-medium text-navy-500 mb-1">
                      {new Date(voyage.date || Date.now()).toLocaleDateString()}
                    </div>
                    
                    <Card className="p-4 hover:shadow-md transition-shadow inline-block w-full max-w-sm">
                      <div className={`flex flex-col ${!isEven && 'md:items-end'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="bg-ocean-50 p-1.5 rounded-full text-ocean-600">
                            {voyage.type === 'island' ? <TreePalm size={18} /> : <MapPin size={18} />}
                          </div>
                          <span className="font-heading font-semibold text-navy-900 text-lg">
                            {voyage.type === 'island' ? voyage.islandName : voyage.metSailorName || 'Unknown Sailor'}
                          </span>
                        </div>
                        <p className="text-sm text-navy-600 mb-3">
                          {voyage.type === 'island' ? 'Island Community' : 'Random Waters'}
                        </p>
                        {broughtAboard && (
                          <Badge variant="seafoam" className="w-max flex items-center gap-1">
                            Brought aboard <Anchor size={12} />
                          </Badge>
                        )}
                      </div>
                    </Card>
                  </div>
                  
                  {/* Left Side (Desktop alternate) */}
                  <div className={`hidden md:block w-1/2 pl-8 ${isEven ? 'md:hidden' : ''}`}>
                    {!isEven && (
                      <span className="text-sm font-medium text-navy-500">
                        {new Date(voyage.date || Date.now()).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {(!voyageHistory || voyageHistory.length === 0) && (
              <div className="text-center py-12 text-navy-500">No voyages recorded yet.</div>
            )}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="pt-8">
        <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6 flex items-center gap-2">
          <Award className="text-sunny-500" />
          Milestones
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {achievements?.map((achievement, i) => {
            const isUnlocked = achievement.unlockedAt;
            return (
              <motion.div 
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className={`p-4 h-full flex flex-col items-center text-center ${!isUnlocked ? 'bg-navy-50 opacity-60 grayscale' : 'bg-white shadow-sm hover:shadow-md'}`}>
                  <div className="mb-3 relative w-12 h-12 rounded-xl flex items-center justify-center bg-ocean-50">
                    {(() => {
                      const IconComp = (achievement as any).icon ? iconMap[(achievement as any).icon] : null;
                      return IconComp ? <IconComp size={24} className="text-ocean-500" /> : <span className="text-2xl">{achievement.emoji}</span>;
                    })()}
                    {!isUnlocked && (
                      <div className="absolute -bottom-1 -right-1 bg-navy-100 rounded-full p-1">
                        <Lock className="w-3 h-3 text-navy-600" />
                      </div>
                    )}
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${isUnlocked ? 'text-navy-900' : 'text-navy-600'}`}>
                    {achievement.name}
                  </h4>
                  <p className="text-xs text-navy-500 leading-snug">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
