import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ShippingDeliveryInformation8({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'PRIORITY SPEED'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Express Delivery Spotlight'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Need your order tomorrow? Express air dispatch gets your package delivered within 24 hours.'}
          </p>
        </div>

        {/* Hero Express Card + Secondary Standard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Hero Express Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 border-2 border-amber-500 p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Fast Directional Motion Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex justify-between items-center mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-500 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-current" /> HERO PRIORITY
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold">DISPATCH SLA: 6 HOURS</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Express Air Delivery</h3>
              <p className="text-amber-200/80 text-sm mb-6 max-w-md">
                Guaranteed next-day delivery via dedicated air courier. Includes real-time SMS tracking and priority support.
              </p>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-black text-amber-400">₹199</span>
                <span className="text-xs text-slate-400">/ per order</span>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-500/30 flex items-center justify-between text-xs text-slate-300">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-400" /> Arrives Tomorrow</span>
              <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% On-Time Guarantee</span>
            </div>
          </motion.div>

          {/* Secondary Standard Shipping Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-slate-900 border border-slate-800 p-8 rounded-3xl flex flex-col justify-between opacity-85 hover:opacity-100 transition-opacity"
          >
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-4">SECONDARY OPTION</span>
              <h3 className="text-2xl font-bold text-white mb-2">Standard Ground</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Regular courier shipping for non-urgent deliveries. Delivered safely within 3 to 5 business days.
              </p>
              <div className="text-2xl font-bold text-slate-200 mb-4">₹99 <span className="text-xs text-emerald-400 font-normal">(Free over ₹2,999)</span></div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Delivery: 3–5 Days</span>
              <span className="text-slate-300">Standard Tracking</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
