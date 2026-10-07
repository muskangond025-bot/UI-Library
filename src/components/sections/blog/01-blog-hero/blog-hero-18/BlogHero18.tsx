import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

export function BlogHero18({ data, section }: { data?: any; section?: any }) {
  const tickerItems = [
    '• SYNTHETIC DNA ARCHIVES',
    '• ZERO-CARBON LOGISTICS',
    '• REAL-TIME WebGPU ENGINE',
    '• NEURAL AUDIO SYNTHESIS',
    '• POST-QUANTUM CIPHERS',
  ];

  return (
    <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-rose-950/60 shadow-2xl overflow-hidden space-y-8">
      {/* Ticker marquee */}
      <div className="bg-rose-950/40 border-y border-rose-900/40 py-2.5 overflow-hidden font-mono text-xs text-rose-300">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-8"
        >
          {tickerItems.concat(tickerItems).map((t, idx) => (
            <span key={idx}>{t}</span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase">
          <Flame className="w-3.5 h-3.5" />
          <span>LIVE TICKER BREAKING JOURNAL</span>
        </div>

        <h1 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          CRITICAL SECURITY FLAGGED IN EMBEDDED IOT FIRMWARE
        </h1>

        <p className="text-slate-400 text-base max-w-xl">
          Zero-day vulnerability disclosure impacting over 14 million smart grid devices globally.
        </p>

        <button className="px-7 py-3.5 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-rose-500/20">
          <span>READ URGENT DISPATCH</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default BlogHero18;
