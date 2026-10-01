import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function EmptyCartSection7({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setOffset({
      x: (clientX - window.innerWidth / 2) / 20,
      y: (clientY - window.innerHeight / 2) / 20
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">07 / 3D PARALLAX POINTER FIELD</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">YOUR BAG IS CURRENTLY UNFILLED.</h2>
          <p className="text-sm text-neutral-400 mb-8">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-600/30">
            <span>{settings.primaryCta?.label || 'Browse Store'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="md:col-span-5 relative h-80 rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center">
          <div 
            className="w-full h-full absolute inset-0 transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${offset.x * 1.5}px, ${offset.y * 1.5}px, 0)` }}
          >
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" alt="Parallax Visual" className="w-full h-full object-cover opacity-50" />
          </div>
          <div 
            className="relative z-10 px-6 py-4 bg-black/85 backdrop-blur-xl rounded-2xl border border-purple-500/40 shadow-2xl transition-transform duration-150 ease-out"
            style={{ transform: `translate3d(${offset.x * -1.5}px, ${offset.y * -1.5}px, 0)` }}
          >
            <span className="text-xs font-mono font-bold text-purple-300 uppercase">0 ITEMS IN BAG • 3D PARALLAX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection7;