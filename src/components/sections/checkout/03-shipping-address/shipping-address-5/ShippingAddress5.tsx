import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, ArrowRight, Barcode, PackageCheck } from 'lucide-react';

export function ShippingAddress5({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Cyber Way');
  const [city, setCity] = useState('Austin');
  const [stateZip, setStateZip] = useState('TX 78701');

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 0.4, y: 24, scale: 0.92 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-slate-800 rounded-3xl border border-slate-700 pointer-events-none transform -rotate-2"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 0.7, y: 12, scale: 0.96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute inset-0 bg-slate-850 rounded-3xl border border-slate-700 pointer-events-none transform rotate-1"
        />

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl z-10 text-slate-100"
        >
          <div className="flex items-center justify-between mb-8 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-1">
                <Barcode className="w-4 h-4" /> SHIP_LABEL_45902
              </div>
              <h2 className="text-xl font-bold text-white">Shipping Package Label</h2>
            </div>
            <span className="px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full text-xs font-semibold flex items-center gap-1">
              <PackageCheck className="w-3.5 h-3.5" /> Priority Air
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Delivery Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
                <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">Destination City</label>
                <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                  />
                  <Building className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">State & Postal ZIP</label>
                <input
                  type="text"
                  value={stateZip}
                  onChange={(e) => setStateZip(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-sky-500 transition"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-xs text-slate-400 font-mono">WEIGHT: 1.4 LBS</span>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
                <span>Confirm Parcel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ShippingAddress5;