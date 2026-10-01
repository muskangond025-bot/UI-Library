import React, { useState } from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export function EmptyCartSection4({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 12;
    const y = (e.clientY - rect.top - rect.height / 2) / 12;
    setMousePos({ x, y });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="w-full py-20 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden"
    >
      <div className="max-w-lg mx-auto text-center flex flex-col items-center">
        {/* Interactive 3D Layered Card Stack */}
        <div className="relative w-72 h-60 mb-8 flex justify-center items-center">
          <div 
            className="absolute inset-0 bg-amber-500/10 border border-amber-500/30 rounded-3xl backdrop-blur-md transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px, 0px) rotate(-8deg)` }}
          />
          <div 
            className="absolute inset-0 bg-neutral-900/90 border border-neutral-700 rounded-3xl backdrop-blur-xl transition-transform duration-150 ease-out p-6 flex flex-col justify-center items-center shadow-2xl"
            style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0px) rotate(4deg)` }}
          >
            {/* SVG Animated Card Icon */}
            <svg viewBox="0 0 60 60" className="w-14 h-14 text-amber-400 mb-2">
              <rect x="10" y="15" width="40" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
              <line x1="10" y1="25" x2="50" y2="25" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
              <circle cx="20" cy="35" r="2" fill="currentColor" />
            </svg>
            <span className="text-xs font-mono font-bold text-amber-300 uppercase">04 / 3D CARD DEPTH</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-xs text-neutral-400 mb-6">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-400/20">
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection4;