import React, { useState } from 'react';
import { Minus, Plus, Trash2, Sliders } from 'lucide-react';

export interface CartItemsSection19Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection19: React.FC<CartItemsSection19Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "INTERACTIVE DRAWER" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "19. Interactive Drawer Expansion Item"}</h2>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{product.name}</h3>
              <span className="text-xs text-slate-500">{product.variant}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold">{product.currency}{product.unitPrice * qty}</span>
            <button onClick={() => setOpenDrawer(!openDrawer)} className="p-2 border rounded-xl hover:bg-slate-50 flex items-center gap-1 text-xs font-semibold">
              <Sliders className="w-4 h-4" /> Configure
            </button>
          </div>
        </div>

        {openDrawer && (
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-bold block mb-1">Adjust Quantity</label>
              <div className="flex items-center border rounded-xl p-1 w-max">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1"><Minus className="w-4 h-4" /></button>
                <span className="w-10 text-center font-bold">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1"><Plus className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <button onClick={() => setIsRemoved(true)} className="text-rose-600 font-bold hover:underline flex items-center gap-1"><Trash2 className="w-4 h-4" /> Remove Item</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
