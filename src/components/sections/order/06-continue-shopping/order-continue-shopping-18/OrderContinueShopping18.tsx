import React from 'react';
import { motion } from 'framer-motion';

export function OrderContinueShopping18() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-4">
          <span className="text-xs font-mono uppercase text-amber-400 font-sans">LOOKBOOK</span>
          <h2 className="text-3xl font-light text-white">SEASONAL OUTFITS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" alt="L" className="w-full aspect-video object-cover rounded-lg" />
            <h4 className="font-serif text-lg text-white mt-3">The Monochrome Capsule</h4>
          </div>
          <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" alt="L" className="w-full aspect-video object-cover rounded-lg" />
            <h4 className="font-serif text-lg text-white mt-3">Studio Workspaces</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping18;
