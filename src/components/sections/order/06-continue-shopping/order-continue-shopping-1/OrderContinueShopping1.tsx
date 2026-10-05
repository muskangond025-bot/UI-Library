import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight, Compass, Sparkles, Package } from 'lucide-react';

export function OrderContinueShopping1() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-slate-800 my-4 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Order Completed Successfully
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Ready to Explore More?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">Your order is being prepared. Continue browsing our latest arrivals and exclusive studio drops.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Main Storefront</h3>
              <p className="text-xs text-slate-400 mt-1">Return to catalog homepage.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              Browse Store <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl w-fit">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">New Arrivals</h3>
              <p className="text-xs text-slate-400 mt-1">Discover this week's fresh drops.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
              Explore Drops <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-purple-500/50 transition-all shadow-xl group cursor-pointer"
          >
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl w-fit">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Order Status</h3>
              <p className="text-xs text-slate-400 mt-1">Track package fulfillment live.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-purple-400">
              Track Order <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping1;
