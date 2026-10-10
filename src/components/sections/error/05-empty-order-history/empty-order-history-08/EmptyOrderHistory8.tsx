import React from 'react';
import { Package, Gamepad2, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory8: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-amber-400 font-mono relative">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-black border-4 border-amber-500/80 shadow-[0_0_30px_rgba(245,158,11,0.3)] text-center">
        <div className="flex justify-between items-center text-xs text-amber-600 mb-6 border-b border-amber-900 pb-3">
          <span>COMPLETED QUESTS: 0</span>
          <span className="animate-pulse">INSERT COIN FOR FIRST ORDER</span>
          <span>XP POINTS: 0000</span>
        </div>

        <div className="w-24 h-24 mx-auto mb-6 bg-amber-950 border-2 border-amber-400 flex items-center justify-center">
          <Package className="w-12 h-12 text-amber-400 animate-ping [animation-duration:1.5s]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wider">
          ORDER LOG: 0 QUESTS
        </h2>
        <p className="text-amber-500 text-sm md:text-base max-w-md mx-auto mb-8">
          NO SAVED SHIPMENTS IN YOUR QUEST INVENTORY. COMPLETE YOUR FIRST PURCHASING MISSION!
        </p>

        <button className="px-8 py-4 rounded bg-amber-500 text-black font-black text-base hover:bg-amber-400 transition-colors uppercase tracking-widest inline-flex items-center gap-3">
          <Gamepad2 className="w-5 h-5" />
          <span>START FIRST QUEST</span>
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory8;
