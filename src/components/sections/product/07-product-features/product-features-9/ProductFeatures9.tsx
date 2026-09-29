import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductFeatures9({ data }: { data: any }) {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  const spots = [
    { top: "30%", left: "40%", title: "Titanium Frame", desc: "Grade 5 titanium alloy for absolute durability." },
    { top: "50%", left: "60%", title: "Action Button", desc: "Customizable shortcut to your favorite tools." },
    { top: "70%", left: "45%", title: "USB-C Port", desc: "Universal charging and 10Gbps data transfer." },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <h2 className="text-5xl font-black text-white mb-16">Interactive hardware.</h2>

        <div className="relative w-full max-w-lg aspect-[9/16] md:aspect-square">
          {/* Main Product Image Mockup */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-neutral-800 to-black border border-white/10 shadow-2xl flex items-center justify-center">
            <img src="https://picsum.photos/seed/phone9/600/600" className="opacity-50 mix-blend-screen rounded-[3rem]" alt="Product" />
          </div>

          {/* Hotspots */}
          {spots.map((spot, i) => (
            <div key={i} className="absolute z-10" style={{ top: spot.top, left: spot.left }}>
              
              {/* Pulse Button */}
              <button 
                onMouseEnter={() => setActiveSpot(i)}
                onMouseLeave={() => setActiveSpot(null)}
                className="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-5"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
              </button>

              {/* Tooltip Card */}
              <AnimatePresence>
                {activeSpot === i && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl pointer-events-none"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">{spot.title}</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{spot.desc}</p>
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
