import React from 'react';
import { motion } from 'framer-motion';

export default function ProductFeatures4({ data }: { data: any }) {
  const nodes = [
    { title: "Aerospace", angle: 0 },
    { title: "ProMotion", angle: 72 },
    { title: "A17 Chip", angle: 144 },
    { title: "Photonic", angle: 216 },
    { title: "MagSafe", angle: 288 },
  ];

  return (
    <section className="py-24 bg-[#050505] min-h-screen flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center z-10">
        
        {/* Central Orb */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 blur-sm shadow-[0_0_100px_rgba(59,130,246,0.8)] flex items-center justify-center"
        >
          <div className="w-40 h-40 bg-black rounded-full" />
        </motion.div>
        <div className="absolute text-center">
          <h2 className="text-3xl font-black text-white tracking-widest">PRO</h2>
        </div>

        {/* Orbiting Nodes */}
        {nodes.map((node, i) => {
          const radius = 250;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="absolute"
              style={{
                transform: `rotate(${node.angle}deg) translateX(${radius}px) rotate(-${node.angle}deg)`
              }}
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                className="bg-neutral-900 border border-blue-500/30 px-6 py-3 rounded-full backdrop-blur-md whitespace-nowrap flex items-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-white font-bold tracking-widest text-sm uppercase">{node.title}</span>
              </motion.div>
            </motion.div>
          );
        })}
        
        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="-300 -300 600 600">
          {nodes.map((node, i) => {
            const rad = node.angle * (Math.PI / 180);
            const x = Math.cos(rad) * 200;
            const y = Math.sin(rad) * 200;
            return (
              <motion.line 
                key={i}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                x1="0" y1="0" x2={x} y2={y} 
                stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4"
              />
            );
          })}
        </svg>

      </div>
    </section>
  );
}
