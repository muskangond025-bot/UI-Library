import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs11Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs11({ data }: WhyChooseUs11Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 font-sans bg-white relative" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-16">
        
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-24 h-max">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-black"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-12">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-gray-200 rounded-3xl bg-gray-50 hover:bg-black hover:text-white transition-colors duration-500 group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-black mb-4 sm:mb-0 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-2xl">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl font-bold text-left sm:text-right w-full sm:w-auto">{feature.title}</h3>
              </div>
              <p className="text-lg text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
