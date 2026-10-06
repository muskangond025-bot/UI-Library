import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function OffersFeatured1() {
  const deals = [
    { title: 'NEO AUDIO PRO HEADSETS', price: '$99', original: '$199', off: '50% SAVINGS', badge: 'STICKER DROP' },
    { title: 'BRUTALIST MECHA KEYBOARD', price: '$69', original: '$149', off: '53% SAVINGS', badge: 'VAULT FEATURED' },
    { title: 'STARK DESK MONITORS 4K', price: '$249', original: '$499', off: '50% SAVINGS', badge: 'MEGA DROP' }
  ];

  return (
    <div className="w-full bg-yellow-400 text-black p-6 sm:p-10 font-mono border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="border-b-4 border-black pb-6">
          <span className="bg-black text-yellow-400 text-xs font-black px-3 py-1 uppercase shadow-[2px_2px_0px_0px_rgba(255,255,0,1)]">
            NEO-BRUTALIST FEATURED DROPS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase mt-2">
            FEATURED STICKER VAULT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, x: -4, boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)' }}
              className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-yellow-400 border-2 border-black px-2 py-0.5 text-[10px] font-black">{item.badge}</span>
                  <span className="bg-black text-white px-2 py-0.5 text-xs font-bold">{item.off}</span>
                </div>
                <h3 className="font-black text-xl leading-tight mb-4 uppercase">{item.title}</h3>
              </div>

              <div className="pt-4 border-t-2 border-black flex justify-between items-center">
                <div>
                  <span className="text-3xl font-black">{item.price}</span>
                  <span className="text-xs line-through text-zinc-500 ml-2">{item.original}</span>
                </div>
                <button className="px-4 py-2 bg-black text-yellow-400 border-2 border-black font-black text-xs uppercase hover:bg-yellow-400 hover:text-black transition-colors flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  CLAIM <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured1;
