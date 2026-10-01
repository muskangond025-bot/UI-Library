import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection18({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-neutral-950 text-white font-sans">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative border border-neutral-800 bg-neutral-900 h-96 flex items-center p-8 sm:p-12">
        <div className="absolute right-12 top-12 w-48 h-48 hidden md:block">
          <motion.div 
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full border-2 border-dashed border-amber-400/50 rounded-full flex items-center justify-center shadow-xl shadow-amber-400/10"
          >
            <span className="text-xs font-mono text-amber-300 uppercase">SVG ASSEMBLED</span>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-md">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-2">18 / SVG NODE ASSEMBLY</span>
          <h2 className="text-3xl font-extrabold text-white mb-3">{settings.title}</h2>
          <p className="text-xs sm:text-sm text-neutral-300 mb-6">{settings.subtitle}</p>
          <button className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-lg shadow-amber-400/20">
            <span>{settings.primaryCta?.label || 'Explore Store'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default EmptyCartSection18;