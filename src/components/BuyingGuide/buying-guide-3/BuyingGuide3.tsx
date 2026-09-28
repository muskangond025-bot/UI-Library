import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide3Props {
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

export default function BuyingGuide3({ data }: BuyingGuide3Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f9fafb]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Editorial Header */}
        <div className="mb-24 flex flex-col items-center text-center">
          <p className="font-serif text-gray-500 italic mb-4">{data.content.lastUpdated}</p>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-black text-gray-900 tracking-tight mb-8"
          >
            {data.content.heading}
          </motion.h2>
          <div className="w-24 h-1 bg-gray-900 mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl font-light leading-relaxed">
            {data.content.description}
          </p>
        </div>

        {/* Editorial Items */}
        <div className="flex flex-col gap-32">
          {data.content.items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative group">
                  <div className="absolute top-8 -left-8 md:top-12 md:-left-12 -z-10 w-full h-full border border-gray-300" />
                  <div className="w-full aspect-[4/5] overflow-hidden bg-white shadow-xl relative z-10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 flex flex-col">
                  <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2 block">
                    {item.award}
                  </span>
                  <h3 className="text-4xl lg:text-5xl font-serif font-black text-gray-900 mb-6 leading-tight">
                    {item.name}
                  </h3>
                  
                  <p className="text-lg text-gray-600 font-serif leading-relaxed mb-8 italic">
                    "{item.verdict}"
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 mb-8 border-y border-gray-200 py-8">
                    <div className="w-full sm:w-1/2">
                      <h4 className="font-sans font-bold text-gray-900 uppercase text-xs tracking-widest mb-4 border-b border-gray-900 inline-block">The Good</h4>
                      <ul className="space-y-2">
                        {item.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex gap-2">
                            <span className="text-gray-900 font-bold">+</span> {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <h4 className="font-sans font-bold text-gray-900 uppercase text-xs tracking-widest mb-4 border-b border-gray-900 inline-block">The Bad</h4>
                      <ul className="space-y-2">
                        {item.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex gap-2">
                            <span className="text-gray-400 font-bold">-</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">Starting Price</span>
                      <span className="text-2xl font-black text-gray-900 font-serif">{item.price}</span>
                    </div>
                    <button className="px-8 py-3 border border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 hover:text-white transition-colors">
                      View Offer
                    </button>
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
