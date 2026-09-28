import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide15Props {
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

export default function BuyingGuide15({ data }: BuyingGuide15Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full py-24 pl-6 md:pl-12 font-sans bg-[#fafaf9]" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full pr-6 md:pr-12 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight mb-4"
        >
          {data.content.heading}
        </motion.h2>
        <p className="text-xl text-stone-500 font-medium">{data.content.description}</p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-8 md:gap-16 overflow-x-auto snap-x snap-mandatory pb-12 pr-6 md:pr-12 custom-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {data.content.items.map((item, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="min-w-[90vw] md:min-w-[900px] snap-center grid grid-cols-1 md:grid-cols-12 gap-4 bg-stone-100 p-4 rounded-[2rem] border border-stone-200"
          >
            
            {/* Main Header / Name (4 cols) */}
            <div className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-8 flex flex-col justify-center">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-[10px] mb-4 bg-amber-50 px-3 py-1 rounded-full self-start">
                {item.award}
              </span>
              <h3 className="text-4xl font-black text-stone-900 mb-4 leading-tight">{item.name}</h3>
              <div className="text-3xl font-light text-stone-400 mb-8">{item.price}</div>
              <button className="bg-stone-900 text-white font-bold w-full py-4 rounded-xl hover:bg-stone-700 transition-colors mt-auto">
                Check Offer
              </button>
            </div>

            {/* Image (4 cols) */}
            <div className="md:col-span-12 lg:col-span-4 aspect-square md:aspect-auto bg-stone-200 rounded-3xl overflow-hidden relative">
               <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Verdict (4 cols) */}
            <div className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-8 flex flex-col justify-center">
               <p className="text-lg font-medium text-stone-600 italic leading-relaxed">
                 "{item.verdict}"
               </p>
            </div>

            {/* Pros & Cons (6 cols each) */}
            <div className="md:col-span-6 lg:col-span-6 bg-white rounded-3xl p-8 flex flex-col justify-center">
               <h4 className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-4">Pros</h4>
               <ul className="space-y-2">
                 {item.pros.map((pro, i) => <li key={i} className="text-stone-600 text-sm font-medium flex gap-2"><span className="text-emerald-500">✓</span> {pro}</li>)}
               </ul>
            </div>
            
            <div className="md:col-span-6 lg:col-span-6 bg-white rounded-3xl p-8 flex flex-col justify-center">
               <h4 className="text-rose-600 font-bold uppercase tracking-widest text-xs mb-4">Cons</h4>
               <ul className="space-y-2">
                 {item.cons.map((con, i) => <li key={i} className="text-stone-600 text-sm font-medium flex gap-2"><span className="text-rose-500">✕</span> {con}</li>)}
               </ul>
            </div>

            {/* Specs (12 cols) */}
            <div className="md:col-span-12 bg-white rounded-3xl p-8">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {item.specs.map((spec, i) => (
                   <div key={i} className="flex flex-col">
                     <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-1">{spec.label}</span>
                     <span className="text-stone-900 font-bold">{spec.value}</span>
                   </div>
                 ))}
               </div>
            </div>

          </motion.article>
        ))}
      </div>

    </div>
  );
}
