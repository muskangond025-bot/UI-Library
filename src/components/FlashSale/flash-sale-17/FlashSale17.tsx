import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  oldPrice: string;
  newPrice: string;
  image: string;
}

interface FlashSale17Props {
  section: {
    content: {
      title: string;
      subtitle: string;
      products: Product[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
      accentColor: string;
    };
  };
}

export function FlashSale17({ section }: FlashSale17Props) {
  const { content, style } = section;
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono bg-slate-900"
      style={{ color: style.textColor }}
    >
      {/* Background Digital Clock */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden whitespace-nowrap">
        <span className="text-[40vw] font-black tracking-tighter" style={{ color: style.textColor }}>
          {formatTime(time.getHours())}:{formatTime(time.getMinutes())}
        </span>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 border-2 p-4 rounded-xl mb-8" style={{ borderColor: style.textColor, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
            <span className="text-4xl md:text-6xl font-black">
              {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            {content.title}
          </h2>
          <p className="text-sm font-bold tracking-[0.4em] uppercase mt-4 text-emerald-400">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-emerald-500/20 hover:border-emerald-500 transition-colors group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-slate-900 relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover filter contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-500"
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTA2OTRFIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 mix-blend-overlay" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">{product.name}</h3>
                <div className="flex justify-between items-end bg-slate-900 p-4 rounded-xl border border-emerald-500/30">
                  <span className="text-sm line-through opacity-50">{product.oldPrice}</span>
                  <span className="text-3xl font-black" style={{ color: style.textColor }}>{product.newPrice}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
