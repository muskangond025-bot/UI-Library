import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Globe, ArrowRight, Home, Briefcase } from 'lucide-react';

export function ShippingAddress1({ data }: { data?: any }) {
  const [addressType, setAddressType] = useState<'home' | 'office'>('home');
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [stateZip, setStateZip] = useState('OR 97477');
  const [country, setCountry] = useState('United States');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl relative overflow-hidden"
      >
        {/* Vector Coordinates Accent Background */}
        <div className="absolute top-4 right-6 text-[10px] font-mono text-amber-500/30 pointer-events-none select-none hidden sm:block">
          LAT: 37.7749° N // LONG: 122.4194° W
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-1">
              <Compass className="w-3.5 h-3.5" /> 02 — LOCATION DISPATCH
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Delivery Address Grid
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-stone-800/80 p-1.5 rounded-full border border-stone-700/50">
            <button
              onClick={() => setAddressType('home')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                addressType === 'home' ? 'bg-amber-400 text-stone-950 font-semibold shadow-md' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Home className="w-3.5 h-3.5" /> Residential Villa
            </button>
            <button
              onClick={() => setAddressType('office')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                addressType === 'office' ? 'bg-amber-400 text-stone-950 font-semibold shadow-md' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" /> Corporate HQ
            </button>
          </div>
        </motion.div>

        <div className="mt-8 space-y-6">
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Primary Street Destination *</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
              />
              <MapPin className="w-4 h-4 text-amber-400 absolute left-4 top-3.5" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">City Jurisdiction *</label>
              <div className="relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
                <Navigation className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">State / Postal Code *</label>
              <input
                type="text"
                value={stateZip}
                onChange={(e) => setStateZip(e.target.value)}
                className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Territory / Region *</label>
              <div className="relative">
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition appearance-none"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                </select>
                <Globe className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
            <span className="text-xs text-stone-400 flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> GPS Address Validated
            </span>
            <button className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition flex items-center justify-center gap-2">
              Proceed to Shipping Methods <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress1;