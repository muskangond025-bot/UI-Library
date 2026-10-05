import React from 'react';
import { motion } from 'framer-motion';
import { Tag, TrendingDown } from 'lucide-react';

export function AccountWishlist9() {
  const items = [
    { id: '1', name: 'Nike Air Max 270', price: '$150', oldPrice: '$180', drop: 'Save $30', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">
          <TrendingDown className="w-4 h-4" /> Price Drop Monitor
        </div>
        <h2 className="text-3xl font-bold text-white mb-8">Items On Sale</h2>

        {items.map((item) => (
          <div key={item.id} className="p-6 rounded-3xl bg-slate-800 border-2 border-emerald-500/50 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-slate-900" />
              <div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  {item.drop}
                </span>
                <h3 className="font-bold text-white text-lg mt-2">{item.name}</h3>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">{item.price}</p>
              <p className="text-xs text-slate-500 line-through">{item.oldPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AccountWishlist9;
