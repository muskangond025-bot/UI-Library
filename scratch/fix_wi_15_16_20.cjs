const fs = require('fs');
const path = require('path');

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

        <div className="relative w-full max-w-4xl h-[400px]">
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

  const isLeft = index % 2 === 0;
  const isTop = index < 2;
  const targetX = isLeft ? -160 : 160;
  const targetY = isTop ? -180 : 180;

  // We map scroll from 0 to 1.
  // Start overlapping in center, move to target grid.
  const xOffset = useTransform(scrollYProgress, [0, 1], [0, targetX]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [index * -15, targetY]);
  const scale = useTransform(scrollYProgress, [0, 1], [1 - (total - index) * 0.05, 1]);
  const rotation = useTransform(scrollYProgress, [0, 1], [(index - total/2) * 5, 0]);

  return (
    <motion.div 
      style={{ 
        x: xOffset, 
        y: yOffset, 
        scale, 
        rotate: rotation, 
        zIndex: index 
      }}
      className="absolute top-1/2 left-1/2 -mt-40 -ml-32 w-64 h-80 bg-neutral-900 border border-white/10 rounded-3xl p-4 flex flex-col shadow-2xl overflow-hidden"
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
import { motion, AnimatePresence } from 'framer-motion';

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
      <h2 className="text-4xl md:text-5xl font-black text-black mb-32">Inside the Box</h2>

      <div className="relative w-full max-w-[600px] h-[500px] flex items-center justify-center">
        {/* Center Display */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -mt-32 -ml-32 w-64 h-64 rounded-full overflow-hidden shadow-2xl z-20 border-4 border-white"
          >
            <img src={items[activeIndex].img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-black text-2xl drop-shadow-md text-center px-4">{items[activeIndex].name}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Orbiting Dots */}
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 200; // Fixed radius for calculation
          const targetX = Math.cos(angle) * radius;
          const targetY = Math.sin(angle) * radius;

          return (
            <motion.button
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              whileInView={{ opacity: 1, x: targetX, y: targetY, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className={\`absolute top-1/2 left-1/2 -mt-8 -ml-8 w-16 h-16 rounded-full border-2 overflow-hidden shadow-xl transition-all duration-300 \${activeIndex === i ? 'scale-125 border-black z-30 ring-4 ring-black/20' : 'border-neutral-200 hover:scale-110 z-10'}\`}
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

  const handleMouseMove = (e: React.MouseEvent) => {
    // Throttle via random chance to avoid too many DOM nodes
    if (Math.random() > 0.15) return; 
    
    // Get bounding box to calculate relative cursor position within the section
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newItem = {
      id: Date.now() + Math.random(),
      x,
      y,
      item: items[Math.floor(Math.random() * items.length)]
    };

    setTrail(prev => [...prev.slice(-4), newItem]); // keep last 5 max
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="bg-black min-h-screen relative overflow-hidden flex flex-col justify-center px-12 group cursor-crosshair"
    >
      <div className="relative z-20 pointer-events-none w-full max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black text-white/90 leading-none mix-blend-difference">
          Included<br/>In Box.
        </h2>
        <p className="text-neutral-400 text-xl mt-6">Move your cursor around quickly to reveal.</p>
      </div>

      {/* Must be relative to parent container, not fixed to screen, for accurate pointer tracking */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <AnimatePresence>
          {trail.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.5, rotate: Math.random() * 30 - 15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20 origin-center"
              style={{ 
                left: t.x, 
                top: t.y,
                // Using x and y inside style to offset instead of transform which gets overwritten
                x: "-50%",
                y: "-50%"
              }}
            >
              <img src={t.item.img} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-4 left-4 text-white font-bold text-xl drop-shadow-md">{t.item.name}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-15/WhatSIncluded15.tsx'), p15, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-16/WhatSIncluded16.tsx'), p16, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-20/WhatSIncluded20.tsx'), p20, 'utf8');

console.log('Fixed 15, 16, and 20.');
