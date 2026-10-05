import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight } from 'lucide-react';

export function ShippingAddress11({ data }: { data?: any }) {
  const [street, setStreet] = useState('123 Timeline Way');
  const [city, setCity] = useState('Denver');
  const [zip, setZip] = useState('80202');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Vertical Delivery Route Timeline
        </h2>

        <div className="relative pl-6 sm:pl-10 space-y-8">
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-4 w-0.5 bg-slate-800">
            <motion.div
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-teal-400"
            />
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <MapPin className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">01. Street Location</label>
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <Navigation className="w-3 h-3 text-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">02. City & Region</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 sm:-left-10 top-1 w-5 h-5 rounded-full bg-slate-900 border-2 border-teal-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase text-teal-400 font-semibold mb-2">03. Postal Zone</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 transition"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
          <button className="px-6 py-3 bg-teal-400 hover:bg-teal-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Proceed <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress11;