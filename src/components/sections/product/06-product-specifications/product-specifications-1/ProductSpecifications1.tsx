import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { category: "Processor", value: "A17 Pro chip", details: "New 6-core CPU with 2 performance and 4 efficiency cores." },
  { category: "Display", value: "6.7\" Super Retina XDR", details: "OLED display with ProMotion technology up to 120Hz." },
  { category: "Camera", value: "48MP Main", details: "f/1.78 aperture, second-generation sensor-shift OIS." },
  { category: "Battery", value: "Up to 29 hours", details: "Video playback. Fast-charge capable: Up to 50% in 30 min." },
  { category: "Material", value: "Titanium", details: "Aerospace-grade titanium design with Ceramic Shield front." },
];

export default function ProductSpecifications1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-950 min-h-screen text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <h2 className="text-5xl font-black mb-16 text-center">Tech Specs</h2>
        
        <div className="grid grid-cols-1 gap-4">
          {specs.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors group"
            >
              <div className="md:w-1/3 mb-4 md:mb-0">
                <h3 className="text-xl font-medium text-neutral-400 group-hover:text-blue-400 transition-colors">{spec.category}</h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-3xl font-bold mb-2">{spec.value}</p>
                <p className="text-neutral-500">{spec.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
