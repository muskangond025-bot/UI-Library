import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, ShoppingBag } from 'lucide-react';

export function OffersFlashSale2() {
  const deals = [
    { title: 'Acoustic Wireless Sound Pods', price: '$84.00', original: '$160.00', discount: '-47%', claims: '78% Claimed' },
    { title: 'Matte Precision Smart Watch', price: '$129.00', original: '$220.00', discount: '-41%', claims: '92% Claimed' },
    { title: 'Ergonomic Desktop Docking', price: '$49.00', original: '$99.00', discount: '-50%', claims: '64% Claimed' }
  ];

  return (
    <div className="w-full bg-[#e0e5ec] text-slate-700 p-8 sm:p-12 rounded-3xl font-sans shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.8)] border border-white/40">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 p-6 rounded-2xl shadow-[inset_6px_6px_10px_rgba(163,177,198,0.5),inset_-6px_-6px_10px_rgba(255,255,255,0.8)] bg-[#e0e5ec]">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)] text-orange-500 bg-[#e0e5ec]">
              <Flame className="w-8 h-8 fill-orange-500/20 animate-bounce" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Neumorphic Tactile Flash</h2>
              <p className="text-sm text-slate-500 font-medium">Soft dimensional UI deal showcase</p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)] bg-[#e0e5ec]">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="font-mono font-bold text-slate-700">03h : 42m : 19s</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-[#e0e5ec] shadow-[9px_9px_16px_rgba(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.8)] border border-white/50 flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-44 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_rgba(163,177,198,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] mb-6 flex items-center justify-center relative">
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-xl text-xs font-bold text-orange-600 shadow-[3px_3px_6px_rgba(163,177,198,0.6),-3px_-3px_6px_rgba(255,255,255,0.8)] bg-[#e0e5ec]">
                    {item.discount}
                  </span>
                  <ShoppingBag className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <div className="text-xs font-medium text-slate-500 mb-4">{item.claims}</div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-300/40">
                <div>
                  <div className="text-xl font-extrabold text-slate-800">{item.price}</div>
                  <div className="text-xs text-slate-400 line-through">{item.original}</div>
                </div>

                <button className="px-5 py-3 rounded-2xl font-bold text-sm text-orange-600 bg-[#e0e5ec] shadow-[6px_6px_12px_rgba(163,177,198,0.6),-6px_-6px_12px_rgba(255,255,255,0.8)] active:shadow-[inset_3px_3px_6px_rgba(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] transition-all">
                  Get Deal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale2;
