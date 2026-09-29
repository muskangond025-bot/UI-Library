import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: "Drone Quadcopter", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop" },
  { name: "Remote Controller", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop" },
  { name: "Intelligent Flight Battery", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Extra Propellers", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded14({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f4f4f5] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase mb-12">Box Contents</h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-2xl font-bold text-black">{item.name}</h3>
                <span className="text-neutral-300 font-mono text-xl">{openIndex === i ? '-' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="w-full h-64 rounded-xl overflow-hidden relative">
                      <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
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
