import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Shield, Sparkles, Droplet } from 'lucide-react';

export default function ProductCare11({ data }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  return (
    <div 
      className="p-8 min-h-[400px] rounded-3xl bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden cursor-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <motion.div 
        className="absolute w-64 h-64 bg-fuchsia-600/30 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{ x: mousePosition.x - 128, y: mousePosition.y - 128 }}
        transition={{ type: 'spring', damping: 40, stiffness: 400, mass: 0.5 }}
      />
      
      <div className="z-10 text-center max-w-2xl">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Immaculate Care
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Shield size={24} />, title: "Protect", desc: "Keep away from direct sunlight" },
            { icon: <Sparkles size={24} />, title: "Polish", desc: "Use microfiber cloth" },
            { icon: <Droplet size={24} />, title: "Clean", desc: "Mild soap and water only" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800 p-6 rounded-2xl hover:border-fuchsia-500/50 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-fuchsia-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="w-4 h-4 rounded-full bg-white fixed top-0 left-0 pointer-events-none mix-blend-difference z-50 hidden md:block"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.1 }}
        style={{ position: 'absolute' }}
      />
    </div>
  );
}
