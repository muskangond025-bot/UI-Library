import React, { useState } from 'react';
import { Minus, Plus, Trash2, BookOpen } from 'lucide-react';

export interface CartItemsSection7Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection7: React.FC<CartItemsSection7Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "CRAFT STORY" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-amber-50/40 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "07. Product Story Magazine Item"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto border border-amber-200/60 dark:border-slate-800 rounded-3xl p-8 bg-white dark:bg-slate-900 shadow-sm">
        <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase mb-4">
          <BookOpen className="w-4 h-4" /> Provenance & Story
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5 aspect-[3/4] rounded-2xl overflow-hidden bg-amber-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white">{product.name}</h3>
              <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-1">{product.variant}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Spun from pure grade-A Mongolian cashmere fiber and finished with custom hand-burnished leather trim. Each piece requires 14 hours of master tailor assembly.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Unit Value</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="w-8 text-center text-xs font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
                </div>
                <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
