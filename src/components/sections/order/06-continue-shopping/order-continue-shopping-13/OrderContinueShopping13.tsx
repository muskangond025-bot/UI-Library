import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-6">
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase">READY FOR MORE?</h1>
          <p className="text-xs font-mono text-stone-400 font-sans mt-2">CONTINUE EXPLORING THE STUDIO COLLECTION</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">01 / DROP</span>
            <p className="font-bold text-white">Autumn Wool Capsule</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">02 / STUDIO</span>
            <p className="font-bold text-white">Machined Aluminum Deskware</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">03 / LEATHER</span>
            <p className="font-bold text-white">Handcrafted Leather Goods</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping13;
