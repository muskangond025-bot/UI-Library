import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modes = [
  { id: "performance", label: "Performance", text: "Unleash maximum power. The GPU cores automatically overclock to deliver sustained frame rates." },
  { id: "efficiency", label: "Efficiency", text: "Save battery life. Background tasks are suspended and the display refresh rate adapts intelligently." },
  { id: "focus", label: "Focus", text: "Silence distractions. Only critical notifications break through your personalized filter." }
];

export default function ProductFeatures19({ data }: { data: any }) {
  const [activeMode, setActiveMode] = useState(modes[0].id);

  const activeContent = modes.find(m => m.id === activeMode);

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* Toggle Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {modes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className="relative px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
            >
              {activeMode === mode.id && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${activeMode === mode.id ? 'text-black' : 'text-neutral-500'}`}>
                {mode.label}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div className="relative h-64 bg-neutral-900 border border-white/10 rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-12 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMode}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-light text-white leading-relaxed"
            >
              {activeContent?.text}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
