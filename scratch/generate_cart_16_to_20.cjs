const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 16. LARGE MOBILE-FIRST COMPOSITION
writeComponent('cart-items-section-16', 'CartItemsSection16', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection16Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection16: React.FC<CartItemsSection16Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "MOBILE TOUCH FIRST" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-8 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-4">
        <h2 className="text-lg font-bold">{data?.heading || "16. Mobile-First Touch Cart Item"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-md flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img src={product.image} alt={product.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] font-bold text-indigo-600 uppercase">{product.badge}</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{product.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{product.variant}</p>
            <span className="text-lg font-black text-slate-900 dark:text-white mt-1 block">{product.currency}{product.unitPrice * qty}</span>
          </div>
        </div>
        
        {/* Large 48px touch targets */}
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 p-2 rounded-2xl border">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm text-lg font-bold"><Minus className="w-5 h-5" /></button>
          <span className="font-extrabold text-base">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm text-lg font-bold"><Plus className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button onClick={() => setIsRemoved(true)} className="h-12 flex items-center justify-center gap-2 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50"><Trash2 className="w-4 h-4" /> Remove</button>
          <button className="h-12 flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl"><Heart className="w-4 h-4" /> Save</button>
        </div>
      </div>
    </section>
  );
};
`);

// 17. INLINE CONTROL ITEM
writeComponent('cart-items-section-17', 'CartItemsSection17', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection17Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection17: React.FC<CartItemsSection17Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "INLINE CONTROLS" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Inline Control Integrated Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border rounded-2xl p-6 flex items-center gap-6">
        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
        <div className="flex-1 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
              <span>{product.variant}</span>
              <span>•</span>
              <span className="font-bold text-gray-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
              <span className="w-8 text-center font-bold text-xs">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
            </div>
            <button onClick={() => setIsRemoved(true)} className="text-xs font-semibold text-rose-600 hover:underline">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 18. FEATURED CART ITEM
writeComponent('cart-items-section-18', 'CartItemsSection18', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Sparkles, Gift } from 'lucide-react';

export interface CartItemsSection18Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection18: React.FC<CartItemsSection18Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "FEATURED SPOTLIGHT" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Featured Spotlight Cart Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto border-2 border-amber-500/80 rounded-3xl p-8 bg-slate-950 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Featured Item
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden border border-amber-500/30">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-amber-100">{product.name}</h3>
            <p className="text-xs text-slate-400">{product.variant}</p>
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/50 p-3 rounded-xl border border-amber-800/40">
              <Gift className="w-4 h-4" /> Complimentary Luxury Gift Packaging Included
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-3xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 text-amber-400"><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center font-bold text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1 text-amber-400"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-400 hover:bg-rose-950 rounded-xl"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 19. INTERACTIVE EXPANSION ITEM
writeComponent('cart-items-section-19', 'CartItemsSection19', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Sliders } from 'lucide-react';

export interface CartItemsSection19Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection19: React.FC<CartItemsSection19Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "INTERACTIVE DRAWER" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Interactive Drawer Expansion Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{product.name}</h3>
              <span className="text-xs text-slate-500">{product.variant}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">{product.currency}{product.unitPrice * qty}</span>
            <button onClick={() => setOpenDrawer(!openDrawer)} className="p-2 border rounded-xl hover:bg-slate-50 flex items-center gap-1 text-xs font-semibold">
              <Sliders className="w-4 h-4" /> Configure
            </button>
          </div>
        </div>

        {openDrawer && (
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">Adjust Quantity</label>
              <div className="flex items-center border rounded-xl p-1 w-max">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <button onClick={() => setIsRemoved(true)} className="text-rose-600 font-bold hover:underline flex items-center gap-1"><Trash2 className="w-4 h-4" /> Remove Item</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 20. AWARD-LEVEL EXPERIMENTAL ITEM
writeComponent('cart-items-section-20', 'CartItemsSection20', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Zap } from 'lucide-react';

export interface CartItemsSection20Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection20: React.FC<CartItemsSection20Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "AVANT-GARDE EXPERIMENTAL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Experimental Avant-Garde Cart Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-48 h-64 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-zinc-700">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
            <Zap className="w-3 h-3" /> {product.badge}
          </div>
          <h3 className="text-3xl font-black tracking-tight">{product.name}</h3>
          <p className="text-xs text-zinc-400">{product.variant}</p>
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <span className="text-4xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-2xl p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:text-amber-400"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2 hover:text-amber-400"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="p-3 bg-rose-950 text-rose-400 rounded-2xl hover:bg-rose-900"><Trash2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully generated Cart Item 16-20 structural components!');
