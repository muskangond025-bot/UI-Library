import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Sparkles, Clock, RefreshCw } from 'lucide-react';

export default function ShippingDeliveryInformation12({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-20 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-5xl mx-auto relative min-h-[480px] flex items-center justify-center">
        {/* Background Ambient Glow */}
        <div className="absolute w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Central Hero Statement Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border-2 border-indigo-500/40 p-10 md:p-14 rounded-3xl text-center shadow-[0_0_50px_rgba(99,102,241,0.15)] relative z-20 max-w-xl"
        >
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
            {settings.eyebrow || 'SURROUNDING DETAILS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
            Arrives in <span className="text-indigo-400">2–4 Days</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {settings.description || 'Fast, trackable express air shipping delivered straight to your door with full transit insurance.'}
          </p>
        </motion.div>

        {/* Floating Panel 1: Top Left */}
        <motion.div
          initial={{ opacity: 0, y: -30, x: -30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          animate={{ y: [0, -8, 0] }}
          style={{ transition: "transform 4s ease-in-out infinite" }}
          className="hidden md:flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl absolute top-6 left-4 z-30"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Full Insurance</h4>
            <p className="text-[11px] text-slate-400">100% damage protection</p>
          </div>
        </motion.div>

        {/* Floating Panel 2: Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: 30 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          animate={{ y: [0, 8, 0] }}
          style={{ transition: "transform 4s ease-in-out infinite" }}
          className="hidden md:flex items-center gap-3 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl absolute bottom-6 right-4 z-30"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Free Threshold</h4>
            <p className="text-[11px] text-slate-400">Complimentary over ₹2,999</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
