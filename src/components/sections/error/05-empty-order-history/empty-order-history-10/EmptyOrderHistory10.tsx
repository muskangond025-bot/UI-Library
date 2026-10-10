import React from 'react';
import { Package, Terminal, Zap } from 'lucide-react';

export const EmptyOrderHistory10: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-black text-cyan-400 relative font-mono overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="relative mx-auto w-36 h-36 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 border-2 border-cyan-500 rounded-full animate-ping [animation-duration:2s]" />
          <div className="relative w-28 h-28 bg-slate-950 border border-cyan-500 flex items-center justify-center shadow-[0_0_30px_#06b6d4]">
            <Package className="w-14 h-14 text-cyan-500" />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
          [ ORDER_INDEX == NULL ]
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-md mx-auto mb-8 font-sans">
          Logistics database query returned 0 historical shipments. Initiate your first dispatch request today.
        </p>

        <button className="px-8 py-4 rounded-none bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors shadow-[4px_4px_0px_#fff]">
          EXECUTE FIRST ORDER
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory10;
