import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection8({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white font-sans relative overflow-hidden border-y border-slate-800">
      {/* SVG Particle Matrix Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 800 400" className="w-full h-full text-indigo-400/30">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={(i * 55) % 800}
              cy={(i * 35) % 400}
              r={(i % 3) + 2}
              fill="currentColor"
              animate={{
                cy: [(i * 35) % 400 - 15, (i * 35) % 400 + 15, (i * 35) % 400 - 15],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">08 / ANIMATED SVG PARTICLE MATRIX</span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto">{settings.subtitle}</p>

        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-xl shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection8;