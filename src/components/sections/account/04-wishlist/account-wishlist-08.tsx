import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ShoppingBag } from 'lucide-react';

export function AccountWishlist8() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', stock: 'In Stock', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Saved Items List</h2>

        <div className="divide-y divide-slate-800 border-t border-b border-slate-800">
          {items.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover bg-slate-800" />
                <div>
                  <h3 className="font-bold text-white text-sm">{item.name}</h3>
                  <p className="text-xs text-emerald-400 mt-0.5">{item.stock}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="font-bold text-white text-sm">{item.price}</span>
                <button className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold">
                  Move
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist8;
