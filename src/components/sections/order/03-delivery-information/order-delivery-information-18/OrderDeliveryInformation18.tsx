import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Truck, Calendar, MapPin } from 'lucide-react';

export function OrderDeliveryInformation18() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white">Delivery Dashboard</h3>
          </div>
          <span className="font-mono text-xs text-indigo-400">DH-TRK-28491</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <Calendar className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">ETA Window</span>
            <p className="text-xl font-bold text-white">Oct 12–15</p>
            <p className="text-xs text-emerald-400">On Schedule</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <Truck className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">Carrier</span>
            <p className="text-xl font-bold text-white">DripExpress</p>
            <p className="text-xs text-slate-400">Standard Ground (3-5 Days)</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-2 shadow-lg"
          >
            <MapPin className="w-5 h-5 text-indigo-400" />
            <span className="text-xs text-slate-400 uppercase font-mono block">Destination</span>
            <p className="text-sm font-bold text-white truncate">San Francisco, CA</p>
            <p className="text-xs text-slate-400">742 Evergreen Terrace</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation18;
