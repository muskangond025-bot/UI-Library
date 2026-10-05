import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">Shopping Flow</span>
          <h2 className="text-2xl font-bold text-white">Next Shopping Steps</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-[10px] font-mono text-slate-400">01 / COMPLETE</span>
            <h4 className="font-bold text-sm text-white">Order Confirmed</h4>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.15 }} className="bg-slate-900 p-5 rounded-2xl border border-teal-500/40 text-center space-y-2 ring-1 ring-teal-500/20">
            <span className="text-[10px] font-mono text-teal-400">02 / BROWSE</span>
            <h4 className="font-bold text-sm text-white">Explore Collections</h4>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.3 }} className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-[10px] font-mono text-slate-400">03 / DISCOVER</span>
            <h4 className="font-bold text-sm text-white">Unlock Rewards</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping12;
