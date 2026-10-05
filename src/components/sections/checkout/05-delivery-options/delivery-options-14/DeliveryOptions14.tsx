import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Clock, ArrowRight, Check } from 'lucide-react';

export function DeliveryOptions14({ data }: { data?: any }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const tiers = [
    { id: 0, label: 'Standard Ground Delivery', price: 'Free', time: '3-5 Business Days', icon: Truck },
    { id: 1, label: 'Priority Express Air Courier', price: '$14.99', time: '1-2 Business Days', icon: Zap },
    { id: 2, label: 'VIP Same-Day Delivery', price: '$24.99', time: 'Today by 7:00 PM', icon: Clock },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              SELECTION SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Gliding Shipping Tier System</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full">
            Selected Tier #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-4">
          {tiers.map((t) => {
            const Icon = t.icon;
            const isActive = activeIdx === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveIdx(t.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                  isActive ? 'bg-slate-950 border-lime-400/80 shadow-lg shadow-lime-400/5 text-white' : 'bg-slate-950/40 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-lime-400' : 'text-slate-500'}`} />
                  <div>
                    <span className="text-xs font-bold block">{t.label}</span>
                    <span className="text-[11px] text-slate-400">{t.time}</span>
                  </div>
                </div>
                <span className={`text-xs font-bold ${isActive ? 'text-lime-400' : 'text-slate-300'}`}>{t.price}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-lime-400 flex items-center gap-1 font-medium">
            <Check className="w-4 h-4" /> Active selection gliding system
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOptions14;