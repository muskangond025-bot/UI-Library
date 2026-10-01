import React, { useState } from 'react';
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
