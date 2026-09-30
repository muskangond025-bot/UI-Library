import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function ProductCare13({ data }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  return (
    <div 
      className="p-8 min-h-[500px] rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 flex items-center justify-center perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl"
      >
        <motion.div style={{ transform: "translateZ(50px)" }} className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <span className="text-3xl">🫧</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2">Deep Clean</h2>
          <p className="text-indigo-200 text-sm">Professional care recommended</p>
        </motion.div>
        
        <motion.div style={{ transform: "translateZ(30px)" }} className="space-y-4">
          {[
            "Use specialized solvent",
            "Maintain 40% humidity",
            "Avoid direct exposure"
          ].map((text, i) => (
            <div key={i} className="flex items-center bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 shadow-[0_0_10px_rgba(192,132,252,0.8)]" />
              <span className="text-indigo-100 font-medium text-sm">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
