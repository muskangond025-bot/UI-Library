import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide18Props {
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

export default function BuyingGuide18({ data }: BuyingGuide18Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="bg-slate-800/50 text-blue-400 border border-blue-500/30 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-8 inline-block backdrop-blur-md">
            {data.content.lastUpdated}
          </span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-400 text-lg">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col group hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Neon Hover Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

              <div className="flex justify-between items-start mb-8">
                 <span className="bg-blue-600/20 text-blue-400 border border-blue-500/30 font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full">
                   {item.award}
                 </span>
                 <span className="text-white font-bold text-2xl bg-slate-800/50 px-4 py-1 rounded-xl border border-slate-700">{item.price}</span>
              </div>

              <div className="flex flex-col md:flex-row gap-8 mb-8">
                 <div className="w-full md:w-2/5 aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800/50 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 </div>
                 <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{item.name}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.verdict}
                    </p>
                    
                    <div className="flex flex-col gap-4">
                      <div>
                        <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest mb-2">Pros</h4>
                        <ul className="space-y-1 text-slate-300 text-xs font-medium">
                          {item.pros.slice(0,2).map((pro, i) => <li key={i}>+ {pro}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-rose-400 font-bold uppercase text-[10px] tracking-widest mb-2">Cons</h4>
                        <ul className="space-y-1 text-slate-300 text-xs font-medium">
                          {item.cons.slice(0,2).map((con, i) => <li key={i}>- {con}</li>)}
                        </ul>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto border-t border-slate-800 pt-6">
                 {item.specs.map((spec, i) => (
                   <div key={i} className="flex flex-col">
                     <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">{spec.label}</span>
                     <span className="text-white text-sm font-bold">{spec.value}</span>
                   </div>
                 ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
