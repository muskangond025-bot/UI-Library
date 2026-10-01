import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

export default function ShippingDeliveryInformation19({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-20 px-6 md:px-16 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Top Headline Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-slate-800 pb-12 mb-14 gap-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              {settings.eyebrow || 'FULL BLEED VIEW'}
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white max-w-3xl leading-none">
              {settings.title || 'Full-Width Logistics Showcase'}
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
            {settings.description || 'Immersive full-screen editorial spread presenting complete shipping capabilities.'}
          </p>
        </div>

        {/* Cinematic Horizontal Progression Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[260px] group hover:border-indigo-500 transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Standard Delivery</h3>
              <p className="text-xs text-slate-400 leading-relaxed">3–5 Business Days ground transit across India with live tracking SMS.</p>
            </div>
            <div className="text-xl font-bold text-emerald-400 mt-6 pt-4 border-t border-slate-800">₹99 Flat Rate</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[260px] group hover:border-indigo-500 transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Priority Express</h3>
              <p className="text-xs text-slate-400 leading-relaxed">1–2 Business Days expedited air freight for urgent orders.</p>
            </div>
            <div className="text-xl font-bold text-amber-400 mt-6 pt-4 border-t border-slate-800">₹199 Air SLA</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[260px] group hover:border-indigo-500 transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Worldwide Air Hub</h3>
              <p className="text-xs text-slate-400 leading-relaxed">4–7 Business Days customs-cleared global priority air shipment.</p>
            </div>
            <div className="text-xl font-bold text-cyan-400 mt-6 pt-4 border-t border-slate-800">₹1,499 Priority</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
