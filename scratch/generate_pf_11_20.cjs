const fs = require('fs');
const path = require('path');

const p11 = `import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Ultra Fast", desc: "No more loading screens." },
  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Secure", desc: "Military grade encryption." },
  { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Global", desc: "Servers across 50 regions." },
  { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "API First", desc: "Extensive developer tools." },
  { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", title: "Storage", desc: "Unlimited capacity." },
  { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", title: "Control", desc: "Granular permissions." }
];

export default function ProductFeatures11({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-20 tracking-wide">Everything you need.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-neutral-900 border border-white/10 p-10 flex flex-col items-center text-center relative overflow-hidden group hover:border-white/20 transition-colors cursor-default"
            >
              {/* Hover Ripple */}
              <div className="absolute inset-0 bg-blue-500/10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out origin-center opacity-0 group-hover:opacity-100" />
              
              <svg className="w-12 h-12 text-blue-500 mb-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feat.icon} />
              </svg>
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{feat.title}</h3>
              <p className="text-neutral-400 relative z-10">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p12 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timeline = [
  { step: "01", title: "Concept", desc: "Ideation and wireframing.", img: "https://picsum.photos/seed/tl1/800/600" },
  { step: "02", title: "Design", desc: "High-fidelity mockups.", img: "https://picsum.photos/seed/tl2/800/600" },
  { step: "03", title: "Build", desc: "Pixel-perfect implementation.", img: "https://picsum.photos/seed/tl3/800/600" },
  { step: "04", title: "Launch", desc: "Deployment and scaling.", img: "https://picsum.photos/seed/tl4/800/600" },
];

export default function ProductFeatures12({ data }: { data: any }) {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16">
        
        {/* Left: Timeline List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-black mb-12">How it works.</h2>
          <div className="flex flex-col">
            {timeline.map((item, i) => {
              const isActive = active === i;
              return (
                <div key={i} className="flex group cursor-pointer" onClick={() => setActive(i)}>
                  {/* Timeline Line & Dot */}
                  <div className="flex flex-col items-center mr-6">
                    <div className={\`w-4 h-4 rounded-full border-2 transition-colors duration-300 \${isActive ? 'bg-blue-600 border-blue-600' : 'bg-transparent border-neutral-300 group-hover:border-blue-400'}\`} />
                    {i !== timeline.length - 1 && (
                      <div className={\`w-[2px] h-24 my-2 transition-colors duration-300 \${isActive ? 'bg-blue-600' : 'bg-neutral-200'}\`} />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="-mt-1 pb-12">
                    <span className={\`text-sm font-bold tracking-widest transition-colors \${isActive ? 'text-blue-600' : 'text-neutral-400'}\`}>{item.step}</span>
                    <h3 className={\`text-3xl font-bold mt-1 mb-2 transition-colors \${isActive ? 'text-black' : 'text-neutral-400'}\`}>{item.title}</h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-neutral-500 mt-2">{item.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Dynamic Image */}
        <div className="lg:w-1/2 h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              src={timeline[active].img}
              className="absolute inset-0 w-full h-full object-cover"
              alt={timeline[active].title}
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

const p13 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Speed", front: "Lightning Fast", back: "Under 50ms latency across the globe." },
  { title: "Design", front: "Award Winning", back: "Recognized for seamless UX/UI." },
  { title: "Scale", front: "Infinite Limits", back: "Auto-scaling infrastructure." }
];

export default function ProductFeatures13({ data }: { data: any }) {
  return (
    <section className="py-32 bg-neutral-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-16 px-6">
        <h2 className="text-5xl font-black mb-4">Flip the script.</h2>
        <p className="text-xl text-neutral-500">Hover to reveal the details.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
        {features.map((feat, i) => (
          <FlipCard key={i} feat={feat} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ feat }: { feat: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-80 w-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div 
          className="absolute inset-0 bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg border border-neutral-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="text-neutral-400 font-bold tracking-widest uppercase text-sm mb-4">{feat.title}</span>
          <h3 className="text-3xl font-black text-center">{feat.front}</h3>
        </div>

        {/* Back */}
        <div 
          className="absolute inset-0 bg-blue-600 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-2xl font-bold text-white">{feat.back}</p>
        </div>
      </motion.div>
    </div>
  );
}
`;

const p14 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProductFeatures14({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [300, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-purple-800 to-blue-800 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 min-h-[600px] flex items-center justify-center">
        
        {/* Layer 1 (Back, slowest) */}
        <motion.div style={{ y: y1 }} className="absolute left-0 md:left-20 top-20 w-72 p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold text-white mb-2">Deep Integration</h3>
          <p className="text-sm text-neutral-400">Hooks seamlessly into your existing tech stack without friction.</p>
        </motion.div>

        {/* Layer 2 (Middle) */}
        <motion.div style={{ y: y2 }} className="absolute right-0 md:right-20 top-1/2 -translate-y-1/2 w-80 p-8 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 z-20 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">Real-time Sync</h3>
          <p className="text-base text-neutral-300">Data propagates instantly across all connected clients and edge nodes.</p>
        </motion.div>

        {/* Layer 3 (Front, fastest) */}
        <motion.div style={{ y: y3 }} className="absolute left-10 md:left-1/3 bottom-20 w-64 p-6 bg-blue-500/20 backdrop-blur-xl rounded-3xl border border-blue-400/30 z-30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <h3 className="text-lg font-bold text-white mb-2">Edge Delivery</h3>
          <p className="text-xs text-blue-200">Millisecond response times anywhere in the world.</p>
        </motion.div>

      </div>
    </section>
  );
}
`;

const p15 = `import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { id: "01", title: "Build", desc: "Construct robust systems with our intuitive drag-and-drop interface." },
  { id: "02", title: "Scale", desc: "Deploy globally with a single click to edge networks." },
  { id: "03", title: "Analyze", desc: "Gain deep insights with real-time telemetry and metrics." }
];

export default function ProductFeatures15({ data }: { data: any }) {
  return (
    <section className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row">
        
        {/* Sticky Left Sidebar */}
        <div className="md:w-1/3 relative">
          <div className="sticky top-1/2 -translate-y-1/2 h-[300px] flex items-center">
            <h2 className="text-[12rem] font-black text-neutral-100 leading-none pointer-events-none -ml-4">PRO</h2>
            <div className="absolute inset-0 flex flex-col justify-center gap-4">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase">Features</p>
              <h3 className="text-5xl font-black text-black">The new<br/>standard.</h3>
            </div>
          </div>
        </div>

        {/* Right Scrollable Content */}
        <div className="md:w-2/3 mt-24 md:mt-0 pb-32">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ margin: "-100px" }}
              className="mb-48 last:mb-0 relative"
            >
              <div className="absolute -left-8 md:-left-24 top-0 text-3xl font-black text-neutral-300">{feat.id}</div>
              <div className="bg-neutral-50 rounded-[3rem] p-12 md:p-16 border border-neutral-200">
                <h4 className="text-4xl md:text-5xl font-black mb-6">{feat.title}</h4>
                <p className="text-2xl text-neutral-500 font-light">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

const p16 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures16({ data }: { data: any }) {
  const circles = [
    { title: "Performance", value: 98, color: "#3b82f6" },
    { title: "Efficiency", value: 92, color: "#8b5cf6" },
    { title: "Security", value: 99, color: "#10b981" }
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full text-center">
        <h2 className="text-5xl font-black text-white mb-24">By the numbers.</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
          {circles.map((circle, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                {/* Background Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                  
                  {/* Animated Progress Ring */}
                  <motion.circle 
                    cx="50" cy="50" r="40" 
                    stroke={circle.color} 
                    strokeWidth="8" 
                    fill="none" 
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                    whileInView={{ strokeDashoffset: 251.2 - (251.2 * circle.value) / 100 }}
                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </svg>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-white">{circle.value}%</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-neutral-400">{circle.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p17 = `import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/m1/600/400",
  "https://picsum.photos/seed/m2/600/400",
  "https://picsum.photos/seed/m3/600/400",
  "https://picsum.photos/seed/m4/600/400",
];

export default function ProductFeatures17({ data }: { data: any }) {
  // Duplicating for infinite effect
  const trackImages = [...images, ...images];

  return (
    <section className="py-24 bg-neutral-900 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="px-6 mb-16 text-center">
        <h2 className="text-5xl font-black text-white">Visual Excellence.</h2>
      </div>

      <div className="relative w-full overflow-hidden group py-10">
        <motion.div 
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {trackImages.map((src, i) => (
            <div 
              key={i} 
              className="w-[400px] h-[300px] rounded-3xl overflow-hidden relative flex-shrink-0 group/card cursor-pointer"
            >
              <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" alt="Feature" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 text-center">
                <p className="text-white font-bold text-lg transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                  Immersive High-Fidelity Details
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
`;

const p18 = `import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const features = [
  { title: "Quantum Processor", img: "https://picsum.photos/seed/q1/400/400" },
  { title: "Holographic Display", img: "https://picsum.photos/seed/q2/400/400" },
  { title: "Kinetic Battery", img: "https://picsum.photos/seed/q3/400/400" },
];

export default function ProductFeatures18({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring animation for smooth cursor follow
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
    <section className="py-32 bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col gap-12">
        {features.map((feat, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer border-b border-neutral-200 pb-8 last:border-0"
          >
            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter transition-colors group-hover:text-blue-600">
              {feat.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Custom Image Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 overflow-hidden rounded-full shadow-2xl mix-blend-difference"
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
          <img 
            src={features[hoveredIndex].img} 
            alt="Preview" 
            className="w-full h-full object-cover" 
          />
        )}
      </motion.div>

    </section>
  );
}
`;

const p19 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const modes = [
  { id: "performance", label: "Performance", text: "Unleash maximum power. The GPU cores automatically overclock to deliver sustained frame rates." },
  { id: "efficiency", label: "Efficiency", text: "Save battery life. Background tasks are suspended and the display refresh rate adapts intelligently." },
  { id: "focus", label: "Focus", text: "Silence distractions. Only critical notifications break through your personalized filter." }
];

export default function ProductFeatures19({ data }: { data: any }) {
  const [activeMode, setActiveMode] = useState(modes[0].id);

  const activeContent = modes.find(m => m.id === activeMode);

  return (
    <section className="py-24 bg-[#0a0a0a] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        {/* Toggle Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {modes.map(mode => (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className="relative px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-colors"
            >
              {activeMode === mode.id && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={\`relative z-10 \${activeMode === mode.id ? 'text-black' : 'text-neutral-500'}\`}>
                {mode.label}
              </span>
            </button>
          ))}
        </div>

        {/* Display Card */}
        <div className="relative h-64 bg-neutral-900 border border-white/10 rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-12 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeMode}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-light text-white leading-relaxed"
            >
              {activeContent?.text}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
`;

const p20 = `import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures20({ data }: { data: any }) {
  const words = ["The", "future", "is", "already", "here."];

  return (
    <section className="h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-6">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.5, 
              delay: i * 0.3, 
              ease: [0.16, 1, 0.3, 1] // Apple-like custom ease out
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="overflow-hidden"
          >
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter">
              {word}
            </h2>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/07-product-features/product-features-11/ProductFeatures11.tsx', content: p11 },
  { path: '../src/components/sections/product/07-product-features/product-features-12/ProductFeatures12.tsx', content: p12 },
  { path: '../src/components/sections/product/07-product-features/product-features-13/ProductFeatures13.tsx', content: p13 },
  { path: '../src/components/sections/product/07-product-features/product-features-14/ProductFeatures14.tsx', content: p14 },
  { path: '../src/components/sections/product/07-product-features/product-features-15/ProductFeatures15.tsx', content: p15 },
  { path: '../src/components/sections/product/07-product-features/product-features-16/ProductFeatures16.tsx', content: p16 },
  { path: '../src/components/sections/product/07-product-features/product-features-17/ProductFeatures17.tsx', content: p17 },
  { path: '../src/components/sections/product/07-product-features/product-features-18/ProductFeatures18.tsx', content: p18 },
  { path: '../src/components/sections/product/07-product-features/product-features-19/ProductFeatures19.tsx', content: p19 },
  { path: '../src/components/sections/product/07-product-features/product-features-20/ProductFeatures20.tsx', content: p20 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Product Features 11-20 generated successfully.');
