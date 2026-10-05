import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronDown } from 'lucide-react';

export function OrderSummary20({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState('items');

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest block mb-2">ULTIMATE ORDER SUMMARY</span>
      <h2 className="text-3xl font-extrabold text-white mb-4">Grand Total: ₹4,999</h2>

      <div className="flex justify-center gap-2 mb-6">
        {['items', 'pricing', 'guarantee'].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={"px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer " + (activeTab === t ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20" : "bg-slate-900 text-slate-400 hover:text-white")}
          >
            {t}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'items' && (
          <motion.div key="items" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <div className="flex justify-between py-1 text-slate-300"><span>1x Premium Denim Jacket</span><span className="font-mono font-bold text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'pricing' && (
          <motion.div key="pricing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
            <div className="flex justify-between py-1"><span>Subtotal:</span><span>₹5,999</span></div>
            <div className="flex justify-between py-1 text-emerald-400"><span>Discount:</span><span>-₹1,000</span></div>
            <div className="flex justify-between py-1 font-bold text-white border-t border-slate-800 pt-2"><span>Payable Total:</span><span className="text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'guarantee' && (
          <motion.div key="guarantee" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p>100% Price Protection & 30-Day Money Back Refund Guarantee Included.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default OrderSummary20;