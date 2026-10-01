import React, { useState } from 'react';
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
