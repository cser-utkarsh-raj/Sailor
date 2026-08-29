"use client";

import { useState } from 'react';
import { useSailor } from '@/lib/store/sailor-context';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import { Textarea } from '@/components/ui/Input';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Reply, XCircle, Send, Wine } from 'lucide-react';

export default function BottlesPage() {
  const { bottles, setBottles } = useSailor();
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [composeText, setComposeText] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const handleSendBottle = () => {
    if (composeText.trim()) {
      setIsComposeOpen(false);
      setComposeText('');
      // In a real app, API call here
    }
  };

  const handleSendReply = (bottleId: string) => {
    if (replyText.trim()) {
      setBottles(bottles.map(b => b.id === bottleId ? { ...b, status: 'replied' } : b));
      setReplyingTo(null);
      setReplyText('');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread': return <Badge variant="coral">Unread</Badge>;
      case 'read': return <Badge variant="ocean">Read</Badge>;
      case 'replied': return <Badge variant="seafoam">Replied</Badge>;
      default: return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 relative min-h-[80vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-slate-800 flex items-center gap-2">
            Message in a Bottle 📨
          </h1>
          <p className="text-slate-500 mt-1">Mysterious messages from across the sea.</p>
        </div>
        <Button 
          variant="primary" 
          className="shadow-md hidden sm:flex"
          onClick={() => setIsComposeOpen(true)}
        >
          <Send className="w-4 h-4 mr-2" /> Throw a Bottle
        </Button>
      </div>

      {!bottles || bottles.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl mb-6"
          >
            🍾
          </motion.div>
          <h3 className="text-xl font-heading font-semibold text-slate-800">The sea is quiet... for now.</h3>
          <p className="text-slate-400 mt-2">Send a message to a random sailor somewhere in the world.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <AnimatePresence>
            {bottles.map((bottle) => (
              <motion.div
                key={bottle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={bottle.status === 'ignored' ? 'opacity-50 grayscale' : ''}
              >
                <Card className={`p-6 transition-colors ${bottle.status === 'unread' ? 'bg-ocean-50/30 border-ocean-200' : ''}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm border border-navy-100 flex items-center justify-center">
                        <Wine className="text-ocean-500 w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-heading font-semibold text-slate-800">Unknown Sailor</div>
                        <div className="text-xs text-slate-400">Arrived {new Date(bottle.sentAt || Date.now()).toLocaleDateString()}</div>
                      </div>
                    </div>
                    {getStatusBadge(bottle.status)}
                  </div>

                  {bottle.status === 'unread' && (
                    <p className="text-sm italic text-slate-400 mb-2">A bottle washed ashore...</p>
                  )}
                  
                  <div className="bg-white p-4 rounded-xl shadow-inner border border-navy-50 mb-4">
                    <p className="italic text-slate-500">&quot;{bottle.message}&quot;</p>
                  </div>

                  {bottle.status !== 'replied' && bottle.status !== 'ignored' ? (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-navy-100">
                      <Button 
                        variant="primary" 
                        size="sm" 
                        onClick={() => setReplyingTo(replyingTo === bottle.id ? null : bottle.id)}
                      >
                        <Reply className="w-4 h-4 mr-1.5" /> Reply
                      </Button>
                      <Button variant="ghost" size="sm">Ignore</Button>
                      <Button variant="danger" size="sm" className="ml-auto">
                        <XCircle className="w-4 h-4 mr-1.5" /> Block
                      </Button>
                    </div>
                  ) : (
                    <div className="pt-2 border-t border-navy-100">
                      <span className="text-sm font-medium text-seafoam-600 flex items-center gap-1">
                        ✓ Replied
                      </span>
                    </div>
                  )}

                  <AnimatePresence>
                    {replyingTo === bottle.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-2">
                          <Textarea 
                            placeholder="Write your reply..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="w-full mb-2 bg-white"
                            rows={3}
                          />
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm" onClick={() => setReplyingTo(null)}>Cancel</Button>
                            <Button variant="primary" size="sm" onClick={() => handleSendReply(bottle.id)}>Send</Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Mobile FAB */}
      <div className="sm:hidden fixed bottom-24 right-6 z-40">
        <Button 
          variant="primary" 
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center p-0"
          onClick={() => setIsComposeOpen(true)}
        >
          <Send className="w-6 h-6" />
        </Button>
      </div>

      <Modal isOpen={isComposeOpen} onClose={() => setIsComposeOpen(false)} title="Send a Bottle">
        <div className="space-y-4">
          <p className="text-sm text-slate-500">Your message will wash up on the shores of a random sailor somewhere in the world.</p>
          <Textarea 
            placeholder="What's on your mind? A thought, a poem, a greeting..."
            value={composeText}
            onChange={(e) => setComposeText(e.target.value)}
            rows={5}
          />
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="ghost" onClick={() => setIsComposeOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleSendBottle} disabled={!composeText.trim()}>
              Throw into Sea
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
