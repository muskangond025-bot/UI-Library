import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide16Props {
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

export default function BuyingGuide16({ data }: BuyingGuide16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between md:items-end border-b border-white/20 pb-8 gap-8">
          <div>
            <div className="inline-block bg-white text-black font-bold uppercase text-[10px] tracking-widest px-2 py-1 mb-6">
              [ SYSTEM_UPDATE: {data.content.lastUpdated} ]
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-zinc-500 font-medium">{data.content.description}</p>
          </div>
          <button className="border border-white/30 text-white hover:bg-white hover:text-black uppercase text-[10px] font-bold tracking-widest px-6 py-3 transition-colors shrink-0">
            View All Data
          </button>
        </div>

        <div className="flex flex-col gap-16">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/10 hover:border-white/50 transition-colors p-1"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-white/10 p-6 md:p-8 bg-black relative">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50" />

                {/* Left: Image & Quick Info */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                  <div className="w-full aspect-[4/3] border border-white/20 relative overflow-hidden bg-zinc-900 group-hover:border-white/50 transition-colors">
                     <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                     <div className="absolute top-4 left-4 bg-white text-black font-bold uppercase text-[10px] tracking-widest px-3 py-1">
                       {item.award}
                     </div>
                  </div>
                  <div className="flex justify-between items-center border border-white/20 p-4 bg-zinc-950">
                     <span className="text-white font-black text-xl">{item.price}</span>
                     <span className="text-zinc-500 text-[10px] uppercase tracking-widest">{'>'} Buy</span>
                  </div>
                </div>

                {/* Right: Data */}
                <div className="lg:col-span-8 flex flex-col">
                   <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-6">{item.name}</h3>
                   <div className="border-l-2 border-white/50 pl-6 mb-8 text-zinc-400 font-medium">
                     <span className="text-white">VERDICT //</span> {item.verdict}
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                     <div className="border border-white/10 p-4 bg-zinc-950/50">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-widest border-b border-white/20 pb-2 mb-4">Pros.exe</h4>
                        <ul className="space-y-2">
                          {item.pros.map((pro, i) => <li key={i} className="text-zinc-400 text-xs flex gap-2"><span className="text-white">+</span> {pro}</li>)}
                        </ul>
                     </div>
                     <div className="border border-white/10 p-4 bg-zinc-950/50">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-widest border-b border-white/20 pb-2 mb-4">Cons.exe</h4>
                        <ul className="space-y-2">
                          {item.cons.map((con, i) => <li key={i} className="text-zinc-400 text-xs flex gap-2"><span className="text-white">-</span> {con}</li>)}
                        </ul>
                     </div>
                   </div>

                   <div className="mt-auto grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                      {item.specs.map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{spec.label}</span>
                          <span className="text-white font-bold text-sm">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
