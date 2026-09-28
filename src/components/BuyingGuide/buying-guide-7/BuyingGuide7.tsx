import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide7Props {
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

export default function BuyingGuide7({ data }: BuyingGuide7Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#fafafa] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full blur-[120px] opacity-50" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 font-medium text-lg mb-6">{data.content.description}</p>
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
            {data.content.lastUpdated}
          </span>
        </div>

        <div className="flex flex-col gap-12">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center group cursor-pointer"
            >
              
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-inner relative z-10 bg-slate-100">
                   <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur border border-white shadow-lg text-blue-600 font-bold uppercase text-[10px] tracking-widest px-4 py-2 rounded-full z-20">
                  {item.award}
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <span className="text-2xl font-bold text-slate-900 bg-white/50 px-4 py-1 rounded-xl border border-white">{item.price}</span>
                </div>
                
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  <span className="font-bold text-slate-800">Verdict: </span>
                  {item.verdict}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                   <div className="bg-white/50 p-5 rounded-2xl border border-white">
                      <h4 className="text-xs font-bold uppercase text-emerald-600 tracking-widest mb-3">Pros</h4>
                      <ul className="space-y-2">
                        {item.pros.map((pro, i) => <li key={i} className="text-sm text-slate-600 flex gap-2"><span className="text-emerald-500">✓</span> {pro}</li>)}
                      </ul>
                   </div>
                   <div className="bg-white/50 p-5 rounded-2xl border border-white">
                      <h4 className="text-xs font-bold uppercase text-rose-600 tracking-widest mb-3">Cons</h4>
                      <ul className="space-y-2">
                        {item.cons.map((con, i) => <li key={i} className="text-sm text-slate-600 flex gap-2"><span className="text-rose-500">✕</span> {con}</li>)}
                      </ul>
                   </div>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200/50 pt-6 mt-auto">
                   <div className="flex gap-6">
                      {item.specs.slice(0,3).map((spec, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">{spec.label}</span>
                          <span className="text-sm font-bold text-slate-800">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                   <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                     Buy Now
                   </button>
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
