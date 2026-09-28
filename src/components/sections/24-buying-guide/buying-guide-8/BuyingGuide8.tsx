import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide8Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      lastUpdated: string;
      items: { award: string; name: string; image: string; price: string; verdict: string; pros: string[]; cons: string[]; specs: {label: string; value: string}[]; buyLink: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BuyingGuide8({ data }: BuyingGuide8Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#050505]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-20">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4 block">
            {data.content.lastUpdated}
          </span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-400 text-xl max-w-2xl">{data.content.description}</p>
        </div>

        <div className="flex flex-col gap-24">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(150px,auto)]"
            >
              
              {/* Header Tile */}
              <div className="md:col-span-12 lg:col-span-8 bg-zinc-900 rounded-3xl p-8 flex flex-col justify-center">
                <span className="text-yellow-500 font-bold uppercase tracking-widest text-[10px] mb-2">{item.award}</span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">{item.name}</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">{item.verdict}</p>
              </div>

              {/* Price Tile */}
              <div className="md:col-span-12 lg:col-span-4 bg-yellow-500 rounded-3xl p-8 flex flex-col justify-center items-start text-black">
                <span className="font-bold uppercase tracking-widest text-xs mb-2">Starting at</span>
                <span className="text-4xl md:text-5xl font-black mb-6">{item.price}</span>
                <button className="bg-black text-white w-full py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                  Shop Now
                </button>
              </div>

              {/* Image Tile */}
              <div className="md:col-span-12 lg:col-span-6 row-span-2 rounded-3xl overflow-hidden bg-zinc-900 relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Pros Tile */}
              <div className="md:col-span-6 lg:col-span-3 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4">Pros</h4>
                <ul className="space-y-3">
                  {item.pros.map((pro, i) => (
                    <li key={i} className="text-zinc-300 text-sm font-medium flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5">●</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons Tile */}
              <div className="md:col-span-6 lg:col-span-3 bg-zinc-900 rounded-3xl p-6 border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <h4 className="text-rose-500 font-bold uppercase tracking-widest text-xs mb-4">Cons</h4>
                <ul className="space-y-3">
                  {item.cons.map((con, i) => (
                    <li key={i} className="text-zinc-300 text-sm font-medium flex items-start gap-2">
                      <span className="text-rose-500 mt-0.5">●</span> {con}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specs Tile */}
              <div className="md:col-span-12 lg:col-span-6 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
                <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-zinc-800 pb-2">Key Specifications</h4>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">{spec.label}</span>
                      <span className="text-white text-sm font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
