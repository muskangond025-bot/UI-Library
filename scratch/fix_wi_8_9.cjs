const fs = require('fs');
const path = require('path');

const p8 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera Body", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "50mm Lens", img: "https://images.unsplash.com/photo-1617005082833-1e1140528d94?q=80&w=800&auto=format&fit=crop" },
  { name: "Strap", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Battery", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded8({ data }: { data: any }) {
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

        <div className="relative w-full max-w-2xl h-[500px] perspective-[1000px] flex items-center justify-center">
          {items.map((item, i) => {
            const total = items.length;
            const finalScale = 1 - ((total - i) * 0.08);
            const yOffset = i * -40;

            return (
              <motion.div 
                key={i}
                initial={{ y: 500, scale: 0.5, opacity: 0, rotateX: 45 }}
                whileInView={{ y: yOffset, scale: finalScale, opacity: 1, rotateX: 0 }}
                whileHover={{ y: yOffset - 20, scale: finalScale + 0.05 }}
                transition={{ 
                  y: { delay: i * 0.15, duration: 0.8, type: "spring", bounce: 0.4 },
                  scale: { delay: i * 0.15, duration: 0.8, type: "spring", bounce: 0.4 },
                  opacity: { delay: i * 0.15, duration: 0.8 },
                  rotateX: { delay: i * 0.15, duration: 0.8, type: "spring" }
                }}
                viewport={{ once: false, amount: 0.1 }}
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
        </div>
      </div>
    </section>
  );
}
`;

const p9 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Camera", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Lens", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Adapter", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded9({ data }: { data: any }) {
  return (
    <section className="py-32 bg-white min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Massive animated background text */}
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        className="absolute inset-0 flex items-center whitespace-nowrap opacity-[0.03] pointer-events-none"
      >
        <span className="text-[250px] font-black uppercase text-black leading-none">
          INSIDE THE BOX INSIDE THE BOX INSIDE THE BOX
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 1 }}
          viewport={{ once: false }}
          className="mb-24 bg-black text-white px-10 py-4 rounded-full"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">Included.</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center perspective-[1000px]">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, rotateY: 90, z: -500 }}
              whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
              whileHover={{ y: -20, rotateY: i % 2 === 0 ? 10 : -10, scale: 1.05 }}
              transition={{ 
                delay: i * 0.2, 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.3 
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full md:w-1/3 aspect-[4/5] bg-neutral-100 rounded-[2rem] overflow-hidden relative shadow-2xl group cursor-crosshair border border-neutral-200"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-black text-white">{item.name}</h3>
                <div className="w-12 h-1 bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8.tsx'), p8, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-9/WhatSIncluded9.tsx'), p9, 'utf8');

console.log('Fixed completely rewrites for 8 and 9.');
