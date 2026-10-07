import React, { useState } from 'react';
import { Gamepad2, Trophy, Flame, Play, Star } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping17({ section }: SectionProps) {
  const [level, setLevel] = useState(2);

  const levels = [
    { lvl: 1, title: 'LEVEL 1: STANDARD', cost: '$0 - $35', perk: 'Standard Freight ($6.99)' },
    { lvl: 2, title: 'LEVEL 2: UNLOCKED!', cost: '$50 CART', perk: '100% FREE EXPRESS DELIVERY' },
    { lvl: 3, title: 'LEVEL 3: VIP AIR', cost: '$100 CART', perk: 'FREE NEXT-DAY DISPATCH' }
  ];

  return (
    <section className="w-full py-16 px-4 bg-purple-950 font-mono text-emerald-400 border-y border-purple-800">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        
        {/* Arcade Title Header */}
        <div className="space-y-2 max-w-md mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-900 border border-emerald-400 text-emerald-300 text-xs font-bold uppercase">
            <Gamepad2 className="w-4 h-4" />
            <span>90S ARCADE PIXEL STYLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-amber-300 tracking-wider uppercase drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
            LEVEL UNLOCKED SHIPPING PERKS
          </h2>
        </div>

        {/* Retro Screen Card */}
        <div className="bg-slate-950 border-4 border-emerald-400 rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(16,185,129,0.3)] space-y-8 max-w-2xl mx-auto">
          
          <div className="flex items-center justify-between border-b-2 border-emerald-900 pb-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Trophy className="w-4 h-4" /> HIGH SCORE: $0 FEES
            </span>
            <span className="text-emerald-400 animate-pulse">● STAGE 2 ACTIVE</span>
          </div>

          <div className="space-y-4">
            {levels.map((item) => {
              const active = item.lvl === level;
              return (
                <div
                  key={item.lvl}
                  onClick={() => setLevel(item.lvl)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between gap-4 ${
                    active 
                      ? 'bg-purple-900/60 border-amber-300 text-white shadow-[4px_4px_0px_0px_rgba(252,211,77,1)]' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] font-bold text-amber-400 block">{item.title}</span>
                    <span className="text-sm font-black text-white block">{item.perk}</span>
                  </div>

                  <span className="px-3 py-1 bg-slate-950 border border-slate-700 rounded text-xs font-bold">
                    {item.cost}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-xs text-slate-400 font-sans">
            Click level stages to simulate shipping unlock tier progression.
          </div>

        </div>

      </div>
    </section>
  );
}

export default OffersFreeShipping17;
