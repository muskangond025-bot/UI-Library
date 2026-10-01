import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, DollarSign, ShieldCheck, MapPin } from 'lucide-react';

export default function ShippingDeliveryInformation16({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  return (
    <div className="w-full py-12 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-2">
            {settings.eyebrow || 'MOBILE OPTIMIZED'}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-2">
            {settings.title || 'Mobile-First Logistics Card'}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            {settings.description || 'Compact, high-contrast mobile view designed for effortless thumb scrolling.'}
          </p>
        </div>

        {/* Mobile Stacked Card Layout -> Intelligent Desktop Flex */}
        <div className="space-y-3 md:space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">ESTIMATED SLA</span>
                <span className="text-base font-bold text-white">3–5 Business Days</span>
              </div>
            </div>
            <span className="text-xs font-semibold bg-slate-800 px-2.5 py-1 rounded-md text-slate-300">Standard</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">SHIPPING FEE</span>
                <span className="text-base font-bold text-emerald-400">₹99 <span className="text-xs font-normal text-slate-400">(Free &gt; ₹2,999)</span></span>
              </div>
            </div>
            <span className="text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-md">Threshold Eligible</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block">TRACKING GUARANTEE</span>
                <span className="text-base font-bold text-white">Live SMS & WhatsApp Alerts</span>
              </div>
            </div>
            <span className="text-xs font-semibold bg-purple-500/10 border border-purple-500/30 text-purple-300 px-2.5 py-1 rounded-md">Active</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
