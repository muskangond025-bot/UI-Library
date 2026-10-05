import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ArrowRight, ShieldCheck } from 'lucide-react';

export function ShippingAddress6({ data }: { data?: any }) {
  const [street, setStreet] = useState('888 Grand Avenue');
  const [city, setCity] = useState('New York');
  const [zip, setZip] = useState('10001');
  const [instructions, setInstructions] = useState('Leave with doorman');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <motion.div variants={colVariants} className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              ASYMMETRIC LOGISTICS GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              COURIER DISPATCH COORDINATES
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Organized geographic coordinates optimized for last-mile delivery.
            </p>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Street Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <MapPin className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">City</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Postal ZIP</label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-2">Gate Instructions</h3>
              <input
                type="text"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 px-3 py-2 text-xs text-zinc-100 rounded focus:outline-none"
              />
            </div>

            <button className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
              <span>Submit Address</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress6;