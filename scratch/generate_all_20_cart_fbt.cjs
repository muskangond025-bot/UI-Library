const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/cart/06-cart-frequently-bought-together');

const writeVariant = (num, title, desc, tsxCode) => {
  const dirName = `cart-frequently-bought-together-${num}`;
  const dirPath = path.join(baseDir, dirName);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const tsxPath = path.join(dirPath, `CartFrequentlyBoughtTogether${num}.tsx`);
  const jsonPath = path.join(dirPath, `cart-frequently-bought-together-${num}.json`);

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');

  const jsonContent = {
    title: `Cart Frequently Bought Together ${num < 10 ? '0' + num : num} — ${title}`,
    description: desc,
    section: {
      settings: {
        title: title,
        description: desc,
        cartItem: { name: "Navy Tailored Blazer", price: "₹8,999" },
        bundleItems: [
          { id: 1, name: "Silk Pocket Square", price: 499, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
          { id: 2, name: "Silver Metal Tie Bar", price: 349, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
          { id: 3, name: "Leather Care Cream", price: 299, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" }
        ],
        bundleSavings: "Save ₹200 on bundle"
      }
    }
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
};

// 01 Bundle Builder
writeVariant(1, "Bundle Builder", "Products connected visually into one unified bundle card with a single Add Bundle CTA.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, ShoppingBag, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether1({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 shadow-2xl border border-slate-800">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">01 / BUNDLE BUILDER</span>
          <h3 className="text-xl font-bold mt-1">Frequently Bought Together Bundle</h3>
        </div>
        <span className="text-xs bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/30">Save ₹200</span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-800/60 p-6 rounded-2xl border border-slate-700">
        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">CART ITEM</span>
            <h5 className="text-xs font-bold">Navy Blazer</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹8,999</span>
          </div>
        </div>

        <Plus className="text-emerald-400 w-5 h-5 flex-shrink-0" />

        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">ADD-ON 1</span>
            <h5 className="text-xs font-bold">Pocket Square</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹499</span>
          </div>
        </div>

        <Plus className="text-emerald-400 w-5 h-5 flex-shrink-0" />

        <div className="flex-1 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?w=300" className="w-16 h-16 rounded-xl object-cover border border-slate-600" />
          <div>
            <span className="text-[10px] text-slate-400 font-mono">ADD-ON 2</span>
            <h5 className="text-xs font-bold">Leather Cream</h5>
            <span className="text-xs font-mono text-emerald-400 font-bold">₹299</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
        <div>
          <span className="text-xs text-slate-400 font-mono">Bundle Total (3 items):</span>
          <span className="text-2xl font-black text-white ml-2">₹9,597</span>
        </div>

        <button 
          onClick={() => setAdded(!added)}
          className={\`px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all shadow-lg \${
            added ? 'bg-emerald-500 text-white' : 'bg-emerald-600 hover:bg-emerald-500 text-white'
          }\`}
        >
          {added ? <Check size={16} /> : <ShoppingBag size={16} />}
          <span>{added ? "Bundle Added to Cart" : "Add Complete Bundle"}</span>
        </button>
      </div>
    </div>
  );
}`);

// 02 Compact Add-On Row
writeVariant(2, "Compact Add-On Row", "Compact horizontal rows designed for rapid scanning & quick additions.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether2({ data }: { data?: any }) {
  const [added, setAdded] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Silk Pocket Square", price: "₹499", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200" },
    { id: 2, name: "Silver Metal Tie Bar", price: "₹349", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=200" },
    { id: 3, name: "Leather Care Cream", price: "₹299", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=200" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">02 / COMPACT ADD-ON ROWS</h4>
      <div className="divide-y divide-slate-100">
        {items.map(item => (
          <div key={item.id} className="py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={item.image} className="w-10 h-10 rounded-xl object-cover border" />
              <div>
                <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                <span className="text-xs font-mono font-bold text-emerald-600">{item.price}</span>
              </div>
            </div>

            <button 
              onClick={() => setAdded(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
              className={\`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 \${
                added.includes(item.id) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
              }\`}
            >
              {added.includes(item.id) ? <Check size={14} /> : <Plus size={14} />}
              <span>{added.includes(item.id) ? "Added" : "Add"}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}`);

// 03 Large Feature + Small Add-ons
writeVariant(3, "Large Feature + Small Add-ons", "1 Large hero recommendation + 3 smaller supporting suggestions.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether3({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-indigo-600 uppercase block mb-4">03 / FEATURED RECOMMENDATION + ALTERNATIVES</span>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7 bg-white p-6 rounded-2xl border flex items-center gap-4 shadow-sm">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" className="w-24 h-24 rounded-xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded">MOST POPULAR ADD-ON</span>
            <h4 className="text-base font-bold text-slate-900 mt-1">Silk Pocket Square — Navy Twill</h4>
            <span className="text-sm font-mono font-bold text-emerald-600 block mt-1">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)}
            className={\`px-4 py-2 rounded-xl text-xs font-bold \${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}\`}
          >
            {added ? "Added" : "+ Add"}
          </button>
        </div>

        <div className="md:col-span-5 flex flex-col gap-2">
          {["Silver Tie Bar — ₹349", "Leather Care Cream — ₹299"].map((txt, idx) => (
            <div key={idx} className="bg-white p-3 rounded-xl border flex items-center justify-between text-xs font-bold text-slate-800">
              <span>{txt}</span>
              <button className="text-emerald-600 hover:underline text-xs">+ Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

// 04 Connected Product Chain
writeVariant(4, "Connected Product Chain", "Directional product chain connecting cart items down to paired accessories.", `import React, { useState } from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export default function CartFrequentlyBoughtTogether4({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-6">04 / CONNECTED PRODUCT CHAIN</span>
      
      <div className="flex flex-col items-center gap-3">
        <div className="w-full p-4 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">1. YOUR CART ITEM</span>
          <span className="text-sm font-bold">Navy Tailored Blazer (₹8,999)</span>
        </div>

        <ArrowDown className="text-emerald-400 w-5 h-5 animate-bounce" />

        <div className="w-full p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
          <span className="text-xs font-mono text-emerald-400 font-bold">2. RECOMMENDED PAIR</span>
          <span className="text-sm font-bold text-white">Silk Pocket Square (₹499)</span>
          <button className="px-3 py-1.5 bg-emerald-500 text-white rounded-xl text-xs font-bold">+ Quick Add</button>
        </div>
      </div>
    </div>
  );
}`);

// 05 Complete the Set Outfit
writeVariant(5, "Outfit Complete The Set", "Coordinated set composition (Cart Item + Top + Accessory + Footwear).", `import React, { useState } from 'react';
import { Shirt, Plus, Check } from 'lucide-react';

export default function CartFrequentlyBoughtTogether5({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-indigo-600 uppercase">05 / COMPLETE THE OUTFIT SET</span>
          <h3 className="text-xl font-black text-slate-900 mt-1">Full Coordinated Look</h3>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={\`px-5 py-2.5 rounded-xl text-xs font-bold \${added ? 'bg-emerald-500 text-white' : 'bg-indigo-600 text-white'}\`}
        >
          {added ? "Set Added" : "Complete Entire Set (-15% OFF)"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {["Cart: Navy Blazer", "Silk Pocket Square ₹499", "Tie Bar ₹349", "Leather Shoes ₹4,999"].map((txt, idx) => (
          <div key={idx} className="p-3 bg-slate-50 border rounded-2xl text-center text-xs font-bold text-slate-800">
            {txt}
          </div>
        ))}
      </div>
    </div>
  );
}`);

// 06 Comparison-Style Bundle
writeVariant(6, "Comparison-Style Bundle", "Structured comparison layout showing Individual Total vs Bundle Total vs Savings.", `import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether6({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-950 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-amber-400 font-bold uppercase block mb-4">06 / COMPARISON BUNDLE BREAKDOWN</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-400 block mb-1">INDIVIDUAL PURCHASE TOTAL</span>
          <span className="text-3xl font-black text-slate-400 line-through">₹9,847</span>
        </div>
        <div className="p-6 bg-emerald-950 border border-emerald-500/40 rounded-2xl">
          <span className="text-xs text-emerald-400 font-bold block mb-1">BUNDLE DISCOUNT TOTAL</span>
          <span className="text-4xl font-black text-white">₹9,497</span>
          <span className="text-xs text-emerald-300 font-bold block mt-1">You Save ₹350 Instantly</span>
        </div>
      </div>
    </div>
  );
}`);

// 07 Vertical Product Stack
writeVariant(7, "Vertical Product Stack", "Stacked horizontal modules focused on scanning and quick additions.", `import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether7({ data }: { data?: any }) {
  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">07 / VERTICAL STACK MODULES</h4>
      <div className="border rounded-2xl divide-y bg-white overflow-hidden">
        {["Silk Pocket Square — ₹499", "Silver Tie Bar — ₹349", "Leather Care Cream — ₹299"].map((txt, idx) => (
          <div key={idx} className="p-4 flex justify-between items-center text-xs font-bold text-slate-900">
            <span>{txt}</span>
            <button className="px-3 py-1 bg-slate-900 text-white rounded-lg">+ Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}`);

// 08 Split Cart + Add-ons
writeVariant(8, "Split Cart + Add-ons", "LEFT: Current Cart context. RIGHT: Frequently bought products.", `import React from 'react';

export default function CartFrequentlyBoughtTogether8({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 border-r pr-6">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase">08 / IN YOUR CART</span>
          <h3 className="text-xl font-bold text-slate-900 mt-2">Navy Tailored Blazer</h3>
          <span className="text-sm font-mono font-bold text-slate-600">₹8,999</span>
        </div>
        <div className="md:col-span-7">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase block mb-3">FREQUENTLY BOUGHT WITH THIS</span>
          <div className="p-4 bg-slate-50 border rounded-2xl flex justify-between items-center text-xs font-bold">
            <span>Silk Pocket Square (₹499)</span>
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-xl">+ Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}`);

// 09 Horizontal Product Journey
writeVariant(9, "Horizontal Product Journey", "Horizontal visual journey: Cart → Frequently Bought → Bundle → Add.", `import React from 'react';

export default function CartFrequentlyBoughtTogether9({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-6">09 / HORIZONTAL PRODUCT JOURNEY</span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">1. CART: Blazer</div>
        <span>→</span>
        <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">2. PAIR: Pocket Square</div>
        <span>→</span>
        <div className="p-3 bg-emerald-600 rounded-xl font-black">3. BUNDLE COMPLETE</div>
      </div>
    </div>
  );
}`);

// 10 Product Overlap Composition
writeVariant(10, "Product Overlap Composition", "Overlapping product imagery communicating bundle membership.", `import React from 'react';

export default function CartFrequentlyBoughtTogether10({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4 text-center">
      <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-4">10 / OVERLAPPING BUNDLE CARDS</span>
      <div className="flex justify-center items-center my-4">
        <div className="w-20 h-24 bg-slate-800 text-white rounded-2xl shadow-xl flex items-center justify-center font-bold text-xs">Blazer</div>
        <div className="w-20 h-24 bg-emerald-600 text-white rounded-2xl shadow-xl -ml-6 border-2 border-white flex items-center justify-center font-bold text-xs z-10">+Square</div>
        <div className="w-20 h-24 bg-indigo-600 text-white rounded-2xl shadow-xl -ml-6 border-2 border-white flex items-center justify-center font-bold text-xs z-20">+Tie Bar</div>
      </div>
      <button className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold">+ Add Overlapped Bundle (₹848)</button>
    </div>
  );
}`);

// 11 "Usually Bought Together" Editorial
writeVariant(11, "Usually Bought Together Editorial", "Typography-first editorial layout with large heading.", `import React from 'react';

export default function CartFrequentlyBoughtTogether11({ data }: { data?: any }) {
  return (
    <div className="w-full py-12 px-8 bg-white border border-slate-200 rounded-3xl font-serif my-4">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6">USUALLY BOUGHT TOGETHER</h2>
      <div className="font-sans flex items-center justify-between p-4 bg-slate-50 border rounded-2xl">
        <span className="text-sm font-bold">Silk Pocket Square + Silver Tie Bar</span>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold">+ Add Accessories</button>
      </div>
    </div>
  );
}`);

// 12 Selectable Bundle
writeVariant(12, "Selectable Bundle", "Products with interactive selection checkboxes updating bundle total.", `import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

export default function CartFrequentlyBoughtTogether12({ data }: { data?: any }) {
  const [c1, setC1] = useState(true);
  const [c2, setC2] = useState(true);

  return (
    <div className="w-full py-8 px-6 bg-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800">
      <span className="text-xs font-mono text-emerald-400 font-bold uppercase block mb-4">12 / SELECTABLE BUNDLE CHECKLIST</span>
      <div className="space-y-3 mb-6">
        <div onClick={() => setC1(!c1)} className="p-3 bg-slate-800 rounded-xl flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            {c1 ? <CheckSquare className="text-emerald-400" /> : <Square className="text-slate-500" />}
            <span className="text-xs font-bold">Silk Pocket Square</span>
          </div>
          <span className="text-xs font-mono">₹499</span>
        </div>
        <div onClick={() => setC2(!c2)} className="p-3 bg-slate-800 rounded-xl flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            {c2 ? <CheckSquare className="text-emerald-400" /> : <Square className="text-slate-500" />}
            <span className="text-xs font-bold">Silver Tie Bar</span>
          </div>
          <span className="text-xs font-mono">₹349</span>
        </div>
      </div>
      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs">
        Add Selected Items (₹{ (c1 ? 499 : 0) + (c2 ? 349 : 0) })
      </button>
    </div>
  );
}`);

// 13 Single-Click Add-On
writeVariant(13, "Single-Click Add-On Modules", "Fast 1-click micro modules updating state to Added ✓.", `import React, { useState } from 'react';
import { Check, Plus } from 'lucide-react';

export default function CartFrequentlyBoughtTogether13({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-6 px-6 bg-emerald-50 border border-emerald-200 rounded-3xl font-sans my-4 flex items-center justify-between">
      <div>
        <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase">1-CLICK ADD-ON</span>
        <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square (₹499)</h5>
      </div>
      <button onClick={() => setAdded(!added)} className={\`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1 \${added ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'}\`}>
        {added ? <Check size={14} /> : <Plus size={14} />}
        <span>{added ? "Added ✓" : "+ Add"}</span>
      </button>
    </div>
  );
}`);

// 14 Bundle Timeline
writeVariant(14, "Bundle Timeline", "Milestone timeline: Cart Item → Common Pair → Accessory → Complete Bundle.", `import React from 'react';

export default function CartFrequentlyBoughtTogether14({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-slate-500 uppercase block mb-6">14 / BUNDLE TIMELINE MILESTONES</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-center">
        <div className="p-4 bg-slate-50 border rounded-2xl">Step 01: Cart Item</div>
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl">Step 02: Tie Bar (+₹349)</div>
        <div className="p-4 bg-slate-900 text-white rounded-2xl">Step 03: Complete Kit</div>
      </div>
    </div>
  );
}`);

// 15 Editorial Collage
writeVariant(15, "Editorial Collage", "Asymmetric magazine collage with varying image sizes.", `import React from 'react';

export default function CartFrequentlyBoughtTogether15({ data }: { data?: any }) {
  return (
    <div className="w-full py-12 px-8 bg-slate-950 text-white rounded-3xl font-serif my-4 border border-slate-800">
      <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-4">15 / EDITORIAL COLLAGE</span>
      <h3 className="text-3xl font-light mb-6">Curated Cart Accessories</h3>
      <button className="px-6 py-3 bg-amber-500 text-slate-950 font-sans font-bold text-xs rounded-xl">+ Add Collage Picks</button>
    </div>
  );
}`);

// 16 Minimal Typographic
writeVariant(16, "Minimal Typographic", "Minimal whitespace text layout without card boxes.", `import React from 'react';

export default function CartFrequentlyBoughtTogether16({ data }: { data?: any }) {
  return (
    <div className="w-full py-10 px-8 bg-white font-sans text-center my-4">
      <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-4">ADD THESE TO YOUR ORDER</h3>
      <div className="inline-flex items-center gap-6 border-b border-slate-900 pb-2 text-xs font-mono font-bold">
        <span>Silk Pocket Square (₹499)</span>
        <button className="text-emerald-600 hover:underline">+ Add</button>
      </div>
    </div>
  );
}`);

// 17 Quick Add Drawer Style
writeVariant(17, "Quick Add Drawer Style", "Collapsible add-on panel with expand/collapse trigger button.", `import React, { useState } from 'react';

export default function CartFrequentlyBoughtTogether17({ data }: { data?: any }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-4 bg-slate-100 flex justify-between items-center text-xs font-bold text-slate-900">
        <span>⚡ FREQUENTLY BOUGHT TOGETHER (3 ITEMS)</span>
        <span>{open ? "▲ Hide" : "▼ Show"}</span>
      </button>
      {open && (
        <div className="p-4 bg-white border-t text-xs font-bold flex justify-between items-center">
          <span>Silk Pocket Square (₹499)</span>
          <button className="bg-slate-900 text-white px-3 py-1.5 rounded-xl">+ Add</button>
        </div>
      )}
    </div>
  );
}`);

// 18 Benefit-Focused Bundle
writeVariant(18, "Benefit-Focused Bundle", "BUY TOGETHER hero banner with Bundle Benefit & combined price.", `import React from 'react';

export default function CartFrequentlyBoughtTogether18({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl font-sans my-4 shadow-xl">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-200 block mb-2">BUY TOGETHER & SAVE 20%</span>
      <h3 className="text-2xl font-black mb-4">Complete Set Special Price</h3>
      <button className="px-6 py-3 bg-white text-emerald-950 font-bold rounded-xl text-xs">+ Add Set & Save ₹350</button>
    </div>
  );
}`);

// 19 Cart-Aware Gridless Layout
writeVariant(19, "Cart-Aware Gridless Layout", "Asymmetric gridless composition (1 large product + 2 small + 1 CTA area).", `import React from 'react';

export default function CartFrequentlyBoughtTogether19({ data }: { data?: any }) {
  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <span className="text-xs font-mono font-bold text-slate-400 uppercase block mb-4">19 / ASYMMETRIC GRIDLESS</span>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border">
        <h4 className="text-base font-bold text-slate-900">Silk Pocket Square + Tie Bar Combo</h4>
        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold">+ Add Combo</button>
      </div>
    </div>
  );
}`);

// 20 Award-Level Experimental
writeVariant(20, "Award-Level Experimental Glassmorphic", "Unconventional glassmorphic 3D card with floating elements.", `import React, { useState } from 'react';
import { Sparkles, Check, Plus } from 'lucide-react';

export default function CartFrequentlyBoughtTogether20({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-10 px-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl font-sans my-4 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 relative z-10">
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          <Sparkles size={14} /> 20 / EXPERIMENTAL GLASS BUNDLE
        </span>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-base font-bold">Frequently Bought Bundle</h4>
          <span className="text-xs font-mono text-indigo-300 font-bold">Pocket Square + Tie Bar (₹848)</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={\`px-6 py-3 rounded-xl text-xs font-bold transition-transform hover:scale-105 \${
            added ? 'bg-emerald-500 text-white' : 'bg-white text-slate-950 font-black'
          }\`}
        >
          {added ? "Bundle Added" : "+ Add Bundle"}
        </button>
      </div>
    </div>
  );
}`);

console.log("All 20 Cart Frequently Bought Together distinct components generated!");
