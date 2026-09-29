const fs = require('fs');
const path = require('path');

const p11 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  { id: 1, title: "Super Retina XDR", subtitle: "OLED display", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800" },
  { id: 2, title: "Titanium Design", subtitle: "Aerospace-grade", img: "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?q=80&w=800" },
  { id: 3, title: "A17 Pro", subtitle: "Game-changing chip", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800" },
  { id: 4, title: "Pro Camera", subtitle: "48MP Main", img: "https://images.unsplash.com/photo-1592840062778-9e19d7d921a2?q=80&w=800" },
];

export default function ProductHighlights11({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-neutral-950 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Designed to perform.</h2>
          <p className="text-xl text-neutral-400">Hover to expand features.</p>
        </div>
        
        <div className="flex flex-col md:flex-row h-[60vh] gap-4 w-full">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              onHoverStart={() => setActive(i)}
              animate={{ flex: active === i ? 4 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer h-full"
            >
              <img src={f.img} alt={f.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <motion.div 
                className="absolute bottom-0 left-0 p-8 flex flex-col justify-end"
                animate={{ opacity: active === i ? 1 : 0.4, y: active === i ? 0 : 20 }}
              >
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-2 whitespace-nowrap">{f.subtitle}</h3>
                <h2 className="text-3xl md:text-5xl font-black text-white whitespace-nowrap">{f.title}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p12 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  { title: "Fluid Motion", desc: "Experience 120Hz ProMotion displays." },
  { title: "Spatial Audio", desc: "Immersive sound that surrounds you." },
  { title: "MagSafe", desc: "Snap on cases, wallets, and chargers." },
  { title: "Ceramic Shield", desc: "Tougher than any smartphone glass." },
];

export default function ProductHighlights12({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  // Translate X horizontally as we scroll vertically
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="h-[400vh] bg-black relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-32 w-[400vw]">
          {features.map((f, i) => (
            <div key={i} className="w-[100vw] max-w-2xl flex-shrink-0">
              <div className="aspect-video bg-neutral-900 rounded-3xl mb-8 relative overflow-hidden border border-white/10 flex items-center justify-center">
                <span className="text-[15rem] font-black text-white/5 absolute -right-10 -bottom-20 leading-none">0{i + 1}</span>
              </div>
              <h3 className="text-5xl font-black text-white mb-4">{f.title}</h3>
              <p className="text-2xl text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
`;

const p13 = `import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full aspect-square rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-end"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function ProductHighlights13({ data }: { data: any }) {
  return (
    <section className="py-32 bg-neutral-950 flex flex-col items-center justify-center relative perspective-[1000px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Machine Learning</h3>
          <p className="text-neutral-400">16-core Neural Engine.</p>
        </TiltCard>
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Graphics</h3>
          <p className="text-neutral-400">Up to 40-core GPU.</p>
        </TiltCard>
        <TiltCard>
          <h3 className="text-3xl font-black text-white mb-2">Memory</h3>
          <p className="text-neutral-400">Up to 128GB unified memory.</p>
        </TiltCard>
      </div>
    </section>
  );
}
`;

const p14 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductHighlights14({ data }: { data: any }) {
  const scrollContainerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    container: scrollContainerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"]
  });

  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(20px)", "blur(0px)", "blur(20px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section 
      ref={scrollContainerRef}
      className="h-screen bg-black overflow-y-auto overflow-x-hidden hide-scrollbar relative"
    >
      <div ref={contentRef} className="h-[200vh] w-full">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <motion.div style={{ filter: blur, opacity, scale }} className="text-center">
            <h2 className="text-6xl md:text-[8vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 leading-none tracking-tighter mb-8">
              Breathtaking.
            </h2>
            <p className="text-xl md:text-3xl text-neutral-400 max-w-2xl mx-auto font-light">
              Experience clarity like never before. Every pixel rendered with absolute precision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

const p15 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductHighlights15({ data }: { data: any }) {
  const cards = [
    { title: "Dynamic Island", desc: "Bubbles up music, calls, and more." },
    { title: "Crash Detection", desc: "Calls for help when you can't." },
    { title: "SOS via Satellite", desc: "Peace of mind off the grid." }
  ];

  return (
    <section className="py-32 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative p-[2px] rounded-3xl overflow-hidden group"
            >
              {/* Spinning gradient border effect */}
              <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)] animate-[spin_3s_linear_infinite]" />
              
              <div className="relative bg-neutral-900 h-full rounded-[23px] p-10 flex flex-col justify-between">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-12">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-neutral-400">{card.desc}</p>
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

const files = [
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-11/ProductHighlights11.tsx', content: p11 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-12/ProductHighlights12.tsx', content: p12 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-13/ProductHighlights13.tsx', content: p13 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-14/ProductHighlights14.tsx', content: p14 },
  { path: '../src/components/sections/product/05-product-highlights/product-highlights-15/ProductHighlights15.tsx', content: p15 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Files 11-15 generated successfully.');
