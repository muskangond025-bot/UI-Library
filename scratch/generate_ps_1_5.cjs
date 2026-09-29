const fs = require('fs');
const path = require('path');

const p1 = `import React from 'react';
import { motion } from 'framer-motion';

const specs = [
  { category: "Processor", value: "A17 Pro chip", details: "New 6-core CPU with 2 performance and 4 efficiency cores." },
  { category: "Display", value: "6.7\\" Super Retina XDR", details: "OLED display with ProMotion technology up to 120Hz." },
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
`;

const p2 = `import React from 'react';
import { motion } from 'framer-motion';

const specifications = [
  { label: "Weight", value: "221g", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { label: "Water Resistance", value: "IP68", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { label: "Connectivity", value: "Wi-Fi 6E, 5G", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { label: "Storage", value: "Up to 1TB", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
];

export default function ProductSpecifications2({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <h2 className="text-4xl md:text-6xl font-light text-center text-white mb-20 tracking-wide">Key Specifications</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {specifications.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Glass Icon Container */}
              <div className="w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <svg className="w-10 h-10 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                </svg>
              </div>
              <h3 className="text-lg text-neutral-400 mb-1">{spec.label}</h3>
              <p className="text-2xl font-bold text-white">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p3 = `import React, { useRef, useState } from 'react';
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
              className={\`text-left px-6 py-4 rounded-2xl transition-all duration-300 \${activeTab === i ? 'bg-white text-black font-bold shadow-xl scale-105' : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800'}\`}
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
`;

const p4 = `import React from 'react';
import { motion } from 'framer-motion';

const specifications = [
  { label: "Weight", value: "187g" },
  { label: "Dimensions", value: "146.6 x 70.6 x 8.25 mm" },
  { label: "Display", value: "6.1\\" OLED" },
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
`;

const p5 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications5({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  // Parallax Marquee effect for Specifications
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="py-32 bg-neutral-950 overflow-hidden min-h-[80vh] flex flex-col justify-center">
      
      <div className="mb-20 text-center">
        <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Under the hood</h2>
        <h3 className="text-4xl text-white font-light">Performance without compromise.</h3>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-8 opacity-80 mix-blend-screen">
        
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap gap-16 px-6">
          {Array(4).fill(["TITANIUM DESIGN", "A17 PRO CHIP", "48MP MAIN CAMERA", "USB-C"]).flat().map((text, i) => (
            <h2 key={i} className="text-7xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent uppercase stroke-white stroke-1">
              {text}
            </h2>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap gap-16 px-6">
          {Array(4).fill(["SUPER RETINA XDR", "ACTION BUTTON", "CRASH DETECTION", "IP68"]).flat().map((text, i) => (
            <h2 key={i} className="text-7xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-transparent uppercase stroke-white stroke-1">
              {text}
            </h2>
          ))}
        </motion.div>

      </div>
      
      <div className="mt-20 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xl text-neutral-400 font-light leading-relaxed">
          Every component has been engineered to deliver unparalleled power, efficiency, and intelligence. The result is a device that completely transforms what a smartphone can do.
        </p>
      </div>

    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-1/ProductSpecifications1.tsx', content: p1 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-2/ProductSpecifications2.tsx', content: p2 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-3/ProductSpecifications3.tsx', content: p3 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-4/ProductSpecifications4.tsx', content: p4 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-5/ProductSpecifications5.tsx', content: p5 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Specs 1-5 generated successfully.');
