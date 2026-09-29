import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specs = [
  { category: "Processor", value: "A17 Pro chip", details: ["New 6-core CPU with 2 performance and 4 efficiency cores", "New 6-core GPU", "New 16-core Neural Engine"] },
  { category: "Display", value: "Super Retina XDR", details: ["6.7-inch (diagonal) all-screen OLED display", "2796-by-1290-pixel resolution at 460 ppi", "Dynamic Island", "Always-On display", "ProMotion technology"] },
  { category: "Camera", value: "Pro camera system", details: ["48MP Main: 24 mm, f/1.78 aperture", "12MP Ultra Wide: 13 mm, f/2.2 aperture", "12MP 5x Telephoto: 120 mm, f/2.8 aperture"] },
  { category: "Power and Battery", value: "Up to 29 hours", details: ["Video playback: Up to 29 hours", "Audio playback: Up to 95 hours", "Built-in rechargeable lithium-ion battery", "MagSafe wireless charging up to 15W"] }
];

export default function ProductSpecifications6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-16 border-b border-black pb-8">Detailed Specifications</h2>
        
        <div className="flex flex-col">
          {specs.map((spec, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div key={i} className="border-b border-neutral-200">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full">
                    <span className="text-lg font-bold text-neutral-400 w-48">{spec.category}</span>
                    <span className="text-2xl font-medium text-black group-hover:text-blue-600 transition-colors">{spec.value}</span>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-8 md:pl-56 space-y-3">
                        {spec.details.map((detail, j) => (
                          <li key={j} className="text-neutral-500 text-lg flex items-start gap-3">
                            <span className="text-blue-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
