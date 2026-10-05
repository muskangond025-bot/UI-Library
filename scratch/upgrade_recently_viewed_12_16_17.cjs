const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components/sections/account/06-recently-viewed-products');

// 12 - Product Journey
const code12 = `import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, ArrowRight, Eye } from 'lucide-react';

export function AccountRecentlyViewedProducts12() {
  const steps = [
    { step: 'Step 01', stage: 'First Opened', name: 'Nike Air Max Pulse', price: '$150', time: '2 hours ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { step: 'Step 02', stage: 'Next Discovery', name: 'Oversized Denim Jacket', price: '$120', time: '45 mins ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { step: 'Step 03', stage: 'Last Viewed', name: 'Leather Chronograph', price: '$210', time: '10 mins ago', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-8 border-b border-slate-800 mb-10">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1">
              <Footprints className="w-4 h-4 text-indigo-400" /> EXPLORATION PATH
            </div>
            <h2 className="text-3xl font-extrabold text-white">Product Journey</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
            3 Sequential Steps
          </span>
        </div>

        <div className="space-y-6">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="p-6 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-800 shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">{item.step}</span>
                    <span className="text-xs text-slate-500">• {item.stage}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">{item.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                <span className="text-xl font-bold text-white">{item.price}</span>
                <button className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all">
                  Revisit <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts12;
`;

// 16 - Floating History
const code16 = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

export function AccountRecentlyViewedProducts16() {
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', time: 'Viewed 5m ago', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80', delay: 0 },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', time: 'Viewed 30m ago', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80', delay: 0.5 }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-950 text-white py-16 px-4 font-sans">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> AMBIENT FLOATING MODULES
          </div>
          <h2 className="text-3xl font-extrabold text-white">Floating History</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <motion.div
              key={item.id}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: item.delay, ease: 'easeInOut' }}
              className="p-6 rounded-3xl bg-slate-900 border border-indigo-500/30 text-left shadow-2xl space-y-4 group hover:border-indigo-500 transition-colors"
            >
              <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-slate-950/80 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                  {item.time}
                </span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="text-indigo-400 font-bold text-lg mt-1">{item.price}</p>
                </div>
                <button className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts16;
`;

// 17 - Last Session
const code17 = `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

export function AccountRecentlyViewedProducts17() {
  const [isOpen, setIsOpen] = useState(true);

  const sessionItems = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', category: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', category: 'Streetwear', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Leather Chronograph', price: '$210', category: 'Accessories', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center pb-6 border-b border-slate-800">
          <div>
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider">SESSION #4021 • TODAY</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Your Last Session</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300">
            {sessionItems.length} Items Browsed
          </span>
        </div>

        {/* Collapsible Session Box */}
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Active Session Group</h3>
                <p className="text-xs text-slate-400">Recorded 25 minutes ago • Mobile Browser</p>
              </div>
            </div>
            <button className="p-2 rounded-xl bg-slate-900 text-slate-400">
              {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-4 pt-4 border-t border-slate-800"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {sessionItems.map((item) => (
                    <div key={item.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                      <img src={item.image} alt={item.name} className="aspect-square rounded-xl object-cover mb-3" />
                      <span className="text-[10px] uppercase font-bold text-indigo-400">{item.category}</span>
                      <h4 className="font-bold text-white text-sm line-clamp-1 mt-0.5">{item.name}</h4>
                      <p className="text-indigo-400 font-bold text-xs mt-1">{item.price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts17;
`;

const updates = {
  '12': { code: code12, heading: "Product Journey — Sequential Step Timeline Hub", description: "Sequential step timeline visualizing customer exploration from initial discovery to last viewed item." },
  '16': { code: code16, heading: "Floating History — Ambient Motion Modules", description: "Dynamic floating browsing-history modules with continuous ambient bobbing motion and interactive hover stabilization." },
  '17': { code: code17, heading: "Last Session — Collapsible Session Container Hub", description: "Browsing history grouped by user session with collapsible container expansion and session summary metadata." }
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
