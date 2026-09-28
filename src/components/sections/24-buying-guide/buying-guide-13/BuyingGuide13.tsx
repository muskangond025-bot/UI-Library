import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide13Props {
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

export default function BuyingGuide13({ data }: BuyingGuide13Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Newspaper Header */}
        <div className="border-b-4 border-black pb-8 mb-16 flex flex-col items-center text-center">
          <div className="w-full flex justify-between items-center border-b border-black pb-4 mb-8 text-xs font-sans uppercase font-bold tracking-widest">
            <span>Vol. 1</span>
            <span>{data.content.lastUpdated}</span>
            <span>Consumer Report</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-serif font-black text-black uppercase tracking-tighter leading-none mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="font-serif text-2xl text-gray-700 italic max-w-3xl">
            {data.content.description}
          </p>
        </div>

        {/* Newspaper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {data.content.items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b-2 border-black pb-16 group"
            >
              
              {/* Image & Award */}
              <div className="lg:col-span-5 flex flex-col">
                <div className="w-full aspect-[4/3] border-2 border-black overflow-hidden mb-4 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute top-0 left-0 bg-black text-white font-sans font-black uppercase text-[10px] tracking-widest px-3 py-2 border-b-2 border-r-2 border-black">
                    {item.award}
                  </div>
                </div>
                <div className="flex justify-between items-end border-b border-black pb-2 mb-4">
                   <h3 className="text-4xl font-serif font-black uppercase text-black leading-none">{item.name}</h3>
                   <span className="font-sans font-black text-xl">{item.price}</span>
                </div>
              </div>

              {/* Text Columns */}
              <div className="lg:col-span-4 flex flex-col">
                <p className="font-serif text-lg leading-relaxed text-gray-800 first-letter:text-6xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  {item.verdict} Our extensive testing revealed that this device completely reshapes the landscape of mobile computing for the current year. Read the full review on page A4.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-300">
                  <div>
                    <h4 className="font-sans font-black uppercase text-xs tracking-widest mb-4 border-b border-black pb-2">The Good</h4>
                    <ul className="space-y-2">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="font-serif text-sm text-gray-700">{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans font-black uppercase text-xs tracking-widest mb-4 border-b border-black pb-2">The Bad</h4>
                    <ul className="space-y-2">
                      {item.cons.map((con, i) => (
                        <li key={i} className="font-serif text-sm text-gray-700">{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specs Box */}
              <div className="lg:col-span-3 border-2 border-black p-6 bg-gray-50 flex flex-col">
                <div className="text-center font-sans font-black uppercase tracking-widest text-xs border-b-2 border-black pb-4 mb-6">
                  Technical Specifications
                </div>
                <div className="flex flex-col gap-4 flex-1">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-dotted border-gray-400 pb-2">
                      <span className="font-sans font-bold text-[10px] uppercase text-gray-500 tracking-wider">{spec.label}</span>
                      <span className="font-serif text-sm font-bold text-black text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-black text-white font-sans font-black uppercase text-xs py-3 mt-6 hover:bg-gray-800 transition-colors">
                  Purchase Issue
                </button>
              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </div>
  );
}
