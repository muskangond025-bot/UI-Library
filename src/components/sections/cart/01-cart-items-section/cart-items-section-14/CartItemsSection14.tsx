import React, { useState } from 'react';
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
