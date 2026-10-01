import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Plane, ShieldCheck } from 'lucide-react';

export default function ShippingDeliveryInformation7({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase bg-sky-500/10 border border-sky-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'LOGISTICS ROUTE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Delivery Map & Hub Network'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Visualizing active courier flight routes and regional distribution centers worldwide.'}
          </p>
        </div>

        {/* Abstract Map Canvas Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative Dot Grid */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Flight Arc Path */}
            <div className="lg:col-span-8 relative h-64 sm:h-80 w-full flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 800 300" fill="none" preserveAspectRatio="xMidYMid meet">
                {/* Background dashed route */}
                <path
                  d="M 100 220 Q 400 40 700 220"
                  stroke="#1e293b"
                  strokeWidth="4"
                  strokeDasharray="8 8"
                />

                {/* Animated Gradient Route Path */}
                <motion.path
                  d="M 100 220 Q 400 40 700 220"
                  stroke="url(#skyGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                <defs>
                  <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Hub Node 1: Origin */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute left-[10%] bottom-[20%] flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-sky-300 mt-2 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                  Central Hub
                </span>
              </motion.div>

              {/* Hub Node 2: Transit */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute left-[50%] top-[15%] flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border-2 border-indigo-400 flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.5)]">
                  <Plane className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-indigo-300 mt-2 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                  Air Sort Center
                </span>
              </motion.div>

              {/* Hub Node 3: Destination */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.0, type: "spring" }}
                className="absolute right-[10%] bottom-[20%] flex flex-col items-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-300 mt-2 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                  Your Address
                </span>
              </motion.div>
            </div>

            {/* Coverage Legend Info Panel */}
            <div className="lg:col-span-4 space-y-4 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">Coverage Guarantee</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct integration with regional express air routes ensures 99.4% on-time delivery across 18,000+ postal codes.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Encrypted GPS Chain of Custody</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
