import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Sparkles } from 'lucide-react';

export function OrderContinueShopping4() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-2xl"
        >
          <div className="space-y-2">
            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-xs font-semibold inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Rewards Earned
            </span>
            <h2 className="text-2xl font-extrabold text-white">+500 Points Added To Your Account!</h2>
            <p className="text-xs text-slate-400">You earned $25.00 in loyalty credit from Order #849202. Redeem instantly on your next order.</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 shrink-0"
          >
            Redeem Points <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderContinueShopping4;
