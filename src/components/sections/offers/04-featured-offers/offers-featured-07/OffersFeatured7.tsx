import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';

export function OffersFeatured7() {
  const cyberDeals = [
    { code: 'CYBER-01', name: 'NEON MATRIX HEADSET', tag: 'CYBERPUNK DROP', price: '$189', orig: '$379', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.4)] border-pink-500' },
    { code: 'CYBER-02', name: 'MECHA MONOCHROME KEYBOARD', tag: 'QUANTUM EDITION', price: '$129', orig: '$249', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.4)] border-cyan-400' },
    { code: 'CYBER-03', name: 'HOLOGRAM HUD GLASSES', tag: 'LIMITED UNITS', price: '$299', orig: '$599', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.4)] border-purple-500' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 font-mono rounded-3xl border border-cyan-500/30 relative overflow-hidden">
      {/* Grid Scanline Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-cyan-500/30 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-6 h-6 text-pink-500 animate-pulse" />
            <div>
              <h2 className="text-2xl font-black tracking-widest text-cyan-400">CYBERPUNK NEON MATRIX</h2>
              <span className="text-xs text-pink-400">HIGH-TECH HARDWARE FEATURED DISCOVERY</span>
            </div>
          </div>
          <span className="px-4 py-1.5 bg-pink-500/20 text-pink-300 border border-pink-500/40 rounded-full text-xs font-bold">
            SYSTEM STATUS: ONLINE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cyberDeals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-slate-900/90 p-6 rounded-2xl border ${item.glow} flex flex-col justify-between h-80 backdrop-blur-md relative overflow-hidden`}
            >
              <div>
                <div className="flex justify-between items-center text-xs text-slate-400 mb-4">
                  <span>[{item.code}]</span>
                  <span className="text-pink-400 font-bold">{item.tag}</span>
                </div>
                <h3 className="font-extrabold text-xl text-white tracking-wide mb-2">{item.name}</h3>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-3xl font-black text-cyan-400">{item.price}</span>
                  <span className="text-xs text-slate-500 line-through ml-2">{item.orig}</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl hover:opacity-90 transition-opacity flex items-center gap-1">
                  JACK IN <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured7;
