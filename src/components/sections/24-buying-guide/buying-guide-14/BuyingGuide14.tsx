import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide14Props {
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

export default function BuyingGuide14({ data }: BuyingGuide14Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            {data.content.lastUpdated}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-400 mb-6 tracking-tight drop-shadow-lg"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200/80 text-xl font-light max-w-2xl">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-indigo-950/40 backdrop-blur-md rounded-[2rem] border border-indigo-500/20 p-8 shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:border-indigo-400/50 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-all duration-500 group flex flex-col lg:flex-row gap-12 items-center cursor-pointer"
            >
              
              {/* Image Section */}
              <div className="w-full lg:w-2/5 flex flex-col">
                 <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative mb-6">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 to-transparent opacity-60" />
                    <div className="absolute top-4 left-4 bg-indigo-600 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded shadow-[0_0_15px_rgba(79,70,229,0.8)]">
                      {item.award}
                    </div>
                 </div>
                 <div className="flex justify-between items-center bg-indigo-900/30 p-4 rounded-xl border border-indigo-500/20">
                    <span className="text-white font-black text-2xl">{item.price}</span>
                    <button className="text-indigo-300 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">
                      View Specs →
                    </button>
                 </div>
              </div>

              {/* Data Section */}
              <div className="w-full lg:w-3/5 flex flex-col">
                 <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{item.name}</h3>
                 <p className="text-indigo-200 font-light text-lg mb-8 bg-indigo-900/20 p-6 rounded-2xl border-l-2 border-indigo-500">
                    "{item.verdict}"
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="border border-indigo-500/20 rounded-xl p-4">
                       <h4 className="text-emerald-400 text-xs font-mono uppercase tracking-widest mb-3">Pros_</h4>
                       <ul className="space-y-2">
                         {item.pros.map((pro, i) => <li key={i} className="text-indigo-200/80 text-sm flex gap-2"><span className="text-emerald-500">{'>'}</span> {pro}</li>)}
                       </ul>
                    </div>
                    <div className="border border-indigo-500/20 rounded-xl p-4">
                       <h4 className="text-rose-400 text-xs font-mono uppercase tracking-widest mb-3">Cons_</h4>
                       <ul className="space-y-2">
                         {item.cons.map((con, i) => <li key={i} className="text-indigo-200/80 text-sm flex gap-2"><span className="text-rose-500">{'>'}</span> {con}</li>)}
                       </ul>
                    </div>
                 </div>

                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto border-t border-indigo-500/20 pt-6">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[10px] font-mono text-indigo-400/60 uppercase tracking-widest mb-1">{spec.label}</span>
                        <span className="text-sm font-bold text-indigo-100">{spec.value}</span>
                      </div>
                    ))}
                 </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
