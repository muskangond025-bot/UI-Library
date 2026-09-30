import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FrequentlyBoughtTogether10({ data }: { data: any }) {
  const [hovered, setHovered] = useState(false);

  const main = { name: "Pro Headphones", price: 349, color: "bg-neutral-900" };
  const accessories = [
    { name: "Hard Case", price: 49, color: "bg-indigo-600" },
    { name: "Audio Cable", price: 29, color: "bg-purple-600" },
    { name: "Ear Pads", price: 39, color: "bg-fuchsia-600" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center absolute top-12 z-10 w-full">
        <h2 className="text-4xl font-black text-neutral-900 uppercase tracking-tighter">Parallax Stack</h2>
        <p className="text-indigo-600 font-bold mt-2 text-xs tracking-widest uppercase">Hover the product to reveal add-ons</p>
      </div>

      <div 
        className="relative w-64 h-80 mt-12 flex justify-center items-center cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Hidden Accessories */}
        {accessories.map((acc, i) => {
          // Calculate fan out spread
          const angle = (i - 1) * 15; // -15, 0, 15
          const x = hovered ? (i - 1) * 150 : 0;
          // Middle card (i===1) needs to pop up high enough to be seen
          const y = hovered ? (i === 1 ? -160 : -40) : 0;
          const rotate = hovered ? angle : 0;

          return (
            <motion.div
              key={i}
              className={`absolute w-56 h-72 ${acc.color} rounded-3xl shadow-xl flex flex-col items-center justify-center text-white p-6 origin-bottom border border-white/20`}
              animate={{ x, y, rotate }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <span className="font-bold uppercase tracking-widest text-xs text-white/70">Add-on</span>
              <span className="font-black text-xl text-center mt-2">{acc.name}</span>
              <span className="font-bold text-white/90 mt-2">+${acc.price}</span>
              <button className="mt-auto w-full py-2 bg-white/20 hover:bg-white/30 rounded-full font-bold text-sm uppercase tracking-widest transition-colors backdrop-blur-sm">Add</button>
            </motion.div>
          );
        })}

        {/* Main Product (Always on top) */}
        <motion.div 
          className={`absolute w-64 h-80 ${main.color} rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white p-6 border-4 border-neutral-900 z-10`}
          animate={{ scale: hovered ? 1.05 : 1, y: hovered ? 20 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <span className="font-bold uppercase tracking-widest text-xs text-neutral-500">Main Product</span>
          <span className="font-black text-3xl text-center mt-2 uppercase tracking-tighter leading-none">{main.name}</span>
          <span className="font-black text-emerald-400 text-xl mt-4">${main.price}</span>
          
          <motion.div 
            className="absolute bottom-6 px-4 py-2 bg-neutral-800 rounded-full text-xs font-bold uppercase tracking-widest text-neutral-400"
            animate={{ opacity: hovered ? 0 : 1 }}
          >
            Hover Me
          </motion.div>
        </motion.div>
      </div>
      
    </div>
  );
}
