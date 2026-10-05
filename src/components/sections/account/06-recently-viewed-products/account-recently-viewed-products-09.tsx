import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Search } from 'lucide-react';

export function AccountRecentlyViewedProducts9() {
  const categories = ['Sneakers', 'Streetwear', 'Chronographs', 'Audio Tech'];
  const items = [
    { id: '1', name: 'Nike Air Max Pulse', price: '$150', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Oversized Denim Jacket', price: '$120', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Banner Hero */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-indigo-900 to-purple-950 border border-indigo-500/30 text-center space-y-4 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-indigo-300">
            <Sparkles className="w-4 h-4" /> RESUME SESSION
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">CONTINUE EXPLORING</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Jump straight back into your recent search topics and saved product discoveries.</p>
          
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white cursor-pointer transition-all">
                <Search className="w-3 h-3 inline mr-1.5" /> {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Recently Explored Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <motion.div key={item.id} whileHover={{ y: -4 }} className="p-6 rounded-3xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover bg-slate-900" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Saved Session Item</span>
                  <h3 className="font-bold text-white text-lg">{item.name}</h3>
                  <p className="text-indigo-400 font-bold">{item.price}</p>
                </div>
              </div>
              <button className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white">
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts9;
