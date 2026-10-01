import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection9({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* 3D Perspective Opening Vector Bag */}
        <div 
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="perspective-1000 w-36 h-40 mb-6 cursor-pointer"
        >
          <motion.div 
            animate={{ rotateX: isOpen ? 18 : 0, scale: isOpen ? 1.08 : 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full h-full bg-slate-900 border border-indigo-500/40 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 60 60" className="w-14 h-14 text-indigo-400 mb-1" style={{ transform: 'translateZ(30px)' }}>
              <path d="M15 20 H45 L40 50 H20 Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M22 20 C22 10, 38 10, 38 20" fill="none" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-mono font-bold text-indigo-300" style={{ transform: 'translateZ(15px)' }}>
              {isOpen ? 'BAG OPEN' : 'BAG CLOSED'}
            </span>
          </motion.div>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">09 / 3D PERSPECTIVE BAG OPENING</span>
        <h2 className="text-2xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-8 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection9;