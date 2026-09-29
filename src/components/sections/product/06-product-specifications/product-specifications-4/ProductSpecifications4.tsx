import React from 'react';
import { motion } from 'framer-motion';

const specifications = [
  { label: "Weight", value: "187g" },
  { label: "Dimensions", value: "146.6 x 70.6 x 8.25 mm" },
  { label: "Display", value: "6.1\" OLED" },
  { label: "Resolution", value: "2556 x 1179 at 460 ppi" },
  { label: "Contrast Ratio", value: "2,000,000:1" },
  { label: "Max Brightness", value: "2000 nits (outdoor)" },
  { label: "Chip", value: "A17 Pro" },
  { label: "RAM", value: "8GB" },
];

export default function ProductSpecifications4({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <h2 className="text-5xl md:text-7xl font-black text-black text-center mb-24 tracking-tighter">Pure Specs.</h2>
        
        {/* Infinite Grid Layout inspired by premium editorial design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
          {specifications.map((spec, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#f8fafc" }}
              className="bg-white p-8 md:p-12 flex flex-col justify-between aspect-square group transition-colors"
            >
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4 group-hover:text-blue-500 transition-colors">{spec.label}</h3>
              <p className="text-3xl md:text-4xl font-light text-black tracking-tight leading-none">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
