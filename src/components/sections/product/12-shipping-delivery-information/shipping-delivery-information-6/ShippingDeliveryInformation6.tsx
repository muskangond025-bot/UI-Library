import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Shield, MapPin, Zap, RefreshCw } from 'lucide-react';

export default function ShippingDeliveryInformation6({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const blocks = [
    { title: "Standard SLA", value: "3–5 Days", detail: "Nationwide ground delivery", icon: Clock, color: "border-blue-500/40 text-blue-400" },
    { title: "Flat Base Rate", value: "₹99 Flat", detail: "Free over ₹2,999", icon: DollarSign, color: "border-emerald-500/40 text-emerald-400" },
    { title: "Dispatch Window", value: "Within 24h", detail: "Same-day cutoff at 2 PM", icon: Zap, color: "border-amber-500/40 text-amber-400" },
    { title: "Live Tracking", value: "GPS Active", detail: "SMS & WhatsApp updates", icon: MapPin, color: "border-purple-500/40 text-purple-400" },
    { title: "Transit Insurance", value: "100% Covered", detail: "Zero hassle claims", icon: Shield, color: "border-rose-500/40 text-rose-400" },
    { title: "Return Exchange", value: "7 Days Free", detail: "Reverse doorstep pickup", icon: RefreshCw, color: "border-cyan-500/40 text-cyan-400" }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'AT A GLANCE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Structured Information Grid'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Comprehensive overview of logistics metrics, dispatch SLA, and tracking guarantees.'}
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b: any, idx: number) => {
            const IconComponent = b.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-3xl bg-slate-900/60 border ${b.color} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{b.title}</span>
                    <IconComponent className="w-5 h-5 opacity-80" />
                  </div>
                  <div className="text-3xl font-extrabold text-white mb-2">{b.value}</div>
                </div>
                <p className="text-xs text-slate-400 border-t border-slate-800/80 pt-4 mt-2">
                  {b.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
