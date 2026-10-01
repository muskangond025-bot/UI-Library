import React, { useState } from 'react';
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
