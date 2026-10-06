import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, ArrowRight } from 'lucide-react';

export function OffersFeatured10() {
  const arcadeDeals = [
    { title: 'PIXEL ART MECHANICAL KEYBOARD', price: '$89', orig: '$179', badge: 'LEVEL UP - 50% OFF' },
    { title: 'RETRO ARCADE SOUND PODS', price: '$59', orig: '$119', badge: 'BONUS DROP' },
    { title: '8-BIT GAMING MOUSE', price: '$39', orig: '$79', badge: 'HIGH SCORE' }
  ];

  return (
    <div className="w-full bg-indigo-950 text-cyan-300 p-8 sm:p-12 font-mono rounded-none border-4 border-cyan-400 shadow-[8px_8px_0px_0px_rgba(236,72,153,1)] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center border-b-4 border-cyan-400 pb-4">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-8 h-8 text-pink-500 animate-bounce" />
            <div>
              <h2 className="text-2xl font-black text-yellow-300 uppercase tracking-widest">90S RETRO ARCADE SALE</h2>
              <span className="text-xs text-cyan-400">PRESS START TO CLAIM FEATURED REWARDS</span>
            </div>
          </div>
          <span className="bg-pink-500 text-white font-black text-xs px-3 py-1 uppercase shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
            INSERT COIN
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {arcadeDeals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="bg-purple-900/90 border-4 border-pink-500 p-6 shadow-[6px_6px_0px_0px_rgba(6,182,212,1)] flex flex-col justify-between"
            >
              <div>
                <span className="bg-yellow-300 text-black font-black text-[10px] px-2 py-0.5 uppercase mb-3 inline-block">
                  {item.badge}
                </span>
                <h3 className="font-black text-xl text-white uppercase leading-tight mb-4">{item.title}</h3>
              </div>

              <div className="pt-4 border-t-2 border-pink-500 flex justify-between items-center">
                <div>
                  <span className="text-3xl font-black text-yellow-300">{item.price}</span>
                  <span className="text-xs line-through text-purple-300 ml-2">{item.orig}</span>
                </div>
                <button className="bg-cyan-400 text-black border-2 border-white px-4 py-2 font-black text-xs uppercase hover:bg-pink-500 hover:text-white transition-colors flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  PLAY <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured10;
