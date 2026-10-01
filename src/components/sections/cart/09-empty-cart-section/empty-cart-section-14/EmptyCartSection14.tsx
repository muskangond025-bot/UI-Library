import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection14({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 2.5;
    const y = (e.clientY - rect.top - rect.height / 2) / 2.5;
    setBtnPos({ x, y });
  };

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 flex-shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-indigo-400 block font-bold">14 / POINTER MAGNETIC CTA</span>
            <h3 className="text-lg font-bold text-white">{settings.title}</h3>
            <p className="text-xs text-slate-400">{settings.subtitle}</p>
          </div>
        </div>

        <button 
          onMouseMove={handleBtnMove}
          onMouseLeave={() => setBtnPos({ x: 0, y: 0 })}
          style={{ transform: `translate3d(${btnPos.x}px, ${btnPos.y}px, 0)` }}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 transition-transform duration-100 ease-out shadow-lg shadow-indigo-600/30"
        >
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection14;