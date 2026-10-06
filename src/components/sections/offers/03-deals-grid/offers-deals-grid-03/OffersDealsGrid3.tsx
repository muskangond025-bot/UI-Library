import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag } from 'lucide-react';

export function OffersDealsGrid3() {
  const deals = [
    { title: 'Cloud Cushion Headphones', price: '$89', original: '$179', bg: 'bg-indigo-100', text: 'text-indigo-600', shadow: 'shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.9),8px_12px_20px_rgba(129,140,248,0.3)]' },
    { title: 'Bubble Mechanical Pad', price: '$69', original: '$139', bg: 'bg-emerald-100', text: 'text-emerald-600', shadow: 'shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.9),8px_12px_20px_rgba(52,211,153,0.3)]' },
    { title: 'Clay Smart Assistant Pod', price: '$109', original: '$219', bg: 'bg-rose-100', text: 'text-rose-600', shadow: 'shadow-[inset_-6px_-6px_12px_rgba(255,255,255,0.9),8px_12px_20px_rgba(251,113,133,0.3)]' }
  ];

  return (
    <div className="w-full bg-slate-100 text-slate-800 p-8 sm:p-12 rounded-[40px] font-sans border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold text-xs px-4 py-2 rounded-full shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.2),4px_6px_12px_rgba(79,70,229,0.4)]">
            <Sparkles className="w-4 h-4" /> CLAYMORPHIC SAVINGS CATALOG
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Inflated Price Slash Drop</h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Tactile 3D soft plastic discount modules</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04, y: -6 }}
              className={`p-6 rounded-[36px] ${item.bg} ${item.shadow} border-2 border-white flex flex-col justify-between`}
            >
              <div>
                <div className="w-full h-40 rounded-[28px] bg-white/80 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.08)] mb-6 flex items-center justify-center">
                  <ShoppingBag className={`w-14 h-14 ${item.text}`} />
                </div>
                <h3 className="font-extrabold text-xl text-slate-800 mb-2">{item.title}</h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <div>
                  <span className="text-2xl font-black text-slate-900">{item.price}</span>
                  <span className="text-xs text-slate-400 line-through ml-2">{item.original}</span>
                </div>
                <button className={`px-5 py-3 rounded-2xl bg-white font-extrabold text-xs uppercase shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),3px_5px_10px_rgba(0,0,0,0.1)] ${item.text} active:scale-95 transition-transform`}>
                  Claim
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid3;
