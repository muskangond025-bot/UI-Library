import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WhyChooseUs6Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs6({ data }: WhyChooseUs6Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden bg-[#1e1b4b]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-indigo-200 leading-relaxed mb-12"
          >
            {data.content.description}
          </motion.p>
          
          <div className="space-y-4">
            {data.content.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                className={`border border-indigo-500/30 rounded-2xl overflow-hidden cursor-pointer transition-colors ${activeIndex === idx ? 'bg-indigo-900/50' : 'bg-transparent hover:bg-indigo-900/20'}`}
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <div className="p-6 flex items-center justify-between">
                  <h3 className={`text-xl font-bold ${activeIndex === idx ? 'text-indigo-300' : 'text-white'}`}>
                    {feature.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${activeIndex === idx ? 'border-indigo-400 text-indigo-400 rotate-180' : 'border-indigo-500/50 text-indigo-500'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-indigo-200/80 leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Element */}
        <div className="hidden lg:flex justify-center items-center relative h-full min-h-[500px]">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120%] h-[120%] rounded-full border border-indigo-500/20 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] rounded-full border border-indigo-400/30"
          />
          <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-50" />
        </div>

      </div>
    </div>
  );
}
