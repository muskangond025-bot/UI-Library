import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export function OrderSuccess20({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative overflow-hidden">
      <div className="text-center mb-8">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: [0, 1.2, 1] }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,0.35)]"
        >
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </motion.div>
        <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
          ORDER PLACED SUCCESSFULLY ✓
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3 mb-1">Order #DH-28491</h2>
        <p className="text-xs text-slate-400">Total Charged: <span className="text-white font-bold">₹4,999</span> • Email sent to <span className="text-slate-200">muskan@example.com</span></p>
      </div>

      <div className="flex justify-center gap-2 mb-6">
        {['summary', 'delivery', 'support'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={"px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer " + (activeTab === tab ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20" : "bg-slate-900 text-slate-400 hover:text-white")}
          >
            {tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'summary' && (
          <motion.div key="summary" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
            <div className="flex justify-between py-1 text-slate-300"><span>Order Reference:</span><span className="font-mono font-bold text-white">#DH-28491</span></div>
            <div className="flex justify-between py-1 text-slate-300"><span>Payment Method:</span><span>Credit Card (Encrypted)</span></div>
            <div className="flex justify-between py-1 text-slate-300"><span>Total Paid:</span><span className="font-mono font-bold text-emerald-400">₹4,999</span></div>
          </motion.div>
        )}
        {activeTab === 'delivery' && (
          <motion.div key="delivery" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p className="mb-1"><strong className="text-white">Estimated Arrival:</strong> Oct 12–15, 2026</p>
            <p><strong className="text-white">Carrier:</strong> Express Air Courier (Tracking Active)</p>
          </motion.div>
        )}
        {activeTab === 'support' && (
          <motion.div key="support" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <p>24/7 VIP Customer Support • Contact: support@example.com</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex gap-3 justify-center">
        <button className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all active:scale-95">
          <ShoppingBag className="w-4 h-4" /> Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess20;