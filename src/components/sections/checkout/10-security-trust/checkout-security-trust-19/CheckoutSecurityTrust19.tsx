import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, Lock, Sparkles, CheckCircle2, ChevronRight, RefreshCw, Feather } from 'lucide-react';

export function CheckoutSecurityTrust19({ data }: { data?: any }) {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      num: '01',
      title: '256-BIT ENCRYPTED VAULT',
      subtitle: 'End-to-End Cryptographic Security',
      content: 'Every customer transaction is encrypted using enterprise TLS 1.3 architecture with 2048-bit RSA keys. Your sensitive payment details never touch our local servers directly.',
      badge: 'PCI-DSS LEVEL 1 COMPLIANT'
    },
    {
      num: '02',
      title: 'ZERO FRAUD LIABILITY',
      subtitle: '100% Protected Purchase Guarantee',
      content: 'Shop with absolute peace of mind. In the unlikely event of unauthorized account activity, our buyer defense protocol guarantees a full 100% immediate transaction credit.',
      badge: 'MONEY-BACK GUARANTEE'
    },
    {
      num: '03',
      title: 'EXPRESS DISPUTE RESOLUTION',
      subtitle: 'Dedicated Concierge Security Support',
      content: 'Should your order arrive damaged or delayed, our priority support desk handles replacements within 24 hours with dedicated VIP protection oversight.',
      badge: 'VIP CONCIERGE ASSCRETION'
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 font-sans shadow-2xl relative overflow-hidden">
      {/* Background Rotating Decorative Watermark */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-emerald-500/10 pointer-events-none flex items-center justify-center text-emerald-500/5 text-9xl font-serif"
      >
        ✦
      </motion.div>

      {/* Editorial Header */}
      <div className="mb-8 border-b border-slate-800/80 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Feather className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] font-mono text-emerald-400 font-extrabold uppercase tracking-widest">
              LUXURY EDITORIAL TRUST STANDARD
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif italic text-white font-normal">
            Safe & Secure Purchasing
          </h2>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          VERIFIED EST. 2026 ✓
        </span>
      </div>

      {/* Interactive Chapter Selection Tabs */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
        {chapters.map((ch, idx) => {
          const isSelected = activeChapter === idx;
          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveChapter(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                isSelected 
                  ? 'bg-slate-900 border-emerald-400 text-white shadow-lg shadow-emerald-950/60' 
                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900/70'
              }`}
            >
              {isSelected && (
                <motion.div 
                  layoutId="editorialActiveGlow"
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 pointer-events-none"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-emerald-400' : 'text-slate-500'}`}>
                  {ch.num}
                </span>
                {isSelected && <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />}
              </div>

              <h4 className="text-xs font-bold tracking-tight line-clamp-1">{ch.title}</h4>
            </motion.button>
          );
        })}
      </div>

      {/* Dynamic Animated Content Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChapter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative"
        >
          <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              CHAPTER {chapters[activeChapter].num} — {chapters[activeChapter].subtitle}
            </span>
            <span className="text-[10px] font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 font-bold">
              {chapters[activeChapter].badge}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
            {chapters[activeChapter].content}
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>AUTHENTICATED BY GLOBAL TRUST NETWORK</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
export default CheckoutSecurityTrust19;
