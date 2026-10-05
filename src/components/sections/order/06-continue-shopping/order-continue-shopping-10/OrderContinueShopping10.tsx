import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Tag } from 'lucide-react';

export function OrderContinueShopping10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white">3D Catalog Explorer</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">New Arrivals</h3>
            <p className="text-xs text-slate-400">Discover fresh arrivals added today.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Flame className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Best Sellers</h3>
            <p className="text-xs text-slate-400">Explore community top favorites.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Tag className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Seasonal Sale</h3>
            <p className="text-xs text-slate-400">Up to 40% off selected items.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping10;
