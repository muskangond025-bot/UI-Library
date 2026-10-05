import React from 'react';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export function OrderSummary7({ data }: { data?: any }) {
  const items = [
    { title: 'Canvas Sneakers', price: '₹2,499' },
    { title: 'Cotton Socks Pack', price: '₹499' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">HORIZONTAL ITEM CAROUSEL</span>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {items.map((it, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.2 }}
            className="p-4 rounded-2xl bg-slate-950 border border-slate-800 min-w-[220px] flex-shrink-0 text-xs"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 mb-2">
              <Package className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-white">{it.title}</h4>
            <span className="font-mono text-emerald-400 font-bold block mt-1">{it.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default OrderSummary7;