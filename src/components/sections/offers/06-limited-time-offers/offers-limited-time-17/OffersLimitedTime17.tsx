import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu, Copy, Check, Zap, ArrowRight } from 'lucide-react';

export function OffersLimitedTime17() {
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setUnlocked(true);
  };

  const copyCode = () => {
    navigator.clipboard.writeText('CYBER50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-black text-cyan-400 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden font-mono">
      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#083344_1px,transparent_1px),linear-gradient(to_bottom,#083344_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      {/* Pulsing Corner Flares */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10 text-center">
        {/* Top Protocol Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest">
          <Terminal className="w-3.5 h-3.5" />
          <span>Design: Neon Cyberpunk Drop • Animation: Glitch Text & Decryption Unlock</span>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-200 uppercase">
            Holographic Limited Drop
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
            Encrypted VIP access code required to unlock 50% OFF member pricing on Cyber Deck peripherals.
          </p>
        </div>

        {/* Interactive Cyber Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/90 border border-cyan-500/40 shadow-2xl backdrop-blur-xl relative space-y-6 text-left">
          <div className="flex items-center justify-between border-b border-cyan-900/50 pb-4">
            <div className="flex items-center gap-2 text-xs text-fuchsia-400 font-bold">
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>STATUS: ACCESS RESTRICTED</span>
            </div>
            <span className="text-[11px] text-slate-500 uppercase tracking-widest">ENCRYPTION: 256-BIT</span>
          </div>

          {!unlocked ? (
            <form onSubmit={handleUnlock} className="space-y-4 max-w-md mx-auto py-6 text-center">
              <h4 className="text-white font-bold text-base uppercase tracking-wider">
                Enter VIP Protocol Email To Decrypt
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="cyberpunk@zone.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Decrypt</span>
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/50 space-y-4"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase">
                    <Check className="w-4 h-4" />
                    <span>DECRYPTION SUCCESSFUL</span>
                  </div>
                  <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                    Unlocked Pass: FLAT 50% OFF Entire Cyber Series
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">Use code at checkout before key expires in 2 hours.</p>
                </div>
                <button
                  onClick={copyCode}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors shadow-lg"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'CYBER50'}</span>
                </button>
              </div>
            </motion.div>
          )}

          {/* Product Hologram Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-900/50 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=200&q=80" alt="Cyber Deck" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">HoloDeck VR Headset</h5>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-cyan-400 font-bold">$349</span>
                  <span className="text-slate-600 line-through text-xs">$699</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-fuchsia-900/50 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-fuchsia-950 border border-fuchsia-800 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80" alt="Cyber Keyboard" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-white font-bold text-sm">Neon RGB Mechanical Deck</h5>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-fuchsia-400 font-bold">$129</span>
                  <span className="text-slate-600 line-through text-xs">$259</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OffersLimitedTime17;
