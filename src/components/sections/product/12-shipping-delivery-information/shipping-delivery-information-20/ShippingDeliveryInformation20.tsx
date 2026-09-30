import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ShippingDeliveryInformation20({ data }: { data: any }) {
  const y = useMotionValue(0);
  const progress = useTransform(y, [0, 240], [0, 100]);
  
  // Interpolate phase based on drag position
  const activePhase = useTransform(progress, (v) => {
    if (v < 25) return 0;
    if (v < 50) return 1;
    if (v < 75) return 2;
    return 3;
  });

  const [currentPhase, setCurrentPhase] = useState(0);

  // Sync motion value to state for rendering
  activePhase.onChange((v) => setCurrentPhase(v));

  const phases = ["Processing", "Packaging", "In Transit", "Delivered"];

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-center justify-center gap-16 relative">
      <div className="text-white text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Interactive Tracker</h2>
        <p className="text-neutral-400 mb-8 max-w-xs">Drag the white indicator down the timeline to explore different delivery phases.</p>
        
        <div className="h-20 overflow-hidden relative">
          <motion.div 
            animate={{ y: currentPhase * -80 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {phases.map((phase, i) => (
              <div key={i} className="h-20 flex flex-col justify-center">
                <span className="text-4xl font-black text-emerald-400 tracking-tighter uppercase">{phase}</span>
                <span className="text-neutral-500 font-mono text-sm tracking-widest">PHASE {i + 1}/4</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative h-72 w-4 bg-neutral-800 rounded-full shrink-0 shadow-inner">
        {/* Progress fill */}
        <motion.div 
          className="absolute top-0 left-0 w-full bg-emerald-500 rounded-full origin-top"
          style={{ height: y }}
        />
        
        {/* Draggable Knob */}
        <motion.div
          className="absolute -left-3 top-0 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing border-4 border-neutral-900 z-10"
          drag="y"
          dragConstraints={{ top: 0, bottom: 240 }}
          dragElastic={0.1}
          style={{ y }}
        >
          <div className="w-2 h-2 bg-neutral-900 rounded-full" />
        </motion.div>
        
        {/* Notches */}
        {[0, 80, 160, 240].map((pos, i) => (
          <div key={i} className="absolute left-6 w-4 h-0.5 bg-neutral-700" style={{ top: pos + 20 }} />
        ))}
      </div>
    </div>
  );
}
