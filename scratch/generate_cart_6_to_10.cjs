const fs = require('fs');
const path = require('path');

const baseDir = 'src/components/sections/cart/01-cart-items-section';

function writeComponent(folder, name, code) {
  const filePath = path.join(baseDir, folder, `${name}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// 06. ASYMMETRIC EDITORIAL
writeComponent('cart-items-section-6', 'CartItemsSection6', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection6Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection6: React.FC<CartItemsSection6Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "ASYMMETRIC" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-stone-100 dark:bg-stone-900">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "06. Asymmetric Editorial Cart Item"}</h2>
        <p className="text-xs text-stone-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        <div className="md:col-span-7 bg-white dark:bg-stone-800 p-4 rounded-3xl border border-stone-200 dark:border-stone-700 flex gap-6 items-center">
          <img src={product.image} alt={product.name} className="w-36 h-48 object-cover rounded-2xl flex-shrink-0" />
          <div>
            <span className="text-[10px] font-bold text-amber-600 tracking-widest uppercase">{product.badge}</span>
            <h3 className="text-lg font-bold text-stone-900 dark:text-white mt-1">{product.name}</h3>
            <p className="text-xs text-stone-500 mt-1">{product.variant}</p>
          </div>
        </div>
        <div className="md:col-span-5 bg-stone-900 text-white p-6 rounded-3xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-xs text-stone-400">Total Price</span>
            <span className="text-2xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
          </div>
          <div className="flex items-center justify-between border-t border-b border-stone-800 py-3 my-4">
            <span className="text-xs text-stone-400">Qty</span>
            <div className="flex items-center gap-3">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:bg-stone-800 rounded"><Minus className="w-3.5 h-3.5" /></button>
              <span className="font-mono text-sm font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-1 hover:bg-stone-800 rounded"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          <button onClick={() => setIsRemoved(true)} className="text-xs text-rose-400 hover:underline text-left">Remove Item</button>
        </div>
      </div>
    </section>
  );
};
`);

// 07. PRODUCT STORY ITEM
writeComponent('cart-items-section-7', 'CartItemsSection7', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, BookOpen } from 'lucide-react';

export interface CartItemsSection7Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection7: React.FC<CartItemsSection7Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "CRAFT STORY" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-amber-50/40 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Product Story Magazine Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto border border-amber-200/60 dark:border-slate-800 rounded-3xl p-8 bg-white dark:bg-slate-900 shadow-sm">
        <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-4">
          <BookOpen className="w-4 h-4" /> Provenance & Story
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 aspect-[3/4] rounded-2xl overflow-hidden bg-amber-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">{product.name}</h3>
              <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-1">{product.variant}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Spun from pure grade-A Mongolian cashmere fiber and finished with custom hand-burnished leather trim. Each piece requires 14 hours of master tailor assembly.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Unit Value</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="w-8 text-center text-xs font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
                </div>
                <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 08. CARD WITH EXPANDABLE DETAILS
writeComponent('cart-items-section-8', 'CartItemsSection8', `import React, { useState } from 'react';
import { Minus, Plus, Trash2, ChevronDown, ChevronUp, Info } from 'lucide-react';

export interface CartItemsSection8Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection8: React.FC<CartItemsSection8Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "EXPANDABLE ACCORDION" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [expanded, setExpanded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Card with Expandable Details"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 flex items-center justify-between gap-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-900 dark:text-white truncate">{product.name}</h3>
            <p className="text-xs text-slate-500">{product.variant}</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-black block">{product.currency}{product.unitPrice * qty}</span>
            <button onClick={() => setExpanded(!expanded)} className="text-xs text-indigo-600 flex items-center gap-1 font-semibold hover:underline mt-1">
              <Info className="w-3 h-3" /> {expanded ? "Hide Details" : "View Details"} {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <p><strong>Material:</strong> 100% Cashmere & Full-Grain Leather</p>
            <p><strong>Warranty:</strong> Lifetime Guarantee & Free Repairs</p>
            <p><strong>Returns:</strong> 30-Day Complimentary Return Policy</p>
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>Qty:</span>
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 border rounded"><Minus className="w-3 h-3" /></button>
                <span className="font-bold px-2">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1 border rounded"><Plus className="w-3 h-3" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="text-rose-600 font-bold hover:underline">Remove Item</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
`);

// 09. IMAGE + OVERLAY INFORMATION ITEM
writeComponent('cart-items-section-9', 'CartItemsSection9', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection9Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection9: React.FC<CartItemsSection9Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "OVERLAY GRADIENT" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Image + Overlay Information Item"}</h2>
        <p className="text-xs text-slate-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden h-96 group">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">{product.badge}</span>
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-xs text-slate-300 mt-1">{product.variant}</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-rose-400">{product.currency}{product.unitPrice * qty}</span>
              <div className="flex items-center gap-3 mt-3 bg-white/10 backdrop-blur-md rounded-xl p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1.5"><Minus className="w-3.5 h-3.5" /></button>
                <span className="font-bold text-xs">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1.5"><Plus className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

// 10. STRUCTURED TABLE-STYLE LINE ITEM
writeComponent('cart-items-section-10', 'CartItemsSection10', `import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection10Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection10: React.FC<CartItemsSection10Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "TABULAR GRID" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "10. Structured Table-Style Line Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden p-6">
        <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-400 uppercase">
          <div className="col-span-5">Product</div>
          <div className="col-span-2">Unit Price</div>
          <div className="col-span-2">Quantity</div>
          <div className="col-span-2 text-right">Subtotal</div>
          <div className="col-span-1 text-center">Action</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-4 text-xs">
          <div className="md:col-span-5 flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-14 h-14 rounded-lg object-cover" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{product.name}</h3>
              <span className="text-slate-500 text-[11px]">{product.variant}</span>
            </div>
          </div>
          <div className="md:col-span-2 font-mono text-slate-600 dark:text-slate-400">{product.currency}{product.unitPrice}</div>
          <div className="md:col-span-2 flex items-center gap-1 border border-slate-300 dark:border-slate-700 rounded p-1 w-max">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3 h-3" /></button>
            <span className="w-6 text-center font-bold">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3 h-3" /></button>
          </div>
          <div className="md:col-span-2 text-right font-bold text-sm font-mono text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</div>
          <div className="md:col-span-1 text-center">
            <button onClick={() => setIsRemoved(true)} className="text-rose-500 hover:text-rose-700 p-2"><Trash2 className="w-4 h-4 mx-auto" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
`);

console.log('Successfully generated Cart Item 6-10 structural components!');
