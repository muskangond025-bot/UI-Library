import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts17() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">ORDER CONFIRMED</span>
          <h2 className="text-3xl font-extrabold text-white">WHAT'S NEXT FOR YOUR SETUP?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Leather Cardholder</h4>
            <span className="text-xs text-cyan-400 font-mono block">$45.00</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Ceramic Tumbler</h4>
            <span className="text-xs text-cyan-400 font-mono block">$38.00</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Wool Beanie</h4>
            <span className="text-xs text-cyan-400 font-mono block">$52.00</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts17;
