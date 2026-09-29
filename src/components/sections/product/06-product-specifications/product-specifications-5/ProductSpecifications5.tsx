import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications5({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Parallax Marquee effect for Specifications
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="py-32 bg-neutral-950 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      
      <div className="mb-20 text-center">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Under the hood</h2>
        <h3 className="text-4xl text-white font-light">Performance without compromise.</h3>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-8 opacity-80 mix-blend-screen">
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap gap-16 px-6 w-max"
        >
          {Array(4).fill(["TITANIUM DESIGN", "A17 PRO CHIP", "48MP MAIN CAMERA", "USB-C"]).flat().map((text, i) => (
            <h2 key={i} className="text-7xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent uppercase stroke-white stroke-1">
              {text}
            </h2>
          ))}
        </motion.div>

        <motion.div 
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap gap-16 px-6 w-max"
        >
          {Array(4).fill(["SUPER RETINA XDR", "ACTION BUTTON", "CRASH DETECTION", "IP68"]).flat().map((text, i) => (
            <h2 key={i} className="text-7xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-transparent uppercase stroke-white stroke-1">
              {text}
            </h2>
          ))}
        </motion.div>

      </div>
      
      <div className="mt-20 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl text-neutral-400 font-light leading-relaxed">
          Every component has been engineered to deliver unparalleled power, efficiency, and intelligence. The result is a device that completely transforms what a smartphone can do.
        </p>
      </div>

    </section>
  );
}
