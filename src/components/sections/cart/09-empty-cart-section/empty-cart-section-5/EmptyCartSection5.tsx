import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection5({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans overflow-hidden">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Multi-Ring Planetary Orbit Constellation */}
        <div className="relative w-56 h-56 mb-8 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-slate-900 border border-indigo-500/50 flex items-center justify-center shadow-2xl z-10">
            <ShoppingBag className="w-9 h-9 text-indigo-400" />
          </div>

          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-indigo-400">
            <motion.circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle cx="100" cy="100" r="65" fill="none" stroke="rgba(129, 140, 248, 0.4)" strokeWidth="1.5" strokeDasharray="4 4"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            {/* Orbiting SVG Nodes */}
            <motion.circle cx="100" cy="10" r="5" fill="#818cf8"
              animate={{ rotate: 360 }}
              style={{ originX: "100px", originY: "100px" }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.rect x="155" y="95" width="10" height="10" rx="2" fill="#38bdf8"
              animate={{ rotate: -360 }}
              style={{ originX: "100px", originY: "100px" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">05 / MULTI-RING SVG CONSTELLATION</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection5;