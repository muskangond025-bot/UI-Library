import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Home, ShieldCheck } from 'lucide-react';

export function OrderDeliveryInformation6() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Package Journey</h3>
            <p className="text-xs text-slate-400 mt-0.5">Carrier: DripExpress • Tracking ID: DH-TRK-28491</p>
          </div>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold rounded-full">
            In Transit
          </span>
        </div>

        {/* Dynamic Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/60 relative overflow-hidden"
          >
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit mb-3">
              <Package className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400">Step 1</p>
            <p className="text-sm font-bold text-white">Packed</p>
            <p className="text-xs text-emerald-400 mt-1">Oct 12, 09:00 AM</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/60 relative overflow-hidden"
          >
            <div className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit mb-3">
              <Truck className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-400">Step 2</p>
            <p className="text-sm font-bold text-white">Dispatched</p>
            <p className="text-xs text-emerald-400 mt-1">Oct 13, 02:30 PM</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/80 p-5 rounded-2xl border border-blue-500/40 relative overflow-hidden ring-2 ring-blue-500/20"
          >
            <motion.div
              animate={{ scale: [0.95, 1.1, 0.95] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl w-fit mb-3"
            >
              <Truck className="w-5 h-5" />
            </motion.div>
            <p className="text-xs text-blue-400 font-semibold">Active</p>
            <p className="text-sm font-bold text-white">In Transit</p>
            <p className="text-xs text-slate-400 mt-1">En Route to Hub</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800 opacity-60"
          >
            <div className="p-2.5 bg-slate-800 text-slate-500 rounded-xl w-fit mb-3">
              <Home className="w-5 h-5" />
            </div>
            <p className="text-xs text-slate-500">Step 4</p>
            <p className="text-sm font-bold text-slate-400">Delivered</p>
            <p className="text-xs text-slate-500 mt-1">Expected Oct 15</p>
          </motion.div>
        </div>

        {/* ETA Highlight */}
        <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase font-mono">Estimated Delivery Date</span>
            <p className="text-2xl font-bold text-white">12–15 October 2026</p>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Guaranteed Standard Ground Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation6;
