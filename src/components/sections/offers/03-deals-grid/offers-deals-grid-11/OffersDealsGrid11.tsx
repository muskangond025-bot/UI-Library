import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Focus, Eye, ArrowRight } from 'lucide-react';

export function OffersDealsGrid11() {
  const [activePin, setActivePin] = useState(0);

  const hotspots = [
    { title: 'Sony WH-1000XM5 Noise Cancelling', price: '$278', original: '$399', desc: '40% discount applied. Premium acoustic isolation with dual voice processors.', x: '30%', y: '45%' },
    { title: 'MagSafe Wireless Power Bank 10K', price: '$49', original: '$89', desc: '45% discount applied. Fast wireless charging with battery LED indicator.', x: '70%', y: '60%' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-12 rounded-3xl border border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-sky-500/20 text-sky-400 border border-sky-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
            <Focus className="w-4 h-4" /> SPOTLIGHT LENS INSPECTOR
          </span>
          <h2 className="text-3xl font-extrabold text-white">Interactive Deal Lens Inspector</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Spotlight Viewport */}
          <div className="lg:col-span-2 h-96 bg-slate-900 rounded-3xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/40 via-transparent to-indigo-950/40" />

            {/* Interactive Pins */}
            {hotspots.map((pin, idx) => (
              <button
                key={idx}
                onClick={() => setActivePin(idx)}
                style={{ left: pin.x, top: pin.y }}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-full border-2 transition-all ${
                  activePin === idx
                    ? 'bg-sky-500 border-white text-slate-950 scale-125 shadow-[0_0_20px_rgba(56,189,248,0.8)]'
                    : 'bg-slate-900 border-sky-400 text-sky-400 hover:scale-110'
                }`}
              >
                <Eye className="w-5 h-5" />
              </button>
            ))}

            <div className="text-slate-600 font-mono text-xs uppercase tracking-widest pointer-events-none">
              [ CLICK PIN MARKERS TO INSPECT PRICE DROP SPECIFICATION ]
            </div>
          </div>

          {/* Active Hotspot Card */}
          <motion.div
            key={activePin}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6"
          >
            <div>
              <span className="text-xs font-mono text-sky-400 font-bold uppercase">SAVINGS INSPECTION</span>
              <h3 className="font-extrabold text-2xl text-white mt-1">{hotspots[activePin].title}</h3>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{hotspots[activePin].desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-sky-400">{hotspots[activePin].price}</span>
                <span className="text-sm text-slate-500 line-through">{hotspots[activePin].original}</span>
              </div>
              <button className="w-full py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-2xl transition-colors flex items-center justify-center gap-2">
                CLAIM INSPECTED DEAL <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid11;
