import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specs = [
  { id: "camera", title: "48MP Camera", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", detail: "Advanced quad-pixel sensor with 100% Focus Pixels." },
  { id: "battery", title: "29h Battery", icon: "M13 10V3L4 14h7v7l9-11h-7z", detail: "All-day battery life with fast-charge capabilities." },
  { id: "display", title: "Super Retina", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", detail: "ProMotion technology with adaptive refresh rates." },
  { id: "chip", title: "A17 Pro", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", detail: "The first 3-nanometer chip in the industry." },
];

export default function ProductSpecifications17({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#030303] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Sci-Fi glowing background ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] animate-[spin_60s_linear_infinite] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-wide text-center">Interactive Telemetry.</h2>

        {/* Dynamic Tech Ring Interface */}
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          
          {/* Center Content Display */}
          <div className="absolute inset-4 rounded-full bg-neutral-900 border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={specs[activeIndex].icon} />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">{specs[activeIndex].title}</h3>
                <p className="text-xs text-neutral-400 max-w-[200px]">{specs[activeIndex].detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Nodes around the ring */}
          {specs.map((spec, i) => {
            const angle = (i * (360 / specs.length)) * (Math.PI / 180);
            const radius = 50; // percentage
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);
            const isActive = activeIndex === i;

            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className={`absolute inset-0 rounded-full transition-transform duration-300 ${isActive ? 'bg-blue-500 scale-100 shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'bg-neutral-800 scale-75 group-hover:scale-90 border border-white/20'}`} />
                <svg className={`w-5 h-5 relative z-10 transition-colors ${isActive ? 'text-white' : 'text-neutral-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                </svg>
              </button>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
