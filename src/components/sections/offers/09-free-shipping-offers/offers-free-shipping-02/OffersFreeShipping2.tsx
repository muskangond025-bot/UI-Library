import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Clock, Sparkles, ChevronDown, ChevronUp, MapPin, Check } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping2({ section }: SectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('US');

  const regions = [
    { code: 'US', name: 'United States', threshold: '$50', time: '2-3 Business Days' },
    { code: 'CA', name: 'Canada', threshold: '$75', time: '3-5 Business Days' },
    { code: 'UK', name: 'United Kingdom', threshold: '£60', time: '2-4 Business Days' },
    { code: 'EU', name: 'European Union', threshold: '€70', time: '3-5 Business Days' },
  ];

  const currentRegion = regions.find(r => r.code === selectedRegion) || regions[0];

  return (
    <section className="w-full py-6 px-4 bg-slate-950 text-white font-sans border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Glass Bar */}
        <div className="bg-gradient-to-r from-slate-900/90 via-indigo-950/80 to-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-indigo-950/50 relative overflow-hidden">
          
          {/* Subtle Ambient Light Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 relative z-10">
            
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center shrink-0 text-indigo-400 shadow-inner">
                <Truck className="w-6 h-6" />
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-semibold uppercase tracking-widest border border-indigo-400/30">
                    GLASSMORTIC FLOATING TICKER
                  </span>
                  <span className="flex items-center gap-1 text-xs text-amber-300 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Promo Ends in 04h : 18m</span>
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Free Express Delivery on Orders Over <span className="text-indigo-400">{currentRegion.threshold}</span>
                </h3>
              </div>
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-3 shrink-0 self-end lg:self-center">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-white/10 rounded-xl px-3 py-1.5 text-xs">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <select 
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
                >
                  {regions.map(r => (
                    <option key={r.code} value={r.code} className="bg-slate-900 text-white">
                      {r.name} ({r.code})
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-indigo-600/30 transition-all"
              >
                <span>{expanded ? 'Hide Details' : 'View Rules'}</span>
                {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Expandable Regional Policy Drawer */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-white/10 mt-4 pt-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-slate-400 block font-medium">Estimated Arrival</span>
                    <span className="text-white font-bold text-sm block">{currentRegion.time}</span>
                    <p className="text-[11px] text-slate-400">Tracked air courier delivery directly to your door.</p>
                  </div>

                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-slate-400 block font-medium">Minimum Spend</span>
                    <span className="text-indigo-300 font-bold text-sm block">{currentRegion.threshold} Subtotal</span>
                    <p className="text-[11px] text-slate-400">Applies automatically at cart checkout stage.</p>
                  </div>

                  <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5 space-y-1">
                    <span className="text-slate-400 block font-medium">Duty & Customs</span>
                    <span className="text-green-400 font-bold text-sm flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> 100% Pre-Paid
                    </span>
                    <p className="text-[11px] text-slate-400">No hidden import fees or courier delivery taxes upon receipt.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping2;
