import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Sparkles, Copy, Check, ChevronDown, Tag } from 'lucide-react';

export function OffersCoupon14() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const walletCards = [
    {
      id: 1,
      brand: 'NIKE STORE',
      discount: '30% OFF',
      title: 'Athletic Footwear & Apparel',
      code: 'NIKESAVE30',
      bg: 'from-blue-600 to-indigo-900',
      border: 'border-blue-400/40',
      badgeBg: 'bg-blue-400 text-slate-950',
    },
    {
      id: 2,
      brand: 'APPLE RESELLERS',
      discount: '20% OFF',
      title: 'MacBook & iPad Accessories',
      code: 'APPLEGEAR20',
      bg: 'from-slate-800 to-slate-950',
      border: 'border-slate-500/40',
      badgeBg: 'bg-white text-slate-950',
    },
    {
      id: 3,
      brand: 'SEPHORA LUXURY',
      discount: '40% OFF',
      title: 'Beauty & Skincare Gift Set',
      code: 'GLAMGLOW40',
      bg: 'from-pink-600 to-rose-950',
      border: 'border-pink-400/40',
      badgeBg: 'bg-pink-400 text-slate-950',
    },
  ];

  const copyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#0a0712] text-white rounded-3xl border border-purple-900/40 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold tracking-widest uppercase shadow-md">
          <Wallet className="w-3.5 h-3.5 text-purple-400" />
          <span>ACCORDION EXPANDABLE WALLET STACK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-pink-300 tracking-tight">
          Multi-Brand Coupon Wallet Stack
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          Click any card in your digital coupon wallet to expand and copy exclusive brand promo codes.
        </p>
      </div>

      {/* Main Accordion Stack */}
      <div className="w-full max-w-xl space-y-3 relative z-10">
        {walletCards.map((card, idx) => {
          const isExpanded = expandedIdx === idx;
          const isCopied = copiedIdx === idx;

          return (
            <motion.div
              key={card.id}
              layout
              onClick={() => setExpandedIdx(isExpanded ? null : idx)}
              className={`bg-gradient-to-r ${card.bg} rounded-2xl p-5 border-2 ${card.border} shadow-xl cursor-pointer overflow-hidden text-left transition-all`}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-black uppercase ${card.badgeBg}`}>
                    {card.discount}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-black text-white">{card.brand}</h4>
                    <p className="text-xs text-slate-300">{card.title}</p>
                  </div>
                </div>
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-white/80" />
                </motion.div>
              </div>

              {/* Expandable Accordion Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 mt-4 border-t border-white/20 space-y-4"
                  >
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/20 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                          PROMO CODE
                        </span>
                        <span className="text-xl font-mono font-black text-white tracking-wider">
                          {card.code}
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyCode(card.code, idx);
                        }}
                        className="px-4 py-2.5 rounded-lg bg-white text-slate-950 hover:bg-slate-200 font-mono font-black text-xs uppercase flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'COPIED!' : 'COPY'}</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default OffersCoupon14;
