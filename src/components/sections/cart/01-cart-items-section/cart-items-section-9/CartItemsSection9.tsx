import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection9Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection9: React.FC<CartItemsSection9Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "OVERLAY GRADIENT" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "09. Image + Overlay Information Item"}</h2>
        <p className="text-xs text-slate-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden h-96 group">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest">{product.badge}</span>
              <h3 className="text-2xl font-bold">{product.name}</h3>
              <p className="text-xs text-slate-300 mt-1">{product.variant}</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-rose-400">{product.currency}{product.unitPrice * qty}</span>
              <div className="flex items-center gap-3 mt-3 bg-white/10 backdrop-blur-md rounded-xl p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1.5"><Minus className="w-3.5 h-3.5" /></button>
                <span className="font-bold text-xs">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1.5"><Plus className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
