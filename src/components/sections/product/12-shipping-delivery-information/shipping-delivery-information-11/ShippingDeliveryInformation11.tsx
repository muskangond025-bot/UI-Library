import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Check } from 'lucide-react';

export default function ShippingDeliveryInformation11({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const rows = [
    { method: "Standard Ground", SLA: "3–5 Business Days", fee: "₹99 (Free > ₹2,999)", tracking: "SMS & Doorstep OTP", badge: "Popular" },
    { method: "Express Air", SLA: "1–2 Business Days", fee: "₹199 Flat", tracking: "Real-Time GPS", badge: "Priority" },
    { method: "Same-Day Metro", SLA: "Within 24 Hours", fee: "₹299 Flat", tracking: "Live Courier Map", badge: "VIP" },
    { method: "Global Priority Air", SLA: "4–7 Business Days", fee: "₹1,499 Flat", tracking: "International Customs", badge: "Global" }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-slate-400 uppercase bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'TRANSPARENT TARIFFS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Editorial Shipping Matrix'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Detailed tabular breakdown of carrier service levels, insurance, and transit rates.'}
          </p>
        </div>

        {/* Refined Editorial Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/80 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-5 px-6">Shipping Method</th>
                  <th className="py-5 px-6">Transit Window</th>
                  <th className="py-5 px-6">Tariff Rate</th>
                  <th className="py-5 px-6">Tracking Level</th>
                  <th className="py-5 px-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-sm">
                {rows.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="hover:bg-slate-800/50 transition-colors group"
                  >
                    <td className="py-5 px-6 font-semibold text-white group-hover:text-indigo-400 transition-colors">
                      {row.method}
                    </td>
                    <td className="py-5 px-6 text-slate-300 font-mono text-xs">
                      {row.SLA}
                    </td>
                    <td className="py-5 px-6 font-bold text-emerald-400">
                      {row.fee}
                    </td>
                    <td className="py-5 px-6 text-slate-400 text-xs">
                      {row.tracking}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-full border border-slate-700">
                        {row.badge}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
