import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

export function OrderCustomerSupport12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white mb-4">AI Support Assistant</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex gap-3">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-200">
                Hi! I can instantly resolve queries for Order #849202. What would you like to update?
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Track Delivery</button>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Change Address</button>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Cancel Order</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport12;
