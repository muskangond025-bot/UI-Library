import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';

export function ShippingAddress7({ data }: { data?: any }) {
  const [street, setStreet] = useState('456 Oak Lane');
  const [city, setCity] = useState('Seattle');
  const [zip, setZip] = useState('98101');
  const [focused, setFocused] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden"
      >
        {focused !== null && (
          <motion.div
            layoutId="focusBarDispatch"
            className="absolute left-0 top-0 w-1 bg-cyan-400 h-full rounded-r"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}

        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Compact Dispatch Dashboard</h3>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> Address Auto-Validated
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Physical Location</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onFocus={() => setFocused(1)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <MapPin className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">City Jurisdiction</label>
            <div className="relative">
              <input
                type="text"
                value={city}
                onFocus={() => setFocused(2)}
                onBlur={() => setFocused(null)}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 pl-9 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
              />
              <Navigation className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-400 uppercase mb-1">Postal Zone</label>
            <input
              type="text"
              value={zip}
              onFocus={() => setFocused(3)}
              onBlur={() => setFocused(null)}
              onChange={(e) => setZip(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-mono">COURIER: EXPRESS AIR</span>
          <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition flex items-center gap-1.5">
            Proceed <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress7;