import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';

export function ShippingAddress12({ data }: { data?: any }) {
  const [street, setStreet] = useState('700 Fashion Boulevard');
  const [city, setCity] = useState('Los Angeles');
  const [zip, setZip] = useState('90015');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-stone-100">
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute -right-8 -top-12 text-[140px] sm:text-[180px] font-serif font-black text-stone-900/50 select-none pointer-events-none"
        >
          DESTINATION
        </motion.div>

        <div className="relative z-10 space-y-8">
          <div className="border-b border-stone-800 pb-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-orange-400 uppercase block mb-1">
                MAGAZINE LOGISTICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-stone-50 tracking-tight">
                Delivery Destination
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-orange-400" /> FedEx Express
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-mono uppercase text-stone-400 mb-2">01 / Street Address</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">02 / City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-stone-400 mb-2">03 / Postal ZIP</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-stone-900/80 border border-stone-800 rounded-none px-4 py-3.5 text-sm text-stone-100 focus:outline-none focus:border-orange-400 transition"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800 flex justify-between items-center">
              <span className="text-xs text-stone-500 font-serif italic">Courier dispatch ready</span>
              <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress12;