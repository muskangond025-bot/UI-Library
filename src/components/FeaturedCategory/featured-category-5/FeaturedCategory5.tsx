"use client";
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface FeaturedCategoryProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

// Sub-component for individual Parallax 3D Tilt Cards
function TiltCard({ cat, index }: { cat: any; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  
  // Motion values for tracking mouse
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for physics-based rotation
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  // Map mouse position to 3D rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  // Map mouse position to glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate normalized mouse position from -0.5 to 0.5
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset rotations to center
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={cat.link}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative flex flex-col w-full h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-white shadow-2xl cursor-pointer group"
    >
      {/* Glare Effect Overlay */}
      <motion.div 
        className="absolute inset-0 z-20 pointer-events-none opacity-0 mix-blend-overlay transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
          opacity: isHovered ? 1 : 0
        }}
      />

      {/* Top 60-70% Image Area (Flex basis dynamically changes on hover) */}
      <div className="relative w-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] basis-[70%] group-hover:basis-[55%] overflow-hidden bg-gray-100 shrink-0">
        <motion.div 
          className="w-full h-full"
          style={{ transform: "translateZ(30px)" }} // 3D popup effect for inner content
        >
          <img 
            src={cat.image} 
            alt={cat.name} 
            className="w-full h-full object-cover transition-transform duration-[1s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
          />
        </motion.div>
      </div>

      {/* Bottom Text Area (Strict separation, no overlapping) */}
      <div 
        className="relative w-full flex flex-col justify-start px-6 py-6 md:px-8 md:py-8 bg-white transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] basis-[30%] group-hover:basis-[45%] shrink-0 z-10"
        style={{ transform: "translateZ(20px)" }}
      >
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-2 transition-transform duration-500 origin-left group-hover:scale-95">
          {cat.name}
        </h3>
        
        {/* Border separator that expands */}
        <div className="w-8 h-[2px] bg-black/20 mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-black/10" />

        <div className="flex flex-col justify-between h-full">
          {/* Description fades in and slides up */}
          <div className="overflow-hidden">
            <p className="text-black/60 font-medium text-sm md:text-base leading-relaxed opacity-0 translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-2">
              {cat.description}
            </p>
          </div>
          
          {/* Shop Button */}
          <div className="flex items-center justify-between mt-auto opacity-0 translate-y-4 transition-all duration-500 delay-200 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-xs font-bold uppercase tracking-widest text-black">Shop Collection</span>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 delay-200">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedCategory5({ section }: FeaturedCategoryProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#e4e4e7';
  const textCol = styles?.textColor || '#09090b';
  
  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full relative flex flex-col justify-center py-20 md:py-32 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: bg, color: textCol, minHeight: '100vh', perspective: '1200px' }}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-16 z-10">
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-bold tracking-[0.4em] uppercase opacity-50 mb-3">
            {settings.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter">
            {settings.title}
          </h2>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
        {categories.map((cat: any, i: number) => (
          <TiltCard key={cat.id} cat={cat} index={i} />
        ))}
      </div>
    </section>
  );
}
