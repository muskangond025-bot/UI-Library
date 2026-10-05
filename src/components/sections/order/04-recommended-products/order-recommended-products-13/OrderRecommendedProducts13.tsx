import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-stone-800 pb-4"
        >
          <h2 className="text-3xl font-light text-white tracking-wide">THE AFTERWORD EDIT</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-stone-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="Mag" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-serif text-2xl text-white">Architectural Desk Lamp</h3>
                <p className="text-xs text-stone-400">Crafted aluminum with adjustable ambient beam.</p>
              </div>
              <span className="font-mono text-sm text-amber-400 font-bold">$120.00</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-stone-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" 
                alt="Mag" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Minimalist Cardholder</h3>
              <span className="font-mono text-xs text-amber-400 block mt-1">$45.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts13;
