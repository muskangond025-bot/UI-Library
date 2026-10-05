import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ShippingAddress19({ data }: { data?: any }) {
  const [street, setStreet] = useState('101 Minimalist Way');
  const [city, setCity] = useState('Seattle');
  const [zip, setZip] = useState('98104');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-mono text-zinc-100">
      <div className="bg-zinc-950 border border-zinc-800 p-8 sm:p-12 rounded-none space-y-8 shadow-2xl">
        <div className="flex justify-between items-end border-b border-zinc-800 pb-6">
          <div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">[LAT/LONG: 47.6062° N, 122.3321° W]</span>
            <h2 className="text-2xl font-bold uppercase tracking-widest text-zinc-100">DESTINATION_COORDINATES</h2>
          </div>
          <span className="text-xs text-zinc-500 font-normal">LOGISTICS ARCHITECTURE</span>
        </div>

        <div className="relative w-full h-px bg-zinc-900 overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-full bg-zinc-200"
          />
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">01 // STREET_LOCATION</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">02 // CITY_JURISDICTION</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-400 mb-2">03 // POSTAL_ZONE</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-zinc-200 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 flex justify-end">
            <button className="px-8 py-4 bg-zinc-100 hover:bg-white text-zinc-950 font-bold text-xs uppercase tracking-widest transition flex items-center gap-2">
              <span>PROCEED</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress19;