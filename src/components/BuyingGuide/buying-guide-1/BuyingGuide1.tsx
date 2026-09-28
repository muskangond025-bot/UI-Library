import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide1Props {
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

export default function BuyingGuide1({ data }: BuyingGuide1Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
            {data.content.lastUpdated}
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl">{data.content.description}</p>
        </div>

        {/* List of Items */}
        <div className="flex flex-col gap-20">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row gap-8 lg:gap-16 border-b border-slate-200 pb-20 last:border-0"
            >
              
              {/* Image & Price */}
              <div className="w-full md:w-1/3 flex flex-col">
                <div className="mb-4">
                  <span className="bg-yellow-400 text-yellow-900 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {item.award}
                  </span>
                </div>
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden bg-slate-100 mb-6 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-900">{item.price}</span>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
                  Check Availability
                </button>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {item.name}
                </h3>
                
                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  <span className="font-bold text-slate-900">Our Verdict: </span>
                  {item.verdict}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  {/* Pros */}
                  <div>
                    <h4 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Pros
                    </h4>
                    <ul className="space-y-3">
                      {item.pros.map((pro, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <h4 className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                      Cons
                    </h4>
                    <ul className="space-y-3">
                      {item.cons.map((con, i) => (
                        <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mt-auto">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Key Specifications</h4>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {item.specs.map((spec, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-xs text-slate-500 uppercase font-medium">{spec.label}</span>
                        <span className="text-sm font-bold text-slate-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
