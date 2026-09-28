"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid20({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];

  return (
    <section 
      className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black hide-scrollbar" 
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      
      {/* Intro Snap Point */}
      <div className="w-full h-screen snap-center flex items-center justify-center bg-black relative shrink-0">
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-2xl z-10">
          {settings.title}
        </h2>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs font-bold tracking-widest uppercase animate-pulse">
          Scroll Down
        </div>
      </div>

      {categories.map((cat: any, index: number) => (
        <div 
          key={cat.id}
          className="w-full h-screen snap-start flex flex-col md:flex-row shrink-0 bg-black relative overflow-hidden"
        >
          
          {/* Text Sidebar - Strictly on the left (or top on mobile) */}
          <div className="w-full md:w-[400px] lg:w-[500px] h-1/3 md:h-full bg-[#111] border-r border-white/10 flex flex-col justify-between p-8 md:p-16 z-10 relative">
            
            <div className="flex justify-between items-start">
              <span className="text-xl font-mono text-white/40">
                // 0{index + 1}
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer group">
                <ArrowRight className="w-5 h-5 text-white group-hover:text-black transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                {cat.name}
              </h3>
              <p className="mt-6 text-sm font-medium opacity-60 text-white uppercase tracking-widest leading-relaxed">
                {cat.description}
              </p>
            </div>
            
            {/* Ambient shadow gradient blending into image on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent md:hidden pointer-events-none" />
          </div>

          {/* Massive Image Block - Strictly takes remaining space */}
          <div className="flex-1 w-full h-2/3 md:h-full relative overflow-hidden group">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-1000"
              />
            </motion.div>
            
            {/* Vignette */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-1000 pointer-events-none" />
          </div>

        </div>
      ))}

    </section>
  );
}
