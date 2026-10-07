import React, { useState } from 'react';
import { ShieldCheck, Zap, Crown, Check, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping4({ section }: SectionProps) {
  const [selectedTier, setSelectedTier] = useState<string>('tier2');

  const tiers = [
    {
      id: 'tier1',
      name: 'Standard Courier',
      icon: ShieldCheck,
      threshold: '$35 Minimum',
      speed: '4-6 Business Days',
      price: 'FREE',
      popular: false,
      features: ['Tracking included', 'Standard box packaging', 'Standard dispatch queue']
    },
    {
      id: 'tier2',
      name: 'Express Priority',
      icon: Zap,
      threshold: '$75 Minimum',
      speed: '2 Business Days',
      price: 'FREE',
      popular: true,
      features: ['Priority dispatch queue', 'Eco-friendly insulated box', 'SMS delivery alerts', 'Signature on arrival']
    },
    {
      id: 'tier3',
      name: 'VIP Overnight',
      icon: Crown,
      threshold: '$150 Minimum',
      speed: 'Next-Day Delivery',
      price: 'FREE',
      popular: false,
      features: ['Guaranteed morning arrival', 'Dedicated courier agent', 'Zero-fee return pickup', 'VIP gift wrapping']
    }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-slate-950 text-white font-sans border-y border-slate-800 relative overflow-hidden">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold uppercase tracking-widest">
            3-TIER DELIVERY MATRIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-500 tracking-tight">
            Choose Your Delivery Unlock Level
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Higher order subtotals automatically upgrade your shipping tier to faster delivery speeds at zero extra charge.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedTier === t.id;

            return (
              <div
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`cursor-pointer rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.2)] scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-[10px] font-mono font-black uppercase tracking-widest shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-6">
                  {/* Top Header */}
                  <div className="flex items-start justify-between border-b border-slate-800 pb-5">
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold uppercase block">{t.threshold}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{t.name}</h3>
                    </div>
                    <div className={`p-3 rounded-2xl ${isSelected ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/40' : 'bg-slate-800 text-slate-400'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Speed Banner */}
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 block font-mono">Speed & Arrival:</span>
                    <span className="text-2xl font-black text-white block tracking-tight">{t.speed}</span>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">Cost: {t.price} OVER THRESHOLD</span>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                    {t.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Select Action */}
                <button
                  className={`mt-8 w-full py-3 rounded-xl font-mono font-bold text-xs uppercase flex items-center justify-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{isSelected ? 'SELECTED TIER' : 'SELECT TIER'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping4;
