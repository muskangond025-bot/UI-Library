import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Truck, RotateCcw, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export function AboutHero4({ data }: { data?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(1);

  // Smooth scroll-driven animation for central fashion model
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const modelY = useTransform(scrollYProgress, [0, 0.5, 0.95], [30, -30, -90]);
  const modelScale = useTransform(scrollYProgress, [0, 0.5, 0.95], [0.97, 1.02, 1.05]);
  const modelOpacity = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const products = [
    {
      title: 'OVERSIZED BLAZER',
      price: '₹ 4,266',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'SATIN DRESS',
      price: '₹ 3,299',
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'LEATHER LOAFERS',
      price: '₹ 2,499',
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="w-full h-[520px] sm:h-[580px] lg:h-[620px] min-h-[460px] max-h-[680px] bg-[#F6F3EB] text-[#1A1A1A] relative overflow-hidden font-sans py-4 sm:py-6 px-4 sm:px-6 lg:px-8 flex flex-col justify-between"
    >
      {/* 1. GIANT WATERMARK BACKGROUND TYPOGRAPHY HEADER */}
      <div className="absolute top-2 inset-x-0 w-full text-center z-0 opacity-80 select-none pointer-events-none px-4">
        <h1 className="text-[10vw] sm:text-[9vw] leading-none font-serif font-light tracking-tighter text-[#E6E0D3] uppercase">
          NEW SEASON
        </h1>
      </div>

      {/* TOP BADGE IDENTIFIER */}
      <div className="text-center relative z-20 shrink-0">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE4D6] border border-[#D8CEBA] text-[#7A6240] text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-[#B8860B]" /> NEW SEASON '26 EDITORIAL #04
        </span>
      </div>

      {/* MAIN HERO CONTENT GRID */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex-1 min-h-0 flex items-center py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center w-full h-full">
          
          {/* LEFT COLUMN: Typography, CTA, & Trust Feature Badges */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full py-1 z-30">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#B8860B] block">
                SPRING / SUMMER '26
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal tracking-tight text-[#1A1A1A] leading-[1.1]">
                Elegance, <br />
                Made Effortless
              </h2>
              <p className="text-slate-600 text-xs leading-relaxed max-w-sm line-clamp-2">
                Discover contemporary silhouettes and timeless essentials designed to elevate your everyday wardrobe.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-xl bg-[#111111] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-black transition-colors mt-2"
              >
                SHOP COLLECTION
              </motion.button>
            </div>

            {/* Bottom Row of 3 Trust Features */}
            <div className="pt-3 border-t border-[#E3DCCB] grid grid-cols-3 gap-2 text-left mt-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#1A1A1A]">
                  <Truck className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold tracking-tight">SHIPPING</span>
                </div>
                <span className="text-[9px] text-slate-500 block leading-tight">Over ₹1999</span>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#1A1A1A]">
                  <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold tracking-tight">RETURNS</span>
                </div>
                <span className="text-[9px] text-slate-500 block leading-tight">14 Days Easy</span>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[#1A1A1A]">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[10px] font-bold tracking-tight">PAYMENT</span>
                </div>
                <span className="text-[9px] text-slate-500 block leading-tight">100% Safe</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central High-Fashion Model */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-full z-30">
            <motion.div
              style={{
                y: modelY,
                scale: modelScale,
                opacity: modelOpacity
              }}
              className="relative z-40 w-full max-w-[280px] sm:max-w-[320px] mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-[#E5DEC9] bg-[#EFECE3]">
                <img
                  src="/about_hero_beige_blazer_model.jpg"
                  alt="High Fashion Editorial Model"
                  className="w-full h-auto max-h-[310px] sm:max-h-[350px] object-cover object-center rounded-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stack of 3 Product Cards & Carousel Pagination */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full py-1 z-30">
            {/* Product Cards Stack */}
            <div className="space-y-2 w-full">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -3 }}
                  className="p-2 rounded-xl bg-[#EFECE3] border border-[#E2DDD0] flex items-center justify-between gap-2.5 shadow-sm group cursor-pointer"
                >
                  <div className="w-12 h-14 rounded-lg overflow-hidden shrink-0 bg-[#E2DDD0]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 text-left space-y-0.5">
                    <h4 className="text-[11px] font-bold tracking-wider text-[#1A1A1A]">{p.title}</h4>
                    <span className="text-[10px] font-mono font-semibold text-slate-600 block">{p.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                onClick={() => setActiveSlide(prev => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono font-bold tracking-wider text-[#1A1A1A]">0{activeSlide}/03</span>
              <button
                onClick={() => setActiveSlide(prev => Math.min(3, prev + 1))}
                className="w-7 h-7 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
