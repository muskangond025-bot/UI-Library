import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide19Props {
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

export default function BuyingGuide19({ data }: BuyingGuide19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-32 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-gray-600 mb-8">{data.content.description}</p>
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 border-t border-gray-200 pt-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {data.content.lastUpdated}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 md:gap-y-32">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col group ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              
              <div className="w-full aspect-[4/5] bg-gray-100 mb-8 relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                 <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute top-6 left-6 bg-white text-black font-black uppercase text-[10px] tracking-widest px-4 py-2 shadow-md">
                   {item.award}
                 </div>
              </div>

              <div className="flex justify-between items-end mb-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-black group-hover:text-blue-600 transition-colors">{item.name}</h3>
                <span className="text-xl font-bold text-gray-500">{item.price}</span>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 border-l-4 border-gray-200 pl-4 py-2">
                {item.verdict}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8 border-y border-gray-100 py-8">
                 <div>
                   <h4 className="font-bold text-emerald-600 uppercase text-xs tracking-widest mb-4">Strong Points</h4>
                   <ul className="space-y-2">
                     {item.pros.map((pro, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-emerald-500 font-bold">+</span> {pro}</li>)}
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-bold text-rose-600 uppercase text-xs tracking-widest mb-4">Weak Points</h4>
                   <ul className="space-y-2">
                     {item.cons.map((con, i) => <li key={i} className="text-sm text-gray-700 flex gap-2"><span className="text-rose-500 font-bold">-</span> {con}</li>)}
                   </ul>
                 </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-auto">
                 {item.specs.map((spec, i) => (
                   <div key={i}>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{spec.label}</div>
                     <div className="text-black font-bold text-sm">{spec.value}</div>
                   </div>
                 ))}
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
