import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function ProductRecommendedProducts18({ data }: { data?: any }) {
  const products = [
    { id: 1, name: "Minimalist Leather Cardholder", price: "₹4,999", badge: "98% Style Match", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800" },
    { id: 2, name: "Artisan Brass Key Carabiner", price: "₹3,499", badge: "Top Picked", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800" },
    { id: 3, name: "Executive Anodized Pen", price: "₹6,499", badge: "Complements Order", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=800" },
    { id: 4, name: "Slim Bifold Money Clip", price: "₹5,499", badge: "Popular Pick", image: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=800" }
  ];

  return (
    <div className="w-full min-h-[500px] bg-slate-950 text-white p-8 rounded-3xl font-sans border border-slate-800 my-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 flex items-center gap-1">
            <Sparkles size={14} /> PRODUCT DISCOVERY VARIANT 18
          </span>
          <h2 className="text-3xl font-serif text-white mt-1">Recommended For You</h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">Curated product recommendations for your browsing style.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-4 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[4/5] bg-slate-800 rounded-xl overflow-hidden mb-4">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono text-amber-400 rounded border border-slate-800">
                  {p.badge}
                </span>
              </div>
              <h3 className="font-serif text-base text-white group-hover:text-amber-400 transition-colors">{p.name}</h3>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-base font-serif text-amber-400 font-bold">{p.price}</span>
              <button className="text-xs text-slate-300 hover:text-white flex items-center gap-1">
                <span>View Product</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
