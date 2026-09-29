import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSpecifications19({ data }: { data: any }) {
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null);

  const specs = [
    { title: "Weight", old: "206 grams", new: "187 grams", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0" },
    { title: "Graphics", old: "5-core GPU", new: "6-core Pro GPU", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3" },
    { title: "Transfer Speed", old: "USB 2 (480Mbps)", new: "USB 3 (10Gbps)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Optical Zoom", old: "3x Telephoto", new: "5x Telephoto", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" }
  ];

  return (
    <section className="py-24 bg-neutral-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-black mb-4">Generational Leap.</h2>
          <p className="text-xl text-neutral-500">Hover to see the massive upgrades across the board.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specs.map((spec, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredSpec(i)}
              onMouseLeave={() => setHoveredSpec(null)}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-200 relative overflow-hidden h-48 cursor-default"
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                </svg>
                <h3 className="text-xl font-bold text-black">{spec.title}</h3>
              </div>

              {/* Default State (Previous Gen) */}
              <div className="absolute inset-x-8 bottom-8 z-10">
                <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold mb-1">Previous Gen</p>
                <p className="text-2xl font-medium text-neutral-500">{spec.old}</p>
              </div>

              {/* Hover State (Glassmorphic Slide-up Overlay for New Gen) */}
              <AnimatePresence>
                {hoveredSpec === i && (
                  <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute inset-0 bg-blue-600 p-8 flex flex-col justify-end z-20"
                  >
                    <div className="absolute top-8 right-8">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">Upgraded</span>
                    </div>
                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold mb-1">New Gen</p>
                    <p className="text-3xl font-black text-white">{spec.new}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
