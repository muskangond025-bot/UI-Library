import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, MapPin, Truck, Award, CheckCircle2 } from 'lucide-react';

export function OrderDeliveryInformation20() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      {/* Subtle Background Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800/80 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Premium Dispatch
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Delivery Experience</h2>
            </div>
          </div>
          <div className="bg-zinc-900/90 px-4 py-2 rounded-xl border border-zinc-800 text-right">
            <span className="text-[10px] font-mono text-zinc-400 block">TRACKING ID</span>
            <span className="font-mono text-sm font-bold text-amber-400">DH-TRK-28491</span>
          </div>
        </motion.div>

        {/* Hero ETA Display */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-zinc-900/80 via-zinc-900/50 to-zinc-900/80 p-8 rounded-3xl border border-amber-500/20 text-center space-y-4 shadow-xl"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Guaranteed Delivery Window</span>
          <h1 className="text-4xl sm:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300">
            12–15 OCTOBER 2026
          </h1>
          <p className="text-xs text-zinc-400">Carrier: DripExpress Standard Ground (3-5 Days)</p>
        </motion.div>

        {/* SVG Route Visualization */}
        <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 space-y-4">
          <span className="text-xs font-mono text-zinc-400 uppercase">Live Route Status</span>
          
          <div className="relative py-4">
            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '65%' }}
                viewport={{ once: false }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-amber-500 to-yellow-400"
              />
            </div>

            <div className="flex justify-between items-center mt-4 text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>Chicago Hub</span>
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Truck className="w-4 h-4 animate-bounce" />
                <span>In Transit</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metadata Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">SERVICE SLA</span>
            <p className="font-bold text-white">White-Glove Handling</p>
          </div>
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">PROTECTION</span>
            <p className="font-bold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Full Parcel Insurance
            </p>
          </div>
          <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800">
            <span className="text-zinc-400 block mb-1 font-mono">DELIVERY TYPE</span>
            <p className="font-bold text-white">Contactless Porch Drop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation20;
