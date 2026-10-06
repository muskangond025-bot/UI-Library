import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function OffersFlashSale4() {
  const items = [
    { num: '01', title: 'SWISS MONOCHROME WATCH', discount: '40% OFF', price: '$240', status: 'AVAILABLE' },
    { num: '02', title: 'ARCHITECTURAL LAMP 02', discount: '50% OFF', price: '$180', status: 'LOW STOCK' },
    { num: '03', title: 'MINIMALIST DESK MAT', discount: '35% OFF', price: '$45', status: 'AVAILABLE' },
    { num: '04', title: 'TYPOGRAPHIC POSTER SET', discount: '60% OFF', price: '$60', status: 'LAST UNIT' }
  ];

  return (
    <div className="w-full bg-zinc-950 text-white p-8 sm:p-12 font-sans border border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 border-b border-zinc-800 pb-8 mb-8 gap-6">
          <div className="lg:col-span-2">
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">SECTION // 04 · FLAT SWISS</span>
            <h2 className="text-5xl font-light tracking-tighter mt-2 uppercase">FLASH SALE CATALOG</h2>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between text-sm text-zinc-400">
            <p className="max-w-md font-mono">Pure 2D monochrome layout structure without artificial depth or ambient blur. High contrast structural grid hierarchy.</p>
            <div className="font-mono text-xs text-zinc-500 mt-4">END TIME: 23:59:59 UTC</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800 border-t border-b border-zinc-800">
          {items.map((item, idx) => (
            <div key={idx} className="p-6 flex flex-col justify-between h-72 hover:bg-zinc-900 transition-colors group">
              <div className="flex justify-between items-start font-mono text-xs text-zinc-500">
                <span>{item.num}</span>
                <span className="text-white bg-zinc-800 px-2 py-0.5">{item.discount}</span>
              </div>

              <div>
                <h3 className="font-bold text-lg text-white mb-2 leading-tight group-hover:underline">{item.title}</h3>
                <span className="text-xs font-mono text-emerald-400">{item.status}</span>
              </div>

              <div className="flex justify-between items-end border-t border-zinc-800 pt-4">
                <span className="text-2xl font-light font-mono">{item.price}</span>
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
export default OffersFlashSale4;
