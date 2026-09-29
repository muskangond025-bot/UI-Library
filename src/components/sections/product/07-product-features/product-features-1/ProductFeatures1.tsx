import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Aerospace Titanium", desc: "Forged from the same alloy used for spacecraft.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", span: "md:col-span-2 md:row-span-2" },
  { title: "A17 Pro", desc: "A monster win for gaming.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", span: "md:col-span-1 md:row-span-1" },
  { title: "Action Button", desc: "Fast track to your favorite feature.", icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122", span: "md:col-span-1 md:row-span-1" },
  { title: "48MP Main", desc: "Mega powerful.", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", span: "md:col-span-1 md:row-span-2" },
  { title: "5x Telephoto", desc: "120 mm of pure zoom.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7", span: "md:col-span-1 md:row-span-1" },
  { title: "USB-C", desc: "Up to 20x faster transfers.", icon: "M13 10V3L4 14h7v7l9-11h-7z", span: "md:col-span-1 md:row-span-1" },
];

export default function ProductFeatures1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-20">Explore the full story.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className={`${feature.span} bg-neutral-900 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 h-full flex flex-col">
                <svg className="w-8 h-8 text-neutral-500 mb-auto group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 transform origin-top-left" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
