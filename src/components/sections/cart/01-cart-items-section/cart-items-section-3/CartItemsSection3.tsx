import React, { useState } from 'react';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';

export interface CartItemsSection3Props {
  data?: { heading?: string; description?: string; product?: any; };
}

export const CartItemsSection3: React.FC<CartItemsSection3Props> = ({ data }) => {
  const product = data?.product || {
    name: "Aethelgard Cashmere & Leather Craft Item",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800",
    variant: "Midnight Black / Size 50",
    quantity: 1,
    unitPrice: 1250,
    currency: "$",
    badge: "IMAGE DOMINANT"
  };

  const [qty, setQty] = useState(product.quantity || 1);
  const [isRemoved, setIsRemoved] = useState(false);

  if (isRemoved) return <div className="p-4 text-center text-sm text-gray-500">Item removed. <button onClick={() => setIsRemoved(false)} className="text-indigo-600 underline">Undo</button></div>;

  return (
    <section className="py-10 px-4 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto mb-6">
        <h2 className="text-xl font-bold text-white">{data?.heading || "03. Image Dominant Overlap Cart Item"}</h2>
        <p className="text-xs text-zinc-400 mt-1">{data?.description}</p>
      </div>
      <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800">
        <div className="w-full h-[450px]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center" />
        </div>
        
        {/* Floating Overlapping Panel */}
        <div className="absolute bottom-6 right-6 left-6 md:left-auto md:w-96 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 shadow-2xl">
          <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest">{product.badge}</span>
          <h3 className="text-lg font-bold text-white mt-1">{product.name}</h3>
          <p className="text-xs text-zinc-400 mt-0.5">{product.variant}</p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
            <div>
              <span className="text-xs text-zinc-500 block">Total Price</span>
              <span className="text-xl font-black text-amber-400">{product.currency}{product.unitPrice * qty}</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-1.5">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="text-zinc-400 hover:text-white"><Minus className="w-3.5 h-3.5" /></button>
              <span className="text-xs font-bold w-4 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="text-zinc-400 hover:text-white"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4 text-xs font-semibold">
            <button onClick={() => setIsRemoved(true)} className="text-rose-400 hover:underline flex items-center gap-1"><Trash2 className="w-3.5 h-3.5" /> Remove</button>
            <button className="text-zinc-300 hover:underline flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> Save</button>
          </div>
        </div>
      </div>
    </section>
  );
};
