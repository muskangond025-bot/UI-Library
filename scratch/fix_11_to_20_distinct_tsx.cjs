const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/19-recommended-products');

const writeVariantFile = (i, title, desc, tsxCode) => {
  const dirName = `recommended-products-${i}`;
  const folderPath = path.join(baseDir, dirName);
  if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

  const tsxPath = path.join(folderPath, `RecommendedProducts${i}.tsx`);
  const jsonPath = path.join(folderPath, `recommended-products-${i}.json`);

  fs.writeFileSync(tsxPath, tsxCode, 'utf8');

  const jsonContent = {
    title: `Cart Recommended Products ${i < 10 ? '0' + i : i} — ${title}`,
    description: desc,
    section: {
      settings: {
        title: title,
        description: desc,
        threshold: { remaining: "₹499", target: "₹3,000" },
        items: [
          { id: 1, name: "Silk Pocket Square", price: "₹499", category: "Accessories", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
          { id: 2, name: "Silver Metal Tie Bar", price: "₹349", category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
          { id: 3, name: "Leather Care Cream", price: "₹299", category: "Care", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" },
          { id: 4, name: "Premium Socks 3-Pack", price: "₹399", category: "Apparel", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" }
        ]
      }
    }
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');
};

// 11 Editorial Layout
writeVariantFile(11, "Cart-Aware Editorial Layout", "Large typography statement with asymmetric editorial presentation.", `import React, { useState } from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';

export default function RecommendedProducts11({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="w-full py-10 px-8 bg-slate-950 text-white rounded-3xl font-serif my-4 border border-slate-800 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 mb-8 gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 tracking-widest uppercase mb-2 flex items-center gap-1.5 font-sans">
            <Sparkles size={14} /> EDITORIAL SELECTION
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight">Complete Your Order</h2>
        </div>
        <p className="text-stone-400 text-xs font-sans max-w-xs">
          Hand-picked luxury accessories tailored to your active cart items.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-sans">
        <div className="md:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
          <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" className="w-28 h-28 rounded-xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">RECOMMENDED ADD-ON</span>
            <h4 className="font-serif text-xl font-normal text-white">Silk Pocket Square — Italian Twill</h4>
            <span className="text-amber-400 font-mono font-bold text-lg block mt-1">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)} 
            className={\`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 transition-all \${
              added ? 'bg-emerald-500 text-white' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            }\`}
          >
            {added ? <Check size={14} /> : <ArrowRight size={14} />}
            <span>{added ? "Added" : "Add To Order"}</span>
          </button>
        </div>

        <div className="md:col-span-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-xs text-stone-400">
          <span className="font-mono text-amber-400 uppercase font-bold block mb-2">NOTE</span>
          Pairs seamlessly with your Navy Tailored Blazer already in cart. Free return guarantee included.
        </div>
      </div>
    </div>
  );
}`);

// 12 Compact Asymmetric
writeVariantFile(12, "Compact Asymmetric Recommendation", "Asymmetric 2-column layout with 2/3 featured recommendation and 1/3 stacked mini items.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts12({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  return (
    <div className="w-full py-8 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <h4 className="text-xs font-mono font-bold uppercase text-slate-500 mb-4">12 / ASYMMETRIC CART RECOMMENDATION</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left 2/3 Featured */}
        <div className="md:col-span-8 bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=300" className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <span className="text-[10px] bg-indigo-100 text-indigo-700 font-bold px-2 py-0.5 rounded">ASYMMETRIC HERO</span>
              <h5 className="text-sm font-bold text-slate-900 mt-1">Silk Pocket Square</h5>
              <span className="text-xs font-mono font-bold text-emerald-600">₹499</span>
            </div>
          </div>
          <button 
            onClick={() => setAddedIds(prev => prev.includes(1) ? prev.filter(x => x !== 1) : [...prev, 1])}
            className={\`px-4 py-2 rounded-xl text-xs font-bold \${addedIds.includes(1) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}\`}
          >
            {addedIds.includes(1) ? "✓ Added" : "+ Add"}
          </button>
        </div>

        {/* Right 1/3 Stacked */}
        <div className="md:col-span-4 flex flex-col gap-2">
          {["Tie Bar ₹349", "Leather Cream ₹299"].map((txt, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center justify-between text-xs font-bold text-slate-800">
              <span>{txt}</span>
              <button className="text-emerald-600 hover:underline text-[11px]">+ Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

// 13 Quick-Add Rail
writeVariantFile(13, "Quick-Add Rail", "Button-first quick add bar where the ADD action is huge and primary.", `import React, { useState } from 'react';
import { Plus, Check, Zap } from 'lucide-react';

export default function RecommendedProducts13({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-500 text-white rounded-3xl font-sans my-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Zap className="w-6 h-6 text-emerald-200 fill-emerald-200" />
        <div>
          <span className="text-[10px] font-mono uppercase font-bold text-emerald-100">1-CLICK CART ADD</span>
          <h4 className="text-base font-bold">Silk Pocket Square (₹499)</h4>
        </div>
      </div>

      <button 
        onClick={() => setAdded(!added)}
        className={\`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105 \${
          added ? 'bg-slate-900 text-white' : 'bg-white text-emerald-950'
        }\`}
      >
        {added ? <Check size={16} /> : <Plus size={16} />}
        <span>{added ? "Added To Cart" : "+ ADD IN 1 CLICK"}</span>
      </button>
    </div>
  );
}`);

// 14 Embedded Cart-Flow Section
writeVariantFile(14, "Embedded Cart-Flow Section", "Flow divider banner strip designed to fit neatly between cart items and summary.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts14({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-4 px-6 bg-slate-100 border-y-2 border-slate-300 font-sans my-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span className="text-xs font-mono font-bold uppercase text-slate-700">CART FLOW DIVIDER:</span>
        <span className="text-xs font-bold text-slate-900">Add Silk Pocket Square for ₹499</span>
      </div>

      <button 
        onClick={() => setAdded(!added)}
        className={\`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 \${
          added ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-white'
        }\`}
      >
        {added ? <Check size={14} /> : <Plus size={14} />}
        <span>{added ? "Added" : "+ Add"}</span>
      </button>
    </div>
  );
}`);

// 15 Category Navigation Tabs
writeVariantFile(15, "Category Navigation Tabs", "Filter tabs allowing shoppers to switch between recommendation categories.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts15({ data }: { data?: any }) {
  const [activeTab, setActiveTab] = useState("Matching");
  const [added, setAdded] = useState(false);

  const tabs = ["Matching", "Accessories", "Care", "Under ₹500"];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b">
        <h4 className="text-xs font-mono font-bold uppercase text-slate-900">15 / CATEGORY FILTER TABS</h4>
        <div className="flex gap-1 overflow-x-auto">
          {tabs.map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={\`px-3 py-1 rounded-full text-xs font-bold transition-colors \${
                activeTab === tab ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }\`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-2xl border flex items-center justify-between">
        <div>
          <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase">{activeTab} Pick</span>
          <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square</h5>
          <span className="text-xs font-mono font-bold text-slate-600">₹499</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}\`}
        >
          {added ? "Added" : "+ Add"}
        </button>
      </div>
    </div>
  );
}`);

// 16 Minimal Editorial One More Thing
writeVariantFile(16, "Minimal Editorial One More Thing", "Ultra-clean whitespace typography layout with minimal underline links.", `import React, { useState } from 'react';

export default function RecommendedProducts16({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-12 px-8 bg-white font-sans text-center my-4">
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
        ONE MORE THING...
      </span>
      <h3 className="text-2xl font-serif text-slate-900 mb-2">Silk Pocket Square — Italian Twill</h3>
      <p className="text-xs font-mono text-slate-500 mb-6">₹499 • Designed to complete your tailored blazer</p>
      
      <button 
        onClick={() => setAdded(!added)}
        className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-emerald-600 hover:border-emerald-600 transition-colors"
      >
        {added ? "✓ Added To Cart" : "+ Add To Cart (₹499)"}
      </button>
    </div>
  );
}`);

// 17 Split Layout Complete Order
writeVariantFile(17, "Split Layout Complete Order", "2-panel split layout with dark message panel on left and product grid on right.", `import React, { useState } from 'react';
import { Plus, Check } from 'lucide-react';

export default function RecommendedProducts17({ data }: { data?: any }) {
  const [added, setAdded] = useState<number[]>([]);

  return (
    <div className="w-full py-6 px-6 bg-slate-50 border border-slate-200 rounded-3xl font-sans my-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 bg-indigo-950 text-white p-6 rounded-2xl flex flex-col justify-between min-h-[160px]">
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase">17 / SPLIT PANEL</span>
          <div>
            <h4 className="text-xl font-bold">Complete Your Order</h4>
            <p className="text-xs text-indigo-200 mt-1">Recommended additions for your current cart.</p>
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[{ id: 1, name: "Silk Pocket Square", price: "₹499" }, { id: 2, name: "Silver Tie Bar", price: "₹349" }].map(it => (
            <div key={it.id} className="bg-white p-3 rounded-2xl border flex items-center justify-between">
              <div>
                <h5 className="text-xs font-bold text-slate-900">{it.name}</h5>
                <span className="text-xs font-mono text-slate-500">{it.price}</span>
              </div>
              <button 
                onClick={() => setAdded(prev => prev.includes(it.id) ? prev.filter(x => x !== it.id) : [...prev, it.id])}
                className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${added.includes(it.id) ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}\`}
              >
                {added.includes(it.id) ? "Added" : "+ Add"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`);

// 18 Expandable Add-On Drawer
writeVariantFile(18, "Expandable Add-On Drawer", "Collapsible add-on panel with drawer toggle button.", `import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Check } from 'lucide-react';

export default function RecommendedProducts18({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(true);
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl font-sans my-4 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-900 hover:bg-slate-100 transition-colors"
      >
        <span className="font-mono text-emerald-600 uppercase">⚡ QUICK CART ADD-ONS (3 AVAILABLE)</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="p-4 border-t flex items-center justify-between bg-white">
          <div>
            <h5 className="text-xs font-bold text-slate-900">Silk Pocket Square</h5>
            <span className="text-xs font-mono text-slate-500">₹499</span>
          </div>
          <button 
            onClick={() => setAdded(!added)}
            className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${added ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}\`}
          >
            {added ? "Added" : "+ Add"}
          </button>
        </div>
      )}
    </div>
  );
}`);

// 19 Threshold-Driven Add-Ons
writeVariantFile(19, "Threshold-Driven Add-Ons", "Threshold hero bar displaying products under ₹499 to fill free shipping gap.", `import React, { useState } from 'react';
import { Plus, Check, Truck } from 'lucide-react';

export default function RecommendedProducts19({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-6 px-6 bg-emerald-50/80 border border-emerald-200 rounded-3xl font-sans my-4">
      <div className="flex items-center gap-2 mb-3">
        <Truck className="w-4 h-4 text-emerald-600" />
        <span className="text-xs font-bold text-emerald-900">You're ₹499 away from Free Express Delivery</span>
      </div>

      <div className="bg-white p-3 rounded-2xl border border-emerald-200/60 flex items-center justify-between">
        <div>
          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">QUALIFIES FOR FREE SHIPPING</span>
          <h5 className="text-xs font-bold text-slate-900 mt-1">Silk Pocket Square (₹499)</h5>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={\`px-3 py-1.5 rounded-xl text-xs font-bold \${added ? 'bg-emerald-600 text-white' : 'bg-emerald-500 hover:bg-emerald-600 text-white'}\`}
        >
          {added ? "Qualifies!" : "+ Add To Reach Threshold"}
        </button>
      </div>
    </div>
  );
}`);

// 20 Experimental Glassmorphic 3D Card
writeVariantFile(20, "Experimental Glassmorphic 3D Card", "Unconventional glassmorphic 3D card layout with backdrop blur and floating elements.", `import React, { useState } from 'react';
import { Sparkles, Plus, Check } from 'lucide-react';

export default function RecommendedProducts20({ data }: { data?: any }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl font-sans my-4 shadow-2xl border border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-1">
          <Sparkles size={14} /> 20 / EXPERIMENTAL GLASS ADD-ON
        </span>
        <span className="text-xs font-bold text-emerald-400">10% Cart Bonus</span>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-sm font-bold text-white">Silk Pocket Square</h4>
          <span className="text-xs font-mono text-indigo-300 font-bold">₹499</span>
        </div>
        <button 
          onClick={() => setAdded(!added)}
          className={\`px-4 py-2 rounded-xl text-xs font-bold transition-transform hover:scale-105 \${
            added ? 'bg-emerald-500 text-white' : 'bg-white text-slate-950 font-black'
          }\`}
        >
          {added ? "Added!" : "+ Add"}
        </button>
      </div>
    </div>
  );
}`);

console.log("All 10 distinct variants (11 to 20) generated!");
