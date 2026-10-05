import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderContinueShopping6() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="lg:col-span-7 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase">
            <CheckCircle2 className="w-4 h-4" /> Receipt Saved & Confirmed
          </div>
          <h2 className="text-3xl font-extrabold text-white">Your Order Is Placed!</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            We sent a confirmation email to your inbox. You can continue exploring our catalog or check order status anytime.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="lg:col-span-5 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
          <ShoppingBag className="w-8 h-8 text-indigo-400 mx-auto" />
          <h4 className="font-bold text-base text-white">Explore Full Catalog</h4>
          <motion.button whileTap={{ scale: 0.95 }} className="w-full py-3 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 shadow-lg">
            Back to Storefront <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping6;
