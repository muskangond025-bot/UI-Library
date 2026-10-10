import React from 'react';
import { Package, ShoppingBag, ArrowUpRight } from 'lucide-react';

export const EmptyOrderHistory3: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#e6ecf0] text-slate-800">
      <div className="max-w-3xl mx-auto">
        <div className="p-10 md:p-16 rounded-[40px] bg-[#e6ecf0] shadow-[20px_20px_60px_#c3c9cd,-20px_-20px_60px_#ffffff] text-center border border-white/40">
          <div className="mx-auto w-32 h-32 mb-8 rounded-full bg-[#e6ecf0] shadow-[inset_10px_10px_20px_#c3c9cd,inset_-10px_-10px_20px_#ffffff] flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#e6ecf0] shadow-[6px_6px_12px_#c3c9cd,-6px_-6px_12px_#ffffff] flex items-center justify-center">
              <Package className="w-10 h-10 text-blue-600 animate-pulse" />
            </div>
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Neumorphic Soft Parcel
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            No Order History Available
          </h2>
          <p className="text-slate-600 max-w-md mx-auto mb-10 text-sm md:text-base leading-relaxed">
            Your delivery history is completely clean. Start shopping today to receive fast doorstep deliveries & live status alerts.
          </p>

          <button className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold shadow-[8px_8px_16px_#c3c9cd,-8px_-8px_16px_#ffffff] hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto">
            <ShoppingBag className="w-5 h-5" />
            <span>Shop New Arrivals</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory3;
