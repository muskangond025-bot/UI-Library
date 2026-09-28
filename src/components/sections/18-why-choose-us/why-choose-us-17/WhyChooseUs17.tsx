import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs17Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs17({ data }: WhyChooseUs17Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Abstract bg shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-max">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-xl mb-8"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-6 text-black"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-medium"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="lg:col-span-8 columns-1 md:columns-2 gap-8 space-y-8">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 break-inside-avoid ${idx % 2 === 0 ? 'h-[300px]' : 'h-[240px]'} flex flex-col justify-end`}
            >
              <div className="text-slate-300 text-5xl font-black mb-auto">0{idx + 1}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
