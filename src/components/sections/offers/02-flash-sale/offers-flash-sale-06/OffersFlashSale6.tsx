import React from 'react';
import { motion } from 'framer-motion';

export function OffersFlashSale6() {
  const collections = [
    { num: 'N° 01', title: 'SILK DRAPED TRENCH', orig: '$850', sale: '$340', disc: '60% REDUCTION' },
    { num: 'N° 02', title: 'SCULPTED LEATHER BOOT', orig: '$620', sale: '$290', disc: '53% REDUCTION' },
    { num: 'N° 03', title: 'CASHMERE OVERSIZED KNIT', orig: '$480', sale: '$210', disc: '56% REDUCTION' }
  ];

  return (
    <div className="w-full bg-stone-900 text-stone-100 p-8 sm:p-14 font-serif border border-stone-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-sans tracking-[0.3em] text-stone-400 uppercase">AUTUMN ARCHIVE FLASH SALE</span>
          <h2 className="text-5xl sm:text-7xl font-light italic tracking-tight text-stone-100">
            The Editorial Drop
          </h2>
          <div className="w-24 h-[1px] bg-stone-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="bg-stone-950 p-8 border border-stone-800 flex flex-col justify-between h-[420px] group transition-all"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-sans text-stone-500 tracking-widest mb-6">
                  <span>{item.num}</span>
                  <span className="text-amber-300 font-serif italic">{item.disc}</span>
                </div>
                <div className="w-full h-44 bg-stone-900 mb-6 border border-stone-800 flex items-center justify-center text-stone-700 font-sans text-xs tracking-widest group-hover:border-stone-600 transition-colors">
                  [ EDITORIAL EXHIBIT ]
                </div>
                <h3 className="font-normal text-xl tracking-wide text-stone-200 mb-2">{item.title}</h3>
              </div>

              <div className="flex justify-between items-baseline pt-4 border-t border-stone-800 font-sans">
                <div>
                  <span className="text-2xl font-light text-white">{item.sale}</span>
                  <span className="text-xs line-through text-stone-500 ml-2">{item.orig}</span>
                </div>
                <button className="text-xs tracking-widest uppercase text-stone-400 group-hover:text-white transition-colors">
                  ACQUIRE →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale6;
