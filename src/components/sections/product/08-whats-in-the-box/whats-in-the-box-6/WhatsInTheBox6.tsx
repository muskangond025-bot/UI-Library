import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { title: "Device", content: "The ultimate tool, crafted from premium materials and ready right out of the box." },
  { title: "Cable", content: "A 1-meter woven USB-C to USB-C cable for high-speed charging and data." },
  { title: "Adapter", content: "Fast-charge capable 20W power adapter to get you to 50% in 30 minutes." }
];

export default function WhatsInTheBox6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-black text-white mb-6">In the box.</h2>
          <p className="text-neutral-400">Everything you need, beautifully packaged.</p>
        </div>

        <div className="lg:w-2/3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left"
                >
                  <h3 className={`text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-500'}`}>
                    {item.title}
                  </h3>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-neutral-500">
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-4 flex gap-6">
                        <div className="w-24 h-24 bg-neutral-900 rounded-xl flex-shrink-0 border border-white/5" />
                        <p className="text-neutral-400 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
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
