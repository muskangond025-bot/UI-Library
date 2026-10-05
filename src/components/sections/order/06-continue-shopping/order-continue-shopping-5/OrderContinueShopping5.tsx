import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OrderContinueShopping5() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden p-8 sm:p-12 shadow-2xl flex flex-col justify-between min-h-[260px]"
        >
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200" alt="Bg" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 max-w-lg space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">FEATURED LOOKBOOK</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Explore The Minimalist Capsule</h2>
            <p className="text-xs text-slate-300">Monochrome apparel & refined studio desk accessories.</p>
          </div>

          <div className="relative z-10 pt-6">
            <motion.button 
              whileHover={{ x: 6 }} 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 shadow-lg"
            >
              Continue Shopping Capsule <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping5;
