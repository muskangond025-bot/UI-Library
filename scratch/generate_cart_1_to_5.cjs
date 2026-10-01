const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';

// Helper to write files
function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 01. EDITORIAL HORIZONTAL
writeComponent('cart-items-section-1', 'CartItemsSection1', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart, ShieldCheck } from 'lucide-react';

export interface CartItemsSection1Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection1: React.FC<CartItemsSection1Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    originalPrice: 1450,
    currency: "$",
    badge: "EDITORIAL LUXURY",
    styleTag: "Editorial / Horizontal"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isSaved, setIsSaved] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 sm:px-6 bg-stone-50 dark:bg-stone-950 font-serif">
      <div className="max-w-5xl mx-auto mb-6">
        <span className="text-[10px] uppercase tracking-widest text-stone-500">{product.badge}</span>
        <h2 className="text-2xl font-normal text-stone-900 dark:text-stone-100">{data?.heading || "01. Editorial Horizontal Cart Item"}</h2>
        <p className="text-sm font-sans text-stone-600 dark:text-stone-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto border-y border-stone-200 dark:border-stone-800 py-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-4 aspect-[4/5] bg-stone-200 dark:bg-stone-900 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:col-span-5 font-sans space-y-3">
          <h3 className="text-xl font-serif text-stone-900 dark:text-stone-100">{product.name}</h3>
          <p className="text-xs text-stone-500">{product.variant}</p>
          <p className="text-xs text-stone-600 dark:text-stone-400 italic">Handcrafted Mongolian cashmere with subtle silk accents.</p>
          <div className="flex gap-4 pt-4 text-xs">
            <button onClick={() => setIsSaved(!isSaved)} className="hover:underline flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {isSaved ? "Saved" : "Save for Later"}</button>
            <button onClick={() => setIsRemoved(true)} className="hover:underline text-rose-600 flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /> Remove</button>
          </div>
        </div>
        <div className="md:col-span-3 text-right font-sans space-y-4">
          <div>
            <span className="text-2xl font-light text-stone-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            <div className="text-xs text-stone-400 font-mono">{product.currency}{product.unitPrice} each</div>
          </div>
          <div className="flex items-center justify-end gap-2 border border-stone-300 dark:border-stone-700 w-max ml-auto p-1">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:bg-stone-200 dark:hover:bg-stone-800"><Minus className="w-3 h-3" /></button>
            <span className="w-8 text-center text-xs font-mono">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="p-1 hover:bg-stone-200 dark:hover:bg-stone-800"><Plus className="w-3 h-3" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 02. VERTICAL STACKED ITEM
writeComponent('cart-items-section-2', 'CartItemsSection2', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection2Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection2: React.FC<CartItemsSection2Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "VERTICAL STACK"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h2 className="text-xl font-bold">{data?.heading || "02. Vertical Stacked Cart Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
        <div className="w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-6">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">{product.badge}</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{product.name}</h3>
        <p className="text-xs text-slate-500 mt-1 mb-4">{product.variant}</p>
        <div className="text-2xl font-black text-slate-900 dark:text-white mb-6">{product.currency}{product.unitPrice * qty}</div>
        
        {/* Quantity Controls */}
        <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2 mb-4 border border-slate-200 dark:border-slate-600">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><Minus className="w-4 h-4" /></button>
          <span className="font-bold text-sm">{qty} Units</span>
          <button onClick={() => setQty(qty + 1)} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><Plus className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <button className="py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs rounded-xl shadow">Save for Later</button>
          <button onClick={() => setIsRemoved(true)} className="py-3 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50">Remove</button>
        </div>
      </div>
    </section>
  );
};
`);

// 03. IMAGE DOMINANT OVERLAP
writeComponent('cart-items-section-3', 'CartItemsSection3', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection3Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection3: React.FC<CartItemsSection3Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "IMAGE DOMINANT"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold text-white">{data?.heading || "03. Image Dominant Overlap Cart Item"}</h2>
        <p className="text-xs text-zinc-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
        <div className="w-full h-[450px]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
        </div>
        
        {/* Floating Overlapping Panel */}
        <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{product.badge}</span>
          <h3 className="text-lg font-bold text-white mt-1">{product.name}</h3>
          <p className="text-xs text-zinc-400 mt-0.5">{product.variant}</p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
            <div>
              <span className="text-xs text-zinc-500 block">Total Price</span>
              <span className="text-xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-zinc-400 hover:text-white"><Minus className="w-3.5 h-3.5" /></button>
              <span className="text-xs font-bold w-4 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-zinc-400 hover:text-white"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-xs font-semibold">
            <button onClick={() => setIsRemoved(true)} className="text-rose-400 hover:underline flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /> Remove</button>
            <button className="text-zinc-300 hover:underline flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 04. SPLIT SCREEN 50/50
writeComponent('cart-items-section-4', 'CartItemsSection4', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart, Shield } from 'lucide-react';

export interface CartItemsSection4Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection4: React.FC<CartItemsSection4Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "SPLIT 50/50"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Split Screen 50/50 Cart Item"}</h2>
        <p className="text-xs text-gray-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square bg-gray-100 dark:bg-gray-900">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">{product.badge}</span>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-3">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">{product.variant}</p>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" /> Authenticity & Quality Guaranteed
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-sm text-gray-400">Total Price</span>
              <span className="text-3xl font-black text-gray-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-gray-500">Quantity:</span>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-bold text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setIsRemoved(true)} className="flex-1 py-3 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50">Remove</button>
              <button className="flex-1 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold text-xs rounded-xl">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 05. ULTRA-COMPACT CART LINE ROW
writeComponent('cart-items-section-5', 'CartItemsSection5', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection5Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection5: React.FC<CartItemsSection5Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "COMPACT ROW"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-2 text-center text-xs text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-6 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto mb-3">
        <h2 className="text-base font-bold">{data?.heading || "05. Ultra-Compact Cart Line Row"}</h2>
      </div>
      <div className="max-w-4xl mx-auto py-3 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 min-w-0">
          <img src={product.image} alt={product.name} className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
          <div className="min-w-0">
            <h3 className="font-bold truncate text-slate-900 dark:text-white">{product.name}</h3>
            <span className="text-[10px] text-slate-400 block">{product.variant}</span>
          </div>
        </div>
        <div className="flex items-center gap-6 flex-shrink-0">
          <span className="font-mono font-bold text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
          <div className="flex items-center border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-1.5 py-0.5"><Minus className="w-3 h-3" /></button>
            <span className="px-2 font-bold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-1.5 py-0.5"><Plus className="w-3 h-3" /></button>
          </div>
          <button onClick={() => setIsRemoved(true)} className="text-rose-500 hover:text-rose-700"><Trash2 className="w-3.5 h-3.5" /></button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully generated Cart Item 1-5 structural components!');
