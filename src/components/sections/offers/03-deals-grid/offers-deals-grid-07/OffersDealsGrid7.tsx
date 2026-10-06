import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Crosshair } from 'lucide-react';

export function OffersDealsGrid7() {
  const recon = [
    { code: 'VAL-101', item: 'RECON TACTICAL MONITORS', cut: '-50% VALUE', orig: '$500', deal: '$250' },
    { code: 'VAL-102', item: 'ENCRYPTED DRIVE MATRIX', cut: '-45% VALUE', orig: '$240', deal: '$132' },
    { code: 'VAL-103', item: 'COMBAT HEADSET MODULE', cut: '-60% VALUE', orig: '$320', deal: '$128' }
  ];

  return (
    <div className="w-full bg-zinc-950 text-emerald-500 p-8 sm:p-12 font-mono border border-emerald-500/40 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-500/30 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-emerald-400 animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold tracking-wider text-emerald-400">TACTICAL VALUE RECON MATRIX</h2>
              <span className="text-xs text-emerald-600">DISCOUNTED HARDWARE TELEMETRY</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs bg-emerald-950/80 px-4 py-2 border border-emerald-500/40 text-emerald-300">
            <Crosshair className="w-4 h-4 text-emerald-400" /> STATUS: TARGET SAVINGS LOCKED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recon.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, borderColor: 'rgba(16,185,129,0.8)' }}
              className="bg-black/90 p-6 border border-emerald-500/30 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex justify-between text-xs text-emerald-600 mb-4">
                  <span>[{item.code}]</span>
                  <span className="text-emerald-400 font-bold">{item.cut}</span>
                </div>
                <h3 className="font-bold text-white text-base tracking-wide mb-4">{item.item}</h3>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-emerald-500/20">
                <div>
                  <span className="text-2xl font-bold text-emerald-400">{item.deal}</span>
                  <span className="text-xs text-emerald-600 line-through ml-2">{item.orig}</span>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs tracking-wider uppercase transition-colors">
                  RECON
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid7;
