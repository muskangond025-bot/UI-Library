const fs = require('fs');
const path = require('path');

const wishlistDir = path.join(__dirname, '../src/components/sections/account/04-wishlist');

const wishlistItems = [
  { id: 'w1', name: 'Nike Air Max Pulse', category: 'Sneakers', price: '$150', originalPrice: '$180', discount: '16% OFF', inStock: true, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', savedDate: 'Today' },
  { id: 'w2', name: 'Oversized Denim Jacket', category: 'Streetwear', price: '$120', originalPrice: '$160', discount: '25% OFF', inStock: true, rating: 4.9, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80', savedDate: 'Today' },
  { id: 'w3', name: 'Minimalist Leather Watch', category: 'Accessories', price: '$210', originalPrice: '$210', discount: '', inStock: true, rating: 4.7, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', savedDate: 'Earlier' },
  { id: 'w4', name: 'Pro Wireless Headphones', category: 'Electronics', price: '$299', originalPrice: '$349', discount: '14% OFF', inStock: false, rating: 4.9, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', savedDate: 'Last Week' }
];

const variants = {
  '01': {
    heading: "Premium Wishlist Grid — Staggered Product Cards",
    description: "Elegant saved-product grid featuring staggered entrance animations, heart toggle states, and quick cart actions.",
    funcName: "AccountWishlist1",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, Sparkles } from 'lucide-react';

export function AccountWishlist1() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max 270', price: '$150', oldPrice: '$180', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', category: 'Footwear', inStock: true },
    { id: '2', name: 'Oversized Street Hoodie', price: '$85', oldPrice: '$110', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80', category: 'Apparel', inStock: true },
    { id: '3', name: 'Classic Leather Chronograph', price: '$220', oldPrice: '$260', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80', category: 'Accessories', inStock: true },
    { id: '4', name: 'Studio Noise-Canceling Pods', price: '$299', oldPrice: '$349', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80', category: 'Tech', inStock: false }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs uppercase font-bold tracking-widest">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> Saved Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">Your Wishlist</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              {items.length} Items Saved
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="group bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-400 hover:text-rose-400 hover:bg-slate-950 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-lg font-bold text-white">{item.price}</span>
                      <span className="text-xs text-slate-500 line-through">{item.oldPrice}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20 active:scale-95">
                    <ShoppingBag className="w-4 h-4" /> Move to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist1;
`
  },
  '02': {
    heading: "Editorial Wishlist — Large Typography Reveal",
    description: "High-contrast fashion editorial saved product layout with oversized headline masks and asymmetric imagery.",
    funcName: "AccountWishlist2",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Heart } from 'lucide-react';

export function AccountWishlist2() {
  const items = [
    { id: '1', name: 'NIKE AIR MAX PULSE', price: '$150', category: 'FOOTWEAR', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'OVERSIZED DENIM VEST', price: '$120', category: 'APPAREL', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'MINIMAL CHRONOGRAPH', price: '$210', category: 'ACCENT', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-neutral-800 pb-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-neutral-400 font-semibold block mb-2">CURATED ARCHIVE</span>
            <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-white uppercase leading-none">
              MY <span className="italic font-serif text-neutral-500">WISHLIST</span>
            </h1>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group border-t border-neutral-800 pt-6 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/5] bg-neutral-900 overflow-hidden mb-6 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest text-white bg-black/60 px-3 py-1 backdrop-blur-md">
                    0{idx + 1} // {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-white group-hover:text-neutral-300 transition-colors">
                  {item.name}
                </h3>
                <p className="font-sans text-sm font-semibold text-neutral-400 mt-2">{item.price}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-900 font-sans flex items-center justify-between text-xs tracking-wider">
                <button className="flex items-center gap-1 text-white hover:text-rose-400 transition-colors font-bold">
                  MOVE TO CART <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button className="text-neutral-500 hover:text-neutral-300 transition-colors">REMOVE</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist2;
`
  },
  '03': {
    heading: "Horizontal Wishlist — Smooth Product Rail",
    description: "Horizontal saved-product carousel with smooth touch/drag capabilities, price indicators, and single-click cart transfers.",
    funcName: "AccountWishlist3",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';

export function AccountWishlist3() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Classic Leather Chronograph', price: '$210', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Wireless Studio Headphones', price: '$299', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-bold">Saved Items</span>
            <h2 className="text-3xl font-bold text-white mt-1">Horizontal Showcase</h2>
          </div>
          <span className="text-xs text-slate-400 flex items-center gap-1 font-semibold">
            Scroll Horizontal <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="w-[280px] shrink-0 bg-slate-800/80 border border-slate-700/60 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between"
            >
              <div>
                <div className="aspect-square bg-slate-900 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-base line-clamp-1">{item.name}</h3>
                <p className="text-lg font-bold text-indigo-400 mt-1">{item.price}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50 flex gap-2">
                <button className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all">
                  <ShoppingBag className="w-3.5 h-3.5" /> Move
                </button>
                <button className="p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist3;
`
  },
  '04': {
    heading: "Saved Collections — Categorized Wishlist Tabs",
    description: "Grouped saved items with animated category segment switching and category stock counters.",
    funcName: "AccountWishlist4",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderHeart, ShoppingBag, Trash2 } from 'lucide-react';

export function AccountWishlist4() {
  const [activeTab, setActiveTab] = useState('Sneakers');

  const collections: Record<string, any[]> = {
    Sneakers: [{ id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }],
    Streetwear: [{ id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }],
    Accessories: [{ id: '3', name: 'Leather Chronograph', price: '$210', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }],
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <FolderHeart className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Saved Collections</h2>
            <p className="text-sm text-slate-400 mt-0.5">Organized favorites grouped by style</p>
          </div>
        </div>

        <div className="flex gap-2 mb-8 border-b border-slate-800 pb-4 overflow-x-auto">
          {Object.keys(collections).map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={\`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all relative \${
                  isActive ? 'text-white bg-slate-800' : 'text-slate-400 hover:text-white'
                }\`}
              >
                {cat} ({collections[cat].length})
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {collections[activeTab].map((item) => (
              <div key={item.id} className="p-5 rounded-3xl bg-slate-900 border border-slate-800">
                <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-white text-base">{item.name}</h3>
                <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AccountWishlist4;
`
  },
  '05': {
    heading: "Product Stack — Layered Saved Product Cards",
    description: "Interactive layered product deck with perspective offset and spring depth sorting upon item selection.",
    funcName: "AccountWishlist5",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ShoppingBag, ArrowRight } from 'lucide-react';

export function AccountWishlist5() {
  const [items] = useState([
    { id: '1', title: 'Nike Air Max 270', price: '$150', color: 'from-rose-600 to-indigo-700', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Oversized Denim Jacket', price: '$120', color: 'from-purple-600 to-blue-700', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Leather Chronograph', price: '$210', color: 'from-emerald-600 to-teal-700', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs text-rose-400 mb-3 border border-slate-700">
          <Layers className="w-3.5 h-3.5" /> Layered Product Deck
        </div>
        <h2 className="text-3xl font-bold text-white mb-8">Product Stack</h2>

        <div className="relative h-[360px] max-w-sm mx-auto flex items-center justify-center">
          {items.map((item, idx) => {
            const offset = (idx - activeIndex + items.length) % items.length;
            const zIndex = items.length - offset;
            const translateY = offset * 24;
            const scale = 1 - offset * 0.06;

            return (
              <motion.div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                animate={{ y: translateY, scale, zIndex }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className={\`absolute w-full p-6 rounded-3xl bg-gradient-to-br \${item.color} shadow-2xl border border-white/10 cursor-pointer text-left select-none\`}
              >
                <div className="aspect-video bg-black/30 rounded-2xl overflow-hidden mb-4 backdrop-blur-md">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-lg font-bold text-white/90 mt-1">{item.price}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist5;
`
  },
  '06': {
    heading: "Glass Wishlist — Glassmorphic Saved Cards",
    description: "Refined glass-style saved product showcase with glassmorphism reflections and subtle depth transitions.",
    funcName: "AccountWishlist6",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

export function AccountWishlist6() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Glassmorphic Wishlist</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="aspect-video bg-black/40 rounded-2xl overflow-hidden mb-4">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <p className="text-rose-400 font-bold mt-1">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist6;
`
  },
  '07': {
    heading: "Wishlist + Featured Product — Hero Saved Showcase",
    description: "Featured saved product layout placing a primary favorite item in the spotlight surrounded by secondary saved products.",
    funcName: "AccountWishlist7",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';

export function AccountWishlist7() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Featured Save</span>
        <h2 className="text-3xl font-bold text-white mb-8 mt-1">Top Wishlist Pick</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-800/80 border border-slate-700 p-8 rounded-3xl">
          <div className="lg:col-span-6 aspect-square rounded-2xl overflow-hidden bg-slate-900">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Featured" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Most Wanted
            </span>
            <h3 className="text-3xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-2xl font-bold text-indigo-400">$150 <span className="text-sm line-through text-slate-500">$180</span></p>
            <button className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl">
              Move to Cart Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist7;
`
  },
  '08': {
    heading: "Compact Saved Items — Dense Utility List",
    description: "Space-efficient saved product list showing product details, stock state, and quick move/remove controls.",
    funcName: "AccountWishlist8",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';

export function AccountWishlist8() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Saved Items List</h2>

        <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
          {items.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover bg-slate-800" />
                <div>
                  <h3 className="font-bold text-white text-sm">{item.name}</h3>
                  <p className="text-xs text-emerald-400 mt-0.5">{item.stock}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-bold text-white text-sm">{item.price}</span>
                <button className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold">
                  Move
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist8;
`
  },
  '09': {
    heading: "Wishlist with Sale Alerts — Price Drop Highlights",
    description: "Saved-product grid with emphasized discount indicators and animated price drop badges.",
    funcName: "AccountWishlist9",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Tag, TrendingDown } from 'lucide-react';

export function AccountWishlist9() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', oldPrice: '$180', drop: 'Save $30', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
          <TrendingDown className="w-4 h-4" /> Price Drop Monitor
        </div>
        <h2 className="text-3xl font-bold text-white mb-8">Items On Sale</h2>

        {items.map((item) => (
          <div key={item.id} className="p-6 rounded-3xl bg-slate-800 border-2 border-emerald-500/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-slate-900" />
              <div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  {item.drop}
                </span>
                <h3 className="font-bold text-white text-lg mt-2">{item.name}</h3>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{item.price}</p>
              <p className="text-xs text-slate-500 line-through">{item.oldPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AccountWishlist9;
`
  },
  '10': {
    heading: "Wishlist + Move to Cart — Action Focal Point",
    description: "Wishlist management centering the Move to Cart interaction with quick cart flying visual feedback.",
    funcName: "AccountWishlist10",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

export function AccountWishlist10() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Quick Cart Transfer</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left">
          <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-2xl font-bold text-white">Nike Air Max 270</h3>
          <p className="text-xl font-bold text-rose-400 mt-1">$150</p>

          <button className="w-full mt-6 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl">
            <ShoppingCart className="w-5 h-5" /> Move All to Shopping Bag
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist10;
`
  },
  '11': {
    heading: "Infinite Wishlist Menu — Interactive Saved Carousel",
    description: "Horizontally interactive saved-product carousel adapted from React Bits Infinite Menu concepts.",
    funcName: "AccountWishlist11",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AccountWishlist11() {
  const [index, setIndex] = useState(0);

  const items = [
    { id: '1', name: 'Nike Air Max', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Infinite Carousel</h2>

        <div className="flex justify-center items-center gap-6">
          <button onClick={() => setIndex((index - 1 + items.length) % items.length)} className="p-3 bg-slate-800 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="w-[300px] p-6 rounded-3xl bg-slate-800 border border-slate-700 text-left">
            <img src={items[index].image} alt={items[index].name} className="aspect-square rounded-2xl object-cover mb-4" />
            <h3 className="font-bold text-white">{items[index].name}</h3>
            <p className="text-indigo-400 font-bold">{items[index].price}</p>
          </div>
          <button onClick={() => setIndex((index + 1) % items.length)} className="p-3 bg-slate-800 rounded-full">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist11;
`
  },
  '12': {
    heading: "3D Wishlist Cards — Perspective Cursor Tilt",
    description: "Interactive saved-product grid utilizing real-time cursor tracking for subtle 3D perspective tilt.",
    funcName: "AccountWishlist12",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist12() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">3D Perspective Card</h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="aspect-video rounded-2xl object-cover mb-4" />
          <h3 className="text-2xl font-bold text-white">Nike Air Max 270</h3>
          <p className="text-indigo-400 font-bold mt-1">$150</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountWishlist12;
`
  },
  '13': {
    heading: "Lookbook Wishlist — Full Imagery Personal Collection",
    description: "Lookbook aesthetic featuring large full-bleed imagery and minimal typography.",
    funcName: "AccountWishlist13",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist13() {
  return (
    <section className="w-full min-h-[600px] bg-stone-900 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-light text-white mb-10 tracking-tight uppercase">PERSONAL LOOKBOOK</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[3/4] bg-stone-800 rounded-3xl overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Lookbook" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 font-sans text-xs uppercase tracking-widest bg-black/60 px-4 py-2 backdrop-blur-md">
              NIKE AIR MAX — $150
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist13;
`
  },
  '14': {
    heading: "Wishlist Timeline — Visual Save Chronology",
    description: "Sequential timeline visualization organizing saved products by date added linked with vertical SVG paths.",
    funcName: "AccountWishlist14",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function AccountWishlist14() {
  const steps = [
    { period: 'Saved Today', name: 'Nike Air Max 270', price: '$150' },
    { period: 'Saved Last Week', name: 'Oversized Denim Jacket', price: '$120' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Save Chronology</h2>

        <div className="relative pl-8 space-y-8 border-l-2 border-rose-500/30 ml-4">
          {steps.map((step) => (
            <div key={step.period} className="relative">
              <div className="absolute -left-[41px] top-1 p-2 rounded-full bg-rose-600 text-white">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                <span className="text-xs uppercase font-bold text-rose-400">{step.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{step.name}</h3>
                <p className="text-sm font-bold text-slate-300 mt-1">{step.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist14;
`
  },
  '15': {
    heading: "Minimal Monochrome — Precision Typography List",
    description: "Monochrome saved product list with clean rules, high contrast typography, and subtle inline actions.",
    funcName: "AccountWishlist15",
    code: `import React from 'react';

export function AccountWishlist15() {
  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-gray-100 mb-6">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">SAVED ITEMS</h2>
          <span className="text-xs font-mono uppercase text-gray-400">02 PRODUCTS</span>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="py-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium">Nike Air Max 270</h3>
              <p className="text-xs text-gray-500">$150.00 USD</p>
            </div>
            <button className="px-4 py-2 border border-gray-900 text-xs font-bold uppercase hover:bg-gray-900 hover:text-white">
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist15;
`
  },
  '16': {
    heading: "Floating Wishlist — Ambient Floating Product Cards",
    description: "Floating product cards with continuous ambient Y movement and hover stabilization.",
    funcName: "AccountWishlist16",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist16() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Floating Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Sneakers" className="aspect-square rounded-2xl object-cover mb-4" />
            <h3 className="text-xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-indigo-400 font-bold">$150</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist16;
`
  },
  '17': {
    heading: "Wishlist + Category Journey — Tabbed Animation Hub",
    description: "Filterable saved product categories with smooth layout animations.",
    funcName: "AccountWishlist17",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist17() {
  const [category, setCategory] = useState('All');

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Category Journey</h2>

        <div className="flex gap-2 mb-8">
          {['All', 'Footwear', 'Apparel'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={\`px-4 py-2 rounded-xl text-xs font-bold \${category === cat ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}\`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist17;
`
  },
  '18': {
    heading: "Magazine Wishlist — Asymmetric Composition Showcase",
    description: "Asymmetric editorial showcase pairing high contrast serif typography with staggered product blocks.",
    funcName: "AccountWishlist18",
    code: `import React from 'react';

export function AccountWishlist18() {
  return (
    <section className="w-full min-h-[600px] bg-neutral-900 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-light text-white mb-10">EDITORIAL // WISHLIST</h1>
        <div className="p-8 bg-neutral-800 rounded-3xl border border-neutral-700">
          <h2 className="text-3xl text-white">Nike Air Max 270</h2>
          <p className="font-sans text-sm text-neutral-400 mt-2">$150.00 USD</p>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist18;
`
  },
  '19': {
    heading: "Personal Collection — Private Archive Showcase",
    description: "Curated personal collection display treating saved products like private gallery items.",
    funcName: "AccountWishlist19",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountWishlist19() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Private Vault</span>
        <h2 className="text-4xl font-extrabold text-white mt-1 mb-8">YOUR COLLECTION</h2>

        <div className="p-8 rounded-3xl bg-slate-900 border border-indigo-500/30">
          <h3 className="text-2xl font-bold text-white">Curated Favorites (02)</h3>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist19;
`
  },
  '20': {
    heading: "Award-Style Wishlist — Flagship Master Hub",
    description: "Flagship Wishlist experience combining glassmorphism, 3D tilt, SVG path micro-interactions, and quick cart transfer.",
    funcName: "AccountWishlist20",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Sparkles } from 'lucide-react';

export function AccountWishlist20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Award Master Hub
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Saved Favorites</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-indigo-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            Move All to Cart
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="p-8 rounded-3xl bg-slate-900/80 border border-rose-500/30 backdrop-blur-xl">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="aspect-video rounded-2xl object-cover mb-4" />
            <h3 className="text-2xl font-bold text-white">Nike Air Max 270</h3>
            <p className="text-xl font-bold text-rose-400 mt-1">$150</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist20;
`
  }
};

Object.entries(variants).forEach(([num, data]) => {
  const tsxPath = path.join(wishlistDir, `account-wishlist-${num}.tsx`);
  const jsonPath = path.join(wishlistDir, `account-wishlist-${num}.json`);

  fs.writeFileSync(tsxPath, data.code);
  fs.writeFileSync(jsonPath, JSON.stringify({
    heading: data.heading,
    description: data.description
  }, null, 2));

  console.log(`Generated account-wishlist-${num}`);
});

console.log("All 20 Wishlist files generated!");
