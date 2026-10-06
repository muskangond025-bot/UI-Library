import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

export function OffersFlashSale1() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const products = [
    { id: 1, title: 'CYBERPUNK MECHA HEADSET V2', price: '$149', original: '$299', discount: '50% OFF', stock: 8, total: 50, tag: 'HOT DEAL' },
    { id: 2, title: 'NEO MATRIX MECHANICAL KEYBOARD', price: '$89', original: '$199', discount: '55% OFF', stock: 3, total: 30, tag: 'LAST 3 LEFT' },
    { id: 3, title: 'RETRO BRUTALIST SOUNDBAR', price: '$119', original: '$249', discount: '52% OFF', stock: 14, total: 40, tag: 'LIMITED' }
  ];

  return (
    <div className="w-full bg-yellow-400 text-black p-6 sm:p-10 font-mono rounded-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
      {/* Ticker tape */}
      <div className="bg-black text-yellow-400 py-2 font-black tracking-widest overflow-hidden whitespace-nowrap border-y-4 border-black mb-8 flex gap-8 select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          className="flex gap-8 items-center text-sm uppercase"
        >
          <span>⚡ FLASH DROPS LIVE NOW ⚡ 50% OFF EVERYTHING ⚡ NO RESTOCKS ⚡ ACT FAST ⚡ ONLY FOR THE NEXT 4 HOURS ⚡</span>
          <span>⚡ FLASH DROPS LIVE NOW ⚡ 50% OFF EVERYTHING ⚡ NO RESTOCKS ⚡ ACT FAST ⚡ ONLY FOR THE NEXT 4 HOURS ⚡</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-4 border-black pb-6 mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 text-xs font-bold uppercase mb-3 shadow-[3px_3px_0px_0px_rgba(255,255,0,1)]">
              <AlertTriangle className="w-4 h-4 text-yellow-400 animate-pulse" />
              NEO-BRUTALIST SALE TERMINAL
            </div>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none">
              ULTRA FLASH DROP
            </h2>
          </div>

          {/* Countdown block */}
          <div className="flex items-center gap-2 bg-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Clock className="w-6 h-6 text-black shrink-0" />
            <div className="flex items-center text-2xl font-black gap-1">
              <span className="bg-black text-white px-2 py-1">{String(timeLeft.hours).padStart(2, '0')}</span>:
              <span className="bg-black text-white px-2 py-1">{String(timeLeft.minutes).padStart(2, '0')}</span>:
              <span className="bg-black text-white px-2 py-1">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4, x: -4, boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)' }}
              className="bg-white border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-yellow-400 border-2 border-black font-black text-xs px-2 py-1 uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {item.tag}
                  </span>
                  <span className="bg-black text-white text-xs font-bold px-2 py-1">
                    {item.discount}
                  </span>
                </div>
                <div className="w-full h-40 bg-zinc-200 border-2 border-black mb-4 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-yellow-400/20 group-hover:bg-transparent transition-colors" />
                  <Zap className="w-16 h-16 text-black opacity-40 group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="font-black text-lg uppercase leading-tight mb-2">{item.title}</h3>
                
                {/* Stock meter */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>STOCK LEFT</span>
                    <span>{item.stock} / {item.total}</span>
                  </div>
                  <div className="w-full bg-zinc-200 border-2 border-black h-4 p-0.5">
                    <div 
                      className="bg-red-500 h-full border border-black" 
                      style={{ width: `${(item.stock / item.total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-black flex items-center justify-between gap-2">
                <div>
                  <span className="text-2xl font-black">{item.price}</span>
                  <span className="text-xs line-through text-zinc-500 ml-2">{item.original}</span>
                </div>
                <button className="bg-black text-yellow-400 border-2 border-black px-4 py-2 font-black text-xs uppercase hover:bg-yellow-400 hover:text-black transition-colors flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5">
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
export default OffersFlashSale1;
