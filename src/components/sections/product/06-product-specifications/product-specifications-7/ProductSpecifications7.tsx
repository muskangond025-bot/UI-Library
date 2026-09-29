import React from 'react';
import { motion } from 'framer-motion';

export default function ProductSpecifications7({ data }: { data: any }) {
  // SVG Radar Chart Coordinates (normalized 0-100)
  // Categories: Power (Top), Battery (TopRight), Camera (BottomRight), Display (BottomLeft), Design (TopLeft)
  const center = { x: 50, y: 50 };
  const points = "50,10 90,38 75,90 25,90 10,38"; // Pentagon max shape
  const dataPoints = "50,15 85,42 60,80 30,85 20,45"; // Product specific shape

  return (
    <section className="py-24 bg-[#050505] min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
        
        <div>
          <h2 className="text-5xl font-black text-white mb-6">Unrivaled Metric Performance.</h2>
          <p className="text-xl text-neutral-400 mb-8 font-light">Compared to the industry standard, this generation pushes the boundaries across every single vector.</p>
          
          <ul className="space-y-6">
            {[
              { label: "Processing Power", value: "95%", color: "text-blue-400" },
              { label: "Battery Efficiency", value: "88%", color: "text-purple-400" },
              { label: "Camera Sensor", value: "92%", color: "text-pink-400" }
            ].map((stat, i) => (
              <li key={i}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-bold">{stat.label}</span>
                  <span className={`${stat.color} font-mono`}>{stat.value}</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: stat.value }}
                    transition={{ duration: 1, delay: i * 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-square max-w-md mx-auto w-full">
          {/* Radar Chart SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
            {/* Grid lines */}
            <polygon points={points} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <polygon points="50,25 75,45 65,75 35,75 25,45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="50" y2="10" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="90" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="75" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="25" y2="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="10" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            
            {/* Data shape */}
            <motion.polygon 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              transformOrigin="50% 50%"
              points={dataPoints} 
              fill="rgba(59, 130, 246, 0.2)" 
              stroke="#3b82f6" 
              strokeWidth="1"
            />
            
            {/* Data nodes */}
            {dataPoints.split(' ').map((point, i) => (
              <motion.circle 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                cx={point.split(',')[0]} 
                cy={point.split(',')[1]} 
                r="1.5" 
                fill="white" 
              />
            ))}
          </svg>
          
          {/* Labels */}
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs text-neutral-400 font-bold tracking-widest uppercase">Power</span>
          <span className="absolute top-1/4 -right-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Battery</span>
          <span className="absolute bottom-4 -right-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Camera</span>
          <span className="absolute bottom-4 -left-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Display</span>
          <span className="absolute top-1/4 -left-4 text-xs text-neutral-400 font-bold tracking-widest uppercase">Design</span>
        </div>

      </div>
    </section>
  );
}
