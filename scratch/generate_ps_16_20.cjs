const fs = require('fs');
const path = require('path');

const p16 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const specs = [
  { id: "01", title: "Core Processor", detail: "A17 Pro. The industry's first 3-nanometer chip." },
  { id: "02", title: "GPU Architecture", detail: "6-core GPU with hardware-accelerated ray tracing." },
  { id: "03", title: "Neural Engine", detail: "16-core design capable of 35 trillion operations per second." },
  { id: "04", title: "Memory Bandwidth", detail: "17% more memory bandwidth for intensive graphics." },
  { id: "05", title: "Power Efficiency", detail: "Up to 29 hours of video playback on a single charge." },
];

export default function ProductSpecifications16({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={scrollContainerRef} className="h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative">
      
      <div className="text-center py-24 sticky top-0 z-10 bg-gradient-to-b from-black to-transparent">
        <h2 className="text-5xl font-black text-white">System Architecture.</h2>
      </div>

      <div ref={contentRef} className="relative max-w-4xl mx-auto px-6 py-24 min-h-[150vh]">
        
        {/* Animated Vertical Line */}
        <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-white/10">
          <motion.div 
            style={{ scaleY: pathLength, transformOrigin: "top" }}
            className="absolute top-0 w-full h-full bg-gradient-to-b from-blue-500 to-purple-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* Spec Points */}
        <div className="flex flex-col justify-between h-full py-12 gap-32">
          {specs.map((spec, i) => {
            const isEven = i % 2 === 0;
            const startOffset = i * 0.2;
            const endOffset = startOffset + 0.2;
            
            // Nodes appear sequentially as the line passes them
            const opacity = useTransform(scrollYProgress, [startOffset, endOffset], [0, 1]);
            const scale = useTransform(scrollYProgress, [startOffset, endOffset], [0.5, 1]);

            return (
              <div key={i} className={\`relative w-full flex \${isEven ? 'md:justify-start' : 'md:justify-end'} pl-24 md:pl-0\`}>
                
                {/* Node Dot */}
                <motion.div 
                  style={{ opacity, scale }}
                  className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black border-4 border-blue-500 z-10 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                />

                {/* Content Card */}
                <motion.div 
                  style={{ opacity, x: useTransform(scrollYProgress, [startOffset, endOffset], [isEven ? -50 : 50, 0]) }}
                  className={\`md:w-[40%] bg-neutral-900 border border-white/10 rounded-2xl p-8 backdrop-blur-md relative \${isEven ? 'md:-mr-12' : 'md:-ml-12'}\`}
                >
                  <span className="text-blue-500 font-mono text-sm font-bold tracking-widest block mb-2">{spec.id}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{spec.title}</h3>
                  <p className="text-neutral-400">{spec.detail}</p>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
`;

const p17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specs = [
  { id: "camera", title: "48MP Camera", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z", detail: "Advanced quad-pixel sensor with 100% Focus Pixels." },
  { id: "battery", title: "29h Battery", icon: "M13 10V3L4 14h7v7l9-11h-7z", detail: "All-day battery life with fast-charge capabilities." },
  { id: "display", title: "Super Retina", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", detail: "ProMotion technology with adaptive refresh rates." },
  { id: "chip", title: "A17 Pro", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", detail: "The first 3-nanometer chip in the industry." },
];

export default function ProductSpecifications17({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-[#030303] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Sci-Fi glowing background ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] animate-[spin_60s_linear_infinite] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <h2 className="text-4xl md:text-5xl font-light text-white mb-20 tracking-wide text-center">Interactive Telemetry.</h2>

        {/* Dynamic Tech Ring Interface */}
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          
          {/* Center Content Display */}
          <div className="absolute inset-4 rounded-full bg-neutral-900 border border-white/10 flex flex-col items-center justify-center p-8 text-center shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={specs[activeIndex].icon} />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">{specs[activeIndex].title}</h3>
                <p className="text-xs text-neutral-400 max-w-[200px]">{specs[activeIndex].detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Nodes around the ring */}
          {specs.map((spec, i) => {
            const angle = (i * (360 / specs.length)) * (Math.PI / 180);
            const radius = 50; // percentage
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);
            const isActive = activeIndex === i;

            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="absolute w-12 h-12 -ml-6 -mt-6 rounded-full flex items-center justify-center transition-all duration-300 z-20 group"
                style={{ left: \`\${x}%\`, top: \`\${y}%\` }}
              >
                <div className={\`absolute inset-0 rounded-full transition-transform duration-300 \${isActive ? 'bg-blue-500 scale-100 shadow-[0_0_20px_rgba(59,130,246,0.6)]' : 'bg-neutral-800 scale-75 group-hover:scale-90 border border-white/20'}\`} />
                <svg className={\`w-5 h-5 relative z-10 transition-colors \${isActive ? 'text-white' : 'text-neutral-500'}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                </svg>
              </button>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}
`;

const p18 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications18({ data }: { data: any }) {
  const specs = [
    { title: "DISPLAY", value: "6.7\\" SUPER RETINA XDR" },
    { title: "PROCESSOR", value: "A17 PRO 3NM CHIP" },
    { title: "CAMERA", value: "48MP PRO SYSTEM" },
    { title: "MATERIAL", value: "AEROSPACE TITANIUM" }
  ];

  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col md:flex-row h-full">
        
        {/* Left Side: Massive Typography Specs */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-12 relative z-10">
          <h2 className="text-xl font-bold tracking-[0.2em] text-neutral-400 mb-8 border-b border-neutral-200 pb-4">TECH SPECS</h2>
          
          {specs.map((spec, i) => (
            <div key={i} className="group cursor-default">
              <motion.h3 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="text-sm font-bold text-blue-600 tracking-widest mb-2"
              >
                {spec.title}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none group-hover:pl-4 transition-all duration-300">
                  {spec.value}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Right Side: Editorial Image Layout */}
        <div className="md:w-1/2 p-8 md:p-16 relative min-h-[50vh]">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full absolute inset-0 md:inset-16 overflow-hidden rounded-[3rem] shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/tech18/1200/1600" 
              alt="Device" 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
`;

const p19 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductSpecifications19({ data }: { data: any }) {
  const [hoveredSpec, setHoveredSpec] = useState<number | null>(null);

  const specs = [
    { title: "Weight", old: "206 grams", new: "187 grams", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0" },
    { title: "Graphics", old: "5-core GPU", new: "6-core Pro GPU", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3" },
    { title: "Transfer Speed", old: "USB 2 (480Mbps)", new: "USB 3 (10Gbps)", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Optical Zoom", old: "3x Telephoto", new: "5x Telephoto", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" }
  ];

  return (
    <section className="py-24 bg-neutral-100 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-black mb-4">Generational Leap.</h2>
          <p className="text-xl text-neutral-500">Hover to see the massive upgrades across the board.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specs.map((spec, i) => (
            <div 
              key={i} 
              onMouseEnter={() => setHoveredSpec(i)}
              onMouseLeave={() => setHoveredSpec(null)}
              className="bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-200 relative overflow-hidden h-48 cursor-default"
            >
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={spec.icon} />
                </svg>
                <h3 className="text-xl font-bold text-black">{spec.title}</h3>
              </div>

              {/* Default State (Previous Gen) */}
              <div className="absolute inset-x-8 bottom-8 z-10">
                <p className="text-sm text-neutral-400 uppercase tracking-widest font-bold mb-1">Previous Gen</p>
                <p className="text-2xl font-medium text-neutral-500">{spec.old}</p>
              </div>

              {/* Hover State (Glassmorphic Slide-up Overlay for New Gen) */}
              <AnimatePresence>
                {hoveredSpec === i && (
                  <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="absolute inset-0 bg-blue-600 p-8 flex flex-col justify-end z-20"
                  >
                    <div className="absolute top-8 right-8">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">Upgraded</span>
                    </div>
                    <p className="text-sm text-blue-200 uppercase tracking-widest font-bold mb-1">New Gen</p>
                    <p className="text-3xl font-black text-white">{spec.new}</p>
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
`;

const p20 = `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const specs = [
  { size: "md:col-span-2 md:row-span-2", title: "A17 Pro", detail: "The first 3nm chip. Pro-class GPU with 6 cores.", bg: "bg-neutral-900" },
  { size: "md:col-span-1 md:row-span-1", title: "Titanium", detail: "Aerospace-grade.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-1", title: "USB-C", detail: "10Gbps transfer.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-2", title: "Display", detail: "Super Retina XDR with ProMotion.", bg: "bg-neutral-900" },
  { size: "md:col-span-1 md:row-span-1", title: "Camera", detail: "48MP Main.", bg: "bg-neutral-800" },
  { size: "md:col-span-1 md:row-span-1", title: "Battery", detail: "29h playback.", bg: "bg-neutral-800" },
];

export default function ProductSpecifications20({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through bento boxes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % specs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white tracking-tight">The ultimate spec sheet.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {specs.map((spec, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  boxShadow: isActive ? "0px 0px 30px rgba(59, 130, 246, 0.3)" : "0px 0px 0px rgba(0,0,0,0)",
                  borderColor: isActive ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.1)"
                }}
                className={\`\${spec.size} \${spec.bg} border rounded-3xl p-8 relative overflow-hidden transition-colors duration-500\`}
              >
                {/* Active glow indicator */}
                {isActive && (
                  <motion.div
                    layoutId="bento-glow"
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent mix-blend-screen"
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                )}
                
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <h3 className={\`text-2xl font-bold transition-colors duration-300 \${isActive ? 'text-white' : 'text-neutral-300'}\`}>
                    {spec.title}
                  </h3>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-neutral-400 mt-2 text-sm">{spec.detail}</p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-16/ProductSpecifications16.tsx', content: p16 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-17/ProductSpecifications17.tsx', content: p17 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-18/ProductSpecifications18.tsx', content: p18 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-19/ProductSpecifications19.tsx', content: p19 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-20/ProductSpecifications20.tsx', content: p20 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Specs 16-20 generated successfully.');
