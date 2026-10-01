import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection12({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto bg-slate-900 border-2 border-dashed border-slate-700 rounded-3xl p-8 text-center flex flex-col items-center">
        {/* Continuous Morphing SVG Path */}
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-emerald-400 mb-4">
          <motion.path
            d="M20 30 H80 L70 80 H30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
            animate={{
              d: [
                "M20 30 H80 L70 80 H30 Z",
                "M30 20 H70 L80 80 H20 Z",
                "M20 30 H80 L70 80 H30 Z"
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-2">12 / CONTINUOUS SVG LINE-MORPH</span>
        <h2 className="text-2xl font-bold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-emerald-500/20">
          <span>{settings.primaryCta?.label || 'Fill Your Cart'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection12;