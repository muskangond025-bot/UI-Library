import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-neutral-800 pb-6 flex justify-between items-end">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">06 / STOREFRONT</span>
            <h2 className="text-3xl font-light tracking-tight text-white">CONTINUE SHOPPING</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">CATALOG INDEX</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">01 / APPAREL</span>
            <p className="text-lg font-medium text-neutral-200">Outerwear & Tops</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">02 / ACCESSORIES</span>
            <p className="text-lg font-medium text-neutral-200">Leather & Knits</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">03 / STUDIO</span>
            <p className="text-lg font-medium text-neutral-200">Desk & Lighting</p>
            <p className="text-xs text-neutral-400">Explore Collection →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping7;
