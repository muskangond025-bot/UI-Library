import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Lock, Unlock, Copy, Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export function OffersLimitedTime19() {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim().toUpperCase() === 'VIP2026' || passcode.trim().length >= 4) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText('GOLDENVIP50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white rounded-3xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
      {/* Background Amber Shimmer Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Design: VIP Secret Pass Golden Ticket • Animation: Gold Light Sweep & Passcode Unlock</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight">
            VIP Secret Gold Ticket
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            Unlock exclusive tier 50% discount pricing reserved strictly for registered black card members.
          </p>
        </div>

        {/* Gold Ticket Graphic Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/40 shadow-2xl relative space-y-8 text-left backdrop-blur-md">
          {/* Top Pass Meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-amber-500/20 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                VIP
              </div>
              <div>
                <h4 className="font-bold text-white text-base">GOLDEN TICKET #99482</h4>
                <p className="text-amber-400/80 text-xs font-mono">STATUS: {isUnlocked ? 'UNLOCKED & VERIFIED' : 'AUTHENTICATION REQUIRED'}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">EXPIRES: 24 HOURS</span>
          </div>

          {!isUnlocked ? (
            <form onSubmit={handleUnlock} className="space-y-4 max-w-md mx-auto py-4 text-center">
              <div className="space-y-1">
                <h4 className="text-white font-bold text-base">Enter Member Passcode</h4>
                <p className="text-slate-400 text-xs">Enter code <strong className="text-amber-400 font-mono">VIP2026</strong> to verify card membership.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="VIP2026"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-300 placeholder-slate-600 text-sm focus:outline-none focus:border-amber-400 font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                >
                  <Lock className="w-4 h-4" />
                  <span>Unlock</span>
                </button>
              </div>
              {error && <p className="text-rose-400 text-xs font-semibold">Invalid code. Use VIP2026 to unlock.</p>}
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Unlock className="w-4 h-4" />
                    <span>MEMBER DISCOUNT GRANTED</span>
                  </div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                    FLAT 50% OFF All Luxury Collections
                  </h3>
                  <p className="text-slate-300 text-xs mt-1">Apply your promo code during store checkout.</p>
                </div>
                <button
                  onClick={copyCode}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-amber-300 transition-colors shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Code Copied!' : 'GOLDENVIP50'}</span>
                </button>
              </div>
            </motion.div>
          )}

          <div className="pt-2 flex items-center justify-center gap-2 text-slate-400 text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Encrypted Member Voucher • Non-transferable VIP Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime19;
