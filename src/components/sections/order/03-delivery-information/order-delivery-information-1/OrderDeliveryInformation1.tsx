import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Truck, Package, Clock, MapPin, ShieldCheck } from 'lucide-react';

export function OrderDeliveryInformation1() {
  const stages = [
    { label: 'Order Confirmed', time: 'Oct 12, 09:30 AM', completed: true },
    { label: 'Processing', time: 'Oct 12, 02:15 PM', completed: true },
    { label: 'Shipped', time: 'Oct 13, 08:45 AM', completed: true, active: true },
    { label: 'Out for Delivery', time: 'Expected Oct 14', completed: false },
    { label: 'Delivered', time: 'Expected Oct 14', completed: false },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> On Schedule
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Delivery Information</h2>
            <p className="text-slate-400 text-sm mt-1">Tracking ID: <span className="font-mono text-emerald-400">DH-TRK-28491</span></p>
          </div>
          <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-xl p-4 flex items-center gap-4 shadow-lg">
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="p-3 bg-emerald-500/20 text-emerald-400 rounded-lg"
            >
              <Truck className="w-6 h-6" />
            </motion.div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Arrival</p>
              <p className="text-xl font-bold text-white">Oct 14, 2026</p>
              <p className="text-xs text-slate-400">Standard Delivery (3-5 Days)</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline SVG Route */}
        <div className="relative py-6">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              whileInView={{ width: '60%' }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex md:flex-col items-center md:items-center text-left md:text-center gap-4 md:gap-3 bg-slate-800/40 md:bg-transparent p-4 md:p-0 rounded-xl border border-slate-800 md:border-none"
              >
                <div className={`relative flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm border-2 shadow-lg transition-all ${
                  stage.active
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 ring-4 ring-emerald-500/20 scale-110'
                    : stage.completed
                    ? 'bg-slate-800 text-emerald-400 border-emerald-500'
                    : 'bg-slate-900 text-slate-500 border-slate-700'
                }`}>
                  {stage.completed && !stage.active ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: idx * 0.2 + 0.2 }}>
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  ) : stage.active ? (
                    <Truck className="w-5 h-5 animate-pulse" />
                  ) : (
                    idx + 1
                  )}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${stage.active ? 'text-emerald-400' : 'text-slate-200'}`}>
                    {stage.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{stage.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carrier Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Carrier</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2">
              <Package className="w-4 h-4 text-emerald-400" /> DripExpress Global
            </p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Shipping Speed</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" /> Standard Ground (3-5 Days)
            </p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">Destination</span>
            <p className="font-semibold text-slate-200 flex items-center gap-2 truncate">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" /> San Francisco, CA 94107
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation1;
