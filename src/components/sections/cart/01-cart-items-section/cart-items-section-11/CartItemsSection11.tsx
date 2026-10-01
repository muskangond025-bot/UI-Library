import React, { useState } from 'react';
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
