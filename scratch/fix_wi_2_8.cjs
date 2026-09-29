const fs = require('fs');
const path = require('path');

const p2 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" },
  { name: "Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded2({ data }: { data: any }) {
  // Parent variants to orchestrate children
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const boxVariants = {
    hidden: { scale: 1, y: 0, opacity: 1 },
    show: { 
      scale: 0.8, 
      y: 100, 
      opacity: 0, 
      transition: { duration: 1 } 
    }
  };

  return (
    <section className="bg-black min-h-screen relative overflow-hidden py-32 flex flex-col items-center justify-center">
      
      <div className="text-center z-50 mb-20">
        <h2 className="text-6xl md:text-8xl font-black text-white leading-none">Exploded.</h2>
        <p className="text-neutral-400 mt-4 text-xl">See everything instantly.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="relative w-full max-w-4xl h-[500px] flex items-center justify-center"
      >
        {/* The Central Box that disappears */}
        <motion.div 
          variants={boxVariants}
          className="absolute z-10 w-64 h-64 bg-neutral-900 border border-neutral-700 shadow-2xl rounded-3xl flex items-center justify-center"
        >
          <span className="text-white font-black text-3xl tracking-widest uppercase">The Box</span>
        </motion.div>

        {/* The exploding items */}
        {items.map((item, i) => {
          const angle = (i / items.length) * Math.PI * 2;
          const radius = 250;
          const targetX = Math.cos(angle) * radius;
          const targetY = Math.sin(angle) * radius;

          const itemVariants = {
            hidden: { x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 },
            show: { 
              x: targetX, 
              y: targetY, 
              scale: 1, 
              opacity: 1, 
              rotate: (i % 2 === 0 ? 10 : -10),
              transition: { type: "spring", bounce: 0.4, duration: 1.5 }
            }
          };

          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="absolute w-48 h-56 bg-neutral-800 border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col p-3 z-20 group cursor-pointer"
            >
              <div className="flex-1 w-full rounded-xl overflow-hidden relative mb-3">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-white font-bold text-center">{item.name}</h3>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
`;

const p8 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera Body", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "50mm Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded8_CacheBust({ data }: { data: any }) {
  // Use parent variants so the intersection observer tracks the static parent!
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  return (
    <section className="bg-[#0f0f0f] min-h-screen relative flex flex-col items-center justify-center py-32 overflow-hidden">
      
      {/* Background effect */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-blue-900/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"
      />

      <div className="flex flex-col items-center justify-center px-6 gap-12 w-full max-w-7xl z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-6xl md:text-8xl font-black text-white leading-none mb-6">Stacked.</h2>
          <p className="text-2xl text-neutral-400">Everything in the box, layered perfectly.</p>
        </div>

        {/* Parent triggers the animation! */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-2xl h-[500px] perspective-[1000px] flex items-center justify-center"
        >
          {items.map((item, i) => {
            const total = items.length;
            const finalScale = 1 - ((total - i) * 0.08);
            const yOffset = i * -40;

            const itemVariants = {
              hidden: { y: 200, scale: 0.5, opacity: 0, rotateX: 45 },
              show: { 
                y: yOffset, 
                scale: finalScale, 
                opacity: 1, 
                rotateX: 0,
                transition: { type: "spring", bounce: 0.4, duration: 1 }
              }
            };

            return (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: yOffset - 20, scale: finalScale + 0.05 }}
                style={{ zIndex: i }}
                className="absolute w-72 md:w-96 aspect-square bg-neutral-900 border border-white/20 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden group cursor-pointer"
              >
                <div className="w-full flex-1 overflow-hidden relative">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <h3 className="text-3xl font-black text-white drop-shadow-md">{item.name}</h3>
                  <span className="text-white/50 font-mono text-xl block leading-none">0{i+1}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-2/WhatSIncluded2.tsx'), p2, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8_CacheBust.tsx'), p8, 'utf8');

console.log('Fixed 2 and 8!');
