import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection3({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">03 / FLUID BEZIER SVG MORPH</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-sm text-slate-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Fluid Bezier Wave Animated Vector Bag */}
        <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
          <svg viewBox="0 0 100 100" className="w-36 h-36 text-cyan-400">
            {/* Liquid Wave Base inside SVG Bag */}
            <clipPath id="bagClip">
              <path d="M25 35 H75 L70 85 H30 Z" />
            </clipPath>
            
            <path d="M25 35 H75 L70 85 H30 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            
            <g clipPath="url(#bagClip)">
              <motion.path 
                d="M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z" 
                fill="rgba(34, 211, 238, 0.25)"
                animate={{ d: [
                  "M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z",
                  "M 20 65 Q 40 75, 60 65 T 100 65 L 100 90 L 20 90 Z",
                  "M 20 65 Q 40 55, 60 65 T 100 65 L 100 90 L 20 90 Z"
                ] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>

            {/* Elastic Handles */}
            <motion.path 
              d="M38 35 C38 18, 62 18, 62 35"
              fill="none" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round"
              animate={{ d: [
                "M38 35 C38 18, 62 18, 62 35",
                "M38 35 C38 12, 62 12, 62 35",
                "M38 35 C38 18, 62 18, 62 35"
              ] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
          <span className="text-[10px] font-mono text-cyan-300 mt-2">FLUID BEZIER WAVE STATE</span>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection3;