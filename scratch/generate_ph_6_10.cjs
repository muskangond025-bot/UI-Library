const fs = require('fs');
const path = require('path');

const p6 = `import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Pro Display XDR", desc: "Extreme Dynamic Range with 1,000,000:1 contrast ratio.", span: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=800" },
  { title: "M3 Max", desc: "Mind-blowing performance.", span: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600" },
  { title: "MagSafe 3", desc: "Quick release magnetic charging.", span: "col-span-12 md:col-span-4", img: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?q=80&w=600" },
  { title: "Spatial Audio", desc: "Six-speaker sound system.", span: "col-span-12 md:col-span-8", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800" }
];

export default function ProductHighlights6({ data }: { data: any }) {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-900/10 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Everything you need.</h2>
          <p className="text-xl text-neutral-400">Packed into a beautiful bento grid.</p>
        </motion.div>
        
        <div className="grid grid-cols-12 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className={\`relative rounded-3xl overflow-hidden group bg-neutral-900 border border-white/10 \${f.span} min-h-[300px]\`}
            >
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-neutral-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p7 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Precision Crafted", color: "bg-blue-950", img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=800" },
  { title: "Ultimate Power", color: "bg-indigo-950", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
  { title: "All-day Battery", color: "bg-purple-950", img: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=800" },
];

function StackCard({ feature, index, scrollYProgress }: any) {
  const scale = useTransform(scrollYProgress, [index * 0.3, (index + 1) * 0.3], [1, 0.9]);
  const y = useTransform(scrollYProgress, [index * 0.3, (index + 1) * 0.3], [0, 40]);
  const opacity = useTransform(scrollYProgress, [index * 0.3, (index + 1) * 0.3], [1, 0.5]);

  return (
    <motion.div 
      style={{ scale, y, opacity, top: \`\${10 + index * 5}vh\` }}
      className={\`sticky w-full h-[70vh] rounded-[3rem] overflow-hidden shadow-2xl \${feature.color} border border-white/10\`}
    >
      <div className="absolute inset-0 flex items-center justify-between p-16 z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white w-1/2 leading-tight">{feature.title}</h2>
        <div className="w-1/2 h-full relative rounded-3xl overflow-hidden shadow-2xl">
          <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductHighlights7({ data }: { data: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <section ref={containerRef} className="bg-neutral-950 relative h-[300vh] w-full hide-scrollbar">
      <div className="sticky top-0 h-screen overflow-hidden py-[10vh] px-6 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <StackCard key={i} feature={f} index={i} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
`;

const p8 = `import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
  "Aerospace Grade Titanium", "48MP Main Camera", "A17 Pro Chip", "USB-C Connectivity", "Action Button", "All-day Battery Life"
];

export default function ProductHighlights8({ data }: { data: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-32 bg-neutral-950 relative overflow-hidden"
    >
      <motion.div 
        className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
        animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Spotlight Features</h2>
          <p className="text-neutral-400 text-lg">Hover over the grid to reveal details.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="relative p-[1px] rounded-3xl overflow-hidden group bg-neutral-800">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-neutral-900 rounded-3xl p-8 h-full relative z-10 flex items-center justify-center text-center">
                <h3 className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-500">{f}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p9 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHighlights9({ data }: { data: any }) {
  return (
    <section className="h-screen bg-neutral-950 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute border border-white/5 rounded-full"
            style={{ width: \`\${i * 40}vw\`, height: \`\${i * 40}vw\` }}
            animate={{ rotate: 360 }}
            transition={{ duration: i * 20, repeat: Infinity, ease: "linear", reverse: i % 2 === 0 }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-800 tracking-tighter mb-8"
        >
          Absolute Focus.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-400"
        >
          Distraction-free design engineered for professionals.
        </motion.p>
      </div>
    </section>
  );
}
`;

const p10 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights10({ data }: { data: any }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-screen bg-black flex items-center justify-center overflow-hidden relative">
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=2000" className="w-full h-full object-cover opacity-30" alt="Background" />
      </motion.div>
      
      <div className="relative z-10 mix-blend-difference text-center">
        <motion.h2 
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
          className="text-[10vw] font-black text-white leading-none tracking-tighter"
        >
          PURE POWER.
        </motion.h2>
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-6/ProductHighlights6.tsx', content: p6 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-7/ProductHighlights7.tsx', content: p7 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-8/ProductHighlights8.tsx', content: p8 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-9/ProductHighlights9.tsx', content: p9 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-10/ProductHighlights10.tsx', content: p10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Files generated successfully.');
