import React, { useState } from 'react';
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
