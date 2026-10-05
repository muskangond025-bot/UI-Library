import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, MapPin } from 'lucide-react';

export function OrderDeliveryInformation8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      {/* Glow effect */}
      <motion.div 
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-900/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Concierge Express</span>
              <h3 className="text-2xl font-serif tracking-wide text-white">Private Delivery Service</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-mono text-amber-400/80">TRACKING NUMBER</p>
            <p className="text-sm font-mono font-bold text-amber-200">DH-TRK-28491</p>
          </div>
        </div>

        {/* ETA Hero Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="bg-stone-900/60 backdrop-blur border border-amber-500/20 rounded-2xl p-8 text-center space-y-3"
        >
          <span className="text-xs uppercase font-mono text-amber-400 tracking-widest">Guaranteed White-Glove Arrival</span>
          <h2 className="text-4xl sm:text-5xl font-serif text-amber-100">October 12–15, 2026</h2>
          <p className="text-xs text-stone-400 max-w-md mx-auto">Hand-handled transit with signature requirement and scheduled arrival slot.</p>
        </motion.div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">CARRIER PARTNER</span>
            <p className="font-semibold text-white">DripExpress Priority Air</p>
            <p className="text-xs text-stone-400 mt-1">Dedicated Vault Shipping</p>
          </div>
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">SECURITY PROTOCOL</span>
            <p className="font-semibold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" /> Tamper-Evident Sealed
            </p>
            <p className="text-xs text-stone-400 mt-1">Insured up to $10,000</p>
          </div>
          <div className="p-5 bg-stone-900/40 rounded-xl border border-stone-800">
            <span className="text-xs font-mono text-amber-400/70 block mb-1">DESTINATION</span>
            <p className="font-semibold text-white flex items-center gap-1.5 truncate">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" /> San Francisco, CA
            </p>
            <p className="text-xs text-stone-400 mt-1">742 Evergreen Terrace</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation8;
