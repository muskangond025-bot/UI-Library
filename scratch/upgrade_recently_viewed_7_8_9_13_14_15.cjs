const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/06-recently-viewed-products');

// 07 - Product Trail
const code07 = `import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Eye, Trash2 } from 'lucide-react';

export function AccountRecentlyViewedProducts7() {
  const trail = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', time: '10m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', time: '35m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', time: '1h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', time: '3h ago', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4 text-indigo-400" /> DISCOVERY PATH
            </div>
            <h2 className="text-3xl font-extrabold text-white">Product Trail</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            Sequential Path
          </span>
        </div>

        <div className="relative overflow-x-auto pb-6 scrollbar-none">
          <div className="flex items-center gap-4 min-w-[1000px] py-4">
            {trail.map((item, idx) => (
              <React.Fragment key={item.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="w-[240px] shrink-0 p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl text-left relative group"
                >
                  <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Step 0{idx + 1} • {item.time}
                  </span>
                  <h3 className="font-bold text-white text-base mt-2 line-clamp-1">{item.name}</h3>
                  <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
                </motion.div>

                {idx < trail.length - 1 && (
                  <div className="shrink-0 flex items-center justify-center text-slate-600">
                    <ArrowRight className="w-6 h-6 text-indigo-500 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts7;
`;

// 08 - Compact History List
const code08 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Trash2, ArrowUpRight, RotateCcw } from 'lucide-react';

export function AccountRecentlyViewedProducts8() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: 'Viewed 15m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: 'Viewed 40m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: 'Viewed 2h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', category: 'Audio', time: 'Viewed Yesterday', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Clock className="w-4 h-4 text-slate-400" /> DENSE ACTIVITY LOG
            </div>
            <h2 className="text-2xl font-bold text-white">Compact History List</h2>
          </div>
          <button onClick={() => setItems([])} className="text-xs text-rose-400 hover:underline font-bold uppercase tracking-wider">
            Clear Entire Log
          </button>
        </div>

        <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
          <AnimatePresence>
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-900" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">{item.category}</span>
                    <h3 className="font-bold text-white text-base group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-bold text-white text-base">{item.price}</span>
                  <div className="flex items-center gap-2">
                    <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all flex items-center gap-1">
                      Revisit <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => removeItem(item.id)} className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-500 hover:text-rose-400 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts8;
`;

// 09 - Continue Exploring
const code09 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Search } from 'lucide-react';

export function AccountRecentlyViewedProducts9() {
  const categories = ['Sneakers', 'Streetwear', 'Chronographs', 'Audio Tech'];
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Banner Hero */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-indigo-900 to-purple-950 border border-indigo-500/30 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-indigo-300">
            <Sparkles className="w-4 h-4" /> RESUME SESSION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">CONTINUE EXPLORING</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Jump straight back into your recent search topics and saved product discoveries.</p>
          
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer transition-all">
                <Search className="w-3 h-3 inline mr-1.5" /> {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Recently Explored Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.div key={item.id} whileHover={{ y: -4 }} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-slate-900" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Saved Session Item</span>
                  <h3 className="font-bold text-white text-lg">{item.name}</h3>
                  <p className="text-indigo-400 font-bold">{item.price}</p>
                </div>
              </div>
              <button className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts9;
`;

// 13 - Category History
const code13 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts13() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Footwear', 'Streetwear', 'Accessories'];

  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: '15m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: '40m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: '2h ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  const filtered = activeTab === 'All' ? items : items.filter(i => i.category === activeTab);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800 mb-8">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Filter className="w-4 h-4" /> CATEGORY EXPLORER
            </div>
            <h2 className="text-3xl font-bold text-white">Categorized History</h2>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={\`relative px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors \${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }\`}
              >
                {isActive && (
                  <motion.div
                    layoutId="categoryHistoryTab"
                    className="absolute inset-0 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/30 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-5 rounded-3xl bg-slate-900 border border-slate-800">
                <img src={item.image} alt={item.name} className="aspect-square rounded-2xl object-cover mb-4" />
                <span className="text-[10px] uppercase font-bold text-indigo-400">{item.time}</span>
                <h3 className="font-bold text-white text-base mt-1">{item.name}</h3>
                <p className="text-indigo-400 font-bold mt-1">{item.price}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts13;
`;

// 14 - Lookbook History
const code14 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts14() {
  const items = [
    { id: '1', title: 'NIKE AIR MAX PULSE', time: 'EXPLORED 10M AGO', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
    { id: '2', title: 'OVERSIZED DENIM JACKET', time: 'EXPLORED 45M AGO', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-stone-950 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="border-b border-stone-800 pb-8">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 font-semibold block mb-2">PERSONAL ARCHIVE</span>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight uppercase">BROWSING LOOKBOOK</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group aspect-[3/4] bg-stone-900 rounded-3xl overflow-hidden relative border border-stone-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 font-sans">
                <span className="text-[10px] font-mono tracking-widest text-stone-400">{item.time}</span>
                <h3 className="text-2xl font-serif text-white mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts14;
`;

// 15 - Minimal Monochrome
const code15 = `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts15() {
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150.00 USD', time: '15 MINS AGO' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120.00 USD', time: '45 MINS AGO' },
    { id: '3', name: 'Leather Chronograph', price: '$210.00 USD', time: '2 HOURS AGO' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center pb-6 border-b border-gray-900 mb-8">
          <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase">EXPLORED HISTORY</h2>
          <span className="text-xs font-mono uppercase text-gray-400">03 ITEMS</span>
        </div>

        <div className="divide-y divide-gray-100">
          {items.map((item, idx) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.1 }} className="py-6 flex justify-between items-center group">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-gray-400 block mb-1">0{idx + 1} // {item.time}</span>
                <h3 className="text-xl font-medium text-gray-900 group-hover:underline">{item.name}</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-sm font-mono text-gray-900">{item.price}</span>
                <button className="px-4 py-2 border border-gray-900 text-xs font-bold uppercase hover:bg-gray-900 hover:text-white transition-all">
                  Revisit
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts15;
`;

const updates = {
  '07': { code: code07, heading: "Product Trail — Animated SVG Discovery Connector", description: "Visual browsing path connecting products step-by-step with animated SVG path arrows." },
  '08': { code: code08, heading: "Compact History List — High-Density Activity Log", description: "Utility list displaying recently viewed items with timestamp badges, view again buttons, and history deletion." },
  '09': { code: code09, heading: "Continue Exploring — Resume Search Hub", description: "Interactive banner and card triggers prompting the user to continue exploring previously opened categories." },
  '13': { code: code13, heading: "Category History — Tabbed Category Explorer", description: "Grouping recently viewed products by category tabs with smooth category switching animations." },
  '14': { code: code14, heading: "Lookbook History — Personal Browsing Gallery", description: "Browsing history presented as a personal lookbook with full-bleed product imagery and minimal text overlays." },
  '15': { code: code15, heading: "Minimal Monochrome — Precision Typography List", description: "High-contrast monochrome browsing history list with thin rule separators and precision typography." }
};

Object.entries(updates).forEach(([num, data]) => {
  const tsxPath = path.join(dir, `account-recently-viewed-products-${num}.tsx`);
  const jsonPath = path.join(dir, `account-recently-viewed-products-${num}.json`);

  fs.writeFileSync(tsxPath, data.code);
  fs.writeFileSync(jsonPath, JSON.stringify({
    heading: data.heading,
    description: data.description
  }, null, 2));

  console.log(`Upgraded account-recently-viewed-products-${num}`);
});
