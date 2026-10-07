import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, CheckCircle, Package, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping5({ section }: SectionProps) {
  const [activeStep, setActiveStep] = useState<number>(2);

  const stops = [
    { level: 1, amount: 25, perk: 'Standard Delivery ($5.99)', label: 'Order Started' },
    { level: 2, amount: 50, perk: 'FREE Ground Shipping', label: 'Threshold 1' },
    { level: 3, amount: 75, perk: 'FREE Express 2-Day Air', label: 'Threshold 2' },
    { level: 4, amount: 100, perk: 'FREE Next-Day VIP Delivery', label: 'Max Level' }
  ];

  const currentStop = stops[activeStep - 1];

  return (
    <section className="w-full py-14 px-4 bg-emerald-950 font-sans text-white border-y border-emerald-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-900 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            DELIVERY ROUTE ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Drive Your Way To Zero Delivery Fees
          </h2>
          <p className="text-emerald-200/80 text-sm">
            Click milestone stops along the delivery route to see how order value unlocks faster delivery speeds.
          </p>
        </div>

        {/* Route Map Card */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl space-y-10">
          
          {/* Animated Route Line */}
          <div className="relative pt-8 pb-4">
            
            {/* Background Road Line */}
            <div className="w-full h-3 bg-slate-800 rounded-full relative overflow-hidden border border-slate-700">
              <motion.div 
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-green-300 rounded-full"
                animate={{ width: `${((activeStep - 1) / (stops.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            {/* Moving Delivery Truck */}
            <motion.div
              className="absolute top-1 -translate-y-1/2 z-20"
              animate={{ left: `${((activeStep - 1) / (stops.length - 1)) * 92}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-400 border-2 border-slate-950 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <Truck className="w-6 h-6 animate-pulse" />
              </div>
            </motion.div>

            {/* Step Milestones */}
            <div className="flex justify-between items-center relative z-10 -mt-2">
              {stops.map((s) => {
                const isPassed = s.level <= activeStep;
                return (
                  <button
                    key={s.level}
                    onClick={() => setActiveStep(s.level)}
                    className="flex flex-col items-center gap-2 focus:outline-none group"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs border-2 transition-all ${
                      isPassed 
                        ? 'bg-emerald-400 text-slate-950 border-emerald-300 ring-4 ring-emerald-500/20 scale-110' 
                        : 'bg-slate-800 text-slate-400 border-slate-700 group-hover:border-slate-500'
                    }`}>
                      {isPassed ? <CheckCircle className="w-4 h-4" /> : s.level}
                    </div>
                    <span className="text-[11px] font-bold text-slate-300 hidden sm:block">${s.amount}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Current Milestone Detail Box */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase block">MILESTONE REWARD</span>
                <h4 className="text-lg font-bold text-white">{currentStop.perk}</h4>
                <p className="text-xs text-slate-400 mt-0.5">Unlocked when cart reaches ${currentStop.amount}.00 subtotal</p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-slate-400">Cart Target: ${currentStop.amount}</span>
              <button
                onClick={() => setActiveStep((prev) => Math.min(stops.length, prev + 1))}
                disabled={activeStep === stops.length}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase flex items-center gap-2 shadow-lg transition-all"
              >
                <span>Next Milestone</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping5;
