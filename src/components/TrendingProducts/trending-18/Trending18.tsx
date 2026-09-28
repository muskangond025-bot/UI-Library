import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface Trending18Props {
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

export function Trending18({ section }: Trending18Props) {
  const { content, style } = section;

  return (
    <div 
      className="relative w-full min-h-screen py-24 px-4 overflow-hidden font-mono"
      style={{ backgroundColor: style.backgroundColor, color: style.textColor }}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-6 mb-20 bg-black/40 p-8 rounded-xl border border-white/10 shadow-2xl">
          <Plane size={48} style={{ color: style.accentColor }} className="animate-pulse" />
          <div>
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter" style={{ color: style.accentColor }}>
              {content.title}
            </h2>
            <p className="text-sm font-bold tracking-[0.4em] uppercase opacity-70 mt-2">
              {content.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Table Header */}
          <div className="flex text-xs font-bold tracking-widest uppercase opacity-50 px-6 pb-2 border-b border-white/20">
            <div className="w-16">TIME</div>
            <div className="flex-1">DESTINATION (PRODUCT)</div>
            <div className="w-24 text-right">GATE (PRICE)</div>
            <div className="w-24 text-right">STATUS</div>
          </div>

          {content.products.map((product, index) => {
            const time = new Date(Date.now() - index * 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <motion.div
                key={product.id}
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15, 
                  type: "spring", 
                  damping: 12,
                  stiffness: 100
                }}
                style={{ transformOrigin: "top" }}
                className="group flex items-center bg-black/60 border border-white/10 p-4 md:p-6 rounded-lg hover:bg-black transition-colors cursor-pointer"
              >
                <div className="w-16 text-xl font-bold" style={{ color: style.accentColor }}>{time}</div>
                <div className="flex-1 flex items-center gap-6">
                  <div className="w-12 h-12 rounded bg-white/10 overflow-hidden hidden md:block">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-widest">{product.name}</h3>
                </div>
                <div className="w-24 text-xl font-bold text-right">{product.price}</div>
                <div className="w-24 text-sm font-bold tracking-widest uppercase text-right text-green-500 animate-pulse">BOARDING</div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
