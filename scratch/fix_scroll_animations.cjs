const fs = require('fs');
const path = require('path');

const p8 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Device", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop" },
  { name: "Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "Manual", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "Stickers", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded8({ data }: { data: any }) {
  return (
    <section className="bg-neutral-100 min-h-screen relative flex items-center justify-center py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center px-6 gap-20 w-full max-w-6xl">
        
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-black leading-none mb-6"
          >
            Stacked<br/>full.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl text-neutral-500"
          >
            Everything included in the box.
          </motion.p>
        </div>

        <div className="md:w-1/2 relative w-full max-w-md h-[450px]">
          {items.map((item, i) => {
            const total = items.length;
            const startY = 300;
            const finalScale = 1 - ((total - i) * 0.04);
            const startRotate = i % 2 === 0 ? -20 : 20;

            return (
              <motion.div 
                key={i}
                initial={{ y: startY, scale: 0.8, opacity: 0, rotate: startRotate }}
                whileInView={{ y: 0, scale: finalScale, opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8, type: "spring", bounce: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ top: \`\${i * 30}px\`, zIndex: i }}
                className="absolute w-full h-[350px] bg-white border border-neutral-200 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center overflow-hidden p-4"
              >
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative">
                  <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-black text-black">{item.name}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
`;

const p15 = `import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { name: "Studio Headphones", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" },
  { name: "Carrying Case", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop" },
  { name: "3.5mm Audio Cable", img: "https://images.unsplash.com/photo-1624823183569-45e3ec3d7567?q=80&w=800&auto=format&fit=crop" },
  { name: "USB-C Charger", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=800&auto=format&fit=crop" }
];

export default function WhatSIncluded15({ data }: { data: any }) {
  return (
    <section className="bg-black min-h-screen relative flex flex-col items-center justify-center py-32 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-black text-white mb-32 z-50"
      >
        Included.
      </motion.h2>

      <div className="relative w-full max-w-4xl h-[500px]">
        {items.map((item, i) => {
          const total = items.length;
          const isLeft = i % 2 === 0;
          const isTop = i < 2;
          const targetX = isLeft ? -160 : 160;
          const targetY = isTop ? -180 : 180;
          
          const startX = 0;
          const startY = i * -15;
          const startScale = 1 - (total - i) * 0.05;
          const startRotate = (i - total/2) * 5;

          return (
            <motion.div 
              key={i}
              initial={{ x: startX, y: startY, scale: startScale, rotate: startRotate, opacity: 0 }}
              whileInView={{ x: targetX, y: targetY, scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, type: "spring", bounce: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ zIndex: i }}
              className="absolute top-1/2 left-1/2 -mt-40 -ml-32 w-64 h-80 bg-neutral-900 border border-white/10 rounded-3xl p-4 flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="w-full flex-1 rounded-2xl overflow-hidden mb-4 relative">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <h3 className="text-white font-bold text-center mt-auto pb-2">{item.name}</h3>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
`;

fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-8/WhatSIncluded8.tsx'), p8, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/components/sections/product/08-whats-included/what-s-included-15/WhatSIncluded15.tsx'), p15, 'utf8');

console.log('Fixed scroll animations in 8 and 15.');
