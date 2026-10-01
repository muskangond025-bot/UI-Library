import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection10({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-3xl mx-auto text-center">
        {/* SVG Circle Mask Expansion Icon */}
        <motion.div 
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-24 h-24 rounded-full bg-amber-400/10 border-2 border-amber-400 mx-auto flex items-center justify-center mb-6 shadow-xl shadow-amber-400/10"
        >
          <Tag className="w-10 h-10 text-amber-400" />
        </motion.div>

        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">10 / SVG CIRCLE MASK EXPANSION</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">{settings.subtitle}</p>

        <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>{settings.primaryCta?.label || 'Browse Categories'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection10;