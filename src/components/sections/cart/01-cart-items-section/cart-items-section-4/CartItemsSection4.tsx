import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart, Shield } from 'lucide-react';

export interface CartItemsSection4Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection4: React.FC<CartItemsSection4Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "SPLIT 50/50"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "04. Split Screen 50/50 Cart Item"}</h2>
        <p className="text-xs text-gray-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="aspect-square bg-gray-100 dark:bg-gray-900">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase">{product.badge}</span>
            <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-3">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">{product.variant}</p>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl text-xs text-gray-600 dark:text-gray-300 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" /> Authenticity & Quality Guaranteed
            </div>
          </div>
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <span className="text-sm text-gray-400">Total Price</span>
              <span className="text-3xl font-black text-gray-900 dark:text-white">{product.currency}{product.unitPrice * qty}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold text-gray-500">Quantity:</span>
              <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg p-1">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-bold text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setIsRemoved(true)} className="flex-1 py-3 border border-rose-200 text-rose-600 font-bold text-xs rounded-xl hover:bg-rose-50">Remove</button>
              <button className="flex-1 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-bold text-xs rounded-xl">Save</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
