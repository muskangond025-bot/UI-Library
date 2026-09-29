const fs = require('fs');
const path = require('path');

const p1 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device Pro", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Braided USB-C Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "20W Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Documentation", qty: 1, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded1({ data }: { data: any }) {
  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-black tracking-tight"
          >
            What's in the box.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-50 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all duration-500 hover:!opacity-100 group-hover:opacity-40 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-neutral-200 overflow-hidden"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-32 h-32 rounded-full bg-white shadow-md flex items-center justify-center mb-6 overflow-hidden relative"
              >
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
              <p className="text-sm font-bold text-neutral-400 tracking-widest uppercase">Qty: {item.qty}</p>
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

export default function WhatSIncluded2({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const items = [
    { name: "Main Device", start: 0.1, end: 0.4, xOut: -300, yOut: -200, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
    { name: "Braided Cable", start: 0.2, end: 0.5, xOut: 300, yOut: -100, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
    { name: "Manual", start: 0.3, end: 0.6, xOut: -250, yOut: 200, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
    { name: "Adapter", start: 0.4, end: 0.7, xOut: 250, yOut: 200, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <section ref={containerRef} className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full text-center relative h-[800px] flex items-center justify-center">
        
        <h2 className="absolute top-10 w-full text-center text-5xl md:text-7xl font-black text-white">Unboxing.</h2>

        {/* Central Box */}
        <motion.div 
          style={{ 
            scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.5]),
            opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0])
          }}
          className="absolute w-64 h-64 bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl z-10 flex flex-col items-center justify-center overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay" />
          <span className="text-white font-bold uppercase tracking-widest text-xl relative z-20">The Box</span>
        </motion.div>

        {/* Exploding Items */}
        {items.map((item, i) => {
          // Clamp values safely
          const s = Math.max(0, item.start);
          const e = Math.min(1, item.end);
          
          const x = useTransform(scrollYProgress, [s, e], [0, item.xOut]);
          const y = useTransform(scrollYProgress, [s, e], [0, item.yOut]);
          const opacity = useTransform(scrollYProgress, [s, s + 0.1, e], [0, 1, 1]);
          const scale = useTransform(scrollYProgress, [s, e], [0.3, 1]);

          return (
            <motion.div
              key={i}
              style={{ x, y, opacity, scale }}
              className="absolute w-48 h-48 bg-neutral-800 rounded-3xl border border-white/20 flex flex-col items-center justify-center p-4 z-20 shadow-2xl overflow-hidden"
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <span className="text-white font-bold text-center relative z-10 mt-auto mb-2 tracking-wide">{item.name}</span>
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
  { name: "Device Pro", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Braided Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Power Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Documentation", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded3({ data }: { data: any }) {
  const trackItems = [...items, ...items, ...items]; 

  return (
    <section className="py-32 bg-neutral-100 overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-black tracking-tight">Included in the box.</h2>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

        <motion.div 
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {trackItems.map((item, i) => (
            <div 
              key={i} 
              className="w-[350px] h-[400px] bg-white rounded-[3rem] border border-neutral-200 shadow-xl flex flex-col items-center p-8 text-center flex-shrink-0 group hover:scale-105 transition-transform duration-500 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-neutral-900 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="w-full h-48 rounded-2xl mb-8 overflow-hidden relative shadow-inner">
                 <img src={item.img} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-black text-black mt-auto">{item.name}</h3>
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
  { name: "Smartphone", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "USB-C Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Start Guide", qty: 1, img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded4({ data }: { data: any }) {
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
    <section className="py-32 bg-[#050505] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        
        <h2 className="text-sm font-bold tracking-[0.3em] text-neutral-500 uppercase mb-16 border-b border-neutral-800 pb-4">
          What's included
        </h2>

        <div className="flex flex-col">
          {items.map((item, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group flex justify-between items-center py-10 border-b border-neutral-800 last:border-0 cursor-default"
            >
              <motion.h3 
                className="text-4xl md:text-6xl font-black text-neutral-600 transition-colors duration-300 group-hover:text-white"
              >
                {item.name}
              </motion.h3>
              <span className="text-2xl font-bold text-neutral-700 group-hover:text-blue-500 transition-colors duration-300">
                x{item.qty}
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        className="fixed top-0 left-0 w-80 h-80 pointer-events-none z-50 rounded-full overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.5
        }}
      >
        {hoveredIndex !== null && (
          <img src={items[hoveredIndex].img} className="w-full h-full object-cover" />
        )}
      </motion.div>
    </section>
  );
}
`;

const p5 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { id: "ITEM-001", name: "Premium Device", qty: 1, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=200&auto=format&fit=crop" },
  { id: "ITEM-002", name: "Charge Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=200&auto=format&fit=crop" },
  { id: "ITEM-003", name: "Power Adapter", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=200&auto=format&fit=crop" }
];

export default function WhatSIncluded5({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ perspective: 1000 }}
          className="bg-[#faf9f6] border border-neutral-300 p-8 md:p-12 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] rounded-xl font-mono relative"
        >
          {/* Jagged top */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-repeat-x flex overflow-hidden -mt-2">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-neutral-100 rotate-45 transform -translate-y-2 flex-shrink-0" />
            ))}
          </div>

          <div className="text-center mb-12 border-b-2 border-dashed border-neutral-300 pb-8 mt-6">
            <h2 className="text-3xl font-black uppercase tracking-widest text-black">Packing Slip</h2>
            <p className="text-neutral-500 mt-2 text-sm">ORDER #8923-ABC</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex justify-between text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">
              <span>Item & Image</span>
              <span>Qty</span>
            </div>
            
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-between items-center border-b border-dotted border-neutral-300 pb-6 last:border-0"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-md overflow-hidden shadow-inner border border-neutral-200 grayscale">
                    <img src={item.img} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-black text-xl">{item.name}</p>
                    <p className="text-xs text-neutral-500 mt-1">{item.id}</p>
                  </div>
                </div>
                <span className="text-2xl font-black">{item.qty}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center text-xs text-neutral-400 uppercase tracking-widest border-t-2 border-dashed border-neutral-300 pt-8">
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
  { title: "Device Pro", content: "The ultimate tool, crafted from premium materials.", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { title: "Woven Cable", content: "A 1-meter woven USB-C to USB-C cable for high-speed charging.", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { title: "Power Adapter", content: "Fast-charge capable 20W power adapter.", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h2 className="text-6xl font-black text-white mb-6 leading-none">In the<br/>box.</h2>
            <p className="text-xl text-neutral-400 font-light">Everything you need, beautifully packaged.</p>
          </motion.div>
        </div>

        <div className="lg:w-2/3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b border-white/10 last:border-0"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-10 flex justify-between items-center text-left"
                >
                  <h3 className={\`text-4xl font-black transition-colors duration-300 \${isOpen ? 'text-white' : 'text-neutral-600'}\`}>
                    {item.title}
                  </h3>
                  <motion.div animate={{ rotate: isOpen ? 135 : 0 }} className="text-neutral-500">
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
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                        <div className="w-48 h-48 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-2xl relative">
                          <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <p className="text-neutral-300 text-lg sm:text-xl font-light leading-relaxed mt-4 sm:mt-0">
                          {item.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
  { name: "Device", col: "md:col-span-2", row: "md:row-span-2", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", col: "md:col-span-1", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", col: "md:col-span-1", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", col: "md:col-span-2", row: "md:row-span-1", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
];

export default function WhatSIncluded7({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="py-32 bg-[#030303] min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-20 tracking-tight">The complete package.</h2>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
          className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-[800px] relative group"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={\`\${item.col} \${item.row} bg-neutral-900 rounded-[2.5rem] border border-white/10 relative overflow-hidden group/card\`}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-30"
                animate={{
                  background: \`radial-gradient(800px circle at \${mousePos.x}px \${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)\`
                }}
              />
              
              <div className="absolute inset-0 z-10 flex flex-col p-8 justify-end">
                <h3 className="text-3xl font-black text-white mix-blend-difference">{item.name}</h3>
              </div>
              
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-700 z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p8 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Stickers", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded8({ data }: { data: any }) {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="bg-neutral-100 h-[250vh] relative">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 gap-20">
        
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl font-black text-black leading-none mb-6">Stacked<br/>full.</h2>
          <p className="text-2xl text-neutral-500">Scroll to unpack everything included in the box.</p>
        </div>

        <div className="md:w-1/2 relative w-full max-w-md h-[500px]">
          {items.map((item, i) => {
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

  const step = 1 / total;
  const start = index * step;
  
  const y = useTransform(scrollYProgress, [Math.max(0, start - 0.2), Math.min(1, start)], ["-200%", "0%"]);
  const scale = useTransform(scrollYProgress, [start, 1], [1, 1 - ((total - index) * 0.04)]);
  const top = \`\${index * 30}px\`;
  const rotate = useTransform(scrollYProgress, [Math.max(0, start - 0.2), Math.min(1, start)], [index % 2 === 0 ? -20 : 20, 0]);

  return (
    <motion.div 
      style={{ y, scale, top, rotate, zIndex: index }}
      className="absolute w-full h-[350px] bg-white border border-neutral-200 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden p-4"
    >
      <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
        <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <h3 className="text-3xl font-black text-black">{item.name}</h3>
    </motion.div>
  );
}
`;

const p9 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full text-center">
        
        <h2 className="text-6xl md:text-8xl font-black text-white mb-32 tracking-tighter">Inside the box.</h2>

        <div className="flex flex-wrap justify-center gap-16">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative cursor-pointer flex flex-col items-center"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden mb-8 relative border border-white/5 shadow-2xl">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover grayscale brightness-[0.2] contrast-200 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-3xl font-black text-neutral-700 group-hover:text-white transition-colors duration-500">
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
  { id: 1, name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Documentation", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded10({ data }: { data: any }) {
  const [rotation, setRotation] = useState(0);

  const rotateCarousel = (direction: 'left' | 'right') => {
    setRotation(prev => direction === 'left' ? prev + 90 : prev - 90);
  };

  return (
    <section className="py-32 bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="text-center mb-24 relative z-20">
        <h2 className="text-6xl font-black text-white tracking-tighter">Unbox the future.</h2>
        <p className="text-neutral-400 mt-4 text-xl">Spin the carousel to explore contents.</p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full max-w-sm md:max-w-md aspect-square perspective-[1200px] flex items-center justify-center">
        
        <motion.div 
          animate={{ rotateY: rotation }}
          transition={{ duration: 0.8, type: "spring", stiffness: 70, damping: 15 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-72 h-[400px] relative"
        >
          {items.map((item, i) => {
            const rotateY = i * 90;
            return (
              <div 
                key={item.id}
                className="absolute inset-0 bg-neutral-900 border border-white/10 rounded-[3rem] p-6 flex flex-col items-center overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
                style={{ 
                  transform: \`rotateY(\${rotateY}deg) translateZ(280px)\`,
                  backfaceVisibility: "hidden"
                }}
              >
                <div className="absolute inset-0 z-0">
                  <img src={item.img} className="w-full h-full object-cover opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/80 to-neutral-900" />
                </div>
                
                <h3 className="text-3xl font-black text-white text-center relative z-10 mt-auto mb-4">{item.name}</h3>
              </div>
            );
          })}
        </motion.div>

      </div>

      {/* Controls */}
      <div className="flex gap-8 mt-24 relative z-20">
        <button onClick={() => rotateCarousel('left')} className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10 backdrop-blur-md text-2xl">
          &larr;
        </button>
        <button onClick={() => rotateCarousel('right')} className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors border border-white/10 backdrop-blur-md text-2xl">
          &rarr;
        </button>
      </div>

    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/08-whats-included/what-s-included-1/WhatSIncluded1.tsx', content: p1 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-2/WhatSIncluded2.tsx', content: p2 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-3/WhatSIncluded3.tsx', content: p3 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-4/WhatSIncluded4.tsx', content: p4 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-5/WhatSIncluded5.tsx', content: p5 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-6/WhatSIncluded6.tsx', content: p6 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-7/WhatSIncluded7.tsx', content: p7 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8.tsx', content: p8 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-9/WhatSIncluded9.tsx', content: p9 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-10/WhatSIncluded10.tsx', content: p10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Whats Included 1-10 rewritten with awesome animations and images!');
