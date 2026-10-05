import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Truck, PackageCheck, ArrowRight } from 'lucide-react';

export function OrderSuccess4({ data }: { data?: any }) {
  const steps = [
    { title: 'Order Confirmed', time: 'Just now', active: true },
    { title: 'Processing', time: 'Est. 12 hours', active: false },
    { title: 'Shipped', time: 'Est. Oct 13', active: false },
    { title: 'Delivered', time: 'Est. Oct 15', active: false }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">LIVE ORDER TRACKER</span>
          <h3 className="text-xl font-bold text-white">Order Status: Confirmed</h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          #DH-28491
        </span>
      </div>

      <div className="relative my-8 px-4">
        <div className="absolute top-5 left-8 right-8 h-1 bg-slate-800 z-0" />
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: '25%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-5 left-8 h-1 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)] z-0"
        />

        <div className="grid grid-cols-4 gap-2 relative z-10 text-center">
          {steps.map((st, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.15 }}
                className={"w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 " + (st.active ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/30" : "bg-slate-900 border-slate-700 text-slate-500")}
              >
                {st.active ? <CheckCircle2 className="w-5 h-5 stroke-[2.5]" /> : <Clock className="w-4 h-4" />}
              </motion.div>
              <h4 className={"text-xs font-bold " + (st.active ? "text-white" : "text-slate-400")}>{st.title}</h4>
              <span className="text-[10px] font-mono text-slate-500 mt-0.5">{st.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
        <span className="text-slate-300">Total Paid: <strong className="text-white">₹4,999</strong> • Shipping Address Verified</span>
        <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold border border-slate-700 transition-all cursor-pointer">
          Track Delivery
        </button>
      </div>
    </div>
  );
}
export default OrderSuccess4;