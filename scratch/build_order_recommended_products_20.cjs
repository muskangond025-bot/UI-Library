const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'order', '04-recommended-products');

const components = [
  // 01 — COMPLETE YOUR LOOK
  {
    id: 1,
    name: 'OrderRecommendedProducts1',
    dir: 'order-recommended-products-1',
    title: 'Complete Your Look — Sequential Stagger & Hover Animation',
    desc: 'Post-purchase recommendation panel with scroll-triggered sequential stagger entrance, interactive hover elevation, and checkmark tick animation.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check, Plus, ArrowRight } from 'lucide-react';

export function OrderRecommendedProducts1() {
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const items = [
    { id: 1, name: 'Minimalist Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', tag: 'Matches Leather Jacket' },
    { id: 2, name: 'Merino Wool Ribbed Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600', tag: 'Winter Collection' },
    { id: 3, name: 'Matte Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', tag: 'Daily Essential' },
  ];

  const toggleAdd = (id: number) => {
    setAdded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Purchased Context */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, -10, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl"
            >
              <ShoppingBag className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase">JUST ORDERED</span>
              <h4 className="text-sm font-bold text-white">Classic Tailored Wool Blazer</h4>
            </div>
          </div>
          <span className="text-xs text-slate-400 font-mono">ORDER #849202</span>
        </motion.div>

        {/* Section Title */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Styling Recommendation</span>
            <h2 className="text-2xl font-bold text-white">Complete Your Look</h2>
          </div>
          <motion.button 
            whileHover={{ x: 4 }} 
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
          >
            View Styling Guide <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-800">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.5 }}
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-indigo-400 text-[10px] font-mono px-2.5 py-1 rounded-full border border-slate-800">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-slate-100 text-sm">{item.name}</h3>
                  <span className="font-bold text-indigo-400 text-sm">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleAdd(item.id)}
                  className={\`w-full py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 \${
                    added[item.id]
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 hover:bg-indigo-600 text-white'
                  }\`}
                >
                  {added[item.id] ? (
                    <>
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check className="w-4 h-4 stroke-[3]" />
                      </motion.span>
                      Added to Shipment
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Add to Next Shipment
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts1;
`
  },
  // 02 — EDITORIAL PRODUCT DISCOVERY
  {
    id: 2,
    name: 'OrderRecommendedProducts2',
    dir: 'order-recommended-products-2',
    title: 'Editorial Product Discovery — Clip Reveal & Image Zoom',
    desc: 'Editorial fashion-forward recommendation section featuring clip-path text reveals and smooth image zoom animations.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export function OrderRecommendedProducts2() {
  const products = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', span: 'col-span-1 md:col-span-2' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', span: 'col-span-1' },
  ];

  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="border-b border-stone-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 font-sans"
        >
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">Post-Purchase Editorial</span>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">CURATED ADDITIONS</h2>
          </div>
          <p className="text-xs text-stone-400 max-w-xs font-light">Handpicked designs that pair seamlessly with your recently completed order.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={\`group relative bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-500/40 \${p.span}\`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.7 }}
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div>
                    <h3 className="font-serif text-xl text-white">{p.title}</h3>
                    <p className="font-mono text-xs text-amber-400 mt-0.5">{p.price}</p>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-amber-500 text-stone-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition-colors shadow-lg"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts2;
`
  },
  // 03 — HORIZONTAL DISCOVERY RAIL
  {
    id: 3,
    name: 'OrderRecommendedProducts3',
    dir: 'order-recommended-products-3',
    title: 'Horizontal Discovery Rail — Smooth Horizontal Slide',
    desc: 'Horizontal scroll carousel featuring post-purchase item suggestions with smooth glide entrance animations.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OrderRecommendedProducts3() {
  const items = [
    { title: 'Leather Cardholder', price: '$45', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Organizer', price: '$68', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Post-Order Rail</span>
            <h2 className="text-2xl font-bold text-white">Recommended Additions</h2>
          </div>
          <span className="text-xs text-slate-400">Scroll to explore →</span>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="shrink-0 w-64 bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 group hover:border-cyan-500/40 transition-all shadow-lg"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform" 
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold text-sm text-slate-100">{item.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-lg transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts3;
`
  },
  // 04 — PRODUCT PAIRING
  {
    id: 4,
    name: 'OrderRecommendedProducts4',
    dir: 'order-recommended-products-4',
    title: 'Product Pairing — SVG Connection Path Draw',
    desc: 'Visual product pairing layout where an animated SVG line visually connects the ordered item with its ideal match.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Plus } from 'lucide-react';

export function OrderRecommendedProducts4() {
  const [added, setAdded] = useState(false);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Visual Pairing</span>
          <h2 className="text-2xl font-bold text-white">Pairs Well With Your Order</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Purchased */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl"
          >
            <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 uppercase">
              PURCHASED ITEM
            </span>
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600" alt="Purchased" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-white text-sm">Architectural Desk Organizer</h4>
          </motion.div>

          {/* Animated Node */}
          <div className="md:col-span-1 flex justify-center py-2 relative">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="w-10 h-10 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center font-bold text-xl shadow-lg"
            >
              +
            </motion.div>
          </div>

          {/* Recommended Pair */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-5 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl"
          >
            <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-400 px-2 py-0.5 rounded border border-indigo-500/20 uppercase">
              PERFECT MATCH
            </span>
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600" alt="Pair" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Lamp</h4>
                <span className="text-xs font-mono text-indigo-400">$120.00</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => setAdded(!added)}
                className={\`px-3 py-1.5 font-bold rounded-xl text-xs transition-colors flex items-center gap-1 \${
                  added ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-500 hover:bg-indigo-400 text-slate-950'
                }\`}
              >
                {added ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                {added ? 'Added' : 'Add to Order'}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts4;
`
  },
  // 05 — COLLECTION CONTINUATION
  {
    id: 5,
    name: 'OrderRecommendedProducts5',
    dir: 'order-recommended-products-5',
    title: 'Collection Continuation — Progressive Path Reveal',
    desc: 'Collection continuation layout expanding upon the design theme of the customer order with scale animations.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export function OrderRecommendedProducts5() {
  const collection = [
    { name: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { name: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { name: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="p-2.5 bg-violet-500/20 text-violet-400 rounded-xl"
            >
              <Layers className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase">COLLECTION LINE</span>
              <h2 className="text-2xl font-bold text-white">More From The Studio Line</h2>
            </div>
          </div>
          <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">Full Collection →</button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {collection.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-violet-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm text-white">{item.name}</p>
                  <p className="text-xs text-violet-400 font-mono">{item.price}</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="text-xs text-slate-400 hover:text-white border border-slate-800 px-2.5 py-1 rounded-lg"
                >
                  View
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts5;
`
  },
  // 06 — LARGE FEATURE + SMALL PRODUCTS
  {
    id: 6,
    name: 'OrderRecommendedProducts6',
    dir: 'order-recommended-products-6',
    title: 'Large Feature + Small Products — Staggered Spotlight',
    desc: 'Prominent spotlight recommendation layout highlighting one major recommendation alongside supporting items.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts6() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">Top Recommendation</span>
          <h2 className="text-2xl font-bold text-white">Post-Purchase Highlight</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Featured */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="Featured" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">Spotlight</span>
                <h3 className="text-xl font-bold text-white mt-1">Architectural Desk Lamp</h3>
                <p className="text-xs text-slate-400">Precision machined matte aluminum finish</p>
              </div>
              <span className="text-lg font-bold text-amber-400">$120.00</span>
            </div>
          </motion.div>

          {/* Secondary Products */}
          <div className="md:col-span-5 space-y-4 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=200" alt="Sub" className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-white">Minimalist Cardholder</h4>
                <p className="text-xs text-amber-400 font-mono mt-0.5">$45.00</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer"
            >
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=200" alt="Sub" className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-white">Ceramic Tumbler</h4>
                <p className="text-xs text-amber-400 font-mono mt-0.5">$38.00</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts6;
`
  },
  // 07 — MINIMAL MONOCHROME
  {
    id: 7,
    name: 'OrderRecommendedProducts7',
    dir: 'order-recommended-products-7',
    title: 'Minimal Monochrome — Line Shimmer & Progressive Reveal',
    desc: 'High-contrast monochrome discovery section using refined whitespace and thin rule dividers.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts7() {
  const items = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-neutral-800 pb-6 flex justify-between items-end"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">04 / DISCOVERY</span>
            <h2 className="text-3xl font-light tracking-tight text-white">COMPLEMENTARY PIECES</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">RECOMMENDED</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="space-y-4 group"
            >
              <div className="aspect-[4/5] bg-neutral-900 rounded border border-neutral-800 overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.06 }} 
                  transition={{ duration: 0.5 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-neutral-900">
                <h3 className="text-sm font-medium text-neutral-200">{item.title}</h3>
                <span className="text-xs font-mono text-neutral-400">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts7;
`
  },
  // 08 — DARK LUXURY DISCOVERY
  {
    id: 8,
    name: 'OrderRecommendedProducts8',
    dir: 'order-recommended-products-8',
    title: 'Dark Luxury Discovery — Ambient Glow & Depth Motion',
    desc: 'Luxury dark theme layout showcasing curated recommendations with gold accents and ambient aura pulse motion.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

export function OrderRecommendedProducts8() {
  const items = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      {/* Ambient Pulsing Glow */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center gap-3 border-b border-amber-900/30 pb-4"
        >
          <Crown className="w-5 h-5 text-amber-400" />
          <div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">PRIVATE COLLECTION</span>
            <h2 className="text-2xl font-serif text-white">Exclusive Post-Purchase Additions</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-stone-900/50 p-5 rounded-2xl border border-amber-500/20 space-y-4 group hover:border-amber-500/50 transition-all shadow-xl"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-stone-900">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-base text-stone-100">{item.title}</h3>
                  <span className="font-mono text-xs text-amber-400">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-stone-950 font-bold rounded-lg text-xs transition-colors"
                >
                  Add
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts8;
`
  },
  // 09 — PRODUCT STACK
  {
    id: 9,
    name: 'OrderRecommendedProducts9',
    dir: 'order-recommended-products-9',
    title: 'Product Stack — Interactive Hover Separation',
    desc: 'Interactive layered product deck expanding into distinct product cards upon hover.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts9() {
  const cards = [
    { title: 'Minimalist Cardholder', price: '$45', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Matte Tumbler', price: '$38', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Lamp', price: '$120', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Layered Deck</span>
          <h2 className="text-2xl font-bold text-white">Recommended Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-2xl cursor-pointer hover:border-indigo-500/50"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm text-slate-100">{c.title}</h4>
                <span className="font-mono text-xs text-indigo-400 font-bold">{c.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts9;
`
  },
  // 10 — 3D PRODUCT DISCOVERY
  {
    id: 10,
    name: 'OrderRecommendedProducts10',
    dir: 'order-recommended-products-10',
    title: '3D Product Discovery — Perspective Depth Tilt',
    desc: 'Controlled CSS perspective 3D rotation presentation for post-purchase product suggestions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export function OrderRecommendedProducts10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center gap-2"
        >
          <Box className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">3D Product Showcase</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Minimalist Cardholder</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$45.00</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Ceramic Tumbler</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$38.00</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Wool Beanie</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$52.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts10;
`
  },
  // 11 — CATEGORY JOURNEY
  {
    id: 11,
    name: 'OrderRecommendedProducts11',
    dir: 'order-recommended-products-11',
    title: 'Category Journey — Tabbed Category Switch',
    desc: 'Category tabbed layout organizing post-purchase suggestions with smooth tab switch transitions.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderRecommendedProducts11() {
  const [activeTab, setActiveTab] = useState<'Accessories' | 'Workspace'>('Accessories');

  const categories = {
    Accessories: [
      { name: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
      { name: 'Merino Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    ],
    Workspace: [
      { name: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600' },
      { name: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
    ],
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Category Journey</span>
            <h2 className="text-2xl font-bold text-white">Explore By Category</h2>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {(Object.keys(categories) as Array<keyof typeof categories>).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={\`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative \${
                  activeTab === cat ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }\`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {categories[activeTab].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex gap-4 items-center shadow-lg"
              >
                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
                <div>
                  <h4 className="font-bold text-base text-white">{item.name}</h4>
                  <p className="text-xs text-cyan-400 font-mono mt-1">{item.price}</p>
                  <button className="mt-3 text-xs font-semibold text-slate-300 hover:text-white underline">View Details</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts11;
`
  },
  // 12 — VISUAL PRODUCT PATH
  {
    id: 12,
    name: 'OrderRecommendedProducts12',
    dir: 'order-recommended-products-12',
    title: 'Visual Product Path — Sequential Path Step Draw',
    desc: 'Path visual tracing steps from Purchased item to Complementary match to Recommended extension with motion connectors.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-1">Visual Progression</span>
          <h2 className="text-2xl font-bold text-white">Post-Purchase Flow</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-center shadow-xl"
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase">STEP 1 / ORDERED</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400" alt="1" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Desk Organizer</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-slate-900 p-5 rounded-2xl border border-teal-500/40 space-y-2 text-center ring-2 ring-teal-500/20 shadow-xl"
          >
            <span className="text-[10px] font-mono text-teal-400 uppercase">STEP 2 / COMPLEMENTARY</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400" alt="2" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Desk Lamp ($120)</h4>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-2 text-center shadow-xl"
          >
            <span className="text-[10px] font-mono text-slate-400 uppercase">STEP 3 / EXTENSION</span>
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400" alt="3" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-xs text-white pt-1">Ceramic Tumbler ($38)</h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts12;
`
  },
  // 13 — MAGAZINE GRID
  {
    id: 13,
    name: 'OrderRecommendedProducts13',
    dir: 'order-recommended-products-13',
    title: 'Magazine Grid — Asymmetric Stagger Reveal',
    desc: 'Editorial magazine layout presenting products with varying visual scale and staggered entrance timings.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-stone-800 pb-4"
        >
          <h2 className="text-3xl font-light text-white tracking-wide">THE AFTERWORD EDIT</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-stone-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="Mag" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-serif text-2xl text-white">Architectural Desk Lamp</h3>
                <p className="text-xs text-stone-400">Crafted aluminum with adjustable ambient beam.</p>
              </div>
              <span className="font-mono text-sm text-amber-400 font-bold">$120.00</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 bg-stone-900 p-6 rounded-2xl border border-stone-800 flex flex-col justify-between shadow-2xl"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-stone-800 mb-4">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" 
                alt="Mag" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="font-serif text-lg text-white">Minimalist Cardholder</h3>
              <span className="font-mono text-xs text-amber-400 block mt-1">$45.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts13;
`
  },
  // 14 — PRODUCT CAROUSEL WITH FEATURED ITEM
  {
    id: 14,
    name: 'OrderRecommendedProducts14',
    dir: 'order-recommended-products-14',
    title: 'Product Carousel with Featured Item — Crossfade Motion',
    desc: 'Interactive carousel with a prominent enlarged focus card and surrounding recommendation thumbnails.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderRecommendedProducts14() {
  const items = [
    { title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800' },
    { title: 'Matte Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800' },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Interactive Focus</span>
          <h2 className="text-2xl font-bold text-white">Featured Additions</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center gap-6 shadow-2xl">
          <div className="w-full sm:w-1/2 aspect-square rounded-xl overflow-hidden bg-slate-800 relative">
            <AnimatePresence mode="wait">
              <motion.img 
                key={active}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={items[active].image} 
                alt="Active" 
                className="w-full h-full object-cover absolute inset-0" 
              />
            </AnimatePresence>
          </div>
          <div className="w-full sm:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold text-white">{items[active].title}</h3>
            <p className="text-xl font-bold text-indigo-400">{items[active].price}</p>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-lg"
            >
              Add to Next Order
            </motion.button>
            <div className="flex gap-2 pt-4">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={\`w-3 h-3 rounded-full transition-all \${active === idx ? 'bg-indigo-400 scale-125' : 'bg-slate-700'}\`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts14;
`
  },
  // 15 — MORE FROM THIS COLLECTION
  {
    id: 15,
    name: 'OrderRecommendedProducts15',
    dir: 'order-recommended-products-15',
    title: 'More From This Collection — Title Reveal',
    desc: 'Collection-focused presentation with header title reveal followed by curated catalog items.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts15() {
  const collection = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
    { title: 'Desk Organizer', price: '$68.00', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-slate-800 pb-4"
        >
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">COMPLEMENTARY CATALOG</span>
          <h2 className="text-2xl font-bold text-white">More From This Collection</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {collection.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.4 }}
              className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-purple-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm text-white">{item.title}</h4>
                <span className="text-xs font-mono text-purple-400">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts15;
`
  },
  // 16 — BUY-AGAIN + DISCOVERY
  {
    id: 16,
    name: 'OrderRecommendedProducts16',
    dir: 'order-recommended-products-16',
    title: 'Buy-Again + Discovery — Sequential Group Transition',
    desc: 'Multi-group discovery card separating recent purchases from new complementary discoveries.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts16() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Post-Purchase Hub</span>
          <h2 className="text-2xl font-bold text-white">Purchased & Next Additions</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Purchased */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl"
          >
            <span className="text-xs text-slate-400 font-mono uppercase">COMPLETED IN THIS ORDER</span>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200" alt="P" className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Organizer</h4>
                <span className="text-xs text-emerald-400 font-medium">Order Confirmed</span>
              </div>
            </div>
          </motion.div>

          {/* Next Recommended */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl"
          >
            <span className="text-xs text-indigo-400 font-mono uppercase">RECOMMENDED ADDITION</span>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=200" alt="R" className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-bold text-white text-sm">Architectural Desk Lamp</h4>
                <span className="text-xs font-mono text-indigo-400">$120.00</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts16;
`
  },
  // 17 — FLOATING PRODUCT CARDS
  {
    id: 17,
    name: 'OrderRecommendedProducts17',
    dir: 'order-recommended-products-17',
    title: 'Floating Product Cards — Floating Depth Motion',
    desc: 'Floating card presentation arranged around a central post-purchase completion message with continuous levitation.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts17() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">ORDER CONFIRMED</span>
          <h2 className="text-3xl font-extrabold text-white">WHAT'S NEXT FOR YOUR SETUP?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Leather Cardholder</h4>
            <span className="text-xs text-cyan-400 font-mono block">$45.00</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Ceramic Tumbler</h4>
            <span className="text-xs text-cyan-400 font-mono block">$38.00</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-cyan-500/40 transition-all"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600" alt="F" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-sm text-white">Wool Beanie</h4>
            <span className="text-xs text-cyan-400 font-mono block">$52.00</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts17;
`
  },
  // 18 — EDITORIAL LOOKBOOK
  {
    id: 18,
    name: 'OrderRecommendedProducts18',
    dir: 'order-recommended-products-18',
    title: 'Editorial Lookbook — Image Clip Reveals',
    desc: 'Mini lookbook design with large lifestyle imagery and smooth clip-path transitions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts18() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-stone-800 pb-4"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-sans">LOOKBOOK EDITION</span>
          <h2 className="text-3xl font-light text-white">THE ESSENTIAL PAIRINGS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="aspect-[4/3] bg-stone-800 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
                alt="LB" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-xl text-white">Architectural Desk Lamp</h3>
              <p className="text-xs text-stone-400">Warm ambient lighting designed for focused workspaces.</p>
              <span className="font-mono text-xs text-amber-400 font-bold block pt-2">$120.00</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
          >
            <div className="aspect-[4/3] bg-stone-800 overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800" 
                alt="LB" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="font-serif text-xl text-white">Minimalist Leather Cardholder</h3>
              <p className="text-xs text-stone-400">Full-grain vegetable tanned leather with 4 card slots.</p>
              <span className="font-mono text-xs text-amber-400 font-bold block pt-2">$45.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts18;
`
  },
  // 19 — PREMIUM POST-PURCHASE MOMENT
  {
    id: 19,
    name: 'OrderRecommendedProducts19',
    dir: 'order-recommended-products-19',
    title: 'Premium Post-Purchase Moment — Headline Transition',
    desc: 'Bold "YOUR ORDER IS COMPLETE. WHAT\'S NEXT?" headline transitioning into curated product grid.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderRecommendedProducts19() {
  const items = [
    { title: 'Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600' },
    { title: 'Wool Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">ORDER CONFIRMED</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">YOUR ORDER IS COMPLETE.<br/>WHAT'S NEXT?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -6 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl hover:border-emerald-500/40 transition-all"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-white">{item.title}</h4>
                <span className="text-xs font-mono text-emerald-400 font-bold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts19;
`
  },
  // 20 — AWARD-STYLE DISCOVERY
  {
    id: 20,
    name: 'OrderRecommendedProducts20',
    dir: 'order-recommended-products-20',
    title: 'Award-Style Discovery — Ultimate Luxury Experience',
    desc: 'Ultimate post-purchase recommendation experience pairing editorial typography, SVG connector nodes, 3D card tilt, and micro-interactions.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Plus, Check } from 'lucide-react';

export function OrderRecommendedProducts20() {
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const items = [
    { id: 1, title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', tag: 'Top Match' },
    { id: 2, title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', tag: 'Popular' },
    { id: 3, title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', tag: 'Essential' },
  ];

  const toggle = (id: number) => {
    setAdded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20"
            >
              <Award className="w-6 h-6" />
            </motion.div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Post-Purchase Curation
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Discovery Experience</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Order #849202 Additions
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-4 shadow-xl hover:border-amber-500/50 transition-all group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-amber-400 text-[10px] font-mono px-2.5 py-1 rounded-full border border-amber-500/20">
                  {item.tag}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-base text-white">{item.title}</h3>
                  <span className="font-mono text-xs text-amber-400">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggle(item.id)}
                  className={\`p-2.5 rounded-xl font-bold transition-all shadow-lg \${
                    added[item.id] ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                  }\`}
                >
                  {added[item.id] ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts20;
`
  }
];

// Write components and json
components.forEach(comp => {
  const targetFolder = path.join(baseDir, comp.dir);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(targetFolder, `${comp.name}.tsx`);
  fs.writeFileSync(tsxPath, comp.code, 'utf8');

  // Write JSON
  const jsonPath = path.join(targetFolder, `${comp.dir}.json`);
  const jsonContent = {
    id: comp.dir,
    title: comp.title,
    category: "order-recommended-products",
    description: comp.desc
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

  console.log(`Generated ${comp.name} with animations & JSON metadata.`);
});

console.log('Successfully created all 20 Order Recommended Products variants with rich animations!');
