const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'cart', '08-recently-viewed-products');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

// Sample fallback products
const sampleProducts = [
  {
    id: 'rv-1',
    name: 'Minimalist Leather Sneakers',
    category: 'Footwear',
    price: 12900,
    originalPrice: 15900,
    viewedTime: '10 mins ago',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    badge: 'Just Viewed'
  },
  {
    id: 'rv-2',
    name: 'Cashmere Knit Crewneck',
    category: 'Apparel',
    price: 18500,
    originalPrice: 22000,
    viewedTime: '25 mins ago',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    badge: 'High Interest'
  },
  {
    id: 'rv-3',
    name: 'Waterproof Commuter Backpack',
    category: 'Accessories',
    price: 14200,
    originalPrice: 17500,
    viewedTime: '1 hour ago',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    badge: 'Low Stock'
  },
  {
    id: 'rv-4',
    name: 'Matte Ceramic Watch',
    category: 'Timepieces',
    price: 32000,
    originalPrice: 38000,
    viewedTime: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    badge: 'Trending'
  }
];

const variants = [
  {
    id: 1,
    title: "Recently Viewed — Horizontal Memory Rail",
    desc: "Recently viewed products appear in a horizontal memory rail as the user slides across browsing history.",
    motion: "Horizontal sliding direction entrance",
    code: `import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShoppingBag, Eye, Clock, Sparkles } from 'lucide-react';

export function RecentlyViewedProducts1({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 flex items-end justify-between border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">01 / HORIZONTAL MEMORY RAIL</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Horizontal Memory Rail</h2>
          <p className="text-sm text-slate-400 mt-1">Recently viewed products appear in a horizontal memory rail as the user slides across browsing history.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setScrollIndex(Math.max(0, scrollIndex - 1))} 
            disabled={scrollIndex === 0}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-40 border border-slate-700 flex items-center justify-center transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setScrollIndex(Math.min(products.length - 1, scrollIndex + 1))}
            disabled={scrollIndex >= products.length - 1}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 disabled:opacity-40 border border-slate-700 flex items-center justify-center transition-all"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden">
        <div 
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{ transform: \`translateX(-\${scrollIndex * 300}px)\` }}
        >
          {products.map((p: any, idx: number) => (
            <div key={p.id || idx} className="min-w-[280px] max-w-[280px] bg-slate-950/60 border border-slate-800 rounded-2xl p-4 hover:border-indigo-500/50 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-52 rounded-xl overflow-hidden mb-4 bg-slate-900">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-2 left-2 text-[10px] font-mono font-bold bg-slate-900/90 border border-slate-700 px-2 py-0.5 rounded text-indigo-300">
                  {p.viewedTime || 'Viewed recently'}
                </span>
              </div>
              <h3 className="font-semibold text-sm truncate text-slate-100">{p.name}</h3>
              <p className="text-xs text-slate-400 mb-3">{p.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-emerald-400 text-sm">₹{p.price.toLocaleString()}</span>
                <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-all">
                  <ShoppingBag className="w-3.5 h-3.5" /> Revisit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts1;`
  },
  {
    id: 2,
    title: "Recently Viewed — Editorial Stack",
    desc: "Large hero product presentation with a side-stacked visual inventory where hovering expands detail panels.",
    motion: "Image scales smoothly into editorial focus while text follows with staggered delay",
    code: `import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';

export function RecentlyViewedProducts2({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
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
              className={\`flex items-center gap-4 p-3 rounded-2xl border cursor-pointer transition-all duration-300 \${
                activeIndex === i 
                  ? 'bg-neutral-800 border-amber-400/80 shadow-lg shadow-amber-400/10' 
                  : 'bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/60'
              }\`}
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
export default RecentlyViewedProducts2;`
  },
  {
    id: 3,
    title: "Recently Viewed — Vertical History Timeline",
    desc: "Chronological visual timeline showing timestamped browsing history connected by an animated SVG path.",
    motion: "Progressive timeline path drawing as items enter viewport",
    code: `import React from 'react';
import { Clock, CheckCircle2, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts3({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto mb-10 text-center">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">03 / VERTICAL HISTORY TIMELINE</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Vertical History Timeline</h2>
        <p className="text-sm text-slate-400 mt-1">Chronological visual timeline showing timestamped browsing history connected by an animated SVG path.</p>
      </div>

      <div className="max-w-3xl mx-auto relative border-l-2 border-slate-800 ml-4 sm:ml-auto pl-6 sm:pl-8 space-y-8">
        {products.map((item: any, i: number) => (
          <div key={item.id || i} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center text-[10px] font-bold text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-all">
              {i + 1}
            </div>
            
            <div className="bg-slate-900 border border-slate-800 hover:border-emerald-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center transition-all duration-300">
              <img src={item.image} alt={item.name} className="w-full sm:w-28 h-28 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[11px] font-mono text-slate-400">{item.viewedTime || 'Visited today'}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-slate-400 mb-3">{item.category}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-emerald-400">₹{item.price.toLocaleString()}</span>
                  <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all">
                    <ShoppingBag className="w-3.5 h-3.5" /> Re-Add Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts3;`
  },
  {
    id: 4,
    title: "Recently Viewed — Overlapping Product Deck",
    desc: "A stacked card deck of recently viewed items that separates into a fan-out view on hover.",
    motion: "Physical card separation and stack fan-out",
    code: `import React, { useState } from 'react';
import { Layers, ShoppingBag, ArrowUpRight } from 'lucide-react';

export function RecentlyViewedProducts4({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
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
                className={\`absolute w-60 bg-slate-900 border border-slate-800 hover:border-indigo-500/80 rounded-2xl p-4 shadow-2xl transition-all duration-500 ease-out cursor-pointer \${offsets[idx % 4]}\`}
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
export default RecentlyViewedProducts4;`
  },
  {
    id: 5,
    title: "Recently Viewed — Cinematic Filmstrip",
    desc: "A filmstrip frame track displaying viewed products with smooth momentum navigation controls.",
    motion: "Horizontal track slide with smooth inertia momentum",
    code: `import React, { useState } from 'react';
import { Film, ShoppingBag, Play, Pause } from 'lucide-react';

export function RecentlyViewedProducts5({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [activeFrame, setActiveFrame] = useState(0);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans border-y border-neutral-800">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest block mb-1">05 / CINEMATIC FILMSTRIP</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Cinematic Filmstrip</h2>
        <p className="text-sm text-neutral-400 mt-1">A filmstrip frame track displaying viewed products with smooth momentum navigation controls.</p>
      </div>

      <div className="max-w-7xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6">
        {/* Film perforations top */}
        <div className="flex justify-between gap-2 mb-4 px-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-950 rounded-sm border border-neutral-800" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p: any, i: number) => (
            <div 
              key={p.id || i}
              onClick={() => setActiveFrame(i)}
              className={\`border-2 rounded-2xl p-3 bg-neutral-950 transition-all cursor-pointer \${
                activeFrame === i ? 'border-red-500 shadow-lg shadow-red-500/20 scale-102' : 'border-neutral-800 opacity-70 hover:opacity-100'
              }\`}
            >
              <div className="h-44 rounded-xl overflow-hidden mb-3 relative">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <span className="absolute bottom-2 left-2 text-[10px] font-mono bg-black/80 text-red-400 px-2 py-0.5 rounded">
                  FRAME 0{i + 1}
                </span>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-mono text-emerald-400">₹{p.price.toLocaleString()}</span>
                <button className="px-2.5 py-1 bg-red-600 hover:bg-red-500 text-white text-[10px] font-bold rounded-lg">
                  View Frame
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Film perforations bottom */}
        <div className="flex justify-between gap-2 mt-4 px-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-4 h-3 bg-neutral-950 rounded-sm border border-neutral-800" />
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts5;`
  },
  {
    id: 6,
    title: "Recently Viewed — Featured Memory Hero",
    desc: "Dominant hero view of the most recent item with secondary thumbnail switching and smooth crossfade.",
    motion: "Crossfade + scale transformation on spotlight switch",
    code: `import React, { useState } from 'react';
import { Eye, ShoppingBag, ChevronRight } from 'lucide-react';

export function RecentlyViewedProducts6({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = products[selectedIdx] || products[0];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / FEATURED MEMORY HERO</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Featured Memory Hero</h2>
        <p className="text-sm text-slate-400 mt-1">Dominant hero view of the most recent item with secondary thumbnail switching and smooth crossfade.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center">
          <img src={current.image} alt={current.name} className="w-full md:w-1/2 h-80 rounded-2xl object-cover shadow-2xl" />
          <div className="flex-1">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">{current.category} • {current.viewedTime || 'Recently Viewed'}</span>
            <h3 className="text-2xl font-black text-white mb-3">{current.name}</h3>
            <p className="text-xs text-slate-400 mb-6">Return to your most recently inspected item with saved configuration and immediate checkout readiness.</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{current.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500 line-through">₹{current.originalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" /> Move to Cart
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-3">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Other Recent Items</span>
          {products.map((item: any, idx: number) => (
            <button
              key={item.id || idx}
              onClick={() => setSelectedIdx(idx)}
              className={\`flex items-center gap-4 p-3 rounded-2xl border text-left transition-all \${
                selectedIdx === idx ? 'bg-cyan-500/10 border-cyan-400 text-white' : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800'
              }\`}
            >
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold truncate text-white">{item.name}</p>
                <p className="text-[11px] text-emerald-400 font-mono">₹{item.price.toLocaleString()}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts6;`
  },
  {
    id: 7,
    title: "Recently Viewed — Compact History List",
    desc: "A sleek vertical list with quick-add actions and sequential lateral reveal animations.",
    motion: "Sequential row slide from side",
    code: `import React from 'react';
import { ShoppingBag, Eye, Trash2 } from 'lucide-react';

export function RecentlyViewedProducts7({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">07 / COMPACT HISTORY LIST</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Compact History List</h2>
        <p className="text-sm text-slate-400 mt-1">A sleek vertical list with quick-add actions and sequential lateral reveal animations.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-3">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all group">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-slate-500 font-bold w-6">0{i + 1}</span>
              <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">{p.name}</h4>
                <p className="text-xs text-slate-400">{p.category} • <span className="text-slate-500">{p.viewedTime || '2h ago'}</span></p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-sm font-mono font-bold text-emerald-400">₹{p.price.toLocaleString()}</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all">
                <ShoppingBag className="w-3.5 h-3.5" /> Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts7;`
  },
  {
    id: 8,
    title: "Recently Viewed — Asymmetric Gallery",
    desc: "An editorial layout with variable card proportions and staggered directional entrances.",
    motion: "Positional staggered directional movement",
    code: `import React from 'react';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

export function RecentlyViewedProducts8({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">08 / ASYMMETRIC GALLERY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Asymmetric Gallery</h2>
        <p className="text-sm text-neutral-400 mt-1">An editorial layout with variable card proportions and staggered directional entrances.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {products.map((p: any, i: number) => {
          const colSpan = i % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4';
          const height = i % 3 === 0 ? 'h-80' : 'h-80';

          return (
            <div key={p.id || i} className={\`\${colSpan} bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/50 transition-all group relative overflow-hidden\`}>
              <div className={\`\${height} rounded-2xl overflow-hidden mb-4 relative bg-neutral-950\`}>
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-3 left-3 text-[10px] font-mono bg-black/80 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1">{p.name}</h3>
                  <span className="text-sm font-mono font-bold text-emerald-400">₹{p.price.toLocaleString()}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts8;`
  },
  {
    id: 9,
    title: "Recently Viewed — Minimal Typographic",
    desc: "Bold typographic header 'YOU'VE SEEN THESE' with sleek minimalist cards and letter-spacing reveal.",
    motion: "Typography tracks/reveals first followed by product images",
    code: `import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts9({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-black text-white font-sans border-y border-neutral-900">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block mb-2">09 / MINIMAL TYPOGRAPHIC</span>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-600 uppercase">
          YOU'VE SEEN THESE
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-2 tracking-widest uppercase">Curated history log • Instant checkout ready</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="group cursor-pointer">
            <div className="h-64 rounded-none overflow-hidden bg-neutral-900 mb-4 border border-neutral-800 group-hover:border-white transition-all">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">0{i + 1} // {p.category}</span>
            <h4 className="text-sm font-bold text-white truncate mb-1">{p.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
              <button className="text-xs font-bold text-white underline underline-offset-4 hover:text-emerald-400 transition-colors">
                Quick Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts9;`
  },
  {
    id: 10,
    title: "Recently Viewed — Product Spotlight",
    desc: "Spotlights one item centrally while secondary cards orbit with focus ring transitions.",
    motion: "Focus spotlight transition between products",
    code: `import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Eye } from 'lucide-react';

export function RecentlyViewedProducts10({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [activeIdx, setActiveIdx] = useState(0);
  const active = products[activeIdx] || products[0];

  return (
    <section className="w-full py-14 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / PRODUCT SPOTLIGHT</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Product Spotlight</h2>
        <p className="text-sm text-slate-400 mt-1">Spotlights one item centrally while secondary cards orbit with focus ring transitions.</p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-2xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <img src={active.image} alt={active.name} className="w-full md:w-1/2 h-72 rounded-2xl object-cover border border-slate-700" />
          <div className="flex-1">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase block mb-2">SPOTLIGHT RE-EXAMINATION</span>
            <h3 className="text-2xl font-extrabold text-white mb-2">{active.name}</h3>
            <p className="text-xs text-slate-400 mb-6">{active.category} • Viewed {active.viewedTime || 'recently'}</p>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{active.price.toLocaleString()}</span>
              <span className="text-sm text-slate-500 line-through">₹{active.originalPrice.toLocaleString()}</span>
            </div>
            <button className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-all">
              <ShoppingBag className="w-4 h-4" /> Move to Cart Now
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {products.map((item: any, idx: number) => (
            <button
              key={item.id || idx}
              onClick={() => setActiveIdx(idx)}
              className={\`flex items-center gap-3 px-4 py-2.5 rounded-2xl border transition-all \${
                activeIdx === idx ? 'bg-amber-400/10 border-amber-400 text-amber-300 ring-2 ring-amber-400/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-800'
              }\`}
            >
              <img src={item.image} alt={item.name} className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-xs font-bold truncate max-w-[120px]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts10;`
  },
  {
    id: 11,
    title: "Recently Viewed — Snap Carousel",
    desc: "Modern snap-scroll track with spring physics, indicator pills, and full keyboard navigation.",
    motion: "Controlled spring motion snap",
    code: `import React from 'react';
import { ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

export function RecentlyViewedProducts11({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">11 / SNAP CAROUSEL</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Snap Carousel</h2>
        <p className="text-sm text-slate-400 mt-1">Modern snap-scroll track with spring physics, indicator pills, and full keyboard navigation.</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="min-w-[260px] max-w-[260px] snap-center bg-slate-900 border border-slate-800 rounded-2xl p-4 flex-shrink-0 hover:border-indigo-500 transition-all">
            <div className="h-48 rounded-xl overflow-hidden bg-slate-950 mb-3">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xs font-bold text-white truncate mb-1">{p.name}</h4>
            <p className="text-[10px] text-slate-400 mb-3">{p.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
              <button className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold rounded-lg">
                Re-Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts11;`
  },
  {
    id: 12,
    title: "Recently Viewed — Mosaic Memory Grid",
    desc: "An irregular masonry mosaic layout where tiles enter from varied screen vectors.",
    motion: "Positional mosaic directional entry",
    code: `import React from 'react';
import { Grid, Eye } from 'lucide-react';

export function RecentlyViewedProducts12({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

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
              className={\`\${isLarge ? 'col-span-2 row-span-2' : 'col-span-1'} bg-neutral-900 border border-neutral-800 rounded-3xl p-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all flex flex-col justify-between\` \`}
            >
              <div className={\`\${isLarge ? 'h-64 sm:h-80' : 'h-40'} rounded-2xl overflow-hidden bg-neutral-950 mb-3\`}>
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
export default RecentlyViewedProducts12;`
  },
  {
    id: 13,
    title: "Recently Viewed — Product Reveal Window",
    desc: "Framed portal reveal windows that unmask product imagery through clip path transitions.",
    motion: "Clip path / mask reveal",
    code: `import React from 'react';
import { Eye, ArrowRight } from 'lucide-react';

export function RecentlyViewedProducts13({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest block mb-1">13 / PRODUCT REVEAL WINDOW</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Product Reveal Window</h2>
        <p className="text-sm text-slate-400 mt-1">Framed portal reveal windows that unmask product imagery through clip path transitions.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p: any, i: number) => (
          <div key={p.id || i} className="bg-slate-950 border border-slate-800 rounded-3xl p-5 hover:border-pink-500/50 transition-all group">
            <div className="h-56 rounded-2xl overflow-hidden bg-slate-900 mb-4 relative border border-slate-800">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
            <h4 className="text-sm font-bold text-white truncate mb-1">{p.name}</h4>
            <p className="text-xs text-slate-400 mb-3">{p.category}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-pink-400 font-bold">₹{p.price.toLocaleString()}</span>
              <button className="px-3 py-1.5 bg-pink-600 hover:bg-pink-500 text-white text-xs font-bold rounded-xl flex items-center gap-1">
                Inspect <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts13;`
  },
  {
    id: 14,
    title: "Recently Viewed — Persistent History Strip",
    desc: "Compact sticky bottom history bar where newly viewed items animate into the track continuously.",
    motion: "Continuous history movement & insertion",
    code: `import React from 'react';
import { History, ShoppingBag, X } from 'lucide-react';

export function RecentlyViewedProducts14({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};

  return (
    <section className="w-full py-8 px-6 lg:px-12 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold text-indigo-300 uppercase">14 / PERSISTENT HISTORY STRIP</h3>
            <p className="text-xs text-slate-400">Recently Viewed Live Session Strip</p>
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto py-1">
          {products.map((p: any, i: number) => (
            <div key={p.id || i} className="flex items-center gap-2.5 bg-slate-950 border border-slate-800 rounded-xl p-2 min-w-[180px]">
              <img src={p.image} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-white truncate">{p.name}</p>
                <p className="text-[10px] text-emerald-400 font-mono">₹{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts14;`
  },
  {
    id: 15,
    title: "Recently Viewed — Split View",
    desc: "Split screen layout featuring a large live preview on the left and a selectable list on the right.",
    motion: "Directional preview transition based on selection index",
    code: `import React, { useState } from 'react';
import { Eye, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts15({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [selected, setSelected] = useState(0);
  const item = products[selected] || products[0];

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest block mb-1">15 / SPLIT VIEW</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Split View</h2>
        <p className="text-sm text-neutral-400 mt-1">Split screen layout featuring a large live preview on the left and a selectable list on the right.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-900 border border-neutral-800 rounded-3xl p-6">
        <div className="lg:col-span-7 bg-neutral-950 rounded-2xl p-6 flex flex-col justify-between">
          <img src={item.image} alt={item.name} className="w-full h-72 rounded-xl object-cover mb-4" />
          <div>
            <span className="text-xs text-teal-400 font-mono block mb-1">{item.category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-mono text-emerald-400 font-extrabold">₹{item.price.toLocaleString()}</span>
              <button className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold rounded-xl text-xs flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Move to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-3">
          {products.map((p: any, i: number) => (
            <div 
              key={p.id || i} 
              onClick={() => setSelected(i)}
              className={\`flex items-center gap-4 p-3 rounded-2xl border cursor-pointer transition-all \${
                selected === i ? 'bg-teal-500/10 border-teal-400 text-white' : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
              }\`}
            >
              <img src={p.image} alt={p.name} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">{p.name}</p>
                <p className="text-[11px] text-teal-400 font-mono">₹{p.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts15;`
  },
  {
    id: 16,
    title: "Recently Viewed — Curtain Reveal",
    desc: "Product cards hidden behind visual curtains that open horizontally to reveal items.",
    motion: "Horizontal curtain mask reveal",
    code: `import React, { useState } from 'react';
import { Lock, Unlock, Eye } from 'lucide-react';

export function RecentlyViewedProducts16({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const toggleReveal = (idx: number) => {
    setRevealed(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">16 / CURTAIN REVEAL</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Curtain Reveal</h2>
        <p className="text-sm text-slate-400 mt-1">Product cards hidden behind visual curtains that open horizontally to reveal items.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p: any, i: number) => {
          const isOpen = revealed[i];
          return (
            <div key={p.id || i} className="bg-slate-900 border border-slate-800 rounded-3xl p-4 relative overflow-hidden group">
              <div className="h-56 rounded-2xl overflow-hidden relative bg-slate-950 mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                <div 
                  className={\`absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center transition-transform duration-700 ease-in-out \${
                    isOpen ? '-translate-x-full' : 'translate-x-0'
                  }\`}
                >
                  <Lock className="w-6 h-6 text-purple-400 mb-2" />
                  <button 
                    onClick={() => toggleReveal(i)} 
                    className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-xs font-bold"
                  >
                    Open Curtain
                  </button>
                </div>
              </div>
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs font-mono text-emerald-400">₹{p.price.toLocaleString()}</span>
                <button onClick={() => toggleReveal(i)} className="text-[10px] text-purple-400 font-mono underline">
                  {isOpen ? 'Close Mask' : 'Reveal'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts16;`
  },
  {
    id: 17,
    title: "Recently Viewed — Hover Magnification",
    desc: "Dynamic focal grid where hovering magnifies the active card while compressing neighboring cards.",
    motion: "Interactive expansion & compression layout shift",
    code: `import React, { useState } from 'react';
import { Maximize2, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts17({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto mb-8">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">17 / HOVER MAGNIFICATION</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Hover Magnification</h2>
        <p className="text-sm text-neutral-400 mt-1">Dynamic focal grid where hovering magnifies the active card while compressing neighboring cards.</p>
      </div>

      <div className="max-w-7xl mx-auto flex gap-4 overflow-hidden py-4">
        {products.map((p: any, i: number) => {
          const isHovered = hoveredIdx === i;
          return (
            <div
              key={p.id || i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={\`bg-neutral-900 border border-neutral-800 rounded-3xl p-4 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between \${
                isHovered ? 'flex-[2] bg-indigo-950/40 border-indigo-500/80 shadow-2xl' : 'flex-[1] opacity-70'
              }\`}
            >
              <div className="h-60 rounded-2xl overflow-hidden bg-neutral-950 mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs font-mono text-emerald-400 font-bold">₹{p.price.toLocaleString()}</span>
                  {isHovered && (
                    <button className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-lg">
                      Add Item
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default RecentlyViewedProducts17;`
  },
  {
    id: 18,
    title: "Recently Viewed — Stacked 3D Depth Cards",
    desc: "Layered 3D card stack that cycles through Z-space depth when clicking next/prev controls.",
    motion: "Depth translate Z and scale transition",
    code: `import React, { useState } from 'react';
import { Layers, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts18({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [topIdx, setTopIdx] = useState(0);

  const nextCard = () => setTopIdx((topIdx + 1) % products.length);
  const prevCard = () => setTopIdx((topIdx - 1 + products.length) % products.length);

  const current = products[topIdx] || products[0];

  return (
    <section className="w-full py-14 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">18 / STACKED 3D DEPTH CARDS</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Stacked 3D Depth Cards</h2>
        <p className="text-sm text-slate-400 mt-1">Layered 3D card stack that cycles through Z-space depth when clicking next/prev controls.</p>
      </div>

      <div className="max-w-2xl mx-auto relative flex flex-col items-center min-h-[380px]">
        <div className="w-80 bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl z-20 text-center">
          <div className="h-48 rounded-2xl overflow-hidden bg-slate-950 mb-4">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">{current.category}</span>
          <h3 className="text-base font-bold text-white mb-2">{current.name}</h3>
          <span className="text-lg font-mono text-emerald-400 font-extrabold block mb-4">₹{current.price.toLocaleString()}</span>
          
          <div className="flex gap-2 justify-center">
            <button onClick={prevCard} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={nextCard} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts18;`
  },
  {
    id: 19,
    title: "Recently Viewed — Chronological Marquee",
    desc: "Continuous marquee strip with hover-pause controls, keyboard accessibility, and reduced-motion support.",
    motion: "Controlled continuous marquee motion",
    code: `import React, { useState } from 'react';
import { Pause, Play, ShoppingBag } from 'lucide-react';

export function RecentlyViewedProducts19({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [paused, setPaused] = useState(false);

  return (
    <section className="w-full py-12 px-6 lg:px-12 bg-neutral-950 text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">19 / CHRONOLOGICAL MARQUEE</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Recently Viewed — Chronological Marquee</h2>
          <p className="text-sm text-neutral-400 mt-1">Continuous marquee strip with hover-pause controls, keyboard accessibility, and reduced-motion support.</p>
        </div>
        <button 
          onClick={() => setPaused(!paused)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-amber-300"
        >
          {paused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          <span>{paused ? 'Resume Motion' : 'Pause Marquee'}</span>
        </button>
      </div>

      <div className="w-full overflow-hidden relative">
        <div 
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={\`flex gap-6 w-max \${paused ? '' : 'animate-marquee'}\`}
        >
          {[...products, ...products].map((p: any, i: number) => (
            <div key={i} className="min-w-[240px] bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
              <img src={p.image} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-3" />
              <h4 className="text-xs font-bold text-white truncate">{p.name}</h4>
              <span className="text-xs font-mono text-emerald-400 font-bold block mt-1">₹{p.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts19;`
  },
  {
    id: 20,
    title: "Recently Viewed — Award-Level Editorial Experience",
    desc: "Oversized editorial typography, floating depth layers, cursor tracking tilt, and cinematic transitions.",
    motion: "Layered cinematic interaction & cursor tracking",
    code: `import React, { useState } from 'react';
import { Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';

export function RecentlyViewedProducts20({ data }: { data?: any }) {
  const products = data?.products || ${JSON.stringify(sampleProducts, null, 2)};
  const [activeIdx, setActiveIdx] = useState(0);
  const current = products[activeIdx] || products[0];

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-gradient-to-br from-black via-slate-950 to-indigo-950 text-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto mb-10 border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">20 / AWARD-LEVEL EDITORIAL EXPERIENCE</span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-500">
            PERSONAL HISTORY SUITE
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400">Cinematic Memory Matrix</span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="h-80 rounded-2xl overflow-hidden mb-6 relative">
            <img src={current.image} alt={current.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 text-xs font-mono text-indigo-300 font-bold bg-slate-950/80 backdrop-blur px-3 py-1 rounded-full border border-indigo-500/30">
              {current.category}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white mb-2">{current.name}</h3>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-mono font-extrabold text-emerald-400">₹{current.price.toLocaleString()}</span>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl text-xs flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" /> Direct Checkout
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {products.map((item: any, idx: number) => (
            <div
              key={item.id || idx}
              onClick={() => setActiveIdx(idx)}
              className={\`p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-4 \${
                activeIdx === idx ? 'bg-indigo-600/20 border-indigo-400 text-white' : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800'
              }\`}
            >
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-white truncate">{item.name}</h4>
                <p className="text-xs text-emerald-400 font-mono mt-1">₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default RecentlyViewedProducts20;`
  }
];

// Write files
variants.forEach(v => {
  const dir = path.join(baseDir, `recently-viewed-products-${v.id}`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const tsxPath = path.join(dir, `RecentlyViewedProducts${v.id}.tsx`);
  fs.writeFileSync(tsxPath, v.code);

  const jsonPath = path.join(dir, `recently-viewed-products-${v.id}.json`);
  const jsonContent = {
    title: v.title,
    description: v.desc,
    animation: v.motion,
    section: {
      settings: {
        title: v.title,
        description: v.desc,
        products: sampleProducts
      }
    }
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2));
});

console.log("Successfully created 20 Recently Viewed Products variants!");
