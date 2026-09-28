import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BuyingGuide9Props {
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

export default function BuyingGuide9({ data }: BuyingGuide9Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <div className="w-full py-24 pl-6 md:pl-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full pr-6 md:pr-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
            {data.content.lastUpdated}
          </span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-xl">{data.content.description}</p>
        </div>
        <div className="flex gap-4">
          <button onClick={scrollLeft} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={scrollRight} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pr-6 md:pr-12 custom-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.content.items.map((item, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[85vw] md:min-w-[800px] snap-center flex flex-col md:flex-row bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-200 cursor-pointer group"
          >
            <div className="w-full md:w-1/2 relative bg-slate-100 shrink-0">
               <img src={item.image} alt={item.name} className="w-full h-[300px] md:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute top-6 left-6 bg-white/90 backdrop-blur font-bold uppercase tracking-widest text-[10px] px-4 py-2 rounded-full text-slate-900 shadow-lg">
                 {item.award}
               </div>
            </div>
            
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                </div>
                <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                  {item.verdict}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 border-y border-slate-200 py-6">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{spec.label}</span>
                      <span className="text-sm font-bold text-slate-900 truncate">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-auto">
                 <div>
                   <span className="text-xs text-slate-500 uppercase font-bold tracking-widest block mb-1">Price</span>
                   <span className="text-3xl font-black text-slate-900">{item.price}</span>
                 </div>
                 <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg">
                   Check Store
                 </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
