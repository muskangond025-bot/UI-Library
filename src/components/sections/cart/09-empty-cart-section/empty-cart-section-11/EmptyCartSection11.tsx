import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection11({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ rx: (y / rect.height) * -18, ry: (x / rect.width) * 18 });
  };

  const handleMouseLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="max-w-2xl mx-auto perspective-1000"
      >
        <div 
          className="bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center shadow-2xl transition-transform duration-150 ease-out"
          style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
        >
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-2">11 / 3D SPRING TILT HERO</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">READY TO SHOP?</h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

          <button className="px-10 py-4 bg-white hover:bg-slate-200 text-slate-950 font-extrabold rounded-2xl text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-xl">
            <ShoppingBag className="w-4 h-4" />
            <span>{settings.primaryCta?.label || 'START SHOPPING NOW'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection11;