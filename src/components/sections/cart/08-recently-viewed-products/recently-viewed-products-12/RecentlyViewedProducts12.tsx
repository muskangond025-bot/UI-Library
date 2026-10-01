import React from 'react';
import { Grid, Eye } from 'lucide-react';

export function RecentlyViewedProducts12({ data }: { data?: any }) {
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

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">12 / MOSAIC MEMORY GRID</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Mosaic Memory Grid</h2>
        <p className="text-sm text-neutral-400 mt-1">An irregular masonry mosaic layout where tiles enter from varied screen vectors.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p: any, i: number) => {
          const isLarge = i === 0 || i === 3;
          return (
            <div 
              key={p.id || i}
              className={`${isLarge ? 'col-span-2 row-span-2' : 'col-span-1'} bg-neutral-900 border border-neutral-800 rounded-3xl p-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between`}
            >
              <div className={`${isLarge ? 'h-64 sm:h-80' : 'h-40'} rounded-2xl overflow-hidden bg-neutral-950 mb-3`}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
                  <span className="text-[10px] text-neutral-500 font-mono">{p.viewedTime || 'Mosaic Tile'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts12;