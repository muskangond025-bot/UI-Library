import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Truck, Info } from 'lucide-react';

export function OrderDeliveryInformation2() {
  return (
    <section className="w-full bg-gradient-to-br from-zinc-950 via-slate-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-zinc-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <div className="text-center max-w-xl mx-auto space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-widest"
          >
            <Truck className="w-3.5 h-3.5" /> In Transit — DripExpress
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xs uppercase tracking-widest text-zinc-400 font-mono"
          >
            Estimated Arrival Window
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500"
          >
            12–15 OCT
          </motion.div>
          <p className="text-sm text-zinc-400 font-light">Your package is moving smoothly across our express fulfillment network.</p>
        </div>

        {/* Info Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl"
        >
          <div className="space-y-1">
            <span className="text-xs text-zinc-400 uppercase font-mono">Carrier Partner</span>
            <p className="text-lg font-semibold text-zinc-100">DripExpress Priority</p>
            <p className="text-xs text-zinc-400">Tracking: <span className="font-mono text-amber-400">DH-TRK-28491</span></p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs text-zinc-400 uppercase font-mono">Delivery Method</span>
            <p className="text-lg font-semibold text-zinc-100">Express Air (2 Days)</p>
            <p className="text-xs text-emerald-400 flex items-center gap-1">
              <Shield className="w-3 h-3" /> Fully Insured Package
            </p>
          </div>
          <div className="space-y-1 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-6">
            <span className="text-xs text-zinc-400 uppercase font-mono">Last Known Location</span>
            <p className="text-lg font-semibold text-zinc-100">Sort Facility — Chicago</p>
            <p className="text-xs text-zinc-400">Departed hub at 06:40 AM</p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Signature required upon arrival for secure release.</span>
          </div>
          <button className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition-colors">
            Manage Preferences <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation2;
