"use client";

import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Anchor } from 'lucide-react';

export default function CrewPage() {
  const { crew } = useSailor();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  if (!crew || crew.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Anchor className="text-6xl text-ocean-300 mb-6 w-20 h-20" />
          <h1 className="font-heading text-3xl font-bold text-navy-900 mb-2">Your crew is waiting</h1>
          <p className="text-navy-600 mb-8 max-w-md">Set sail to meet someone new. Every great journey begins with a single connection.</p>
          <Link href="/voyage/matching">
            <Button variant="primary" size="lg">Set Sail</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-navy-900">My Crew</h1>
        <p className="text-navy-500 mt-1">{crew.length} crew members</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {crew.map((member) => (
          <motion.div key={member.id} variants={itemVariants}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Avatar 
                      size="lg" 
                      name={member.sailorProfile.sailorName}
                      color={member.sailorProfile.avatarColor} 
                      countryFlag={member.sailorProfile.countryFlag} 
                    />
                    <div>
                      <h3 className="font-heading font-semibold text-lg text-navy-900">{member.sailorProfile.sailorName}</h3>
                      <p className="text-sm text-navy-600 flex items-center gap-1">
                        {member.sailorProfile.countryFlag} {member.sailorProfile.country}
                      </p>
                    </div>
                  </div>
                </div>

                {member.sailorProfile.bio && (
                  <p className="italic text-navy-600 text-sm mb-4 line-clamp-2 flex-grow">&quot;{member.sailorProfile.bio}&quot;</p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.sailorProfile.interests?.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="seafoam" className="text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-navy-100 flex flex-col gap-1">
                  <span className="text-sm text-navy-500">Met on {member.metOn || 'Random Waters'}</span>
                  <span className="text-xs text-navy-400">Added {new Date(member.addedAt || Date.now()).toLocaleDateString()}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
