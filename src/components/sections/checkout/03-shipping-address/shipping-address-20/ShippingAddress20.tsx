import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function ShippingAddress20({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Award Boulevard, Suite 500');
  const [city, setCity] = useState('San Francisco');
  const [zip, setZip] = useState('94103');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-slate-100 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-indigo-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" /> Award Logistics Showcase
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Delivery Location</h2>
          </div>
          <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Automated GPS Verification
          </span>
        </div>

        <div className="relative z-10 mt-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Street Location</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400 absolute left-4 top-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Postal ZIP Zone</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Guaranteed priority dispatch via Express Courier</span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold text-xs uppercase tracking-wider rounded-2xl transition flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>Proceed to Courier</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress20;