import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { id: "01", title: "Titanium", img: "https://picsum.photos/seed/acc1/1200/800" },
  { id: "02", title: "A17 Pro", img: "https://picsum.photos/seed/acc2/1200/800" },
  { id: "03", title: "Camera", img: "https://picsum.photos/seed/acc3/1200/800" },
  { id: "04", title: "Action", img: "https://picsum.photos/seed/acc4/1200/800" },
];

export default function ProductFeatures3({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-neutral-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full h-[600px] flex flex-col md:flex-row gap-4">
        
        {features.map((feat, i) => {
          const isActive = active === i;
          return (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{ flex: isActive ? 4 : 1 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="relative h-full rounded-3xl overflow-hidden cursor-pointer group bg-black"
            >
              {/* Background Image */}
              <motion.div 
                animate={{ scale: isActive ? 1 : 1.2, opacity: isActive ? 0.7 : 0.3 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={feat.img} alt={feat.title} className="w-full h-full object-cover grayscale" />
              </motion.div>

              {/* Vertical Title (when collapsed) */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <h3 className="text-white text-2xl font-bold md:-rotate-90 tracking-widest whitespace-nowrap">{feat.title}</h3>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Detailed Content (when active) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-x-8 bottom-8 z-10"
                  >
                    <span className="text-blue-400 font-mono text-sm tracking-widest mb-2 block">{feat.id}</span>
                    <h3 className="text-5xl font-black text-white mb-4">{feat.title}</h3>
                    <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors">
                      Learn more
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        
      </div>
    </section>
  );
}
