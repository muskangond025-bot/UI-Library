import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';

export function RecentlyViewedProducts2({ data }: { data?: any }) {
  const products = data?.products || [
  {
    "id": "rv-1",
    "name": "Minimalist Leather Sneakers",
    "category": "Footwear",
    "price": 12900,
    "originalPrice": 15900,
    "viewedTime": "10 mins ago",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    "rating": 4.8,
    "badge": "Just Viewed"
  },
  {
    "id": "rv-2",
    "name": "Cashmere Knit Crewneck",
    "category": "Apparel",
    "price": 18500,
    "originalPrice": 22000,
    "viewedTime": "25 mins ago",
    "image": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    "rating": 4.9,
    "badge": "High Interest"
  },
  {
    "id": "rv-3",
    "name": "Waterproof Commuter Backpack",
    "category": "Accessories",
    "price": 14200,
    "originalPrice": 17500,
    "viewedTime": "1 hour ago",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    "rating": 4.7,
    "badge": "Low Stock"
  },
  {
    "id": "rv-4",
    "name": "Matte Ceramic Watch",
    "category": "Timepieces",
    "price": 32000,
    "originalPrice": 38000,
    "viewedTime": "2 hours ago",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    "rating": 4.9,
    "badge": "Trending"
  }
];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex] || products[0];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans border-y border-neutral-800">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">02 / EDITORIAL STACK</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Editorial Stack</h2>
        <p className="text-sm text-neutral-400 mt-1">Large hero product presentation with a side-stacked visual inventory where hovering expands detail panels.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-center">
          <div className="w-full sm:w-1/2 h-72 rounded-2xl overflow-hidden relative">
            <img src={activeProduct.image} alt={activeProduct.name} className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
            <span className="absolute top-3 left-3 bg-amber-400 text-neutral-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
              Featured History Item
            </span>
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs text-neutral-400 font-mono block mb-1">{activeProduct.category}</span>
              <h3 className="text-xl font-bold text-white mb-2">{activeProduct.name}</h3>
              <p className="text-xs text-neutral-400 line-clamp-3 mb-4">You spent 2 minutes viewing this product. Revisit features or add it directly to your bag.</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-mono font-extrabold text-amber-400">₹{activeProduct.price.toLocaleString()}</span>
                <span className="text-xs text-neutral-500 line-through">₹{activeProduct.originalPrice.toLocaleString()}</span>
              </div>
            </div>
            <button className="w-full py-3 bg-white hover:bg-neutral-200 text-neutral-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" /> Move to Active Cart
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          {products.map((p: any, i: number) => (
            <div 
              key={p.id || i}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-4 p-3 rounded-2xl border cursor-pointer transition-all duration-300 ${
                activeIndex === i 
                  ? 'bg-neutral-800 border-amber-400/80 shadow-lg shadow-amber-400/10' 
                  : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/60'
              }`}
            >
              <img src={p.image} alt={p.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-white truncate">{p.name}</h4>
                <p className="text-xs text-neutral-400">₹{p.price.toLocaleString()}</p>
              </div>
              <span className="text-[10px] text-neutral-500 font-mono">{p.viewedTime || 'Viewed'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts2;