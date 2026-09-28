import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide17Props {
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

export default function BuyingGuide17({ data }: BuyingGuide17Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Minimal Header */}
        <div className="mb-32 flex flex-col md:flex-row justify-between items-baseline border-b border-black pb-8 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-black tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <div className="text-right shrink-0">
            <p className="text-gray-500 max-w-sm mb-4">{data.content.description}</p>
            <span className="font-bold uppercase tracking-widest text-xs text-black">
              {data.content.lastUpdated}
            </span>
          </div>
        </div>

        {/* Minimal List */}
        <div className="flex flex-col gap-32">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row gap-16 lg:gap-24 group cursor-pointer"
            >
              
              <div className="w-full lg:w-1/2 flex flex-col">
                <div className="flex justify-between items-center mb-8 border-b border-black pb-4">
                  <span className="font-bold text-black uppercase tracking-widest text-sm">{item.award}</span>
                  <span className="font-bold text-black text-2xl">{item.price}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                  {item.name}
                </h3>
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden relative group-hover:shadow-2xl transition-shadow duration-500">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className="text-2xl text-black font-medium leading-snug mb-12">
                  {item.verdict}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="font-bold text-black uppercase tracking-widest text-xs border-b border-gray-200 pb-4 mb-6">Strengths</h4>
                    <ul className="space-y-4">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-gray-600 text-sm flex gap-3"><span className="text-black font-bold">+</span> {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-black uppercase tracking-widest text-xs border-b border-gray-200 pb-4 mb-6">Weaknesses</h4>
                    <ul className="space-y-4">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-gray-600 text-sm flex gap-3"><span className="text-gray-300 font-bold">-</span> {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-12 mt-auto">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{spec.label}</span>
                      <span className="text-black font-bold text-lg">{spec.value}</span>
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
