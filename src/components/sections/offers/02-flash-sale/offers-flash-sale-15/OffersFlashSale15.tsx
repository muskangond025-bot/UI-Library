import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function OffersFlashSale15() {
  const stream = [
    { user: 'Alex M. (New York)', item: 'Quantum Mechanical Keyboard', time: '12s ago', pct: 92 },
    { user: 'Sarah T. (London)', item: 'Spatial Noise Pods', time: '34s ago', pct: 86 },
    { user: 'David K. (Tokyo)', item: 'Titanium Smart Ring', time: '1m ago', pct: 95 }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold">REALTIME STOCK DEPLETION STREAM</h2>
              <span className="text-xs text-slate-400">LIVE PURCHASING ACTIVITY TICKER</span>
            </div>
          </div>
          <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase">
            URGENCY ENGINE ACTIVE
          </span>
        </div>

        <div className="space-y-4">
          {stream.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{item.user} claimed</span>
                  <span className="text-slate-600">• {item.time}</span>
                </div>
                <h3 className="font-extrabold text-xl text-white">{item.item}</h3>
              </div>

              {/* Depletion Progress */}
              <div className="flex items-center gap-6 min-w-[280px]">
                <div className="flex-1">
                  <div className="flex justify-between text-xs font-mono font-bold mb-1">
                    <span className="text-red-400">DEPLETION RATE</span>
                    <span>{item.pct}% CLAIMED</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden p-0.5 border border-slate-700">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
                <button className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase rounded-xl shrink-0">
                  BUY DROP
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale15;
