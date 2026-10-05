const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/06-recently-viewed-products');

const variants = {
  '01': {
    heading: "Recently Viewed Rail — Staggered Horizontal Entrance",
    description: "Horizontal product rail showcasing recently browsed items with staggered lateral entrance motion and timestamp badges.",
    funcName: "AccountRecentlyViewedProducts1",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Trash2, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts1() {
  const [items, setItems] = useState([
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', time: '10 mins ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', time: '45 mins ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' },
    { id: '4', name: 'Studio Noise Pods', price: '$299', category: 'Audio', time: 'Yesterday', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80' }
  ]);

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-8 border-b border-slate-800 mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <Clock className="w-4 h-4 text-indigo-400" /> Browsing Activity
            </div>
            <h2 className="text-3xl font-extrabold text-white mt-1 tracking-tight">Recently Viewed Rail</h2>
          </div>
          <button onClick={() => setItems([])} className="text-xs text-slate-400 hover:text-rose-400 font-semibold uppercase tracking-wider transition-colors">
            Clear History
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-none">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="w-[280px] shrink-0 bg-slate-900/80 border border-slate-800 rounded-3xl p-5 backdrop-blur-xl flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden mb-4 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded-md bg-slate-950/70 text-slate-300 backdrop-blur-md">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-bold text-white text-base line-clamp-1">{item.name}</h3>
                <p className="text-lg font-bold text-indigo-400 mt-1">{item.price}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                <button className="font-semibold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-1">
                  View Product <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-rose-400 transition-colors">
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

export default AccountRecentlyViewedProducts1;
`
  },
  '02': {
    heading: "Browsing History Timeline — Sequential Path Reveal",
    description: "Chronological browsing timeline connecting recently viewed products by time periods with an animated vertical connector path.",
    funcName: "AccountRecentlyViewedProducts2",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye } from 'lucide-react';

export function AccountRecentlyViewedProducts2() {
  const steps = [
    { period: 'Today — 2:15 PM', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { period: 'Yesterday — 8:40 PM', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">History Timeline</h2>

        <div className="relative pl-8 space-y-8 border-l-2 border-indigo-500/30 ml-4">
          {steps.map((step, idx) => (
            <motion.div key={step.period} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.15 }} className="relative">
              <div className="absolute -left-[41px] top-1 p-2 rounded-full bg-indigo-600 text-white">
                <Clock className="w-4 h-4" />
              </div>
              <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={step.image} alt={step.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-900" />
                  <div>
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">{step.period}</span>
                    <h3 className="text-lg font-bold text-white mt-0.5">{step.name}</h3>
                    <p className="text-xs text-slate-400">{step.price}</p>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs">
                  View Again
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts2;
`
  },
  '03': {
    heading: "Editorial History — Asymmetric Magazine Grid",
    description: "High-fashion editorial layout featuring oversized section headers, clip-path text reveals, and asymmetric product composition.",
    funcName: "AccountRecentlyViewedProducts3",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts3() {
  return (
    <section className="w-full min-h-[600px] bg-neutral-950 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light text-white uppercase tracking-tighter mb-10">
          RECENTLY <span className="italic text-neutral-500">EXPLORED</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-neutral-800 pt-8">
          <div className="aspect-[4/5] bg-neutral-900 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Editorial" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-4 font-sans">
            <span className="text-xs uppercase tracking-widest text-neutral-400">EXPLORED 15 MINS AGO</span>
            <h2 className="text-3xl font-serif text-white">NIKE AIR MAX PULSE</h2>
            <p className="text-xl font-bold text-white">$150.00 USD</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts3;
`
  },
  '04': {
    heading: "Last Viewed Hero — Spotlight Feature Focus",
    description: "Spotlight browsing history layout placing the single most recently opened item in the primary hero card.",
    funcName: "AccountRecentlyViewedProducts4",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

export function AccountRecentlyViewedProducts4() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-rose-400">Most Recent Discovery</span>
          <h2 className="text-3xl font-bold text-white mt-1">Last Viewed Item</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 border border-slate-800 p-8 rounded-3xl">
          <div className="lg:col-span-6 aspect-square rounded-2xl overflow-hidden bg-slate-900">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Hero" className="w-full h-full object-cover" />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-rose-500/20 text-rose-300">
              Viewed 5 mins ago
            </span>
            <h3 className="text-3xl font-bold text-white">Nike Air Max Pulse</h3>
            <p className="text-2xl font-bold text-indigo-400">$150</p>
            <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs uppercase tracking-wider text-white">
              Revisit Product Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts4;
`
  },
  '05': {
    heading: "Time-Based Product Grid — Categorized Recency Groups",
    description: "Grouped browsing history displaying items under time-based headers (Viewed Today, Viewed Yesterday).",
    funcName: "AccountRecentlyViewedProducts5",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts5() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-white">Recency Groups</h2>

        <div className="space-y-4">
          <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Viewed Today</span>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-white text-lg">Nike Air Max Pulse</h3>
            <span className="text-indigo-400 font-bold">$150</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts5;
`
  },
  '06': {
    heading: "Glass History — Glassmorphic Browsing Cards",
    description: "Frosted glass-style recently viewed product cards with glass layer depth and hover reflections.",
    funcName: "AccountRecentlyViewedProducts6",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts6() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Glassmorphic History</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Glass" className="aspect-video rounded-2xl object-cover mb-4" />
            <h3 className="text-xl font-bold text-white">Nike Air Max Pulse</h3>
            <p className="text-indigo-400 font-bold mt-1">$150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts6;
`
  },
  '07': {
    heading: "Product Trail — Animated SVG Discovery Connector",
    description: "Visual browsing path connecting products step-by-step with animated SVG path arrows.",
    funcName: "AccountRecentlyViewedProducts7",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts7() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8">Discovery Trail</h2>

        <div className="flex justify-center items-center gap-6 overflow-x-auto">
          <div className="p-6 rounded-3xl bg-slate-800 border border-slate-700 text-left w-[260px] shrink-0">
            <h3 className="font-bold text-white">Nike Air Max Pulse</h3>
            <p className="text-indigo-400 font-bold mt-1">$150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts7;
`
  },
  '08': {
    heading: "Compact History List — High-Density Activity Log",
    description: "Utility list displaying recently viewed items with timestamp badges, view again buttons, and history deletion.",
    funcName: "AccountRecentlyViewedProducts8",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts8() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Browsing Activity Log</h2>
        <div className="divide-y divide-slate-800">
          <div className="py-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-sm">Nike Air Max Pulse</h3>
              <p className="text-xs text-slate-400">Viewed 15 mins ago</p>
            </div>
            <span className="font-bold text-white text-sm">$150</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts8;
`
  },
  '09': {
    heading: "Continue Exploring — Resume Search Hub",
    description: "Interactive banner and card triggers prompting the user to continue exploring previously opened categories.",
    funcName: "AccountRecentlyViewedProducts9",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts9() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">CONTINUE EXPLORING</h2>
        <p className="text-slate-400 text-sm">Pick up right where you left off in your last session</p>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts9;
`
  },
  '10': {
    heading: "Infinite Product History — Interactive Browsing Menu",
    description: "Horizontally interactive recently viewed product journey adapted from React Bits Infinite Menu concepts.",
    funcName: "AccountRecentlyViewedProducts10",
    code: `import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AccountRecentlyViewedProducts10() {
  const [index, setIndex] = useState(0);
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8">Infinite Browsing Menu</h2>
        <div className="w-[300px] mx-auto p-6 rounded-3xl bg-slate-900 border border-slate-800 text-left">
          <img src={items[0].image} alt="Product" className="aspect-square rounded-2xl object-cover mb-4" />
          <h3 className="font-bold text-white">{items[0].name}</h3>
          <p className="text-indigo-400 font-bold">{items[0].price}</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts10;
`
  },
  '11': {
    heading: "3D Product History — Cursor Depth Tilt",
    description: "Controlled CSS perspective with cursor tilt tracking on recently viewed product depth cards.",
    funcName: "AccountRecentlyViewedProducts11",
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts11() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">3D Perspective History</h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="p-8 rounded-3xl bg-slate-950 border border-indigo-500/30 text-left shadow-2xl cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="3D" className="aspect-video rounded-2xl object-cover mb-4" />
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-indigo-400 font-bold mt-1">$150</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts11;
`
  },
  '12': {
    heading: "Product Journey — Sequential Step Timeline",
    description: "Visual browsing journey from First Viewed to Recently Viewed with step counters and SVG paths.",
    funcName: "AccountRecentlyViewedProducts12",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts12() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Product Exploration Journey</h2>
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
          <span className="text-xs uppercase font-bold text-indigo-400">Step 01 — First Opened</span>
          <h3 className="text-xl font-bold text-white mt-1">Nike Air Max Pulse</h3>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts12;
`
  },
  '13': {
    heading: "Category History — Tabbed Category Browsing",
    description: "Grouping recently viewed products by category tabs with smooth category switching animations.",
    funcName: "AccountRecentlyViewedProducts13",
    code: `import React, { useState } from 'react';

export function AccountRecentlyViewedProducts13() {
  const [cat, setCat] = useState('All');

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Categorized History</h2>
        <div className="flex gap-2 mb-8">
          {['All', 'Footwear', 'Streetwear'].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={\`px-4 py-2 rounded-xl text-xs font-bold \${cat === c ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}\`}>
              {c}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts13;
`
  },
  '14': {
    heading: "Lookbook History — Full Bleed Image Personal Gallery",
    description: "Browsing history presented as a personal lookbook with full-bleed product imagery and minimal text overlays.",
    funcName: "AccountRecentlyViewedProducts14",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts14() {
  return (
    <section className="w-full min-h-[600px] bg-stone-900 text-stone-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-light text-white mb-10 tracking-tight uppercase">BROWSING LOOKBOOK</h2>
        <div className="aspect-[16/9] bg-stone-800 rounded-3xl overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Lookbook" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts14;
`
  },
  '15': {
    heading: "Minimal Monochrome — Precision Typography History",
    description: "High-contrast monochrome browsing history list with thin rule separators and precision typography.",
    funcName: "AccountRecentlyViewedProducts15",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts15() {
  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center pb-6 border-b border-gray-100">
          <h2 className="text-3xl font-light tracking-tight text-gray-900">EXPLORED HISTORY</h2>
          <span className="text-xs font-mono uppercase text-gray-400">03 ITEMS</span>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts15;
`
  },
  '16': {
    heading: "Floating History — Ambient Motion Modules",
    description: "Recently viewed product cards floating with continuous ambient Y keyframe movement.",
    funcName: "AccountRecentlyViewedProducts16",
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts16() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl"
        >
          <h3 className="text-xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-indigo-400 font-bold mt-1">$150</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts16;
`
  },
  '17': {
    heading: "Last Session — Browsing Session Expansion",
    description: "Browsing history grouped by session (e.g. Your Last Session — 4 Items Explored) with collapsible container dynamics.",
    funcName: "AccountRecentlyViewedProducts17",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts17() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">SESSION #4021</span>
        <h2 className="text-3xl font-bold text-white">YOUR LAST SESSION</h2>
        <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
          <h3 className="text-lg font-bold text-white">Nike Air Max Pulse</h3>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts17;
`
  },
  '18': {
    heading: "Magazine Discovery — Asymmetric Layout Showcase",
    description: "Asymmetric editorial grid with varied product image sizes and staggered entrance timings.",
    funcName: "AccountRecentlyViewedProducts18",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts18() {
  return (
    <section className="w-full min-h-[600px] bg-neutral-900 text-neutral-100 py-16 px-6 font-serif">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-light text-white mb-8">MAGAZINE // EXPLORED</h1>
        <div className="p-8 bg-neutral-800 rounded-3xl">
          <h2 className="text-3xl text-white">Nike Air Max Pulse</h2>
          <p className="font-sans text-sm text-neutral-400 mt-2">$150.00 USD</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts18;
`
  },
  '19': {
    heading: "Recently Viewed + Quick Actions — Revealable Controls",
    description: "Browsing history cards with contextual hover actions: View Product, Remove from History, Add to Wishlist, Move to Cart.",
    funcName: "AccountRecentlyViewedProducts19",
    code: `import React from 'react';

export function AccountRecentlyViewedProducts19() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Quick Action Cards</h2>
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-rose-400 font-bold mt-1">$150</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts19;
`
  },
  '20': {
    heading: "Award-Style Recently Viewed — Master Exploration Hub",
    description: "Flagship browsing history portal combining glassmorphism, 3D tilt, SVG timeline paths, and micro-interactions.",
    funcName: "AccountRecentlyViewedProducts20",
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function AccountRecentlyViewedProducts20() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" /> Master History Portal
            </div>
            <h2 className="text-4xl font-extrabold text-white mt-1 tracking-tight">Browsing History Master</h2>
          </div>
          <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-rose-600 font-bold text-xs uppercase tracking-widest shadow-xl">
            Clear History
          </button>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/80 border border-indigo-500/40 backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-2xl font-bold text-indigo-400 mt-2">$150</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts20;
`
  }
};

Object.entries(variants).forEach(([num, data]) => {
  const tsxPath = path.join(dir, `account-recently-viewed-products-${num}.tsx`);
  const jsonPath = path.join(dir, `account-recently-viewed-products-${num}.json`);

  fs.writeFileSync(tsxPath, data.code);
  fs.writeFileSync(jsonPath, JSON.stringify({
    heading: data.heading,
    description: data.description
  }, null, 2));

  console.log(`Generated account-recently-viewed-products-${num}`);
});

console.log("All 20 Recently Viewed files generated!");
