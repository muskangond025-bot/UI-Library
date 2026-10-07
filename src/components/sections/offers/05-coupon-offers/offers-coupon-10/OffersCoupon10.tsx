import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Copy, Check, ShieldCheck, TrendingUp } from 'lucide-react';

export function OffersCoupon10() {
  const [selectedTier, setSelectedTier] = useState<0 | 1 | 2>(1);
  const [copied, setCopied] = useState(false);

  const tiers = [
    { spend: '$50', discount: '$10 OFF', code: 'SPEND50SAVE10', desc: 'Entry Tier: Spend $50 to claim instant $10 discount.' },
    { spend: '$150', discount: '$35 OFF', code: 'SPEND150SAVE35', desc: 'Pro Tier: Spend $150 to claim instant $35 discount.' },
    { spend: '$300', discount: '$80 OFF', code: 'SPEND300SAVE80', desc: 'VIP Tier: Spend $300 to claim instant $80 discount.' },
  ];

  const current = tiers[selectedTier];

  const copyCode = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#090e17] text-white rounded-3xl border border-indigo-900/50 shadow-2xl relative overflow-hidden min-h-[680px] flex flex-col items-center justify-center font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-400/40 text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
          <span>REACTBITS BORDER BEAM TIER CONNECTOR</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-purple-300 tracking-tight">
          Multi-Tier Spend & Save Pass
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
          The more you spend, the more you save! Select your order tier level below to generate your custom coupon code.
        </p>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-xl relative z-10">
        {/* Tier Selector Buttons */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-900/80 rounded-2xl mb-6 border border-indigo-500/30">
          {tiers.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTier(idx as 0 | 1 | 2)}
              className={`py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex flex-col items-center justify-center ${
                selectedTier === idx
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span className="text-[10px] opacity-80 uppercase">SPEND {t.spend}</span>
              <span className="text-sm font-black">{t.discount}</span>
            </button>
          ))}
        </div>

        {/* Selected Tier Voucher Card */}
        <motion.div
          key={selectedTier}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 border-2 border-indigo-400/40 shadow-[0_25px_60px_rgba(99,102,241,0.25)] space-y-6 text-left overflow-hidden group"
        >
          {/* Active Border Beam Highlight */}
          <div className="absolute inset-0 border-2 border-indigo-400/60 rounded-3xl pointer-events-none" />

          {/* Meta Header */}
          <div className="flex items-center justify-between border-b border-indigo-500/30 pb-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest">
                TIER LEVEL {selectedTier + 1} SAVINGS
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-indigo-500 text-white font-mono text-xs font-black uppercase">
              {current.discount}
            </span>
          </div>

          {/* Title & Details */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Spend {current.spend} & Save {current.discount}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {current.desc}
            </p>
          </div>

          {/* Code Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-indigo-500/40 text-center space-y-1 shadow-inner">
            <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">
              UNLOCKED TIER {selectedTier + 1} VOUCHER CODE
            </span>
            <div className="text-2xl sm:text-4xl font-mono font-black text-white tracking-widest">
              {current.code}
            </div>
          </div>

          {/* Copy Button */}
          <div className="pt-1">
            <button
              onClick={copyCode}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:brightness-110 text-white font-mono font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 active:scale-95 transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'TIER CODE COPIED!' : `COPY CODE: ${current.code}`}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Automatic Tier Savings Calculation Verified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default OffersCoupon10;
