const fs = require('fs');
const path = require('path');

const p11 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "VR Headset", qty: 1, img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" },
  { name: "Controllers", qty: 2, img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=800&auto=format&fit=crop" },
  { name: "Charging Dock", qty: 1, img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Link Cable", qty: 1, img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded11({ data }: { data: any }) {
  return (
    <section className="py-24 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30">
        <div className="w-[600px] h-[600px] bg-purple-600 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-tight"
          >
            In The Box.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              className="relative p-[2px] rounded-3xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="bg-neutral-900 rounded-[23px] h-full p-6 flex flex-col items-center justify-center relative z-10">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <span className="text-purple-400 font-mono tracking-widest uppercase text-sm">Qty: {item.qty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p12 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera Body", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
  { name: "50mm Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery Pack", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded12({ data }: { data: any }) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <section className="py-24 bg-white min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="px-6 mb-16 max-w-7xl mx-auto w-full">
        <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">Unpack<br/>Greatness.</h2>
      </div>

      <div className="relative w-full py-10 bg-black rotate-[-2deg] scale-105 shadow-2xl overflow-hidden">
        <motion.div 
          className="flex gap-12 w-max items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        >
          {repeatedItems.map((item, i) => (
            <div key={i} className="flex items-center gap-6 flex-shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 relative">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <span className="text-6xl md:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '2px white' }}>
                {item.name}
              </span>
              <span className="text-4xl text-white ml-6">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
`;

const p13 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, name: "Smartwatch", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Sport Band", img: "https://images.unsplash.com/photo-1510018572596-a4039ce4a462?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Magnetic Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded13({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="py-24 bg-neutral-900 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full mb-12">
        <h2 className="text-4xl font-bold text-white mb-2">Everything Included</h2>
        <p className="text-neutral-400">Hover to explore the contents.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex h-[500px] gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            onHoverStart={() => setHoveredIndex(i)}
            animate={{ flex: hoveredIndex === i ? 4 : 1 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl overflow-hidden cursor-pointer group bg-black"
          >
            <img 
              src={item.img} 
              className={\`absolute inset-0 w-full h-full object-cover transition-all duration-700 \${hoveredIndex === i ? 'opacity-80 scale-100' : 'opacity-30 scale-125 grayscale'}\`} 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
              <AnimatePresence mode="wait">
                {hoveredIndex === i ? (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-blue-400 font-mono text-sm uppercase tracking-widest block mb-2">Item 0{item.id}</span>
                    <h3 className="text-4xl font-black text-white leading-tight">{item.name}</h3>
                  </motion.div>
                ) : (
                  <motion.h3
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xl font-bold writing-vertical-lr rotate-180 absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    {item.name}
                  </motion.h3>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;

const p14 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: "Drone Quadcopter", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800&auto=format&fit=crop" },
  { name: "Remote Controller", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop" },
  { name: "Intelligent Flight Battery", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Extra Propellers", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded14({ data }: { data: any }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#f4f4f5] min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        
        <h2 className="text-sm font-bold tracking-[0.2em] text-neutral-400 uppercase mb-12">Box Contents</h2>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-2xl font-bold text-black">{item.name}</h3>
                <span className="text-neutral-300 font-mono text-xl">{openIndex === i ? '-' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="w-full h-64 rounded-xl overflow-hidden relative">
                      <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
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

const p15 = `import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  { name: "Studio Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" },
  { name: "Carrying Case", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "3.5mm Audio Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "USB-C Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded15({ data }: { data: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="bg-black h-[250vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-20 z-50">Included.</h2>

        <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
          {items.map((item, i) => (
            <ParallaxCard key={i} item={item} index={i} total={items.length} containerRef={containerRef} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ParallaxCard({ item, index, total, containerRef }: any) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate grid positions for final layout (2x2 grid)
  const isLeft = index % 2 === 0;
  const isTop = index < 2;
  const targetX = isLeft ? -150 : 150;
  const targetY = isTop ? -100 : 100;

  const x = useTransform(scrollYProgress, [0, 1], [0, targetX]);
  const y = useTransform(scrollYProgress, [0, 1], [index * -15, targetY]);
  const scale = useTransform(scrollYProgress, [0, 1], [1 - (total - index) * 0.05, 1]);
  const rotation = useTransform(scrollYProgress, [0, 1], [(index - total/2) * 5, 0]);

  return (
    <motion.div 
      style={{ x, y, scale, rotate: rotation, zIndex: index }}
      className="absolute w-64 h-80 bg-neutral-900 border border-white/10 rounded-3xl p-4 flex flex-col shadow-2xl overflow-hidden"
    >
      <div className="w-full flex-1 rounded-2xl overflow-hidden mb-4 relative">
        <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <h3 className="text-white font-bold text-center mt-auto pb-2">{item.name}</h3>
    </motion.div>
  );
}
`;

const p16 = `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
  { name: "Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "SD Card", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded16({ data }: { data: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-black text-black mb-24">Inside the Box</h2>

      <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center">
        {/* Center Display */}
        <motion.div 
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl z-20 border-4 border-white"
        >
          <img src={items[activeIndex].img} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-black text-2xl drop-shadow-md text-center px-4">{items[activeIndex].name}</span>
          </div>
        </motion.div>

        {/* Orbiting Dots */}
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 250;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.button
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x, y }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              className={\`absolute w-12 h-12 md:w-16 md:h-16 rounded-full border-2 overflow-hidden shadow-lg transition-all duration-300 \${activeIndex === i ? 'scale-125 border-black z-30' : 'border-neutral-200 hover:scale-110 z-10'}\`}
            >
              <img src={item.img} className="w-full h-full object-cover" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
`;

const p17 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", span: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", span: "col-span-1 row-span-2", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded17({ data }: { data: any }) {
  return (
    <section className="py-24 min-h-screen flex items-center justify-center relative overflow-hidden bg-neutral-950">
      {/* Mesh Gradient BG */}
      <div className="absolute inset-0 opacity-50 blur-3xl">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white text-center mb-16 drop-shadow-lg">Inside.</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={\`\${item.span} relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex items-end p-6 group hover:bg-white/20 transition-all duration-300\`}
            >
              <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <h3 className="text-2xl md:text-3xl font-black text-white relative z-10 drop-shadow-md">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

const p18 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded18({ data }: { data: any }) {
  return (
    <section className="py-32 bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      
      {/* Background Ticker */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none opacity-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="whitespace-nowrap text-[15vw] font-black text-white leading-none tracking-tighter"
        >
          WHAT'S IN THE BOX WHAT'S IN THE BOX WHAT'S IN THE BOX
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row gap-8 justify-center items-center">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ 
              opacity: { duration: 0.8, delay: i * 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
            }}
            className="w-full md:w-1/3 aspect-[3/4] bg-neutral-900 border border-white/20 rounded-[2rem] p-4 shadow-2xl flex flex-col"
          >
            <div className="w-full flex-1 rounded-2xl overflow-hidden mb-6 relative">
               <img src={item.img} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="flex justify-between items-center px-2 pb-2">
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white text-xs">x1</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`;

const p19 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Doc", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded19({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#ebebeb] min-h-screen flex flex-col items-center justify-center perspective-[2000px]">
      <div className="max-w-6xl mx-auto px-6 w-full text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-black tracking-tight">Unfold the Magic.</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-center">
        {items.map((item, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ rotateY: isEven ? 80 : -80, opacity: 0, scale: 0.8 }}
              whileInView={{ rotateY: 0, opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 1, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ transformOrigin: isEven ? "left" : "right" }}
              className="w-64 h-80 bg-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img src={item.img} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                {/* Paper fold shadow overlay */}
                <div className={\`absolute inset-0 bg-gradient-to-r \${isEven ? 'from-black/10 to-transparent' : 'from-transparent to-black/10'}\`} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
`;

const p20 = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded20({ data }: { data: any }) {
  const [trail, setTrail] = useState<{ id: number, x: number, y: number, item: any }[]>([]);
  let count = 0;

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only add a new image if mouse moved far enough (debounce)
    if (Math.random() > 0.1) return; 
    
    const newItem = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      item: items[Math.floor(Math.random() * items.length)]
    };

    setTrail(prev => [...prev.slice(-4), newItem]); // keep last 5 max
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-black min-h-screen relative overflow-hidden flex flex-col justify-center px-12 group cursor-crosshair"
    >
      <div className="relative z-20 pointer-events-none">
        <h2 className="text-6xl md:text-9xl font-black text-white/90 leading-none mix-blend-difference">
          Included<br/>In Box.
        </h2>
        <p className="text-neutral-400 text-xl mt-6">Move your cursor to reveal.</p>
      </div>

      <AnimatePresence>
        {trail.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="fixed pointer-events-none z-10 w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            style={{ 
              left: t.x, 
              top: t.y,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <img src={t.item.img} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">{t.item.name}</h3>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}
`;

const files = [
  { path: '../src/components/sections/product/08-whats-included/what-s-included-11/WhatSIncluded11.tsx', content: p11 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-12/WhatSIncluded12.tsx', content: p12 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-13/WhatSIncluded13.tsx', content: p13 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-14/WhatSIncluded14.tsx', content: p14 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-15/WhatSIncluded15.tsx', content: p15 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-16/WhatSIncluded16.tsx', content: p16 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-17/WhatSIncluded17.tsx', content: p17 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-18/WhatSIncluded18.tsx', content: p18 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-19/WhatSIncluded19.tsx', content: p19 },
  { path: '../src/components/sections/product/08-whats-included/what-s-included-20/WhatSIncluded20.tsx', content: p20 },
];

files.forEach(f => {
  const fullPath = path.join(__dirname, f.path);
  fs.writeFileSync(fullPath, f.content, 'utf8');
});

console.log('Whats Included 11-20 created!');
