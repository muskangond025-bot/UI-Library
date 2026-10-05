import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Check } from 'lucide-react';

export function OrderCustomerSupport18() {
  const [selected, setSelected] = useState(false);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Return Center</span>
          <h2 className="text-2xl font-bold text-white">Easy Returns & Exchanges</h2>
        </motion.div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">Items Eligible for 30-Day Return</h4>
            <span className="text-xs font-mono text-emerald-400">Order #849202</span>
          </div>

          <div
            onClick={() => setSelected(!selected)}
            className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
              selected ? 'bg-emerald-950/40 border-emerald-500/50' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div>
              <p className="font-semibold text-sm text-white">Classic Tailored Wool Blazer</p>
              <p className="text-xs text-slate-400">Size: M • Color: Charcoal</p>
            </div>
            {selected && <Check className="w-5 h-5 text-emerald-400" />}
          </div>

          <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5">
            <RefreshCw className="w-4 h-4" /> Generate Pre-Paid Return Label
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport18;
