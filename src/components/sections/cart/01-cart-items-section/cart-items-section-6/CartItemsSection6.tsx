import React, { useState } from 'react';
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
