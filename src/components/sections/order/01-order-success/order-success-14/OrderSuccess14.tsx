import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, CheckCircle2 } from 'lucide-react';

export function OrderSuccess14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 font-sans text-center">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">DELIVERY ROUTE INITIATED</span>
      <div className="relative flex items-center justify-between max-w-md mx-auto my-6">
        <div className="absolute left-6 right-6 top-5 h-0.5 bg-slate-800 z-0" />
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '50%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute left-6 top-5 h-0.5 bg-emerald-400 z-0"
        />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-xs"><CheckCircle2 className="w-5 h-5" /></div>
          <span className="text-[10px] text-emerald-400 font-mono mt-1 font-bold">Order Placed</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-slate-800 text-emerald-400 border border-slate-700 flex items-center justify-center"><Package className="w-5 h-5 animate-pulse" /></div>
          <span className="text-[10px] text-slate-400 font-mono mt-1">Warehouse</span>
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-500 border border-slate-700 flex items-center justify-center"><MapPin className="w-5 h-5" /></div>
          <span className="text-[10px] text-slate-500 font-mono mt-1">Delivery</span>
        </div>
      </div>
      <p className="text-xs text-slate-400">Order #DH-28491 is confirmed. Total ₹4,999.</p>
    </div>
  );
}
export default OrderSuccess14;