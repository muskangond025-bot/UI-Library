import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ShippingDeliveryInformation20({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const y = useMotionValue(0);
  const progress = useTransform(y, [0, 240], [0, 100]);
  
  const activePhase = useTransform(progress, (v) => {
    if (v < 25) return 0;
    if (v < 50) return 1;
    if (v < 75) return 2;
    return 3;
  });

  const [currentPhase, setCurrentPhase] = useState(0);

  activePhase.onChange((v) => setCurrentPhase(v));

  const phases = [
    { title: "Quality Check & Pack", time: "Day 1 SLA", desc: "Warehouse pick & eco protection" },
    { title: "Courier Dispatch", time: "Day 1 SLA", desc: "Handed over to priority carrier" },
    { title: "In Transit Route", time: "Days 2-4 SLA", desc: "Air & surface express transit" },
    { title: "Doorstep Delivered", time: "Day 5 SLA", desc: "Photo & OTP verified delivery" }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'EXPERIMENTAL UI'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Interactive Draggable Timeline'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Drag the tactile progress indicator to scrub through each phase of fulfillment.'}
          </p>
        </div>

        {/* Interactive Scrubbing Canvas */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-2">
              ACTIVE STAGE {currentPhase + 1} / 4
            </span>
            
            <div className="h-28 overflow-hidden relative">
              <motion.div 
                animate={{ y: currentPhase * -112 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              >
                {phases.map((phase, i) => (
                  <div key={i} className="h-28 flex flex-col justify-center">
                    <span className="text-3xl md:text-4xl font-extrabold text-emerald-400 tracking-tight uppercase">{phase.title}</span>
                    <span className="text-xs text-slate-400 font-mono mt-1">{phase.time} — {phase.desc}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="relative h-72 w-4 bg-slate-950 rounded-full shrink-0 shadow-inner border border-slate-800">
            {/* Progress fill */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full origin-top"
              style={{ height: y }}
            />
            
            {/* Draggable Knob */}
            <motion.div
              className="absolute -left-3 top-0 w-10 h-10 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-slate-950 z-10"
              drag="y"
              dragConstraints={{ top: 0, bottom: 240 }}
              dragElastic={0.1}
              style={{ y }}
            >
              <div className="w-2.5 h-2.5 bg-slate-950 rounded-full" />
            </motion.div>
            
            {/* Notches */}
            {[0, 80, 160, 240].map((pos, i) => (
              <div key={i} className="absolute left-6 w-4 h-0.5 bg-slate-800" style={{ top: pos + 20 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
