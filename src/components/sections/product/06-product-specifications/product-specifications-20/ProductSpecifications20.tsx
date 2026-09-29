import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const specs = [
  { size: "md:col-span-2 md:row-span-2", title: "A17 Pro", detail: "The first 3nm chip. Pro-class GPU with 6 cores.", bg: "bg-neutral-900" },
  { size: "md:col-span-1 md:row-span-1", title: "Titanium", detail: "Aerospace-grade.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-1", title: "USB-C", detail: "10Gbps transfer.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-2", title: "Display", detail: "Super Retina XDR with ProMotion.", bg: "bg-neutral-900" },
  { size: "md:col-span-1 md:row-span-1", title: "Camera", detail: "48MP Main.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-1", title: "Battery", detail: "29h playback.", bg: "bg-neutral-800" },
];

export default function ProductSpecifications20({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through bento boxes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % specs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white tracking-tight">The ultimate spec sheet.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {specs.map((spec, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  boxShadow: isActive ? "0px 0px 30px rgba(59, 130, 246, 0.3)" : "0px 0px 0px rgba(0,0,0,0)",
                  borderColor: isActive ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)"
                }}
                className={`${spec.size} ${spec.bg} border rounded-3xl p-8 relative overflow-hidden transition-colors duration-500`}
              >
                {/* Active glow indicator */}
                {isActive && (
                  <motion.div
                    layoutId="bento-glow"
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-screen"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
                
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-300'}`}>
                    {spec.title}
                  </h3>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-400 mt-2 text-sm">{spec.detail}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
