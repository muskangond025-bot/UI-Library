import React from 'react';
import { motion } from 'framer-motion';

export function AccountCouponsOffers7() {
  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-10 space-y-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-amber-500 font-bold block">
            SEASONAL SAVINGS
          </span>
          <h1 className="text-5xl sm:text-7xl font-light tracking-tight uppercase leading-none">
            OFFERS <br /><span className="italic font-normal text-amber-400">FOR YOU</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">EXCLUSIVE CODE</span>
            <h3 className="text-4xl font-serif font-light text-white">₹1,500 OFF</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">Applicable on luxury outerwear purchases above ₹10,000.</p>
            <code className="text-xs font-mono font-bold text-amber-400 block pt-2">CODE: LUXE1500</code>
          </div>

          <div className="p-8 bg-stone-900 rounded-2xl border border-stone-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">COMPLIMENTARY</span>
            <h3 className="text-4xl font-serif font-light text-white">FREE SHIP</h3>
            <p className="text-xs text-stone-400 leading-relaxed font-light">Complimentary express shipping on all domestic purchases.</p>
            <code className="text-xs font-mono font-bold text-amber-400 block pt-2">CODE: COMPSHIP</code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountCouponsOffers7;
