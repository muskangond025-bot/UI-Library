import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection17({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-950 text-white font-sans">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        <motion.div 
          whileHover={{ rotateY: 180, scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-18 h-18 rounded-2xl bg-indigo-600/20 border border-indigo-400 flex items-center justify-center text-indigo-300 mb-4 cursor-pointer shadow-xl shadow-indigo-500/20"
        >
          <ShoppingBag className="w-8 h-8" />
        </motion.div>
        
        <span className="text-xs font-mono font-bold text-indigo-400 uppercase">17 / INTERACTIVE 3D SPRING BADGE</span>
        <h2 className="text-2xl font-extrabold my-2">{settings.title}</h2>
        <p className="text-xs text-slate-400 mb-6 max-w-xs">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-indigo-600/30">
          {settings.primaryCta?.label || 'Discover Products'}
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection17;