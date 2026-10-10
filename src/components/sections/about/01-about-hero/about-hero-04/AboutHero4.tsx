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

  // Central Model: Glides smoothly UPWARD as user scrolls down the page
  const modelY = useTransform(scrollYProgress, [0, 0.5, 0.95], [60, -90, -220]);
  const modelScale = useTransform(scrollYProgress, [0, 0.5, 0.95], [0.96, 1.05, 1.1]);
  const modelOpacity = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

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
      className="w-full min-h-[920px] bg-[#F6F3EB] text-[#1A1A1A] relative overflow-hidden font-sans pt-8 pb-16"
    >
      {/* 1. GIANT WATERMARK BACKGROUND TYPOGRAPHY HEADER */}
      <div className="w-full text-center relative z-0 opacity-100 select-none pointer-events-none px-4">
        <h1 className="text-[14vw] leading-none font-serif font-light tracking-tighter text-[#E6E0D3] uppercase">
          NEW SEASON
        </h1>
      </div>

      {/* TOP BADGE IDENTIFIER */}
      <div className="text-center relative z-20 my-2">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAE4D6] border border-[#D8CEBA] text-[#7A6240] text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" /> NEW SEASON '26 EDITORIAL HERO #04 • ANIMATION: SCROLL-DRIVEN FASHION MODEL GLIDE
        </span>
      </div>

      {/* MAIN HERO CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative min-h-[620px]">
          
          {/* LEFT COLUMN: Typography, CTA, & Trust Feature Badges */}
          <div className="lg:col-span-4 space-y-8 z-30 pb-6">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#B8860B] block">
                NEW SEASON '26
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight text-[#1A1A1A] leading-[1.08]">
                Elegance, <br />
                Made Effortless
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm">
                Discover contemporary silhouettes and timeless essentials designed to elevate your everyday wardrobe.
              </p>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-[#111111] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-black transition-colors"
              >
                SHOP NEW COLLECTION
              </motion.button>
            </div>

            {/* Bottom Row of 3 Trust Features */}
            <div className="pt-8 border-t border-[#E3DCB] grid grid-cols-3 gap-3 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#1A1A1A]">
                  <Truck className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold tracking-tight">FREE SHIPPING</span>
                </div>
                <span className="text-[10px] text-slate-500 block leading-tight">On orders over ₹ 1999</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#1A1A1A]">
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold tracking-tight">EASY RETURNS</span>
                </div>
                <span className="text-[10px] text-slate-500 block leading-tight">Within 14 days</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#1A1A1A]">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span className="text-[11px] font-bold tracking-tight">SECURE PAYMENT</span>
                </div>
                <span className="text-[10px] text-slate-500 block leading-tight">100% Protected</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Central High-Fashion Model (SCROLL-DRIVEN GLIDE UPWARD) */}
          <div className="lg:col-span-5 relative flex items-end justify-center h-full min-h-[560px] lg:min-h-[660px] z-30 overflow-visible">
            <motion.div
              style={{
                y: modelY,
                scale: modelScale,
                opacity: modelOpacity
              }}
              className="relative z-40 w-full max-w-lg mx-auto"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#E5DEC9]">
                <img
                  src="/about_hero_beige_blazer_model.jpg"
                  alt="High Fashion Editorial Model"
                  className="w-full h-auto object-cover object-center rounded-3xl"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Stack of 3 Product Cards & Carousel Pagination */}
          <div className="lg:col-span-3 space-y-6 z-30 pb-6 flex flex-col justify-between">
            {/* Product Cards Stack */}
            <div className="space-y-3.5 w-full">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -4 }}
                  className="p-2.5 rounded-2xl bg-[#EFECE3] border border-[#E2DDD0] flex items-center justify-between gap-3 shadow-sm group cursor-pointer"
                >
                  <div className="w-16 h-20 rounded-xl overflow-hidden shrink-0 bg-[#E2DDD0]">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 text-left space-y-1">
                    <h4 className="text-xs font-bold tracking-wider text-[#1A1A1A]">{p.title}</h4>
                    <span className="text-xs font-mono font-semibold text-slate-600 block">{p.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveSlide(prev => Math.max(1, prev - 1))}
                className="w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold tracking-wider text-[#1A1A1A]">0{activeSlide}/03</span>
              <button
                onClick={() => setActiveSlide(prev => Math.min(3, prev + 1))}
                className="w-9 h-9 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
