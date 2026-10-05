import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping17() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">CATALOG INDEX</span>
          <h2 className="text-3xl font-extrabold text-white">CONTINUE YOUR JOURNEY</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Apparel</h4>
          </motion.div>

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Accessories</h4>
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Studio Deskware</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping17;
