import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, ShoppingBag } from 'lucide-react';

export function OffersDealsGrid2() {
  const [selectedCat, setSelectedCat] = useState('ALL');

  const deals = [
    { title: 'Acoustic Sound Pods', price: '$84', original: '$160', discount: '-47% OFF', rating: '4.9 ★' },
    { title: 'Matte Precision Smart Watch', price: '$129', original: '$220', discount: '-41% OFF', rating: '4.8 ★' },
    { title: 'Ergonomic Desktop Docking', price: '$49', original: '$99', discount: '-50% OFF', rating: '4.7 ★' }
  ];

  return (
    <div className="w-full bg-[#e0e5ec] text-slate-700 p-8 sm:p-12 rounded-3xl font-sans shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.8)] border border-white/40">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 rounded-2xl shadow-[inset_6px_6px_10px_rgba(163,177,198,0.5),inset_-6px_-6px_10px_rgba(255,255,255,0.8)] bg-[#e0e5ec]">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)] text-indigo-600 bg-[#e0e5ec]">
              <Tag className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Neumorphic Category Deals</h2>
              <p className="text-sm text-slate-500 font-medium">Curated dimensional price drop catalog</p>
            </div>
          </div>

          <div className="flex gap-2">
            {['ALL', 'TECH', 'AUDIO'].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCat(c)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all bg-[#e0e5ec] ${
                  selectedCat === c
                    ? 'shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] text-indigo-600'
                    : 'shadow-[4px_4px_8px_rgba(163,177,198,0.6),-4px_-4px_8px_rgba(255,255,255,0.8)] text-slate-600 hover:text-indigo-600'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.8)] border border-white/50 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-40 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] mb-6 flex items-center justify-center relative">
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-xl text-xs font-bold text-indigo-600 shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#e0e5ec]">
                    {item.discount}
                  </span>
                  <ShoppingBag className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
                <div className="text-xs text-slate-500 font-medium">{item.rating} Customer Rating</div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-300/40 mt-4">
                <div>
                  <div className="text-2xl font-extrabold text-slate-800">{item.price}</div>
                  <div className="text-xs text-slate-400 line-through">{item.original}</div>
                </div>
                <button className="px-5 py-3 rounded-2xl font-bold text-xs text-indigo-600 bg-[#e0e5ec] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all">
                  Claim Deal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersDealsGrid2;
