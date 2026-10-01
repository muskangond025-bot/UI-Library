import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ShieldCheck, Clock } from 'lucide-react';

export default function ShippingDeliveryInformation2({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const methods = settings.methods || [
    { id: 'std', name: 'Standard Ground', deliveryTime: '3–5 Business Days', shippingFee: '₹99', description: 'Reliable nationwide courier shipping with doorstep tracking.', badge: 'Popular' },
    { id: 'exp', name: 'Express Air', deliveryTime: '1–2 Business Days', shippingFee: '₹199', description: 'Priority air dispatch for time-sensitive deliveries.', badge: 'Fastest' },
    { id: 'nxt', name: 'Same-Day Delivery', deliveryTime: 'Within 24 Hours', shippingFee: '₹299', description: 'Dedicated courier dispatch in select metro zones.', badge: 'VIP' }
  ];

  const [selectedId, setSelectedId] = useState(methods[0]?.id || 'std');

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-zinc-900 text-white rounded-3xl overflow-hidden relative border border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'SERVICE TIERS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Shipping Method Comparison'}
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">
            {settings.description || 'Compare transit speeds, costs, and tracking inclusions across our three tiers.'}
          </p>
        </div>

        {/* Comparative Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method: any) => {
            const isSelected = selectedId === method.id;
            return (
              <motion.div
                key={method.id}
                onClick={() => setSelectedId(method.id)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative cursor-pointer p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-800/90 border-indigo-500 shadow-[0_0_30px_rgba(99,102,241,0.2)]'
                    : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Selection Transition Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeMethodHighlight"
                    className="absolute inset-0 rounded-3xl border-2 border-indigo-500 pointer-events-none"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {method.badge || 'Tier'}
                    </span>
                    {isSelected && (
                      <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                  <div className="text-3xl font-extrabold text-indigo-400 mb-4">{method.shippingFee}</div>

                  <div className="inline-flex items-center gap-2 text-sm text-zinc-300 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 mb-6">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>{method.deliveryTime}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {method.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Doorstep Delivery</span>
                  <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-amber-400" /> GPS Tracked</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
