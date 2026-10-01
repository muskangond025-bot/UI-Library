import React, { useState } from 'react';
import { Minus, Plus, Trash2, Zap } from 'lucide-react';

export interface CartItemsSection20Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection20: React.FC<CartItemsSection20Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "AVANT-GARDE EXPERIMENTAL" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-12 px-4 bg-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "20. Experimental Avant-Garde Cart Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto relative border border-zinc-800 rounded-3xl p-8 bg-zinc-950 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-48 h-64 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-zinc-700">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="inline-flex items-center gap-1 bg-amber-400 text-black text-[10px] font-black px-3 py-0.5 rounded-full uppercase">
            <Zap className="w-3 h-3" /> {product.badge}
          </div>
          <h3 className="text-3xl font-black tracking-tight">{product.name}</h3>
          <p className="text-xs text-zinc-400">{product.variant}</p>
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <span className="text-4xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-zinc-900 border border-zinc-700 rounded-2xl p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2 hover:text-amber-400"><Minus className="w-4 h-4" /></button>
                <span className="w-8 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-2 hover:text-amber-400"><Plus className="w-4 h-4" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="p-3 bg-rose-950 text-rose-400 rounded-2xl hover:bg-rose-900"><Trash2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
