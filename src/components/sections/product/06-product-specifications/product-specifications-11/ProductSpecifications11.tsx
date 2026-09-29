import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Silicon", details: ["A17 Pro", "6-core CPU", "16-core Neural Engine"] },
  { icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", title: "Camera", details: ["48MP Main", "12MP Ultrawide", "Photonic Engine"] },
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Power", details: ["29h playback", "MagSafe up to 15W", "USB-C fast charge"] },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Durability", details: ["Ceramic Shield", "Aerospace Titanium", "IP68 water resistant"] }
];

export default function ProductSpecifications11({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-900 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">Core Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative h-80 bg-neutral-950 border border-white/10 rounded-[2rem] overflow-hidden p-8 flex flex-col items-center justify-center text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="transform group-hover:-translate-y-12 transition-transform duration-500 ease-out flex flex-col items-center">
                <svg className="w-16 h-16 text-neutral-500 mb-6 group-hover:text-blue-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                </svg>
                <h3 className="text-2xl font-bold text-white">{spec.title}</h3>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <ul className="space-y-3">
                  {spec.details.map((detail, j) => (
                    <li key={j} className="text-sm text-neutral-300 border-b border-white/5 pb-2 last:border-0">{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
