const fs = require('fs');
const path = require('path');

const p6 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const specs = [
  { category: "Processor", value: "A17 Pro chip", details: ["New 6-core CPU with 2 performance and 4 efficiency cores", "New 6-core GPU", "New 16-core Neural Engine"] },
  { category: "Display", value: "Super Retina XDR", details: ["6.7-inch (diagonal) all-screen OLED display", "2796-by-1290-pixel resolution at 460 ppi", "Dynamic Island", "Always-On display", "ProMotion technology"] },
  { category: "Camera", value: "Pro camera system", details: ["48MP Main: 24 mm, f/1.78 aperture", "12MP Ultra Wide: 13 mm, f/2.2 aperture", "12MP 5x Telephoto: 120 mm, f/2.8 aperture"] },
  { category: "Power and Battery", value: "Up to 29 hours", details: ["Video playback: Up to 29 hours", "Audio playback: Up to 95 hours", "Built-in rechargeable lithium-ion battery", "MagSafe wireless charging up to 15W"] }
];

export default function ProductSpecifications6({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <h2 className="text-4xl md:text-5xl font-light text-black mb-16 border-b border-black pb-8">Detailed Specifications</h2>
        
        <div className="flex flex-col">
          {specs.map((spec, i) => {
            const isOpen = openIndex === i;
            
            return (
              <div key={i} className="border-b border-neutral-200">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 w-full">
                    <span className="text-lg font-bold text-neutral-400 w-48">{spec.category}</span>
                    <span className="text-2xl font-medium text-black group-hover:text-blue-600 transition-colors">{spec.value}</span>
                  </div>
                  
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-400 flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="pb-8 md:pl-56 space-y-3">
                        {spec.details.map((detail, j) => (
                          <li key={j} className="text-neutral-500 text-lg flex items-start gap-3">
                            <span className="text-blue-500 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
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

const p7 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications7({ data }: { data: any }) {
  // SVG Radar Chart Coordinates (normalized 0-100)
  // Categories: Power (Top), Battery (TopRight), Camera (BottomRight), Display (BottomLeft), Design (TopLeft)
  const center = { x: 50, y: 50 };
  const points = "50,10 90,38 75,90 25,90 10,38"; // Pentagon max shape
  const dataPoints = "50,15 85,42 60,80 30,85 20,45"; // Product specific shape

  return (
    <section className="py-24 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        <div>
          <h2 className="text-5xl font-black text-white mb-6">Unrivaled Metric Performance.</h2>
          <p className="text-xl text-neutral-400 mb-8 font-light">Compared to the industry standard, this generation pushes the boundaries across every single vector.</p>
          
          <ul className="space-y-6">
            {[
              { label: "Processing Power", value: "95%", color: "text-blue-400" },
              { label: "Battery Efficiency", value: "88%", color: "text-purple-400" },
              { label: "Camera Sensor", value: "92%", color: "text-pink-400" }
            ].map((stat, i) => (
              <li key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-bold">{stat.label}</span>
                  <span className={\`\${stat.color} font-mono\`}>{stat.value}</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.value }}
                    transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full">
          {/* Radar Chart SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            {/* Grid lines */}
            <polygon points={points} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="90" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="75" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="25" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="10" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            
            {/* Data shape */}
            <motion.polygon 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              transformOrigin="50% 50%"
              points={dataPoints} 
              fill="rgba(59, 130, 246, 0.2)" 
              stroke="#3b82f6" 
              strokeWidth="1"
            />
            
            {/* Data nodes */}
            {dataPoints.split(' ').map((point, i) => (
              <motion.circle 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                cx={point.split(',')[0]} 
                cy={point.split(',')[1]} 
                r="1.5" 
                fill="white" 
              />
            ))}
          </svg>
          
          {/* Labels */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-neutral-400 font-bold tracking-widest uppercase">Power</span>
          <span className="absolute top-1/4 -right-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Battery</span>
          <span className="absolute bottom-4 -right-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Camera</span>
          <span className="absolute bottom-4 -left-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Display</span>
          <span className="absolute top-1/4 -left-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Design</span>
        </div>

      </div>
    </section>
  );
}
`;

const p8 = `import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications8({ data }: { data: any }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const specs = [
    { title: "Resolution", value: "2556 x 1179" },
    { title: "Refresh Rate", value: "120Hz" },
    { title: "Peak Brightness", value: "2000 nits" },
    { title: "Contrast", value: "2M:1" },
    { title: "Color Gamut", value: "P3 Wide" },
    { title: "Protection", value: "Ceramic Shield" },
  ];

  return (
    <section className="py-24 bg-neutral-950 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 w-full text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-16">Hardware specs.</h2>
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 relative group"
        >
          {/* Spotlight overlay effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              background: \`radial-gradient(600px circle at \${mousePos.x}px \${mousePos.y}px, rgba(255,255,255,0.1), transparent 40%)\`
            }}
          />

          {specs.map((spec, i) => (
            <div 
              key={i} 
              className="bg-neutral-900 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square relative overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <p className="text-lg text-neutral-400 mb-2">{spec.title}</p>
                <p className="text-3xl font-bold text-white">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p9 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductSpecifications9({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  const cards = [
    { title: "Processing", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800", specs: ["A17 Pro", "6-core CPU", "6-core GPU"] },
    { title: "Cameras", img: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=800", specs: ["48MP Main", "12MP Ultra Wide", "5x Telephoto"] },
    { title: "Battery", img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=800", specs: ["29h video playback", "Fast-charge", "MagSafe"] },
  ];

  return (
    <section 
      ref={scrollContainerRef}
      className="h-[800px] lg:h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[300vh] w-full">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          
          <motion.div style={{ x }} className="flex gap-8 px-12 md:px-32 w-[300vw] h-[60vh]">
            {cards.map((card, i) => (
              <div key={i} className="w-[100vw] max-w-4xl h-full flex-shrink-0 relative rounded-[3rem] overflow-hidden group">
                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-y-0 left-0 p-12 flex flex-col justify-center">
                  <h3 className="text-6xl font-black text-white mb-8">{card.title}</h3>
                  <ul className="space-y-4">
                    {card.specs.map((s, j) => (
                      <li key={j} className="text-2xl text-neutral-300 flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
`;

const p10 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications10({ data }: { data: any }) {
  const specs = [
    { label: "Material", value: "Aerospace Titanium" },
    { label: "Display", value: "Super Retina XDR" },
    { label: "Glass", value: "Ceramic Shield" },
    { label: "Weight", value: "187 grams" }
  ];

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-light text-neutral-400 mb-16 leading-relaxed"
        >
          Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.
        </motion.h2>

        <div className="space-y-0">
          {specs.map((spec, i) => (
            <div key={i} className="flex justify-between items-end border-b-2 border-black py-6 overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="text-xl md:text-2xl font-bold text-black uppercase tracking-tight"
              >
                {spec.label}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                className="text-lg md:text-xl text-neutral-500 font-mono"
              >
                {spec.value}
              </motion.span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-6/ProductSpecifications6.tsx', content: p6 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-7/ProductSpecifications7.tsx', content: p7 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-8/ProductSpecifications8.tsx', content: p8 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-9/ProductSpecifications9.tsx', content: p9 },
  { path: '../src/components/sections/product/06-product-specifications/product-specifications-10/ProductSpecifications10.tsx', content: p10 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Specs 6-10 generated successfully.');
