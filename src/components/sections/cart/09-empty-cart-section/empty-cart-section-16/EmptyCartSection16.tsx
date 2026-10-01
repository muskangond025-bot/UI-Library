import React from 'react';
import { motion } from 'framer-motion';

export function EmptyCartSection16({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* SVG Viewport Draw Box */}
        <div className="w-28 h-28 mb-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400">
            <motion.rect
              x="10" y="10" width="80" height="80" rx="20"
              fill="none" stroke="currentColor" strokeWidth="3.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">16 / VIEWPORT ENTRANCE SVG DRAW</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30">
          {settings.primaryCta?.label || 'Start Shopping'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection16;