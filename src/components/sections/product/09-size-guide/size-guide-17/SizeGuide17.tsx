import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide17({ data }: { data: any }) {
  const [hovered, setHovered] = useState<string | null>(null);

  const stats = [
    { size: 'S', points: "50,10 90,50 50,90 10,50" }, // Small diamond
    { size: 'M', points: "50,5 95,50 50,95 5,50" },  // Medium diamond
    { size: 'L', points: "50,0 100,50 50,100 0,50" } // Large diamond
  ];

  return (
    <section className="py-32 bg-black min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 flex flex-col md:flex-row gap-20 items-center justify-center">
        
        <div className="relative w-80 h-80">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            {/* Grid lines */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            
            {/* Labels */}
            <text x="50" y="-5" fill="white" fontSize="4" textAnchor="middle">CHEST</text>
            <text x="50" y="108" fill="white" fontSize="4" textAnchor="middle">WAIST</text>
            <text x="-5" y="51" fill="white" fontSize="4" textAnchor="end">HIPS</text>
            <text x="105" y="51" fill="white" fontSize="4" textAnchor="start">LENGTH</text>

            {/* Radar Polygons */}
            {stats.map((s, i) => {
              const isHovered = hovered === s.size;
              const isFaded = hovered !== null && hovered !== s.size;
              
              return (
                <motion.polygon
                  key={s.size}
                  points={s.points}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: isFaded ? 0.1 : 0.4, scale: 1 }}
                  animate={{ 
                    opacity: isHovered ? 0.8 : isFaded ? 0.1 : 0.4,
                    strokeWidth: isHovered ? 1.5 : 0.5
                  }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  fill={isHovered ? '#3b82f6' : 'rgba(255,255,255,0.1)'}
                  stroke={isHovered ? '#60a5fa' : 'rgba(255,255,255,0.5)'}
                  className="transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHovered(s.size)}
                  onMouseLeave={() => setHovered(null)}
                />
              );
            })}
          </svg>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-white mb-6">Radar Chart</h2>
          {stats.map((s) => (
            <button
              key={s.size}
              onMouseEnter={() => setHovered(s.size)}
              onMouseLeave={() => setHovered(null)}
              className={`px-8 py-4 rounded-xl border text-xl font-black transition-all ${hovered === s.size ? 'border-blue-500 bg-blue-500/20 text-white scale-110 ml-4' : 'border-white/20 text-white/50 hover:border-white/50'}`}
            >
              SIZE {s.size}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
