import React from 'react';
import { motion } from 'framer-motion';
import { Warehouse, Truck, Building2, Home } from 'lucide-react';

export function OrderDeliveryInformation11() {
  const steps = [
    { title: 'Warehouse Fulfillment', desc: 'Package packed & labeled at Chicago Hub', date: 'Oct 12, 09:30 AM', icon: Warehouse, status: 'completed' },
    { title: 'In Transit Across Hubs', desc: 'Departed sorting facility on flight DE-842', date: 'Oct 13, 04:15 PM', icon: Truck, status: 'active' },
    { title: 'Local Sorting Hub', desc: 'Arriving at San Francisco Regional Hub', date: 'Expected Oct 14', icon: Building2, status: 'pending' },
    { title: 'Final Doorstep Delivery', desc: 'Contactless delivery to front porch', date: 'Expected Oct 15', icon: Home, status: 'pending' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Vertical Logistics Timeline</span>
          <h2 className="text-2xl font-bold text-white">Delivery Journey Stages</h2>
        </div>

        <div className="relative pl-6 space-y-8 border-l-2 border-slate-800">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="relative pl-4"
              >
                <div className={`absolute -left-[37px] top-0 p-2 rounded-full border-2 ${
                  s.status === 'active'
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 ring-4 ring-cyan-500/20'
                    : s.status === 'completed'
                    ? 'bg-slate-800 text-cyan-400 border-cyan-500'
                    : 'bg-slate-900 text-slate-600 border-slate-800'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    {s.status === 'active' && (
                      <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">Active Stage</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
                  <span className="text-[11px] font-mono text-slate-500 mt-1 block">{s.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation11;
