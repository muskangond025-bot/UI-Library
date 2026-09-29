const fs = require('fs');
const path = require('path');

const p1 = `import React from 'react';
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
              className={\`\${feature.span} bg-neutral-900 rounded-[2rem] p-8 border border-white/5 relative overflow-hidden group hover:border-white/20 transition-colors\`}
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
`;

const p2 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures2({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const features = [
    { title: "Design", desc: "Forged in titanium.", img: "https://picsum.photos/seed/feat1/800/1200" },
    { title: "Camera", desc: "48MP Main camera.", img: "https://picsum.photos/seed/feat2/800/1200" },
    { title: "Chip", desc: "A17 Pro chip.", img: "https://picsum.photos/seed/feat3/800/1200" },
    { title: "Battery", desc: "All-day battery life.", img: "https://picsum.photos/seed/feat4/800/1200" }
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-white overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[400vh] w-full flex">
        
        {/* Sticky Left: Dynamic Images */}
        <div className="w-1/2 h-screen sticky top-0 overflow-hidden">
          {features.map((feat, i) => {
            const start = i * 0.25;
            const end = (i + 1) * 0.25;
            
            // Image fades in and out based on scroll progress
            const opacity = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
            
            return (
              <motion.div 
                key={i}
                style={{ opacity }}
                className="absolute inset-0 w-full h-full"
              >
                <img src={feat.img} alt={feat.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90" />
              </motion.div>
            );
          })}
        </div>

        {/* Scrolling Right: Text Content */}
        <div className="w-1/2 flex flex-col justify-between py-[50vh]">
          {features.map((feat, i) => (
            <div key={i} className="h-[100vh] flex flex-col justify-center px-16">
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-200px" }}
                className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-6"
              >
                {feat.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-200px" }}
                className="text-2xl text-neutral-500 font-light"
              >
                {feat.desc}
              </motion.p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p3 = `import React, { useState } from 'react';
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
`;

const p4 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures4({ data }: { data: any }) {
  const nodes = [
    { title: "Aerospace", angle: 0 },
    { title: "ProMotion", angle: 72 },
    { title: "A17 Chip", angle: 144 },
    { title: "Photonic", angle: 216 },
    { title: "MagSafe", angle: 288 },
  ];

  return (
    <section className="py-24 bg-[#050505] min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center z-10">
        
        {/* Central Orb */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-sm shadow-[0_0_100px_rgba(59,130,246,0.8)] flex items-center justify-center"
        >
          <div className="w-40 h-40 bg-black rounded-full" />
        </motion.div>
        <div className="absolute text-center">
          <h2 className="text-3xl font-black text-white tracking-widest">PRO</h2>
        </div>

        {/* Orbiting Nodes */}
        {nodes.map((node, i) => {
          const radius = 250;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="absolute"
              style={{
                transform: \`rotate(\${node.angle}deg) translateX(\${radius}px) rotate(-\${node.angle}deg)\`
              }}
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="bg-neutral-900 border border-blue-500/30 px-6 py-3 rounded-full backdrop-blur-md whitespace-nowrap flex items-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white font-bold tracking-widest text-sm uppercase">{node.title}</span>
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="-300 -300 600 600">
          {nodes.map((node, i) => {
            const rad = node.angle * (Math.PI / 180);
            const x = Math.cos(rad) * 200;
            const y = Math.sin(rad) * 200;
            return (
              <motion.line 
                key={i}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                x1="0" y1="0" x2={x} y2={y} 
                stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4"
              />
            );
          })}
        </svg>

      </div>
    </section>
  );
}
`;

const p5 = `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures5({ data }: { data: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const features = [
    { title: "Dynamic Island", desc: "Bubbles up alerts and live activities.", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "A16 Bionic", desc: "Proven powerhouse.", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
    { title: "Ceramic Shield", desc: "Tougher than any smartphone glass.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Water Resistant", desc: "IP68 standard.", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }
  ];

  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">Feature packed.</h2>
        </div>
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 relative group"
        >
          {/* Spotlight background */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: \`radial-gradient(600px circle at \${mousePos.x}px \${mousePos.y}px, rgba(59,130,246,0.15), transparent 40%)\`
            }}
          />

          {features.map((feat, i) => (
            <div 
              key={i} 
              className="bg-neutral-900 border border-white/5 rounded-[2rem] p-10 relative overflow-hidden group/card"
            >
              {/* Card border spotlight */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition duration-300"
                style={{
                  background: \`radial-gradient(400px circle at \${mousePos.x}px \${mousePos.y}px, rgba(59,130,246,0.5), transparent 40%)\`
                }}
              />
              <div className="absolute inset-[1px] bg-neutral-900 rounded-[2rem] z-0" />
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-neutral-400">{feat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p6 = `import React, { useState, useEffect } from 'react';
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
              <h3 className={\`text-xl font-bold mb-4 transition-colors \${activeTab === i ? 'text-black' : 'text-neutral-400'}\`}>
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
`;

const p7 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures7({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  
  const features = [
    { title: "Titanium.", subtitle: "So strong. So light. So Pro.", color: "bg-neutral-900", text: "text-white" },
    { title: "A17 Pro chip.", subtitle: "A monster win for gaming.", color: "bg-neutral-200", text: "text-black" },
    { title: "Camera.", subtitle: "Wildest optical zoom ever.", color: "bg-blue-900", text: "text-white" }
  ];

  return (
    <section ref={scrollContainerRef} className="h-screen overflow-y-auto overflow-x-hidden hide-scrollbar bg-black relative">
      <div className="w-full">
        {/* Intro */}
        <div className="h-screen flex items-center justify-center sticky top-0">
          <h2 className="text-6xl md:text-8xl font-black text-white">Features.</h2>
        </div>

        {/* Stacking Cards */}
        <div className="pb-[50vh]">
          {features.map((feat, i) => (
            <div key={i} className="h-screen sticky top-0 flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-200px" }}
                className={\`w-full max-w-5xl aspect-video rounded-[3rem] \${feat.color} \${feat.text} flex flex-col items-center justify-center text-center shadow-2xl\`}
              >
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{feat.title}</h3>
                <p className="text-2xl opacity-80">{feat.subtitle}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p8 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures8({ data }: { data: any }) {
  const features = [
    { title: "Water Resistant", path: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
    { title: "Durable Glass", path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
    { title: "Fast Charge", path: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Secure", path: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" }
  ];

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        
        <h2 className="text-4xl md:text-5xl font-light text-neutral-400 mb-24">Built to last. <span className="text-black font-black">Guaranteed.</span></h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((feat, i) => (
            <div key={i} className="flex flex-col items-center">
              <svg className="w-24 h-24 text-black mb-8 drop-shadow-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <motion.path 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: i * 0.2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1} 
                  d={feat.path} 
                />
              </svg>
              <h3 className="text-xl font-bold tracking-widest uppercase">{feat.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p9 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductFeatures9({ data }: { data: any }) {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);

  const spots = [
    { top: "30%", left: "40%", title: "Titanium Frame", desc: "Grade 5 titanium alloy for absolute durability." },
    { top: "50%", left: "60%", title: "Action Button", desc: "Customizable shortcut to your favorite tools." },
    { top: "70%", left: "45%", title: "USB-C Port", desc: "Universal charging and 10Gbps data transfer." },
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        <h2 className="text-5xl font-black text-white mb-16">Interactive hardware.</h2>

        <div className="relative w-full max-w-lg aspect-[9/16] md:aspect-square">
          {/* Main Product Image Mockup */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-neutral-800 to-black border border-white/10 shadow-2xl flex items-center justify-center">
            <img src="https://picsum.photos/seed/phone9/600/600" className="opacity-50 mix-blend-screen rounded-[3rem]" alt="Product" />
          </div>

          {/* Hotspots */}
          {spots.map((spot, i) => (
            <div key={i} className="absolute z-10" style={{ top: spot.top, left: spot.left }}>
              
              {/* Pulse Button */}
              <button 
                onMouseEnter={() => setActiveSpot(i)}
                onMouseLeave={() => setActiveSpot(null)}
                className="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-5"
              >
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
              </button>

              {/* Tooltip Card */}
              <AnimatePresence>
                {activeSpot === i && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl pointer-events-none"
                  >
                    <h4 className="text-white font-bold text-lg mb-2">{spot.title}</h4>
                    <p className="text-neutral-300 text-sm leading-relaxed">{spot.desc}</p>
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

const p10 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures10({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const maskSize = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "200%"]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        
        <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
          
          {/* Background Image that scales up */}
          <motion.div 
            style={{ scale: bgScale }}
            className="absolute inset-0 z-0"
          >
            <img src="https://picsum.photos/seed/feat10/1920/1080" alt="Background" className="w-full h-full object-cover opacity-50 grayscale" />
          </motion.div>

          {/* Typography Mask Reveal */}
          <motion.div 
            style={{ y: textY }}
            className="relative z-10 w-full px-6 mix-blend-overlay flex flex-col items-center text-center"
          >
            <h2 className="text-[15vw] font-black text-white leading-none tracking-tighter uppercase">Titanium</h2>
            <h2 className="text-[15vw] font-black text-transparent stroke-white stroke-2 leading-none tracking-tighter uppercase" style={{ WebkitTextStroke: "2px white" }}>Forged</h2>
          </motion.div>

          {/* Circular mask reveal effect (simulated with radial gradient opacity) */}
          <motion.div 
            style={{ 
              background: useTransform(maskSize, (s) => \`radial-gradient(circle \${s} at center, transparent 0%, black 100%)\`)
            }}
            className="absolute inset-0 z-20 pointer-events-none"
          />
          
        </div>

      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/07-product-features/product-features-1/ProductFeatures1.tsx', content: p1 },
  { path: '../src/components/sections/product/07-product-features/product-features-2/ProductFeatures2.tsx', content: p2 },
  { path: '../src/components/sections/product/07-product-features/product-features-3/ProductFeatures3.tsx', content: p3 },
  { path: '../src/components/sections/product/07-product-features/product-features-4/ProductFeatures4.tsx', content: p4 },
  { path: '../src/components/sections/product/07-product-features/product-features-5/ProductFeatures5.tsx', content: p5 },
  { path: '../src/components/sections/product/07-product-features/product-features-6/ProductFeatures6.tsx', content: p6 },
  { path: '../src/components/sections/product/07-product-features/product-features-7/ProductFeatures7.tsx', content: p7 },
  { path: '../src/components/sections/product/07-product-features/product-features-8/ProductFeatures8.tsx', content: p8 },
  { path: '../src/components/sections/product/07-product-features/product-features-9/ProductFeatures9.tsx', content: p9 },
  { path: '../src/components/sections/product/07-product-features/product-features-10/ProductFeatures10.tsx', content: p10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Features 1-10 generated successfully.');
