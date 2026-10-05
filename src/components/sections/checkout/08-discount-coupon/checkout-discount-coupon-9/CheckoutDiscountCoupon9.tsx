import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tag, Percent, Sparkles, Check, Copy, X, Gift, Truck, ShieldCheck, 
  ChevronDown, ChevronUp, ArrowRight, Zap, Award, Star, Flame, Lock, HelpCircle
} from 'lucide-react';

export function CheckoutDiscountCoupon9({ data }: { data?: any }) {
  const offers = [
    { title: '20% OFF', code: 'SPRING20', desc: 'Valid on orders over $300' },
    { title: 'FREE SHIPPING', code: 'FREESHIP', desc: 'Express nationwide delivery' },
    { title: '$50 CASHBACK', code: 'CASH50', desc: 'Instant account credit' },
    { title: 'FIRST ORDER', code: 'WELCOME10', desc: 'New customer discount' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-2">Promo Code & Offer Grid</h3>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Type coupon code..." 
            className="flex-1 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs font-mono text-white uppercase focus:outline-none"
          />
          <button className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold">Apply</button>
        </div>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {offers.map((o, idx) => (
          <motion.div 
            key={idx}
            variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
            className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors flex justify-between items-center"
          >
            <div>
              <h4 className="text-sm font-extrabold text-white">{o.title}</h4>
              <p className="text-[11px] text-slate-400">{o.desc}</p>
              <span className="text-[10px] font-mono text-indigo-400 font-bold block mt-1">{o.code}</span>
            </div>
            <button className="text-xs text-indigo-400 font-bold hover:underline">Apply</button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default CheckoutDiscountCoupon9;
