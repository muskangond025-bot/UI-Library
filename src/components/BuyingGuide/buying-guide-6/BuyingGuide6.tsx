import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide6Props {
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

export default function BuyingGuide6({ data }: BuyingGuide6Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#ecfccb] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d9f99d] rounded-full blur-[80px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#bef264] rounded-full blur-[80px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Soft Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="bg-[#bef264] text-[#14532d] font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-6 inline-block shadow-sm">
            {data.content.lastUpdated}
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-[#3f6212] tracking-tight mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-[#4d7c0f] text-xl font-medium">{data.content.description}</p>
        </div>

        {/* Soft Grid */}
        <div className="flex flex-col gap-16">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(101,163,13,0.1)] border border-white flex flex-col lg:flex-row gap-12 items-center group cursor-pointer hover:shadow-[0_20px_50px_rgba(101,163,13,0.2)] transition-shadow duration-500"
            >
              
              <div className="w-full lg:w-5/12 flex flex-col items-center text-center relative">
                <div className="absolute -top-6 -left-6 bg-[#bef264] w-32 h-32 rounded-full mix-blend-multiply opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -bottom-6 -right-6 bg-[#d9f99d] w-32 h-32 rounded-full mix-blend-multiply opacity-50 blur-xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 relative z-10 shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                
                <h3 className="text-4xl font-black text-[#14532d] mb-2 relative z-10">{item.name}</h3>
                <span className="text-2xl font-bold text-[#65a30d] mb-6 relative z-10">{item.price}</span>
                
                <button className="bg-[#84cc16] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#65a30d] transition-colors hover:shadow-xl w-full relative z-10">
                  Check Price
                </button>
              </div>

              <div className="w-full lg:w-7/12 flex flex-col h-full justify-center">
                <div className="mb-6">
                  <span className="text-[#65a30d] font-bold uppercase tracking-widest text-sm mb-2 block">{item.award}</span>
                  <p className="text-xl text-[#3f6212] font-medium leading-relaxed bg-white/50 p-6 rounded-3xl border border-white">
                    {item.verdict}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50/50 p-6 rounded-[2rem] border border-emerald-100">
                    <h4 className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-4">The Good</h4>
                    <ul className="space-y-3">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-emerald-800 text-sm font-medium flex gap-3">
                          <span className="bg-emerald-200 text-emerald-700 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">+</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-rose-50/50 p-6 rounded-[2rem] border border-rose-100">
                    <h4 className="text-rose-700 font-bold uppercase tracking-widest text-sm mb-4">The Bad</h4>
                    <ul className="space-y-3">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-rose-800 text-sm font-medium flex gap-3">
                          <span className="bg-rose-200 text-rose-700 rounded-full w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">-</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-auto">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-[#65a30d] tracking-widest mb-1">{spec.label}</span>
                      <span className="text-sm font-bold text-[#14532d]">{spec.value}</span>
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
