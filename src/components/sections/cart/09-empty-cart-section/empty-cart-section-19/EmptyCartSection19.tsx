import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function EmptyCartSection19({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-10 px-6 bg-slate-950 text-white font-sans">
      <div className="max-w-sm mx-auto bg-slate-900 border-2 border-indigo-500/40 rounded-2xl p-6 text-center shadow-2xl backdrop-blur">
        <div className="w-11 h-11 rounded-xl bg-indigo-600/20 border border-indigo-400 mx-auto mb-3 flex items-center justify-center text-indigo-300 shadow-md">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <span className="text-[9px] font-mono text-indigo-400 uppercase block mb-1">19 / 3D PORTAL FRAME</span>
        <h3 className="text-sm font-bold text-white mb-1">{settings.title}</h3>
        <p className="text-[11px] text-slate-400 mb-4">{settings.subtitle}</p>
        <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30">
          <span>{settings.primaryCta?.label || 'Shop Now'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection19;