import React from 'react';
import { Truck, ArrowRight } from 'lucide-react';

interface SectionProps {
  section?: {
    id?: string;
    type?: string;
    variant?: string;
    settings?: Record<string, any>;
    styles?: Record<string, any>;
  };
}

export function OffersFreeShipping19({ section }: SectionProps) {
  const marqueeItems = [
    'FREE EXPRESS SHIPPING WORLDWIDE OVER $50',
    '•',
    '100% PRE-PAID DUTIES & TAXES',
    '•',
    'PRE-PAID HASSLE-FREE RETURNS',
    '•',
    'NO CODE REQUIRED AT CHECKOUT',
    '•'
  ];

  return (
    <section className="w-full py-12 bg-black text-white font-mono border-y border-white/20 overflow-hidden">
      
      {/* Swiss Style Minimal Header */}
      <div className="max-w-6xl mx-auto px-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/20 pb-6">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">SWISS MONOCHROME BANNER</span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">FREE SHIPPING STOREWIDE</h2>
        </div>

        <button className="px-6 py-3 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-colors shrink-0">
          SHOP QUALIFYING ITEMS
        </button>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="w-full bg-white text-black py-4 border-y-2 border-black flex overflow-hidden select-none">
        <div className="flex shrink-0 items-center justify-around gap-8 min-w-full animate-[marquee_20s_linear_infinite] font-black text-sm tracking-widest">
          {marqueeItems.concat(marqueeItems).map((text, idx) => (
            <span key={idx}>{text}</span>
          ))}
        </div>
      </div>

    </section>
  );
}

export default OffersFreeShipping19;
