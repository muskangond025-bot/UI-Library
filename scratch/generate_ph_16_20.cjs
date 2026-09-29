const fs = require('fs');
const path = require('path');

const p16 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights16({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const features = [
    { title: "Designed", top: "20%" },
    { title: "Engineered", top: "50%" },
    { title: "Perfected", top: "80%" }
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="relative w-full h-[300vh]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg viewBox="0 0 100 800" className="w-8 h-full" preserveAspectRatio="none">
              <motion.path 
                d="M 50 0 L 50 800" 
                stroke="white" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="1 1"
                style={{ pathLength, opacity: 0.5 }}
              />
            </svg>
          </div>

          <div className="relative w-full h-full max-w-4xl mx-auto flex flex-col items-center">
            {features.map((f, i) => {
              const start = i * 0.3;
              const opacity = useTransform(scrollYProgress, [start, start + 0.1, start + 0.3], [0, 1, 0.3]);
              const scale = useTransform(scrollYProgress, [start, start + 0.1], [0.8, 1]);
              
              return (
                <motion.div 
                  key={i}
                  style={{ top: f.top, opacity, scale }}
                  className="absolute transform -translate-y-1/2 w-full text-center"
                >
                  <div className="w-4 h-4 rounded-full bg-white mx-auto mb-4" />
                  <h3 className="text-6xl font-black text-white">{f.title}</h3>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
`;

const p17 = `import React from 'react';
import { motion } from 'framer-motion';

const markers = [
  { top: "20%", left: "30%", title: "Telephoto", desc: "5x optical zoom." },
  { top: "60%", left: "70%", title: "Main", desc: "48MP resolution." },
  { top: "40%", left: "50%", title: "Ultrawide", desc: "Macro photography." }
];

export default function ProductHighlights17({ data }: { data: any }) {
  return (
    <section className="h-screen bg-neutral-950 relative overflow-hidden flex items-center justify-center p-6">
      <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <img 
          src="https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=1200" 
          alt="Product" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {markers.map((marker, i) => (
          <motion.div 
            key={i}
            className="absolute group z-10"
            style={{ top: marker.top, left: marker.left }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 -ml-5 -mt-5 cursor-pointer">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 group-hover:animate-ping" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            </div>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
              <div className="p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-center shadow-xl">
                <h4 className="text-white font-bold mb-1">{marker.title}</h4>
                <p className="text-neutral-400 text-sm">{marker.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;

const p18 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights18({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const words = ["Powerful.", "Intelligent.", "Refined."];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-4">
            {words.map((word, i) => {
              const start = i * 0.2;
              const end = start + 0.2;
              
              const y = useTransform(scrollYProgress, [start, end], [100, 0]);
              const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              
              return (
                <div key={i} className="overflow-hidden pb-4">
                  <motion.h2 
                    style={{ y, opacity }}
                    className="text-7xl md:text-[8vw] font-black text-white leading-none tracking-tighter"
                  >
                    {word}
                  </motion.h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

const p19 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Speed", speed: 0.8, color: "bg-blue-500", size: "h-[300px]" },
  { title: "Power", speed: 1.2, color: "bg-purple-500", size: "h-[400px]" },
  { title: "Design", speed: 0.9, color: "bg-pink-500", size: "h-[250px]" },
  { title: "Battery", speed: 1.1, color: "bg-emerald-500", size: "h-[350px]" },
];

export default function ProductHighlights19({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-neutral-950 overflow-y-auto overflow-x-hidden hide-scrollbar relative py-[20vh]"
    >
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 h-[150vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => {
            const y = useTransform(scrollYProgress, [0, 1], [200 * f.speed, -200 * f.speed]);
            
            return (
              <motion.div
                key={i}
                style={{ y }}
                className={\`\${f.size} w-full rounded-[3rem] \${f.color} flex items-center justify-center p-8 shadow-2xl\`}
              >
                <h3 className="text-5xl font-black text-white mix-blend-overlay">{f.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

const p20 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const folders = [
  { title: "Hardware", color: "#172554", content: "Advanced custom silicon architecture." },
  { title: "Software", color: "#1e1b4b", content: "Seamlessly integrated operating system." },
  { title: "Services", color: "#3b0764", content: "Privacy-first cloud computing." },
];

export default function ProductHighlights20({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 bg-neutral-950 flex flex-col items-center justify-center relative min-h-screen">
      <div className="max-w-3xl w-full px-6 flex flex-col items-center gap-4">
        <h2 className="text-5xl font-black text-white mb-16">Ecosystem.</h2>
        
        {folders.map((folder, i) => {
          const isActive = active === i;
          const isAbove = i < active;
          
          return (
            <motion.div
              key={i}
              onClick={() => setActive(i)}
              animate={{ 
                y: isActive ? 0 : isAbove ? -20 : (i - active) * 60,
                scale: isActive ? 1 : 0.95,
                zIndex: isActive ? 10 : 0
              }}
              className="w-full h-64 rounded-3xl cursor-pointer absolute shadow-2xl border border-white/10 flex flex-col p-8 transition-colors"
              style={{ backgroundColor: folder.color, top: '40%' }}
              whileHover={{ y: isActive ? 0 : (i - active) * 60 - 10 }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{folder.title}</h3>
              <motion.p 
                animate={{ opacity: isActive ? 1 : 0 }}
                className="text-xl text-white/70"
              >
                {folder.content}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-16/ProductHighlights16.tsx', content: p16 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-17/ProductHighlights17.tsx', content: p17 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-18/ProductHighlights18.tsx', content: p18 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-19/ProductHighlights19.tsx', content: p19 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-20/ProductHighlights20.tsx', content: p20 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Files 16-20 generated successfully.');
