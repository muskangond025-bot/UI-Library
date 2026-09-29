import React from 'react';
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
