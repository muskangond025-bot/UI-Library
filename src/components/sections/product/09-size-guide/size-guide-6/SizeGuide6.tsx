import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sizes = [
  { size: 'Small', measurements: 'Chest 36-38" / Waist 29-31"' },
  { size: 'Medium', measurements: 'Chest 38-40" / Waist 31-33"' },
  { size: 'Large', measurements: 'Chest 40-42" / Waist 33-35"' },
  { size: 'X-Large', measurements: 'Chest 42-44" / Waist 35-37"' }
];

export default function SizeGuide6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="py-32 bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full px-6">
        
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 text-white"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          </motion.div>
          <h2 className="text-4xl font-light text-white tracking-widest uppercase">Size Guide</h2>
        </div>

        <div className="border-t border-white/10">
          {sizes.map((item, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className={`text-4xl font-black transition-colors ${openIndex === i ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}`}>
                  {item.size}
                </span>
                <span className="text-2xl text-neutral-600 font-light">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-xl text-neutral-400 font-light tracking-wide">
                      {item.measurements}
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
