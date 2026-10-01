import React, { useState } from 'react';
import { Layers, ShoppingBag, ArrowUpRight } from 'lucide-react';

export function RecentlyViewedProducts4({ data }: { data?: any }) {
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
  const [hovered, setHovered] = useState(false);

  return (
    <section className="w-full py-14 px-6 lg:px-12 bg-gradient-to-b from-slate-950 to-indigo-950 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">04 / OVERLAPPING PRODUCT DECK</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Overlapping Product Deck</h2>
        <p className="text-sm text-slate-400 mt-1">A stacked card deck of recently viewed items that separates into a fan-out view on hover.</p>
      </div>

      <div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="max-w-5xl mx-auto min-h-[380px] flex justify-center items-center relative"
      >
        <div className="flex justify-center items-center w-full relative">
          {products.map((p: any, idx: number) => {
            const offsets = [
              hovered ? 'translate-x-[-220px] -rotate-6' : 'translate-x-[-60px] -rotate-3',
              hovered ? 'translate-x-[-70px] -rotate-2' : 'translate-x-[-20px] -rotate-1',
              hovered ? 'translate-x-[70px] rotate-2' : 'translate-x-[20px] rotate-1',
              hovered ? 'translate-x-[220px] rotate-6' : 'translate-x-[60px] rotate-3',
            ];

            return (
              <div 
                key={p.id || idx}
                className={`absolute w-60 bg-slate-900 border border-slate-800 hover:border-indigo-500/80 rounded-2xl p-4 shadow-2xl transition-all duration-500 ease-out cursor-pointer ${offsets[idx % 4]}`}
              >
                <div className="h-40 rounded-xl overflow-hidden bg-slate-950 mb-3">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xs font-bold truncate text-slate-100">{p.name}</h4>
                <p className="text-[10px] text-slate-400 mb-2">{p.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-300">₹{p.price.toLocaleString()}</span>
                  <span className="text-[10px] text-indigo-400 flex items-center font-semibold">Inspect <ArrowUpRight className="w-3 h-3 ml-0.5" /></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts4;