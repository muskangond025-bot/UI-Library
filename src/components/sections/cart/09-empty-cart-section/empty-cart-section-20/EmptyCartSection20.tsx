import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection20({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setTilt({
      x: (clientX - window.innerWidth / 2) / 25,
      y: (clientY - window.innerHeight / 2) / 25
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-20 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden border-y border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-3">20 / AWARD-LEVEL HYBRID SHOWCASE</span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500 mb-4">
            0 ITEMS IN BAG.
          </h2>
          <p className="text-sm text-slate-400 max-w-md mb-8">{settings.subtitle}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl shadow-indigo-500/30">
            <span>{settings.primaryCta?.label || 'Start Shopping Journey'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Tilt Hybrid Glass Container with SVG Ring */}
        <div className="lg:col-span-5 perspective-1000">
          <div 
            className="bg-slate-900/85 backdrop-blur-2xl border border-indigo-500/40 rounded-3xl p-8 text-center shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: `rotateX(${tilt.y * -1}deg) rotateY(${tilt.x}deg)` }}
          >
            <svg viewBox="0 0 100 100" className="w-24 h-24 text-indigo-400 mx-auto mb-4">
              <motion.circle
                cx="50" cy="50" r="42"
                fill="none" stroke="currentColor" strokeWidth="3.5" strokeDasharray="12 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            <h3 className="text-lg font-bold text-white mb-2">Curated Shopping Gateway</h3>
            <p className="text-xs text-slate-400">Discover hand-picked collections crafted for elevated aesthetic tastes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection20;