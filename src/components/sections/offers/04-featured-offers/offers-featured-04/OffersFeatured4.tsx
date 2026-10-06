import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function OffersFeatured4() {
  const items = [
    { code: 'OFFER-01', title: 'SWISS ARCHITECTURAL WATCH', discount: '40% SAVINGS', price: '$240', orig: '$400' },
    { code: 'OFFER-02', title: 'BAUHAUS STUDIO LAMP', discount: '50% SAVINGS', price: '$180', orig: '$360' },
    { code: 'OFFER-03', title: 'MINIMALIST DESK ORGANIZER', discount: '35% SAVINGS', price: '$45', orig: '$70' },
    { code: 'OFFER-04', title: 'TYPOGRAPHIC POSTER BUNDLE', discount: '60% SAVINGS', price: '$60', orig: '$150' }
  ];

  return (
    <div className="w-full bg-white text-zinc-950 p-8 sm:p-12 font-sans border border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-zinc-200 pb-8 mb-8 gap-6">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">SECTION // 04 · FLAT SWISS STUDIO</span>
            <h2 className="text-5xl font-light tracking-tighter mt-2 uppercase">BRIGHT FEATURED DIRECTORY</h2>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between text-sm text-zinc-600 font-mono">
            <p>Pure bright white 2D Swiss architecture with 1px structural line division. Zero elevation or shadow depth.</p>
            <div className="text-xs text-zinc-400 mt-4">INDEX: BRIGHT STUDIO 2026</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-200 border-t border-b border-zinc-200">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col justify-between h-72 hover:bg-zinc-50 transition-colors group">
              <div className="flex justify-between items-start font-mono text-xs text-zinc-500">
                <span>[{item.code}]</span>
                <span className="text-black bg-zinc-100 px-2 py-0.5 border border-zinc-300 font-bold">{item.discount}</span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-zinc-900 mb-2 leading-tight group-hover:underline">{item.title}</h3>
              </div>

              <div className="flex justify-between items-end border-t border-zinc-200 pt-4 font-mono">
                <div>
                  <span className="text-2xl font-light text-zinc-950">{item.price}</span>
                  <span className="text-xs text-zinc-400 line-through ml-2">{item.orig}</span>
                </div>
                <button className="p-2 border border-zinc-300 hover:bg-zinc-950 hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured4;
