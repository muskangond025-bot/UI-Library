import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "Device Pro",
  "USB-C to USB-C Cable (1m)",
  "20W Power Adapter",
  "Documentation & Stickers"
];

export default function WhatsInTheBox3({ data }: { data: any }) {
  const trackItems = [...items, ...items, ...items]; // Triple for smooth infinite loop

  return (
    <section className="py-24 bg-neutral-100 overflow-hidden flex flex-col justify-center min-h-[50vh]">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight">Included in the box.</h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {trackItems.map((item, i) => (
            <div 
              key={i} 
              className="w-[300px] h-[300px] bg-white rounded-3xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center p-8 text-center flex-shrink-0"
            >
              <div className="w-32 h-32 bg-neutral-50 rounded-full mb-6 flex items-center justify-center">
                 <span className="text-neutral-300 font-bold">Image</span>
              </div>
              <h3 className="text-lg font-bold text-black">{item}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
