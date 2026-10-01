import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Truck, ChevronRight } from 'lucide-react';

export default function ShippingDeliveryInformation4({ data }: { data: any }) {
  const settings = data?.section?.settings || {};
  const zones = settings.zones || [
    { region: "Domestic Metro", time: "1–2 Days", rate: "Free over ₹2,999", couriers: ["BlueDart", "Delhivery"] },
    { region: "Regional and Rural", time: "3–5 Days", rate: "₹99 Flat Rate", couriers: ["India Post", "DTDC"] },
    { region: "International Priority", time: "4–7 Days", rate: "₹1,499 Flat Rate", couriers: ["DHL Express", "FedEx"] }
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const currentZone = zones[activeIdx] || zones[0];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-900 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'GLOBAL COVERAGE'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Regional Shipping Zones'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Select your destination zone to inspect transit lead times, rates, and authorized carriers.'}
          </p>
        </div>

        {/* Zones Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Zone Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {zones.map((zone: any, idx: number) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base leading-snug">{zone.region}</h3>
                      <p className="text-xs opacity-70">{zone.time}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? 'translate-x-1 text-cyan-400' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Zone Details Panel with Motion Content Replacement */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-8 relative z-10"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">SELECTED DESTINATION</span>
                    <h3 className="text-3xl font-bold text-white mt-1">{currentZone.region}</h3>
                  </div>
                  <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-300 font-bold text-sm">
                    {currentZone.rate}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                      <Truck className="w-4 h-4 text-cyan-400" />
                      <span>Estimated Transit SLA</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{currentZone.time}</p>
                  </div>

                  <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>Couriers & Logistics</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {currentZone.couriers?.map((c: string, i: number) => (
                        <span key={i} className="text-xs bg-slate-800 px-2.5 py-1 rounded-md text-slate-200 font-medium">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
