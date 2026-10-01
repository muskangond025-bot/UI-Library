import React, { useState } from 'react';
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
