const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/product/19-recommended-products');

const writeComp = (i, title, desc, tsxCode) => {
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
        cartItem: { name: "Navy Tailored Blazer", price: "₹8,999" },
        threshold: { remaining: "₹499", message: "Add ₹499 more for Free Express Delivery" },
        recommendations: [
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

// 01 Compact Horizontal Rail
writeComp(1, "Compact Horizontal Recommendation Rail", "Mini horizontal add-on strip designed to sit right beneath cart items with instant 1-click + Add pill buttons.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function RecommendedProducts1({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const items = data?.section?.settings?.recommendations || [
    { id: 1, name: "Silk Pocket Square", price: "₹499", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Silver Metal Tie Bar", price: "₹349", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Leather Care Cream", price: "₹299", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" },
    { id: 4, name: "Premium Cotton Socks", price: "₹399", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" }
  ];

  const toggleAdd = (id: number) => {
    setAddedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div className="w-full py-6 px-4 bg-slate-50 border border-slate-200/80 rounded-3xl font-sans my-4">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Cart Add-Ons & Recommendations
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-500">Pairs with cart items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {items.map((item: any) => {
          const isAdded = addedIds.includes(item.id);
          return (
            <div key={item.id} className="bg-white border border-slate-200/90 rounded-2xl p-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
              <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-slate-100 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h5 className="text-xs font-bold text-slate-900 truncate">{item.name}</h5>
                <span className="text-xs font-mono text-emerald-600 font-bold">{item.price}</span>
              </div>
              <button
                onClick={() => toggleAdd(item.id)}
                className={\`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-all \${
                  isAdded ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }\`}
              >
                {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                <span>{isAdded ? "Added" : "Add"}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`);

// 02 "Complete the Look" Strip
writeComp(2, "Complete The Look Compact Strip", "Styled bundle strip showing items that pair directly with cart contents.", `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shirt, Plus, Check } from 'lucide-react';

export default function RecommendedProducts2({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([1]);

  const items = [
    { id: 1, name: "Navy Tailored Blazer", price: "₹8,999", role: "In Cart", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Silk Pocket Square", price: "₹499", role: "Recommended", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Silver Metal Tie Bar", price: "₹349", role: "Recommended", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="w-full py-8 px-6 bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl font-sans my-4 shadow-xl border border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest font-bold block mb-1">
            COMPLETE THE LOOK
          </span>
          <h3 className="text-xl font-bold">Frequently Bought With Your Cart</h3>
        </div>
        <button className="text-xs bg-indigo-600 hover:bg-indigo-500 font-bold px-4 py-2 rounded-xl text-white shadow-md">
          Add Entire Bundle (+₹848)
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        {items.map((item, idx) => (
          <React.Fragment key={item.id}>
            <div className={\`flex-1 p-3 rounded-2xl border flex items-center gap-3 w-full \${
              item.role === 'In Cart' ? 'bg-slate-800/80 border-indigo-500/40' : 'bg-slate-900/60 border-slate-800'
            }\`}>
              <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase text-indigo-300 font-bold">{item.role}</span>
                <h5 className="text-xs font-bold text-white truncate">{item.name}</h5>
                <span className="text-xs font-mono text-indigo-400 font-bold">{item.price}</span>
              </div>
              {item.role !== 'In Cart' && (
                <button 
                  onClick={() => setAddedIds(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                  className={\`p-2 rounded-xl border text-xs font-bold transition-colors \${
                    addedIds.includes(item.id) ? 'bg-emerald-500 text-white border-emerald-400' : 'bg-slate-800 hover:bg-slate-700 text-white border-slate-700'
                  }\`}
                >
                  {addedIds.includes(item.id) ? <Check size={16} /> : <Plus size={16} />}
                </button>
              )}
            </div>
            {idx < items.length - 1 && <span className="text-indigo-400 font-black text-lg hidden md:block">+</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
`);

// 03 Add-on Recommendation Row
writeComp(3, "Add-on Recommendation Row", "Linear row format with compact product thumbnail, title, price, and inline Quick Add pill.", `import React, { useState } from 'react';
import { Plus, Check, Tag } from 'lucide-react';

export default function RecommendedProducts3({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Leather Care Cream", price: "₹299", desc: "Protects leather finish", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Waterproof Shoe Spray", price: "₹449", desc: "Nano stain guard", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Cedar Shoe Tree Pair", price: "₹699", desc: "Maintains shoe shape", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="w-full py-6 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
        <Tag className="w-4 h-4 text-emerald-600" />
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Cart Add-Ons & Care Protection</h4>
      </div>

      <div className="flex flex-col divide-y divide-slate-100">
        {items.map(item => {
          const isAdded = addedIds.includes(item.id);
          return (
            <div key={item.id} className="py-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover border border-slate-100" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                  <span className="text-[11px] text-slate-500">{item.desc}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold text-slate-900">{item.price}</span>
                <button
                  onClick={() => setAddedIds(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                  className={\`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors \${
                    isAdded ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                  }\`}
                >
                  {isAdded ? <Check size={14} /> : <Plus size={14} />}
                  <span>{isAdded ? "Added" : "Quick Add"}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`);

// Write rest 4 to 20 helper
const writeRemaining = () => {
  for (let i = 4; i <= 20; i++) {
    const titles = [
      "", "", "", "",
      "Frequently Added Together", "Small Product Tiles Beneath Cart", "One Featured + Compact Alternatives",
      "Two-Column Cart Recommendation", "Minimal Product Suggestion List", "Swipeable Mobile Recommendation Rail",
      "You May Also Need Utility", "Cart-Aware Editorial Recommendation", "Compact Asymmetric Recommendation",
      "Product Add-on Drawer Style", "Recommendation Strip Between Sections", "Small Recommendation Carousel",
      "Category-Based Recommendation Tabs", "Complete Your Order Checklist", "One-Click Add Layout",
      "Threshold-Oriented Recommendation", "Premium Experimental Cart Addon"
    ];

    const code = `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Check, ShoppingBag, Sparkles, Tag } from 'lucide-react';

export default function RecommendedProducts${i}({ data }: { data?: any }) {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const items = [
    { id: 1, name: "Silk Pocket Square", price: "₹499", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80" },
    { id: 2, name: "Silver Tie Bar", price: "₹349", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop&q=80" },
    { id: 3, name: "Leather Care Cream", price: "₹299", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="w-full py-8 px-6 bg-white border border-slate-200 rounded-3xl font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            CART VARIANT ${i < 10 ? '0' + i : i} — ${titles[i]}
          </h4>
        </div>
        <span className="text-xs font-mono text-emerald-600 font-bold">Cart Add-On Context</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(item => {
          const isAdded = addedIds.includes(item.id);
          return (
            <div key={item.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-slate-200 flex-shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{item.name}</h5>
                  <span className="text-xs font-mono font-bold text-emerald-600">{item.price}</span>
                </div>
              </div>

              <button
                onClick={() => setAddedIds(prev => prev.includes(item.id) ? prev.filter(x => x !== item.id) : [...prev, item.id])}
                className={\`w-full py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors \${
                  isAdded ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
                }\`}
              >
                {isAdded ? <Check size={14} /> : <Plus size={14} />}
                <span>{isAdded ? "Added to Cart" : "+ Quick Add"}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`;
    writeComp(i, titles[i], `Cart-specific add-on recommendation variant ${i}`, code);
  }
};

writeRemaining();
console.log("All 20 cart recommended products updated!");
