import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame } from 'lucide-react';

export function OffersHero2({ data, section }: { data?: any; section?: any }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const pct = Math.max(25, Math.min(75, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[500px] bg-neutral-950 text-white rounded-3xl overflow-hidden border border-neutral-800 select-none shadow-2xl"
    >
      <div 
        className="absolute inset-y-0 left-0 bg-neutral-900 p-8 md:p-14 flex flex-col justify-center z-10 transition-all duration-75"
        style={{ width: sliderPos + '%' }}
      >
        <div className="max-w-md space-y-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">
            <Flame className="w-3.5 h-3.5" />
            <span>FLASH OFFER STAGE</span>
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            FLAT <span className="text-red-500">40% OFF</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
            Unlock premium seasonal releases with direct checkout vouchers. Move slider to reveal campaign details.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2">
              <span>SHOP DEAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="px-3.5 py-2.5 bg-neutral-800 rounded-lg text-xs font-mono text-neutral-300">
              CODE: <strong className="text-white">SPLIT40</strong>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-y-0 right-0 bg-cover bg-center transition-all duration-75"
        style={{ 
          width: (100 - sliderPos) + '%',
          backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/40" />
        <div className="absolute bottom-8 right-8 bg-neutral-900/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-neutral-700 text-right">
          <div className="text-xs text-neutral-400 uppercase font-semibold">Featured Edit</div>
          <div className="text-lg font-bold text-white">Autumn Minimalist</div>
        </div>
      </div>

      <div 
        className="absolute top-0 bottom-0 w-1 bg-red-500 z-20 cursor-ew-resize shadow-[0_0_15px_rgba(239,68,68,0.8)]"
        style={{ left: sliderPos + '%' }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-500 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-lg">
          ↔
        </div>
      </div>
    </div>
  );
}

export default OffersHero2;
