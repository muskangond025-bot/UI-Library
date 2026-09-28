import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BuyingGuide10Props {
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

export default function BuyingGuide10({ data }: BuyingGuide10Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-[#020617] relative overflow-hidden flex flex-col justify-center" style={{ color: data.style.textColor }}>
      
      {/* Dynamic Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img src={data.content.items[activeIndex].image} alt="Background" className="w-full h-full object-cover blur-2xl grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">{data.content.heading}</h2>
            <p className="text-slate-400 font-light">{data.content.description}</p>
          </div>

          <div className="flex flex-col gap-2 relative">
             <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-800" />
             {data.content.items.map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left pl-6 py-4 relative transition-colors ${activeIndex === idx ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {activeIndex === idx && (
                    <motion.div layoutId="activeGuide" className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-blue-500" />
                  )}
                  <div className="font-bold uppercase tracking-widest text-[10px] mb-1 opacity-70">{item.award}</div>
                  <div className="text-xl font-bold">{item.name}</div>
                </button>
             ))}
          </div>
        </div>

        {/* Active Content Area */}
        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-slate-900 rounded-3xl overflow-hidden mb-12 relative shadow-2xl">
                 <img src={data.content.items[activeIndex].image} alt={data.content.items[activeIndex].name} className="w-full h-full object-cover opacity-80" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                 <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <h3 className="text-4xl md:text-5xl font-bold text-white">{data.content.items[activeIndex].name}</h3>
                    <div className="text-3xl font-light text-blue-400">{data.content.items[activeIndex].price}</div>
                 </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-800">
                 <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
                   "{data.content.items[activeIndex].verdict}"
                 </p>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">What we like</h4>
                      <ul className="space-y-3">
                         {data.content.items[activeIndex].pros.map((pro, i) => (
                           <li key={i} className="text-slate-300 text-sm flex gap-3"><span className="text-emerald-500">+</span> {pro}</li>
                         ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-rose-400 font-bold uppercase tracking-widest text-xs mb-4">What to consider</h4>
                      <ul className="space-y-3">
                         {data.content.items[activeIndex].cons.map((con, i) => (
                           <li key={i} className="text-slate-300 text-sm flex gap-3"><span className="text-rose-500">-</span> {con}</li>
                         ))}
                      </ul>
                    </div>
                 </div>

                 <div className="pt-8 border-t border-slate-800 flex justify-between items-center flex-wrap gap-6">
                    <div className="flex gap-8">
                       {data.content.items[activeIndex].specs.slice(0,3).map((spec, i) => (
                         <div key={i}>
                           <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{spec.label}</div>
                           <div className="text-slate-200 text-sm font-medium">{spec.value}</div>
                         </div>
                       ))}
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-colors">
                      Shop Now
                    </button>
                 </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
