import React from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation3({ data }: { data: any }) {
  // Infinite marquee text
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-[#E5F5E0] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl font-black text-[#1A4D2E] mb-4 uppercase tracking-tighter">Delivery Updates</h2>
        <p className="text-[#4F6F52] font-medium text-lg">Always moving, just like your packages.</p>
      </div>

      <div className="w-full bg-[#1A4D2E] py-4 -mx-8 rotate-[-2deg] overflow-hidden shadow-2xl relative z-0">
        <motion.div 
          className="whitespace-nowrap flex items-center gap-8 text-[#E5F5E0] font-black text-3xl uppercase tracking-widest"
          variants={marqueeVariants}
          animate="animate"
        >
          <span>FAST SHIPPING</span>
          <span className="text-[#4F6F52]">•</span>
          <span>FREE RETURNS</span>
          <span className="text-[#4F6F52]">•</span>
          <span>GLOBAL DELIVERY</span>
          <span className="text-[#4F6F52]">•</span>
          <span>CARBON NEUTRAL</span>
          <span className="text-[#4F6F52]">•</span>
          
          {/* Duplicate for seamless loop */}
          <span>FAST SHIPPING</span>
          <span className="text-[#4F6F52]">•</span>
          <span>FREE RETURNS</span>
          <span className="text-[#4F6F52]">•</span>
          <span>GLOBAL DELIVERY</span>
          <span className="text-[#4F6F52]">•</span>
          <span>CARBON NEUTRAL</span>
          <span className="text-[#4F6F52]">•</span>
        </motion.div>
      </div>
    </div>
  );
}
