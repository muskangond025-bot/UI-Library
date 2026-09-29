import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const features = [
  { title: "Quantum Processor", img: "https://picsum.photos/seed/q1/400/400" },
  { title: "Holographic Display", img: "https://picsum.photos/seed/q2/400/400" },
  { title: "Kinetic Battery", img: "https://picsum.photos/seed/q3/400/400" },
];

export default function ProductFeatures18({ data }: { data: any }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring animation for smooth cursor follow
  const cursorX = useSpring(0, { damping: 25, stiffness: 120 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <section className="py-32 bg-white min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col gap-12">
        {features.map((feat, i) => (
          <div 
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer border-b border-neutral-200 pb-8 last:border-0"
          >
            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter transition-colors group-hover:text-blue-600">
              {feat.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Custom Image Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-64 h-64 pointer-events-none z-50 overflow-hidden rounded-full shadow-2xl mix-blend-difference"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          translateX: "-50%", 
          translateY: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.5
        }}
      >
        {hoveredIndex !== null && (
          <img 
            src={features[hoveredIndex].img} 
            alt="Preview" 
            className="w-full h-full object-cover" 
          />
        )}
      </motion.div>

    </section>
  );
}
