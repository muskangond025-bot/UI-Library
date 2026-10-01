import React, { useState } from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export interface CartItemsSection17Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection17: React.FC<CartItemsSection17Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "INLINE CONTROLS" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "17. Inline Control Integrated Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 border rounded-2xl p-6 flex items-center gap-6">
        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
        <div className="flex-1 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
            <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
              <span>{product.variant}</span>
              <span>•</span>
              <span className="font-bold text-gray-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
              <span className="w-8 text-center font-bold text-xs">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
            </div>
            <button onClick={() => setIsRemoved(true)} className="text-xs font-semibold text-rose-600 hover:underline">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};
