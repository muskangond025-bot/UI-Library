import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

export default function WarrantyInformation14({ data }: { data: any }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-slate-900 flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
    >
      <motion.div 
        className="w-full max-w-xl bg-slate-800/50 backdrop-blur-xl border border-slate-700 p-12 rounded-3xl text-center relative z-10"
        animate={{
          x: position.x * 0.05,
          y: position.y * 0.05,
          rotateX: position.y * -0.05,
          rotateY: position.x * 0.05
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
          <MousePointer2 className="text-white w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Interactive Protection</h2>
        <p className="text-slate-400">
          Our warranty is as responsive as this card. No matter what angle life comes at you, we've got you covered.
        </p>
      </motion.div>
      
      {/* Interactive background glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: position.x * 0.2,
          y: position.y * 0.2
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
    </div>
  );
}
