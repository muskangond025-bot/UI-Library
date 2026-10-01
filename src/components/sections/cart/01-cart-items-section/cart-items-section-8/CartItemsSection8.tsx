import React, { useState } from 'react';
import { Minus, Plus, Trash2, ChevronDown, ChevronUp, Info } from 'lucide-react';

export interface CartItemsSection8Props { data?: { heading?: string; description?: string; product?: any; }; }

export const CartItemsSection8: React.FC<CartItemsSection8Props> = ({ data }) => {
  const product = data?.product || { name: "Aethelgard Cashmere & Leather Craft Item", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800", variant: "Midnight Black / Size 50", quantity: 1, unitPrice: 1250, currency: "$", badge: "EXPANDABLE ACCORDION" };
  const [qty, setQty] = useState(product.quantity || 1);
  const [expanded, setExpanded] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "08. Card with Expandable Details"}</h2>
        <p className="text-xs text-slate-500 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 flex items-center justify-between gap-4">
          <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover" />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-slate-900 dark:text-white truncate">{product.name}</h3>
            <p className="text-xs text-slate-500">{product.variant}</p>
          </div>
          <div className="text-right">
            <span className="text-lg font-black block">{product.currency}{product.unitPrice * qty}</span>
            <button onClick={() => setExpanded(!expanded)} className="text-xs text-indigo-600 flex items-center gap-1 font-semibold hover:underline mt-1">
              <Info className="w-3 h-3" /> {expanded ? "Hide Details" : "View Details"} {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {expanded && (
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
            <p><strong>Material:</strong> 100% Cashmere & Full-Grain Leather</p>
            <p><strong>Warranty:</strong> Lifetime Guarantee & Free Repairs</p>
            <p><strong>Returns:</strong> 30-Day Complimentary Return Policy</p>
            <div className="pt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>Qty:</span>
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-1 border rounded"><Minus className="w-3 h-3" /></button>
                <span className="font-bold px-2">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-1 border rounded"><Plus className="w-3 h-3" /></button>
              </div>
              <button onClick={() => setIsRemoved(true)} className="text-rose-600 font-bold hover:underline">Remove Item</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
