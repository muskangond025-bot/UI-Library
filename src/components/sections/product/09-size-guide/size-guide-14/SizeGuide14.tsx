import React, { useState } from 'react';
import { motion } from 'framer-motion';

const sizes = ['XS', 'S', 'M', 'L'];
const metrics = ['Chest', 'Waist', 'Hips', 'Length'];

const matrix = {
  XS: [34, 28, 34, 26],
  S:  [36, 30, 36, 27],
  M:  [38, 32, 38, 28],
  L:  [40, 34, 40, 29]
};

export default function SizeGuide14({ data }: { data: any }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <section className="py-32 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Neon Crosshairs */}
      <motion.div 
        animate={{ opacity: hoveredRow !== null ? 1 : 0, top: hoveredRow !== null ? hoveredRow * 80 + 180 : 0 }}
        className="absolute left-0 right-0 h-[1px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] pointer-events-none transition-all duration-300"
      />
      <motion.div 
        animate={{ opacity: hoveredCol !== null ? 1 : 0, left: hoveredCol !== null ? hoveredCol * (100/4) + '%' : 0 }}
        className="absolute top-0 bottom-0 w-[1px] bg-fuchsia-400 shadow-[0_0_15px_#e879f9] pointer-events-none transition-all duration-300"
      />

      <div className="max-w-5xl w-full px-6 relative z-10">
        <h2 className="text-5xl font-black text-white text-center mb-16">Neon Matrix</h2>
        
        <div className="grid grid-cols-5 gap-4 text-center border-b border-white/10 pb-4 mb-4">
          <div />
          {metrics.map((m, i) => (
            <div key={m} className="font-bold text-white/50 uppercase tracking-widest text-sm">{m}</div>
          ))}
        </div>

        {sizes.map((s, rowIndex) => (
          <div 
            key={s} 
            className="grid grid-cols-5 gap-4 text-center h-[80px] items-center relative"
            onMouseEnter={() => setHoveredRow(rowIndex)}
            onMouseLeave={() => setHoveredRow(null)}
          >
            <div className="font-black text-2xl text-white">{s}</div>
            
            {matrix[s as keyof typeof matrix].map((val, colIndex) => (
              <div 
                key={colIndex} 
                className={`text-xl transition-colors duration-300 ${hoveredRow === rowIndex && hoveredCol === colIndex + 1 ? 'text-white font-bold scale-125' : 'text-neutral-500'}`}
                onMouseEnter={() => setHoveredCol(colIndex + 1)}
                onMouseLeave={() => setHoveredCol(null)}
              >
                {val}"
              </div>
            ))}
          </div>
        ))}

      </div>
    </section>
  );
}
