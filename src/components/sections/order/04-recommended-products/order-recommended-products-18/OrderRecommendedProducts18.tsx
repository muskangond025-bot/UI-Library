import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts18() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-stone-800 pb-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-sans">LOOKBOOK EDITION</span>
          <h2 className="text-3xl font-light text-white">THE ESSENTIAL PAIRINGS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="aspect-[4/3] bg-stone-800 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="LB" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-xl text-white">Architectural Desk Lamp</h3>
              <p className="text-xs text-stone-400">Warm ambient lighting designed for focused workspaces.</p>
              <span className="font-mono text-xs text-amber-400 font-bold block pt-2">$120.00</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="aspect-[4/3] bg-stone-800 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800" 
                alt="LB" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-xl text-white">Minimalist Leather Cardholder</h3>
              <p className="text-xs text-stone-400">Full-grain vegetable tanned leather with 4 card slots.</p>
              <span className="font-mono text-xs text-amber-400 font-bold block pt-2">$45.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts18;
