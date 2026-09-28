import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BuyingGuide20Props {
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

export default function BuyingGuide20({ data }: BuyingGuide20Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#09090b]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between md:items-end border-b border-zinc-800 pb-8 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-xl text-zinc-500 font-medium">{data.content.description}</p>
          </div>
          <div className="text-zinc-600 font-bold uppercase tracking-widest text-xs shrink-0 bg-zinc-900 px-4 py-2 rounded-full">
            {data.content.lastUpdated}
          </div>
        </div>

        <div className="flex flex-col">
          {data.content.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`border-b border-zinc-800 group ${isOpen ? 'bg-zinc-900/50 -mx-6 px-6 md:-mx-12 md:px-12 py-8 rounded-[2rem]' : 'py-8'}`}
              >
                
                {/* Header / Clickable Area */}
                <div 
                  className="flex flex-col md:flex-row justify-between md:items-center gap-6 cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                   <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 font-mono text-sm shrink-0 group-hover:border-white group-hover:text-white transition-colors">
                        0{idx + 1}
                      </div>
                      <div className="flex flex-col">
                         <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-1">{item.award}</span>
                         <h3 className={`text-3xl font-bold transition-colors ${isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>{item.name}</h3>
                      </div>
                   </div>
                   <div className="flex items-center gap-8 pl-18 md:pl-0">
                      <span className="text-xl font-bold text-zinc-400">{item.price}</span>
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-white text-white bg-white/10 rotate-180' : 'border-zinc-700 text-zinc-500 group-hover:border-zinc-500'}`}>
                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                   </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                       <div className="pt-12 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
                          
                          {/* Image */}
                          <div className="lg:col-span-5 h-[300px] lg:h-full bg-zinc-950 rounded-[2rem] overflow-hidden border border-zinc-800">
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" />
                          </div>

                          {/* Data */}
                          <div className="lg:col-span-7 flex flex-col">
                             <p className="text-zinc-400 text-lg leading-relaxed mb-8 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                                <span className="text-white font-bold mr-2">Verdict:</span>{item.verdict}
                             </p>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                               <div>
                                 <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4">Pros</h4>
                                 <ul className="space-y-2">
                                   {item.pros.map((pro, i) => <li key={i} className="text-zinc-300 text-sm flex gap-2"><span className="text-emerald-500">+</span> {pro}</li>)}
                                 </ul>
                               </div>
                               <div>
                                 <h4 className="text-rose-500 font-bold uppercase tracking-widest text-xs mb-4">Cons</h4>
                                 <ul className="space-y-2">
                                   {item.cons.map((con, i) => <li key={i} className="text-zinc-300 text-sm flex gap-2"><span className="text-rose-500">-</span> {con}</li>)}
                                 </ul>
                               </div>
                             </div>

                             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-auto border-t border-zinc-800 pt-6">
                               {item.specs.map((spec, i) => (
                                 <div key={i} className="flex flex-col">
                                   <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest mb-1">{spec.label}</span>
                                   <span className="text-zinc-200 font-bold text-sm">{spec.value}</span>
                                 </div>
                               ))}
                             </div>

                          </div>

                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
