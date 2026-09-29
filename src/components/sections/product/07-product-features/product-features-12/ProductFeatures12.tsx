import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timeline = [
  { step: "01", title: "Concept", desc: "Ideation and wireframing.", img: "https://picsum.photos/seed/tl1/800/600" },
  { step: "02", title: "Design", desc: "High-fidelity mockups.", img: "https://picsum.photos/seed/tl2/800/600" },
  { step: "03", title: "Build", desc: "Pixel-perfect implementation.", img: "https://picsum.photos/seed/tl3/800/600" },
  { step: "04", title: "Launch", desc: "Deployment and scaling.", img: "https://picsum.photos/seed/tl4/800/600" },
];

export default function ProductFeatures12({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        {/* Left: Timeline List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-black mb-12">How it works.</h2>
          <div className="flex flex-col">
            {timeline.map((item, i) => {
              const isActive = active === i;
              return (
                <div key={i} className="flex group cursor-pointer" onClick={() => setActive(i)}>
                  {/* Timeline Line & Dot */}
                  <div className="flex flex-col items-center mr-6">
                    <div className={`w-4 h-4 rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-neutral-300 group-hover:border-blue-400'}`} />
                    {i !== timeline.length - 1 && (
                      <div className={`w-[2px] h-24 my-2 transition-colors duration-300 ${isActive ? 'bg-blue-600' : 'bg-neutral-200'}`} />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="-mt-1 pb-12">
                    <span className={`text-sm font-bold tracking-widest transition-colors ${isActive ? 'text-blue-600' : 'text-neutral-400'}`}>{item.step}</span>
                    <h3 className={`text-3xl font-bold mt-1 mb-2 transition-colors ${isActive ? 'text-black' : 'text-neutral-400'}`}>{item.title}</h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-500 mt-2">{item.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Dynamic Image */}
        <div className="lg:w-1/2 h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              src={timeline[active].img}
              className="absolute inset-0 w-full h-full object-cover"
              alt={timeline[active].title}
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
