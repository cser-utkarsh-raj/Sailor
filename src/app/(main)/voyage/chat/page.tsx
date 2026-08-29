'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Send, MoreHorizontal, Flag, ShieldAlert, Anchor } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { mockSailors } from '@/lib/mock-data/sailors';
import { conversationStarters, getNextMockResponse } from '@/lib/mock-data/messages';

type Message = {
  id: string;
  text: string;
  isMine: boolean;
  timestamp: Date;
};

function ChatContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sailorId = searchParams.get('sailor');
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBringAboard, setShowBringAboard] = useState(false);
  const [replyCount, setReplyCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const sailor = mockSailors.find((s: any) => s.userId === sailorId) || mockSailors[0];
  const [starter] = useState(() => conversationStarters[Math.floor(Math.random() * conversationStarters.length)]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
    
    if (replyCount >= 2 && !showBringAboard) {
      setTimeout(() => setShowBringAboard(true), 2000);
    }
  }, [messages, replyCount, showBringAboard]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isMine: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const newReplyMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getNextMockResponse(sailor.userId, replyCount),
        isMine: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newReplyMsg]);
      setIsTyping(false);
      setReplyCount(prev => prev + 1);
    }, 1500 + Math.random() * 1000);
  };

  const handleLeave = () => {
    if (confirm("Are you sure you want to leave this voyage?")) {
      router.push('/sea');
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-gray-50 md:h-[calc(100vh-8rem)] relative">
      <header className="flex-none h-16 bg-white border-b border-ocean-100 flex items-center justify-between px-4 z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <button onClick={handleLeave} className="p-2 -ml-2 text-slate-400 hover:text-ocean-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <Avatar 
              name={sailor.sailorName}
              countryFlag={sailor.countryFlag}
              color={sailor.avatarColor}
              size="sm" 
            />
            <span className="font-heading font-semibold text-slate-800">{sailor.sailorName}</span>
          </div>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 text-slate-400 hover:text-ocean-600"
          >
            <MoreHorizontal size={24} />
          </button>
          
          <AnimatePresence>
            {showMenu && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute right-0 top-12 bg-white shadow-lg rounded-xl border border-gray-100 py-2 w-48 z-20"
              >
                <button onClick={handleLeave} className="w-full text-left px-4 py-2 hover:bg-gray-50 text-slate-500 text-sm">
                  Leave Voyage
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-slate-500 text-sm flex items-center gap-2">
                  <Flag size={14} /> Report Sailor
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-coral-600 text-sm flex items-center gap-2">
                  <ShieldAlert size={14} /> Block
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 pb-32"
      >
        <div className="bg-ocean-50 rounded-2xl p-4 text-center mx-auto max-w-sm mb-8 border border-ocean-100">
          <p className="text-sm font-semibold text-ocean-700 mb-1">🌊 The sea asks...</p>
          <p className="italic text-ocean-600 text-sm">&quot;{starter.prompt}&quot;</p>
        </div>

        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.isMine ? 'items-end' : 'items-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                msg.isMine 
                  ? 'bg-ocean-500 text-white rounded-tr-sm' 
                  : 'bg-white border border-ocean-100 text-slate-800 rounded-tl-sm shadow-sm'
              }`}
            >
              <p className="text-[15px] leading-relaxed break-words">{msg.text}</p>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 px-1">
              {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </motion.div>
        ))}

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-start"
          >
            <div className="bg-white border border-ocean-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex items-center gap-1">
              <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
              <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
              <motion.div className="w-1.5 h-1.5 bg-navy-400 rounded-full" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
            </div>
          </motion.div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 md:absolute bg-white border-t border-ocean-100 p-3 pb-2 z-10">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-end gap-2 max-w-6xl mx-auto"
        >
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 min-h-[44px]">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a message..."
              className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <button 
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className={`p-3 rounded-full flex-none transition-colors ${
              inputValue.trim() && !isTyping ? 'bg-ocean-500 text-white hover:bg-ocean-600' : 'bg-gray-100 text-gray-400'
            }`}
          >
            <Send size={20} className={inputValue.trim() && !isTyping ? 'ml-0.5' : ''} />
          </button>
        </form>
      </div>

      <AnimatePresence>
        {showBringAboard && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="absolute bottom-20 left-4 right-4 md:left-auto md:right-8 md:w-80 bg-white shadow-xl rounded-2xl border border-ocean-100 p-4 z-20 flex flex-col items-center text-center"
          >
            <div className="w-10 h-10 bg-coral-50 text-coral-500 rounded-full flex items-center justify-center mb-2">
              <Anchor size={20} />
            </div>
            <h3 className="font-heading font-semibold text-slate-800 mb-1">Enjoying the voyage?</h3>
            <p className="text-xs text-slate-400 mb-4">Don&apos;t lose touch with {sailor.sailorName}. Add them to your crew!</p>
            <div className="flex w-full gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex-1"
                onClick={() => setShowBringAboard(false)}
              >
                Later
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                className="flex-1"
                onClick={() => router.push(`/voyage/bring-aboard?sailor=${sailor.userId}`)}
              >
                Bring Aboard
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="flex flex-col h-[100dvh] bg-gray-50 md:h-[calc(100vh-8rem)]" />}>
      <ChatContent />
    </Suspense>
  );
}
