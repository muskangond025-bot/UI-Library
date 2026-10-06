import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export function OffersFlashSale9() {
  const [activeSlot, setActiveSlot] = useState(1);

  const slots = [
    { id: 0, time: '10:00 AM', status: 'COMPLETED', label: 'EARLY BIRD (EXPIRED)' },
    { id: 1, time: '02:00 PM', status: 'LIVE NOW', label: 'MIDDAY PRIME (ACTIVE)' },
    { id: 2, time: '06:00 PM', status: 'UPCOMING', label: 'EVENING DROP (SOON)' },
    { id: 3, time: '10:00 PM', status: 'UPCOMING', label: 'NIGHT OWL (FINAL)' }
  ];

  const slotDeals = [
    [
      { title: 'Retro Mechanical Keyboard', price: '$69', original: '$139', stock: '0 Left (Sold Out)' }
    ],
    [
      { title: '4K Ultra Gaming Monitor 27"', price: '$349', original: '$699', stock: '8 Units Left' },
      { title: 'Ergonomic Mesh Chair Pro', price: '$229', original: '$459', stock: '14 Units Left' }
    ],
    [
      { title: 'Wireless ANC Headphones V3', price: '$129', original: '$259', stock: 'Opens 06:00 PM' }
    ],
    [
      { title: 'Smart Home RGB Ambient Light Strip', price: '$29', original: '$69', stock: 'Opens 10:00 PM' }
    ]
  ];

  return (
    <div className="w-full bg-slate-900 text-slate-100 p-8 sm:p-12 rounded-3xl font-sans border border-slate-800">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// STAGE-BY-STAGE TIMELINE</span>
          <h2 className="text-3xl font-extrabold text-white">Timed Flash Sale Slots</h2>
        </div>

        {/* Horizontal Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-2 rounded-2xl border border-slate-800">
          {slots.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSlot(s.id)}
              className={`p-4 rounded-xl text-left transition-all border ${
                activeSlot === s.id
                  ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-lg'
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span>{s.time}</span>
                {s.status === 'COMPLETED' && <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />}
                {s.status === 'LIVE NOW' && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
              </div>
              <div className="font-extrabold text-sm">{s.status}</div>
              <div className="text-[10px] text-slate-500 truncate mt-1">{s.label}</div>
            </button>
          ))}
        </div>

        {/* Deals Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slotDeals[activeSlot].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-cyan-400 mb-3">
                  <span>STAGE {activeSlot + 1} OFFER</span>
                  <span>{item.stock}</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 mt-6">
                <div>
                  <span className="text-2xl font-extrabold text-white">{item.price}</span>
                  <span className="text-xs text-slate-500 line-through ml-2">{item.original}</span>
                </div>
                <button
                  disabled={activeSlot === 0}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase transition-colors flex items-center gap-1 ${
                    activeSlot === 0
                      ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                  }`}
                >
                  {activeSlot === 0 ? 'SOLD OUT' : 'CLAIM DROP'} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale9;
