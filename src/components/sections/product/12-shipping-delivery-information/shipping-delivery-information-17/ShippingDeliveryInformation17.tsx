import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, ShieldCheck } from 'lucide-react';

export default function ShippingDeliveryInformation17({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'MODERN ARCHITECTURE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Asymmetric Shipping Overview'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Dynamic visual balance placing emphasis on rapid transit timeframes.'}
          </p>
        </div>

        {/* Deliberately Asymmetric Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Large Left Stat Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl flex flex-col justify-between min-h-[380px]"
          >
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-4">PRIMARY SLA</span>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
                24–48h
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Priority express dispatch guaranteed across major metro corridors with real-time GPS tracking.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Full Transit Insurance Included</span>
            </div>
          </motion.div>

          {/* Right Stacked Shipping Methods */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between hover:border-indigo-500/50 transition-colors"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Standard Ground</h4>
                <p className="text-xs text-slate-400">3–5 Business Days nationwide</p>
              </div>
              <span className="text-xl font-bold text-emerald-400">₹99</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between hover:border-indigo-500/50 transition-colors"
            >
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Express Air</h4>
                <p className="text-xs text-slate-400">1–2 Business Days priority</p>
              </div>
              <span className="text-xl font-bold text-indigo-400">₹199</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
