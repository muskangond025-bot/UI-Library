import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface PromoCard10Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard10({ data }: PromoCard10Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-sans relative overflow-hidden bg-[#09090B]" style={{ color: data.style.textColor }}>
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden group p-12 md:p-24 text-center cursor-crosshair"
      >
        {/* Hover Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex flex-col items-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold tracking-widest uppercase mb-8">
            {data.content.badge}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            {data.content.title}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-lg mx-auto font-medium">
            {data.content.description}
          </p>
          <a href={data.content.cta.url} className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors inline-block">
            {data.content.cta.text}
          </a>
        </div>
      </motion.div>
    </div>
  );
}
