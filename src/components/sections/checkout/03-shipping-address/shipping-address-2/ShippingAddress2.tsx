import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Truck, ArrowRight, Package, CheckCircle2 } from 'lucide-react';

export function ShippingAddress2({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Market Street, Suite 400');
  const [city, setCity] = useState('San Francisco');
  const [stateZip, setStateZip] = useState('CA 94105');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Side: Animated SVG Delivery Route Panel */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Truck className="w-3.5 h-3.5" />
              <span>Route Dispatch Engine</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Delivery Route</h2>
            <p className="text-xs text-slate-400">Fulfillment Center ➔ Destination Pin</p>

            {/* SVG Animated Route Line */}
            <div className="my-8 relative h-28 bg-slate-950/80 rounded-2xl border border-slate-800 p-4 flex items-center justify-between overflow-hidden">
              <div className="flex flex-col items-center gap-1 relative z-10">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                  <Package className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-slate-400">HUB_SF</span>
              </div>

              {/* Dashed Animated Path */}
              <div className="flex-1 px-4 relative">
                <svg className="w-full h-4 overflow-visible">
                  <line x1="0" y1="8" x2="100%" y2="8" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
                  <motion.line
                    x1="0"
                    y1="8"
                    x2="100%"
                    y2="8"
                    stroke="#818cf8"
                    strokeWidth="2.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
              </div>

              <div className="flex flex-col items-center gap-1 relative z-10">
                <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-indigo-300">DEST</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Guaranteed 2-Day Priority Carrier</span>
          </div>
        </motion.div>

        {/* Right Side: Shipping Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Destination Address</h3>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Street Address</label>
              <div className="relative">
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
                <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">City</label>
                <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <Navigation className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 font-medium mb-1.5">State & ZIP Code</label>
                <input
                  type="text"
                  value={stateZip}
                  onChange={(e) => setStateZip(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">Carrier rates updated</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2">
              <span>Next: Delivery Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ShippingAddress2;