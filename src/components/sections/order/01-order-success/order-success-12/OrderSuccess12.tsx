import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Eye, Truck } from 'lucide-react';

export function OrderSuccess12({ data }: { data?: any }) {
  const actions = [
    { icon: Eye, label: 'View Order Details', desc: 'Review items & invoice' },
    { icon: Truck, label: 'Track Shipment', desc: 'Real-time courier updates' },
    { icon: ShoppingBag, label: 'Continue Shopping', desc: 'Explore new arrivals' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 text-center font-sans">
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">ORDER #DH-28491 CONFIRMED</span>
      <h3 className="text-2xl font-bold text-white mb-6">What would you like to do next?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {actions.map((act, idx) => {
          const IconComp = act.icon;
          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.04 }}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-left hover:border-emerald-500/40 transition-all cursor-pointer"
            >
              <IconComp className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-0.5">{act.label}</h4>
              <span className="text-[10px] text-slate-400 block">{act.desc}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
export default OrderSuccess12;