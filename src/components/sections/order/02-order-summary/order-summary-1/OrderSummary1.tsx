import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Tag, ShieldCheck, ArrowRight } from 'lucide-react';

export function OrderSummary1({ data }: { data?: any }) {
  const items = [
    { name: 'Minimalist Leather Tote', color: 'Cognac Brown', qty: 1, price: '₹2,999' },
    { name: 'Organic Cotton Tee', color: 'Off-White', qty: 2, price: '₹1,400' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans"
    >
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-emerald-400" />
          Order Summary (3 items)
        </h3>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          SAVINGS APPLIED
        </span>
      </div>

      <div className="space-y-3 mb-6">
        {items.map((it, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: idx * 0.15 }}
            className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs"
          >
            <div>
              <h4 className="font-bold text-white">{it.name}</h4>
              <span className="text-[10px] text-slate-400 font-mono">Variant: {it.color} • Qty: {it.qty}</span>
            </div>
            <span className="font-mono font-bold text-emerald-400">{it.price}</span>
          </motion.div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
        <div className="flex justify-between"><span>Subtotal:</span><span>₹4,399</span></div>
        <div className="flex justify-between text-emerald-400"><span>Coupon Discount (SUMMER20):</span><span>-₹400</span></div>
        <div className="flex justify-between"><span>Shipping Fee:</span><span>FREE</span></div>
        <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
          <span>GRAND TOTAL:</span><span className="text-emerald-400">₹3,999</span>
        </div>
      </div>
    </motion.div>
  );
}
export default OrderSummary1;