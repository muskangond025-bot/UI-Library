import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection16Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection16: React.FC<CartItemsSection16Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "MOBILE TOUCH FIRST" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-8 px-4 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-md mx-auto mb-4">
        <h2 className="text-lg font-bold">{data?.heading || "16. Mobile-First Touch Cart Item"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 shadow-md flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <img src={product.image} alt={product.name} className="w-24 h-24 rounded-2xl object-cover" />
          <div className="flex-1">
            <span className="text-[10px] font-bold text-indigo-600 uppercase">{product.badge}</span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">{product.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{product.variant}</p>
            <span className="text-lg font-black text-slate-900 dark:text-white mt-1 block">{product.currency}{product.unitPrice * qty}</span>
          </div>
        </div>
        
        {/* Large 48px touch targets */}
        <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-700/50 p-2 rounded-2xl border">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm text-lg font-bold"><Minus className="w-5 h-5" /></button>
          <span className="font-extrabold text-base">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-800 rounded-xl shadow-sm text-lg font-bold"><Plus className="w-5 h-5" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-1">
          <button onClick={() => setIsRemoved(true)} className="h-12 flex items-center justify-center gap-2 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50"><Trash2 className="w-4 h-4" /> Remove</button>
          <button className="h-12 flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs rounded-xl"><Heart className="w-4 h-4" /> Save</button>
        </div>
      </div>
    </section>
  );
};
