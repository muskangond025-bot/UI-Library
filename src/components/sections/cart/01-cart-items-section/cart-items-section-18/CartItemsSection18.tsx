import React, { useState } from 'react';
import { Minus, Plus, Trash2, Sparkles, Gift } from 'lucide-react';

export interface CartItemsSection18Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection18: React.FC<CartItemsSection18Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "FEATURED SPOTLIGHT" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Featured Spotlight Cart Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto border-2 border-amber-500/80 rounded-3xl p-8 bg-slate-950 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Featured Item
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 aspect-square rounded-2xl overflow-hidden border border-amber-500/30">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="md:col-span-8 space-y-4">
            <h3 className="text-2xl font-bold text-amber-100">{product.name}</h3>
            <p className="text-xs text-slate-400">{product.variant}</p>
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/50 p-3 rounded-xl border border-amber-800/40">
              <Gift className="w-4 h-4" /> Complimentary Luxury Gift Packaging Included
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-3xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-slate-900 border border-slate-700 rounded-xl p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 text-amber-400"><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center font-bold text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="p-1 text-amber-400"><Plus className="w-4 h-4" /></button>
                </div>
                <button onClick={() => setIsRemoved(true)} className="p-2 text-rose-400 hover:bg-rose-950 rounded-xl"><Trash2 className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
