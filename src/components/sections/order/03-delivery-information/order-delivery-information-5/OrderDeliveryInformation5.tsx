import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Package, Clock } from 'lucide-react';

export function OrderDeliveryInformation5() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Visual Route Map</span>
            <h2 className="text-2xl font-bold text-white">Transit Logistics View</h2>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            REF: <span className="text-cyan-400">DH-TRK-28491</span>
          </div>
        </div>

        {/* Abstract Map Canvas */}
        <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-6 overflow-hidden min-h-[260px] flex items-center justify-center">
          {/* SVG Route */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-800 fill-none" strokeWidth="2">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Curved Path */}
            <motion.path
              d="M 80,180 C 250,50 450,220 720,100"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="8 8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Map Markers */}
          <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-center gap-6 px-4 sm:px-12">
            <div className="flex items-center gap-3 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 shadow-xl">
              <div className="p-2 bg-cyan-500/20 text-cyan-400 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Origin Hub</p>
                <p className="text-sm font-semibold text-white">Chicago Fulfillment Center</p>
              </div>
            </div>

            <div className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-4 py-2 rounded-full font-mono text-xs font-bold flex items-center gap-2 shadow-lg backdrop-blur">
              <Navigation className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} /> In Transit Across US
            </div>

            <div className="flex items-center gap-3 bg-slate-950/90 p-3.5 rounded-xl border border-slate-800 shadow-xl">
              <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-mono">Destination</p>
                <p className="text-sm font-semibold text-white">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Details Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Estimated Delivery</span>
            <p className="text-base font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" /> Oct 12–15, 2026
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Carrier</span>
            <p className="text-base font-bold text-white flex items-center gap-2">
              <Package className="w-4 h-4 text-cyan-400" /> DripExpress Air
            </p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Shipping Speed</span>
            <p className="text-base font-bold text-white">Standard (3-5 Days)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation5;
