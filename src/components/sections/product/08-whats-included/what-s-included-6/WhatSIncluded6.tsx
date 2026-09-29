import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { title: "Device Pro", content: "The ultimate tool, crafted from premium materials.", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { title: "Woven Cable", content: "A 1-meter woven USB-C to USB-C cable for high-speed charging.", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { title: "Power Adapter", content: "Fast-charge capable 20W power adapter.", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-6xl font-black text-white mb-6 leading-none">In the<br/>box.</h2>
            <p className="text-xl text-neutral-400 font-light">Everything you need, beautifully packaged.</p>
          </motion.div>
        </div>

        <div className="lg:w-2/3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b border-white/10 last:border-0"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-10 flex justify-between items-center text-left"
                >
                  <h3 className={`text-4xl font-black transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-600'}`}>
                    {item.title}
                  </h3>
                  <motion.div animate={{ rotate: isOpen ? 135 : 0 }} className="text-neutral-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                        <div className="w-48 h-48 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl relative">
                          <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <p className="text-neutral-300 text-lg sm:text-xl font-light leading-relaxed mt-4 sm:mt-0">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
