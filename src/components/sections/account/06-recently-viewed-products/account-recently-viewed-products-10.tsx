import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AccountRecentlyViewedProducts10() {
  const [index, setIndex] = useState(0);
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white mb-8">Infinite Browsing Menu</h2>
        <div className="w-[300px] mx-auto p-6 rounded-3xl bg-slate-900 border border-slate-800 text-left">
          <img src={items[0].image} alt="Product" className="aspect-square rounded-2xl object-cover mb-4" />
          <h3 className="font-bold text-white">{items[0].name}</h3>
          <p className="text-indigo-400 font-bold">{items[0].price}</p>
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts10;
