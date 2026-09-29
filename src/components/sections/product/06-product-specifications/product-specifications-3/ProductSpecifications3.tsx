import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const specifications = [
  { title: "Design", details: ["Titanium frame", "Textured matte glass back", "Action button", "Dynamic Island"] },
  { title: "Display", details: ["6.7-inch Super Retina XDR", "ProMotion technology", "Always-On display", "True Tone"] },
  { title: "Camera", details: ["48MP Main", "12MP Ultra Wide", "12MP Telephoto", "Photonic Engine"] },
  { title: "Power", details: ["A17 Pro chip", "USB-C connector", "MagSafe wireless charging", "Fast-charge capable"] },
];

export default function ProductSpecifications3({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Tabs */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <h2 className="text-4xl font-black text-white mb-8">Specifications.</h2>
          {specifications.map((spec, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`text-left px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === i ? 'bg-white text-black font-bold shadow-xl scale-105' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'}`}
            >
              <span className="text-xl">{spec.title}</span>
            </button>
          ))}
        </div>

        {/* Right Side: Details */}
        <div className="md:w-2/3 relative h-[400px]">
          {specifications.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: activeTab === i ? 1 : 0, 
                x: activeTab === i ? 0 : 50,
                pointerEvents: activeTab === i ? 'auto' : 'none'
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0 bg-neutral-900/40 border border-white/5 rounded-3xl p-12 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-bold text-white mb-8">{spec.title} Highlights</h3>
              <ul className="space-y-6">
                {spec.details.map((detail, j) => (
                  <motion.li 
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: activeTab === i ? 1 : 0, y: activeTab === i ? 0 : 10 }}
                    transition={{ delay: activeTab === i ? j * 0.1 + 0.2 : 0 }}
                    className="flex items-center text-neutral-300 text-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-4" />
                    {detail}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
