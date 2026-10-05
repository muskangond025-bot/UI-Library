import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export function OrderSuccess19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-emerald-400 rounded-3xl border border-emerald-500/40 font-mono shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
      <div className="flex justify-between items-center pb-3 border-b border-emerald-500/30 mb-4 text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 animate-pulse" />
          <span>ORDER PROTOCOL // COMPLETE</span>
        </div>
        <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">STATUS: 200 OK</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">REF: #DH-28491</h3>
      <p className="text-xs text-slate-300">TOTAL: ₹4,999 • ARRIVAL: OCT 12–15</p>
    </div>
  );
}
export default OrderSuccess19;