"use client";
import React from 'react';
import { motion } from 'framer-motion';

export interface CategoryGridProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function CategoryGrid10({ section }: CategoryGridProps) {
  const { settings, styles } = section;
  const categories = settings?.categories || [];
  
  // Use the background image from settings if available
  const bgImage = settings.backgroundImage || "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop";

  return (
    <section className="w-full relative py-32 px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col gap-16">
        
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-widest drop-shadow-2xl">
            {settings.title}
          </h2>
          <p className="mt-4 text-sm font-bold tracking-[0.4em] opacity-60 uppercase">
            Floating Glassmorphic Grid
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.slice(0, 3).map((cat: any, index: number) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="group flex flex-col p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden cursor-pointer hover:bg-white/15 transition-colors duration-500"
            >
              
              {/* Image Block */}
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden relative shadow-inner">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Text Block - Strictly separated below image inside the glass card */}
              <div className="pt-8 pb-4 flex flex-col items-center text-center">
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm font-medium opacity-80 text-white/80 uppercase tracking-widest">
                  {cat.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
