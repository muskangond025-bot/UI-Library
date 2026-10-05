import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping19() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">STOREFRONT PORTAL</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">YOUR JOURNEY IS<br/>JUST BEGINNING.</h2>
        </motion.div>
        <button className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors">
          Continue Shopping Now
        </button>
      </div>
    </section>
  );
}
export default OrderContinueShopping19;
