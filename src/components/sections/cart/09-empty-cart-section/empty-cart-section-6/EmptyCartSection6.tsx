import React from 'react';
import { ShoppingBag, Search, PlusCircle, CreditCard, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection6({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-16 px-6 lg:px-12 bg-slate-900 text-white font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">06 / SVG PROGRESSIVE PATH JOURNEY</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-8">{settings.title}</h2>

        {/* Animated SVG Path Line */}
        <div className="relative mb-10 px-4">
          <svg viewBox="0 0 400 20" className="w-full h-6 text-slate-800 overflow-visible mb-6">
            <line x1="20" y1="10" x2="380" y2="10" stroke="currentColor" strokeWidth="4" />
            <motion.line 
              x1="20" y1="10" x2="380" y2="10" 
              stroke="#22d3ee" strokeWidth="4" strokeDasharray="20 10"
              animate={{ strokeDashoffset: [-60, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-400 text-white shadow-lg shadow-cyan-500/10">
              <ShoppingBag className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <span className="text-xs font-bold block">01 / Empty Cart</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <Search className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">02 / Explore</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <PlusCircle className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">03 / Add Items</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-500">
              <CreditCard className="w-5 h-5 mx-auto mb-2" />
              <span className="text-xs font-bold block">04 / Checkout</span>
            </div>
          </div>
        </div>

        <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider inline-flex items-center gap-2">
          <span>Start Shopping Journey</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection6;