const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 11. FLOATING PRODUCT PANEL
writeComponent('cart-items-section-11', 'CartItemsSection11', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection11Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection11: React.FC<CartItemsSection11Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "FLOATING PANEL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "11. Floating Product Panel Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row items-center">
        <div className="w-full md:w-64 h-64 rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 z-10">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:flex-1 md:-ml-12 mt-[-2rem] md:mt-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 pt-12 md:pt-8 md:pl-16 shadow-xl">
          <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{product.badge}</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{product.name}</h3>
          <p className="text-xs text-slate-500">{product.variant}</p>
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-2xl font-black text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-lg p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                <span className="w-8 text-center text-xs font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 12. MAGAZINE CART ITEM
writeComponent('cart-items-section-12', 'CartItemsSection12', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection12Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection12: React.FC<CartItemsSection12Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "MAGAZINE EDITORIAL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-white dark:bg-stone-950 font-serif">
      <div className="max-w-4xl mx-auto mb-6 border-b border-stone-200 pb-2">
        <h2 className="text-2xl italic">{data?.heading || "12. High-Fashion Magazine Layout"}</h2>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 aspect-[4/5] bg-stone-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="md:col-span-7 font-sans space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400">VOLUME 2026 // LINE ITEM</span>
          <h3 className="text-3xl font-serif text-stone-900 dark:text-white leading-tight">{product.name}</h3>
          <p className="text-xs font-mono text-stone-500">{product.variant}</p>
          <blockquote className="text-xs italic text-stone-600 border-l-2 border-stone-900 dark:border-stone-100 pl-3 py-1 font-serif">
            "An indispensable addition to the curated winter wardrobe, combining technical precision with understated elegance."
          </blockquote>
          <div className="pt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-800">
            <span className="text-2xl font-serif text-stone-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-400 p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2"><Minus className="w-3 h-3" /></button>
                <span className="px-2 font-mono text-xs">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-2"><Plus className="w-3 h-3" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="text-xs text-rose-600 hover:underline uppercase font-mono">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 13. VERTICAL PRODUCT RAIL ITEM
writeComponent('cart-items-section-13', 'CartItemsSection13', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection13Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection13: React.FC<CartItemsSection13Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "VERTICAL RAIL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "13. Vertical Product Rail Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-28 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 uppercase">{product.badge}</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1">{product.name}</h3>
            <p className="text-xs text-slate-500">{product.variant}</p>
            <span className="text-lg font-black text-slate-900 dark:text-white mt-2 block">{product.currency}{product.unitPrice * qty}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-6">
          <button onClick={() => setQty(qty + 1)} className="p-1.5 border rounded hover:bg-slate-50"><Plus className="w-3.5 h-3.5" /></button>
          <span className="font-bold text-sm">{qty}</span>
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1.5 border rounded hover:bg-slate-50"><Minus className="w-3.5 h-3.5" /></button>
          <button onClick={() => setIsRemoved(true)} className="p-1.5 text-rose-500 mt-2"><Trash2 className="w-4 h-4" /></button>
        </div>
      </div>
    </section>
  );
};
`);

// 14. LAYERED ITEM
writeComponent('cart-items-section-14', 'CartItemsSection14', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection14Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection14: React.FC<CartItemsSection14Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "LAYERED DEPTH" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-indigo-50/30 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "14. Multi-Layered Overlapping Card Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto relative p-4">
        <div className="absolute inset-0 bg-indigo-200 dark:bg-indigo-950/40 rounded-3xl transform rotate-1 scale-[0.98]"></div>
        <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center gap-6">
          <img src={product.image} alt={product.name} className="w-32 h-32 rounded-2xl object-cover shadow-md" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{product.name}</h3>
            <p className="text-xs text-slate-500 mt-1">{product.variant}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-black text-indigo-600 dark:text-indigo-400">{product.currency}{product.unitPrice * qty}</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg p-1 bg-slate-50 dark:bg-slate-800">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="w-8 text-center text-xs font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
                </div>
                <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 15. MINIMAL TYPOGRAPHY ITEM
writeComponent('cart-items-section-15', 'CartItemsSection15', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection15Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection15: React.FC<CartItemsSection15Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "MINIMAL TYPOGRAPHY" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-white dark:bg-slate-950 font-mono">
      <div className="max-w-4xl mx-auto mb-6 border-b border-slate-200 pb-2">
        <h2 className="text-base font-bold uppercase tracking-widest">{data?.heading || "15. Minimal Typography-Focused Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto py-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest">LINE ITEM // 015</span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight mt-1">{product.name}</h3>
          <p className="text-slate-500 mt-1">{product.variant}</p>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center border border-slate-300 dark:border-slate-700 p-1">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-2"><Minus className="w-3 h-3" /></button>
            <span className="px-3 font-bold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-2"><Plus className="w-3 h-3" /></button>
          </div>
          <span className="text-xl font-bold text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
          <button onClick={() => setIsRemoved(true)} className="text-rose-500 hover:underline uppercase text-[10px]">Remove</button>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully generated Cart Item 11-15 structural components!');
