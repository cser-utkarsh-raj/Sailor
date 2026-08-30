"use client";

import { useState } from 'react';
import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Anchor, MessageSquare, UserMinus, Send, CheckCircle2, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export default function CrewPage() {
  const { crew, setCrew } = useSailor();
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [requests, setRequests] = useState([
    { id: 'req1', name: 'Drifter Sam', flag: '🇬🇧', msg: 'Enjoyed our chat about philosophy!' }
  ]);

  const removeCrew = (id: string) => {
    if (setCrew && crew) {
      setCrew(crew.filter(c => c.id !== id));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  if (!crew || crew.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <Anchor className="text-6xl text-slate-300 mb-6 w-20 h-20" />
        <h1 className="font-heading text-3xl font-bold text-slate-800 mb-2">Your crew is waiting</h1>
        <p className="text-slate-500 mb-8 max-w-md">Set sail to meet someone new. Every great journey begins with a single connection.</p>
        <Link href="/voyage">
          <Button className="rounded-full bg-slate-900 text-white font-bold px-8 py-3 uppercase text-xs tracking-widest hover:-translate-y-0.5 transition-transform">Set Sail</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Broadcast Status Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 opacity-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10">
          <h2 className="font-heading text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Send size={20} className="text-slate-400" /> Broadcast to Crew
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              value={broadcastMessage} 
              onChange={(e) => setBroadcastMessage(e.target.value)} 
              placeholder="What's on your mind? (Visible to all crew)" 
              className="flex-1 bg-slate-50 border-slate-200"
            />
            <Button 
              onClick={() => { setStatus(broadcastMessage); setBroadcastMessage(''); }} 
              disabled={!broadcastMessage.trim()}
              className="rounded-full bg-slate-900 text-white font-bold px-6 py-2 uppercase tracking-widest text-[10px]"
            >
              Post Status
            </Button>
          </div>
          {status && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-sm font-semibold text-slate-700 italic">" {status} "</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-2">Current Status</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Crew Requests Section */}
      <AnimatePresence>
        {requests.length > 0 && (
          <motion.section initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-slate-800">Crew Requests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requests.map(req => (
                <div key={req.id} className="bg-white rounded-2xl p-4 flex items-center justify-between border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-lg">{req.flag}</div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">{req.name}</p>
                      <p className="text-xs text-slate-500 line-clamp-1">{req.msg}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setRequests([])} className="text-slate-400 hover:text-rose-500 transition-colors"><XCircle size={24} /></button>
                    <button onClick={() => setRequests([])} className="text-slate-400 hover:text-emerald-500 transition-colors"><CheckCircle2 size={24} /></button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section>
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="font-heading text-3xl font-bold text-slate-800">My Crew</h1>
            <p className="text-slate-400 mt-1">{crew.length} sailors</p>
          </div>
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crew.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="h-full bg-white border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6 flex flex-col h-full relative">
                  
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 flex items-center justify-center transition-colors">
                      <MessageSquare size={14} />
                    </button>
                    <button onClick={() => removeCrew(member.id)} className="w-8 h-8 rounded-full bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 flex items-center justify-center transition-colors">
                      <UserMinus size={14} />
                    </button>
                  </div>

                  <div className="flex items-start justify-between mb-4 mt-2">
                    <div className="flex items-center gap-4">
                      <Avatar size="lg" name={member.sailorProfile.sailorName} color={member.sailorProfile.avatarColor} countryFlag={member.sailorProfile.countryFlag} />
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-slate-800">{member.sailorProfile.sailorName}</h3>
                        <p className="text-sm text-slate-500 flex items-center gap-1">
                          {member.sailorProfile.countryFlag} {member.sailorProfile.country}
                        </p>
                      </div>
                    </div>
                  </div>

                  {member.sailorProfile.bio && (
                    <p className="italic text-slate-500 text-sm mb-4 line-clamp-2 flex-grow">"{member.sailorProfile.bio}"</p>
                  )}

                  <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-1">
                    <span className="text-sm text-slate-400">Met on {member.metOn || 'Random Waters'}</span>
                    <span className="text-xs text-slate-400">Added {new Date(member.addedAt || Date.now()).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
