import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function OffersDealsGrid4() {
  const catalog = [
    { code: 'CAT-01', title: 'SWISS CHRONOGRAPH WATCH', discount: '45% SAVINGS', price: '$260', orig: '$480' },
    { code: 'CAT-02', title: 'BAUHAUS DESK LAMP', discount: '50% SAVINGS', price: '$140', orig: '$280' },
    { code: 'CAT-03', title: 'MINIMALIST FOUNTAIN PEN', discount: '30% SAVINGS', price: '$65', orig: '$95' },
    { code: 'CAT-04', title: 'TYPOGRAPHIC SKETCHBOOK', discount: '60% SAVINGS', price: '$24', orig: '$60' }
  ];

  return (
    <div className="w-full bg-zinc-950 text-white p-8 sm:p-12 font-sans border border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-zinc-800 pb-8 mb-8 gap-6">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">SECTION // 04 · FLAT SWISS DIRECTORY</span>
            <h2 className="text-5xl font-light tracking-tighter mt-2 uppercase">DISCOUNT CATALOGUE</h2>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between text-sm text-zinc-400 font-mono">
            <p>Monochrome 2D structural grid layout with zero artificial elevation, shadow depth, or frosted glass. Pure typographic hierarchy.</p>
            <div className="text-xs text-zinc-500 mt-4">OFFER INDEX: 2026 ARCHIVE</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-t border-b border-zinc-800">
          {catalog.map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col justify-between h-72 hover:bg-zinc-900 transition-colors group">
              <div className="flex justify-between items-start font-mono text-xs text-zinc-500">
                <span>[{item.code}]</span>
                <span className="text-white bg-zinc-800 px-2 py-0.5">{item.discount}</span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-white mb-2 leading-tight group-hover:underline">{item.title}</h3>
              </div>

              <div className="flex justify-between items-end border-t border-zinc-800 pt-4 font-mono">
                <div>
                  <span className="text-2xl font-light">{item.price}</span>
                  <span className="text-xs text-zinc-500 line-through ml-2">{item.orig}</span>
                </div>
                <button className="p-2 border border-zinc-700 hover:bg-white hover:text-black transition-colors">
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
export default OffersDealsGrid4;
