import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, Check } from 'lucide-react';

export function OrderContinueShopping15() {
  const [copied, setCopied] = useState(false);
  const code = "THANKS15";

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-950/60 to-slate-950 p-6 rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-purple-400 uppercase">THANK YOU PROMO</span>
            <h3 className="text-xl font-bold text-white">Take 15% Off Your Next Order</h3>
            <p className="text-xs text-slate-400">Use code at checkout on your next purchase.</p>
          </div>
          <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-800 flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-purple-400">{code}</span>
            <button onClick={copy} className="text-slate-400 hover:text-white">
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderContinueShopping15;
