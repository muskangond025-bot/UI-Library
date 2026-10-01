import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection2({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-4">02 / 3D LEVITATION & SVG ORBITS</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mb-4">
            YOUR CART<br />IS FLOATING EMPTY.
          </h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 transition-all shadow-2xl">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Levitating Glass Container with SVG Orbit */}
        <div className="perspective-1000 w-80 h-80 relative flex items-center justify-center">
          <motion.div 
            animate={{ 
              rotateX: [10, -10, 10],
              rotateY: [-12, 12, -12],
              y: [-12, 12, -12]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-emerald-950/70 border border-emerald-500/30 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-2xl relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* SVG Orbit Ring Background */}
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-emerald-400/40 pointer-events-none">
              <motion.circle 
                cx="100" cy="100" r="75" 
                fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="100" cy="100" r="55" 
                fill="none" stroke="rgba(52, 211, 153, 0.6)" strokeWidth="1.5" strokeDasharray="4 4"
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Central Animated Vector Bag */}
            <div style={{ transform: 'translateZ(45px)' }}>
              <svg viewBox="0 0 80 80" className="w-20 h-20 text-emerald-400">
                <path d="M20 25 H60 L55 70 H25 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <motion.path 
                  d="M30 25 C30 10, 50 10, 50 25" 
                  fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round"
                  animate={{ d: ["M30 25 C30 10, 50 10, 50 25", "M30 25 C30 5, 50 5, 50 25", "M30 25 C30 10, 50 10, 50 25"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>

            <span className="text-xs font-mono font-bold text-emerald-300 mt-4" style={{ transform: 'translateZ(25px)' }}>
              0 ITEMS • ORBITAL STATE
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection2;