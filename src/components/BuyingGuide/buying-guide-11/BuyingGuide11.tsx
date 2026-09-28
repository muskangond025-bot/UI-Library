import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide11Props {
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

export default function BuyingGuide11({ data }: BuyingGuide11Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f8fafc]" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Clean Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium">{data.content.description}</p>
          </div>
          <div className="text-slate-400 font-medium text-sm">
            {data.content.lastUpdated}
          </div>
        </div>

        {/* Stacked Minimal Cards */}
        <div className="flex flex-col gap-12">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100 flex flex-col group"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
                <div className="w-full md:w-1/2 flex flex-col">
                  <span className="bg-blue-50 text-blue-600 font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full self-start mb-6">
                    {item.award}
                  </span>
                  <h3 className="text-4xl font-bold text-slate-900 mb-4">{item.name}</h3>
                  <div className="text-3xl font-light text-slate-400 mb-8">{item.price}</div>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium flex-1">
                    "{item.verdict}"
                  </p>
                </div>
                <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden bg-slate-50 relative group-hover:-translate-y-2 transition-transform duration-500">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-slate-50 p-8 rounded-[2rem]">
                 <div>
                   <h4 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Pros</h4>
                   <ul className="space-y-3">
                     {item.pros.map((pro, i) => (
                       <li key={i} className="text-slate-600 font-medium text-sm flex gap-3">
                         <span className="text-emerald-500">+</span> {pro}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-rose-600 font-bold uppercase tracking-widest text-xs mb-4">Cons</h4>
                   <ul className="space-y-3">
                     {item.cons.map((con, i) => (
                       <li key={i} className="text-slate-600 font-medium text-sm flex gap-3">
                         <span className="text-rose-500">-</span> {con}
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-100">
                 <div className="flex gap-6 md:gap-12 w-full sm:w-auto overflow-x-auto pb-4 sm:pb-0 custom-scrollbar">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col shrink-0">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{spec.label}</span>
                        <span className="text-slate-900 font-bold text-sm">{spec.value}</span>
                      </div>
                    ))}
                 </div>
                 <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shrink-0 w-full sm:w-auto text-center">
                   Check Prices
                 </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
