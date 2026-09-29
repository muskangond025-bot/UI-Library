const fs = require('fs');
const path = require('path');

const p1 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", qty: 1, icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { name: "USB-C Cable", qty: 1, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { name: "Power Adapter", qty: 1, icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { name: "Documentation", qty: 3, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
];

export default function WhatsInTheBox1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">What's in the box.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-neutral-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:!opacity-100 group-hover:opacity-40 cursor-default shadow-sm border border-neutral-200"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
              <p className="text-sm font-bold text-neutral-400">x{item.qty}</p>
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

export default function WhatsInTheBox2({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const items = [
    { name: "Main Device", start: 0, end: 0.4, xOut: -200, yOut: -100 },
    { name: "Braided Cable", start: 0.1, end: 0.5, xOut: 200, yOut: -50 },
    { name: "Manual", start: 0.2, end: 0.6, xOut: -150, yOut: 150 },
    { name: "Stickers", start: 0.3, end: 0.7, xOut: 150, yOut: 100 }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full text-center relative h-[800px] flex items-center justify-center">
        
        <h2 className="absolute top-10 w-full text-center text-4xl font-black text-white">Unboxing.</h2>

        {/* Central Box Placeholder */}
        <div className="absolute w-48 h-48 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl z-10 flex items-center justify-center">
          <span className="text-neutral-500 font-bold uppercase tracking-widest text-xs">Box</span>
        </div>

        {/* Exploding Items */}
        {items.map((item, i) => {
          const x = useTransform(scrollYProgress, [item.start, item.end], [0, item.xOut]);
          const y = useTransform(scrollYProgress, [item.start, item.end], [0, item.yOut]);
          const opacity = useTransform(scrollYProgress, [item.start, item.start + 0.1, item.end], [0, 1, 1]);
          const scale = useTransform(scrollYProgress, [item.start, item.end], [0.5, 1]);

          return (
            <motion.div
              key={i}
              style={{ x, y, opacity, scale }}
              className="absolute w-40 h-40 bg-neutral-800 rounded-2xl border border-white/10 flex items-center justify-center p-4 z-20 shadow-xl"
            >
              <span className="text-white font-bold text-center">{item.name}</span>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
`;

const p3 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  "Device Pro",
  "USB-C to USB-C Cable (1m)",
  "20W Power Adapter",
  "Documentation & Stickers"
];

export default function WhatsInTheBox3({ data }: { data: any }) {
  const trackItems = [...items, ...items, ...items]; // Triple for smooth infinite loop

  return (
    <section className="py-24 bg-neutral-100 overflow-hidden flex flex-col justify-center min-h-[50vh]">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight">Included in the box.</h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {trackItems.map((item, i) => (
            <div 
              key={i} 
              className="w-[300px] h-[300px] bg-white rounded-3xl border border-neutral-200 shadow-sm flex flex-col items-center justify-center p-8 text-center flex-shrink-0"
            >
              <div className="w-32 h-32 bg-neutral-50 rounded-full mb-6 flex items-center justify-center">
                 <span className="text-neutral-300 font-bold">Image</span>
              </div>
              <h3 className="text-lg font-bold text-black">{item}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
`;

const p4 = `import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const items = [
  { name: "Smartphone", qty: 1 },
  { name: "USB-C Charge Cable", qty: 1 },
  { name: "SIM Ejector Tool", qty: 1 },
  { name: "Quick Start Guide", qty: 1 }
];

export default function WhatsInTheBox4({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cursorX = useSpring(0, { damping: 25, stiffness: 120 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="py-32 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-16 border-b border-neutral-800 pb-4">
          What's included
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex justify-between items-center py-8 border-b border-neutral-800 last:border-0 cursor-default"
            >
              <h3 className="text-3xl md:text-5xl font-black text-neutral-400 group-hover:text-white transition-colors duration-300">
                {item.name}
              </h3>
              <span className="text-xl font-bold text-neutral-600 group-hover:text-blue-500 transition-colors duration-300">
                x{item.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 rounded-2xl overflow-hidden shadow-2xl bg-neutral-800 flex items-center justify-center border border-white/10"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.8
        }}
      >
        <span className="text-white font-bold">Image Preview {hoveredIndex}</span>
      </motion.div>
    </section>
  );
}
`;

const p5 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: "ITEM-001", name: "Premium Device", qty: 1 },
  { id: "ITEM-002", name: "Woven Charge Cable (1m)", qty: 1 },
  { id: "ITEM-003", name: "Power Adapter (20W)", qty: 1 },
  { id: "ITEM-004", name: "Documentation", qty: 1 }
];

export default function WhatsInTheBox5({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true }}
          className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rounded-lg font-mono relative overflow-hidden"
        >
          {/* Jagged receipt edge effect */}
          <div className="absolute top-0 left-0 right-0 flex justify-between -mt-2">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white rotate-45 transform -translate-y-2" />
            ))}
          </div>

          <div className="text-center mb-12 border-b-2 border-dashed border-neutral-300 pb-8 mt-4">
            <h2 className="text-2xl font-bold uppercase tracking-widest">Packing Slip</h2>
            <p className="text-neutral-500 mt-2">ORDER #8923-ABC</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              <span>Item</span>
              <span>Qty</span>
            </div>
            
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-dotted border-neutral-300 pb-4 last:border-0"
              >
                <div>
                  <p className="font-bold text-black text-lg">{item.name}</p>
                  <p className="text-xs text-neutral-500">{item.id}</p>
                </div>
                <span className="text-xl font-bold">{item.qty}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-neutral-400 uppercase tracking-widest">
            <p>Thank you for your purchase.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
`;

const p6 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { title: "Device", content: "The ultimate tool, crafted from premium materials and ready right out of the box." },
  { title: "Cable", content: "A 1-meter woven USB-C to USB-C cable for high-speed charging and data." },
  { title: "Adapter", content: "Fast-charge capable 20W power adapter to get you to 50% in 30 minutes." }
];

export default function WhatsInTheBox6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-black text-white mb-6">In the box.</h2>
          <p className="text-neutral-400">Everything you need, beautifully packaged.</p>
        </div>

        <div className="lg:w-2/3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/10 last:border-0">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-8 flex justify-between items-center text-left"
                >
                  <h3 className={\`text-3xl font-bold transition-colors duration-300 \${isOpen ? 'text-white' : 'text-neutral-500'}\`}>
                    {item.title}
                  </h3>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-neutral-500">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-4 flex gap-6">
                        <div className="w-24 h-24 bg-neutral-900 rounded-xl flex-shrink-0 border border-white/5" />
                        <p className="text-neutral-400 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
`;

const p7 = `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", col: "md:col-span-2", row: "md:row-span-2" },
  { name: "Cable", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Adapter", col: "md:col-span-1", row: "md:row-span-1" },
  { name: "Manual", col: "md:col-span-2", row: "md:row-span-1" },
];

export default function WhatsInTheBox7({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-24 bg-[#030303] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <h2 className="text-5xl font-black text-white text-center mb-16">The complete package.</h2>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[600px] relative group"
        >
          {items.map((item, i) => (
            <div 
              key={i} 
              className={\`\${item.col} \${item.row} bg-neutral-900 rounded-[2rem] border border-white/5 relative overflow-hidden group/card\`}
            >
              {/* Spotlight Effect */}
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                animate={{
                  background: \`radial-gradient(600px circle at \${mousePos.x}px \${mousePos.y}px, rgba(59,130,246,0.15), transparent 40%)\`
                }}
              />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-full h-full bg-black/20 rounded-2xl mb-4 border border-white/5 flex items-center justify-center">
                  <span className="text-neutral-600 font-bold uppercase tracking-widest text-xs">Image</span>
                </div>
                <h3 className="text-xl font-bold text-white w-full text-center">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p8 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = ["Device", "Cable", "Manual", "Stickers"];

export default function WhatsInTheBox8({ data }: { data: any }) {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="bg-neutral-100 h-[200vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <h2 className="absolute top-12 text-4xl font-black text-black z-50">Included</h2>

        <div className="relative w-full max-w-md h-[400px]">
          {items.map((item, i) => {
            // We create a staggered stack effect based on index
            return <StackingCard key={i} item={item} index={i} total={items.length} containerRef={containerRef} />;
          })}
        </div>

      </div>
    </section>
  );
}

function StackingCard({ item, index, total, containerRef }: any) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate when this card should drop in
  const start = index * (1 / total);
  
  // y moves from -100% to 0%
  const y = useTransform(scrollYProgress, [Math.max(0, start - 0.2), start], ["-150%", "0%"]);
  // scale compresses slightly as more cards pile on top
  const scale = useTransform(scrollYProgress, [start, 1], [1, 1 - ((total - index) * 0.05)]);
  // margin pushes cards down to fake a stack
  const top = \`\${index * 20}px\`;

  return (
    <motion.div 
      style={{ y, scale, top, zIndex: index }}
      className="absolute w-full h-48 bg-white border border-neutral-200 rounded-3xl shadow-xl flex items-center justify-center"
    >
      <h3 className="text-3xl font-black text-black">{item}</h3>
    </motion.div>
  );
}
`;

const p9 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://picsum.photos/seed/s1/400/400" },
  { name: "Cable", img: "https://picsum.photos/seed/s2/400/400" },
  { name: "Adapter", img: "https://picsum.photos/seed/s3/400/400" },
  { name: "Manual", img: "https://picsum.photos/seed/s4/400/400" }
];

export default function WhatsInTheBox9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        
        <h2 className="text-5xl font-black text-black mb-20">Inside the box.</h2>

        <div className="flex flex-wrap justify-center gap-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative">
                {/* Silhouette / Grayscale filter */}
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale brightness-50 contrast-200 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-bold text-neutral-300 group-hover:text-black transition-colors duration-300">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p10 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: 1, name: "Device" },
  { id: 2, name: "Cable" },
  { id: 3, name: "Adapter" },
  { id: 4, name: "Documentation" }
];

export default function WhatsInTheBox10({ data }: { data: any }) {
  const [rotation, setRotation] = useState(0);

  const rotateCarousel = (direction: 'left' | 'right') => {
    setRotation(prev => direction === 'left' ? prev + 90 : prev - 90);
  };

  return (
    <section className="py-24 bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      
      <div className="text-center mb-16 relative z-20">
        <h2 className="text-5xl font-black text-white">Unbox the future.</h2>
        <p className="text-neutral-400 mt-4">Spin to view contents.</p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-md aspect-square perspective-[1000px] flex items-center justify-center">
        
        <motion.div 
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-64 h-64 relative"
        >
          {items.map((item, i) => {
            const rotateY = i * 90;
            return (
              <div 
                key={item.id}
                className="absolute inset-0 bg-neutral-900 border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                style={{ 
                  transform: \`rotateY(\${rotateY}deg) translateZ(200px)\`,
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="w-24 h-24 bg-white/10 rounded-full mb-6" />
                <h3 className="text-2xl font-bold text-white text-center">{item.name}</h3>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Controls */}
      <div className="flex gap-8 mt-16 relative z-20">
        <button onClick={() => rotateCarousel('left')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
          &larr;
        </button>
        <button onClick={() => rotateCarousel('right')} className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
          &rarr;
        </button>
      </div>

    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-1/WhatsInTheBox1.tsx', content: p1 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-2/WhatsInTheBox2.tsx', content: p2 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-3/WhatsInTheBox3.tsx', content: p3 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-4/WhatsInTheBox4.tsx', content: p4 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-5/WhatsInTheBox5.tsx', content: p5 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-6/WhatsInTheBox6.tsx', content: p6 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-7/WhatsInTheBox7.tsx', content: p7 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-8/WhatsInTheBox8.tsx', content: p8 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-9/WhatsInTheBox9.tsx', content: p9 },
  { path: '../src/components/sections/product/08-whats-in-the-box/whats-in-the-box-10/WhatsInTheBox10.tsx', content: p10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Whats In The Box 1-10 generated successfully.');
