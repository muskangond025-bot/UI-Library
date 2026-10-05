import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass, Shield, ArrowRight, Navigation } from 'lucide-react';

export function ShippingAddress8({ data }: { data?: any }) {
  const [street, setStreet] = useState('777 Fifth Avenue');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('10022');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="relative bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
        {/* Animated Light Sweep Effect */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none"
        />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-500/20 pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-mono mb-1">
              <Compass className="w-4 h-4 animate-spin-slow" /> VIP DISPATCH DESTINATION
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">Shipping Address</h2>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            Latitude: 40.7637° N
          </span>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Street Residence / Suite</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">City Jurisdiction</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 pl-11 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
                />
                <Navigation className="w-4 h-4 text-amber-400/60 absolute left-4 top-4" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-amber-200/70 mb-2">Postal ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-900/80 border border-amber-500/20 rounded-xl px-4 py-3.5 text-sm text-amber-50 focus:outline-none focus:border-amber-400 transition"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" /> Concierge priority courier assigned
            </span>
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              <span>Proceed to Courier</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress8;