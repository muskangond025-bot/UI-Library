import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection2Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection2: React.FC<CartItemsSection2Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "VERTICAL STACK"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-6 text-center">
        <h2 className="text-xl font-bold">{data?.heading || "02. Vertical Stacked Cart Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
        <div className="w-full aspect-square bg-slate-100 rounded-2xl overflow-hidden mb-6">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-wider mb-2">{product.badge}</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{product.name}</h3>
        <p className="text-xs text-slate-500 mt-1 mb-4">{product.variant}</p>
        <div className="text-2xl font-black text-slate-900 dark:text-white mb-6">{product.currency}{product.unitPrice * qty}</div>
        
        {/* Quantity Controls */}
        <div className="flex items-center justify-between w-full bg-slate-50 dark:bg-slate-700/50 rounded-xl p-2 mb-4 border border-slate-200 dark:border-slate-600">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><Minus className="w-4 h-4" /></button>
          <span className="font-bold text-sm">{qty} Units</span>
          <button onClick={() => setQty(qty + 1)} className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm"><Plus className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <button className="py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs rounded-xl shadow">Save for Later</button>
          <button onClick={() => setIsRemoved(true)} className="py-3 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50">Remove</button>
        </div>
      </div>
    </section>
  );
};
