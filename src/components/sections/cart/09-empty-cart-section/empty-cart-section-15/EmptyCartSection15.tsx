import React from 'react';
import { motion } from 'framer-motion';

export function EmptyCartSection15({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-24 px-6 lg:px-12 bg-black text-white font-serif border-y border-neutral-900">
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-lg mx-auto text-center"
      >
        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">CART / 00 // LUXURY MINIMAL</span>
        <h2 className="text-3xl sm:text-5xl font-normal tracking-wide text-neutral-100 mb-4 italic">Nothing here yet.</h2>
        <p className="text-xs font-sans text-neutral-400 max-w-xs mx-auto mb-8 font-light">{settings.subtitle}</p>
        <button className="text-xs font-sans font-bold tracking-widest uppercase text-white underline underline-offset-8 hover:text-amber-400 transition-colors">
          {settings.primaryCta?.label || 'DISCOVER THE COLLECTION'}
        </button>
      </motion.div>
    </section>
  );
}
export default EmptyCartSection15;