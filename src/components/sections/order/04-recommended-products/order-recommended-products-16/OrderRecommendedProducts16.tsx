import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts16() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Post-Purchase Hub</span>
          <h2 className="text-2xl font-bold text-white">Purchased & Next Additions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Purchased */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl"
          >
            <span className="text-xs text-slate-400 font-mono uppercase">COMPLETED IN THIS ORDER</span>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" alt="P" className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Organizer</h4>
                <span className="text-xs text-emerald-400 font-medium">Order Confirmed</span>
              </div>
            </div>
          </motion.div>

          {/* Next Recommended */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl"
          >
            <span className="text-xs text-indigo-400 font-mono uppercase">RECOMMENDED ADDITION</span>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=200" alt="R" className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Lamp</h4>
                <span className="text-xs font-mono text-indigo-400">$120.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts16;
