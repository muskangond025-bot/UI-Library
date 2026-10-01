import React from 'react';
import { Compass, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection13({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-950 border border-slate-800 rounded-3xl p-8 relative">
        {/* Floating Stack Objects */}
        <motion.div 
          animate={{ y: [-8, 8, -8], rotate: [-4, 4, -4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-xl"
        >
          <ShoppingBag className="w-7 h-7" />
        </motion.div>

        <div>
          <span className="text-xs font-mono font-bold text-indigo-400 uppercase block mb-1">13 / MULTI-LAYER FLOATING STACK</span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">{settings.title}</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-md">{settings.subtitle}</p>
        </div>

        <button className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30">
          <Compass className="w-4 h-4" />
          <span>{settings.primaryCta?.label || 'Explore Store'}</span>
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection13;