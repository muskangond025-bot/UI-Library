import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { id: "action", title: "Action Button", img: "https://picsum.photos/seed/tab1/1200/800", desc: "A fast track to your favorite feature." },
  { id: "camera", title: "Pro Camera", img: "https://picsum.photos/seed/tab2/1200/800", desc: "48MP Main camera. Mega powerful." },
  { id: "chip", title: "A17 Pro", img: "https://picsum.photos/seed/tab3/1200/800", desc: "A monster win for gaming." },
];

export default function ProductFeatures6({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-play tabs
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto hide-scrollbar pb-4">
          {features.map((feat, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className="flex-1 min-w-[200px] text-left relative"
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors ${activeTab === i ? 'text-black' : 'text-neutral-400'}`}>
                {feat.title}
              </h3>
              
              {/* Progress Bar Track */}
              <div className="w-full h-1 bg-neutral-200 rounded-full overflow-hidden">
                {activeTab === i && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-black rounded-full"
                  />
                )}
                {activeTab > i && <div className="h-full bg-black rounded-full w-full" />}
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img src={features[activeTab].img} alt={features[activeTab].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4">{features[activeTab].title}</h2>
                <p className="text-xl text-neutral-300">{features[activeTab].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
