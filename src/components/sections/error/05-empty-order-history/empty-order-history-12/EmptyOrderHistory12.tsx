import React from 'react';
import { Package, Orbit, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory12: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-indigo-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-indigo-950 border border-indigo-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.4)]">
          <Package className="w-14 h-14 text-indigo-400 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-950 text-indigo-300 border border-indigo-800/60 inline-block mb-4">
          Galactic Delivery Orbit
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">No Orders in Your Orbit</h2>
        <p className="text-indigo-300 max-w-lg mx-auto mb-8 text-base">Launch your first purchase to generate orbital GPS tracking maps.</p>
        <button className="px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)] inline-flex items-center gap-2">
          <Orbit className="w-5 h-5" />
          <span>Launch First Order</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory12;
