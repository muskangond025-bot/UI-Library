import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Plane, Home } from 'lucide-react';

export default function ShippingDeliveryInformation9({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const steps = settings.processSteps || [
    { step: "01", name: "Quality Check & Pack", time: "Day 1", icon: Package },
    { step: "02", name: "Courier Dispatch", time: "Day 1", icon: Truck },
    { step: "03", name: "Air / Surface Transit", time: "Days 2-4", icon: Plane },
    { step: "04", name: "Doorstep Delivery", time: "Day 5", icon: Home }
  ];

  const icons = [Package, Truck, Plane, Home];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'FOUR-STEP PROCESS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'How Your Order Travels'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Every package follows a rigorous 4-stage quality check and transit pipeline.'}
          </p>
        </div>

        {/* Process Steps Cards with Step-by-Step Progression */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s: any, idx: number) => {
            const IconComp = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500 transition-colors"
              >
                {/* Step Number Background Accent */}
                <span className="absolute top-4 right-4 text-5xl font-black text-slate-800 group-hover:text-indigo-500/20 transition-colors pointer-events-none">
                  {s.step}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-indigo-400 block mb-1">STAGE {s.step}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{s.name}</h3>
                </div>

                <div className="pt-4 border-t border-slate-800/80 mt-6 flex justify-between items-center text-xs text-slate-400">
                  <span>Target SLA</span>
                  <span className="font-semibold text-slate-200">{s.time}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
