import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide5Props {
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

export default function BuyingGuide5({ data }: BuyingGuide5Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Brutalist Header */}
        <div className="border-4 border-black bg-yellow-400 p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black uppercase text-black tracking-tighter leading-none mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-black font-bold uppercase max-w-2xl text-lg">{data.content.description}</p>
          </div>
          <div className="bg-black text-white px-4 py-2 font-black uppercase tracking-widest text-xs rotate-2">
            {data.content.lastUpdated}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 gap-16">
          {data.content.items.map((item, idx) => {
            const bgColors = ['bg-pink-400', 'bg-blue-400', 'bg-green-400'];
            const hoverBg = bgColors[idx % bgColors.length];

            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col lg:flex-row gap-8 items-start group"
              >
                
                {/* Image & Main Info (Left) */}
                <div className="w-full lg:w-5/12 flex flex-col gap-6">
                  <div className="w-full aspect-[4/3] border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all cursor-pointer">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-500" />
                    <div className={`absolute inset-0 ${hoverBg} mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="absolute top-4 left-4 border-4 border-black bg-white text-black font-black uppercase px-3 py-1 text-xs shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      {item.award}
                    </div>
                  </div>
                  
                  <div className="border-4 border-black p-4 bg-white flex justify-between items-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                    <span className="font-black text-2xl text-black">{item.price}</span>
                    <button className="bg-black text-white font-black uppercase text-xs px-4 py-2 hover:bg-yellow-400 hover:text-black transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>

                {/* Details (Right) */}
                <div className="w-full lg:w-7/12 border-4 border-black bg-white p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative flex flex-col h-full">
                  <h3 className="text-4xl md:text-5xl font-black uppercase text-black mb-6 leading-tight group-hover:underline decoration-4 underline-offset-4">
                    {item.name}
                  </h3>
                  
                  <p className="text-xl font-bold text-gray-700 mb-8 p-4 bg-gray-100 border-2 border-black">
                    <span className="text-black font-black uppercase mr-2">Verdict:</span>
                    {item.verdict}
                  </p>

                  <div className="flex flex-col md:flex-row gap-8 mb-8 border-y-4 border-black py-8">
                    <div className="w-full md:w-1/2">
                      <h4 className="font-black uppercase text-xl mb-4 text-black">Pros</h4>
                      <ul className="space-y-2">
                        {item.pros.map((pro, i) => (
                          <li key={i} className="font-bold text-gray-700 flex items-start gap-2">
                            <span className="text-black mt-1">✓</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                      <h4 className="font-black uppercase text-xl mb-4 text-black">Cons</h4>
                      <ul className="space-y-2">
                        {item.cons.map((con, i) => (
                          <li key={i} className="font-bold text-gray-700 flex items-start gap-2">
                            <span className="text-black mt-1">✕</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto">
                     <h4 className="font-black uppercase text-xl mb-4 text-black">Specs</h4>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {item.specs.map((spec, i) => (
                         <div key={i} className="border-2 border-black p-2 bg-gray-50">
                           <div className="text-[10px] font-black uppercase text-gray-500">{spec.label}</div>
                           <div className="text-xs font-bold text-black uppercase">{spec.value}</div>
                         </div>
                       ))}
                     </div>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </div>
  );
}
