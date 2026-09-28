import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide2Props {
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

export default function BuyingGuide2({ data }: BuyingGuide2Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4 block">
              {data.content.lastUpdated}
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-slate-400 text-lg">{data.content.description}</p>
          </div>
        </div>

        {/* Grid of Items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden flex flex-col group hover:border-slate-500 transition-colors"
            >
              {/* Image Header */}
              <div className="w-full aspect-[4/3] bg-slate-900 relative overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-slate-900 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    {item.award}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white leading-tight">{item.name}</h3>
                  <span className="text-blue-400 font-bold bg-slate-900/80 backdrop-blur px-2 py-1 rounded-lg text-sm">{item.price}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-slate-300 text-sm mb-6 flex-1">
                  {item.verdict}
                </p>

                <div className="space-y-4 mb-6 border-t border-slate-700/50 pt-4">
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-center gap-2">
                          <span className="text-emerald-500 text-[10px]">●</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-slate-400 text-xs flex items-center gap-2">
                          <span className="text-rose-500 text-[10px]">●</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full py-3 bg-slate-700 text-white font-bold rounded-xl group-hover:bg-blue-600 transition-colors mt-auto">
                  View Details
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
