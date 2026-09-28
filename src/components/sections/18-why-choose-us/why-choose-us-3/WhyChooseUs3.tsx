import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs3Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string; image?: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs3({ data }: WhyChooseUs3Props) {
  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl opacity-60 max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-black/10 -translate-x-1/2" />

          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                <div className="inline-block p-4 rounded-2xl bg-white shadow-xl border border-gray-100 mb-6">
                  <span className="text-3xl font-black text-gray-200">0{idx + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg opacity-70 leading-relaxed max-w-md ml-auto mr-auto md:mx-0">
                  {feature.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-3xl bg-gray-200 border border-black/5 overflow-hidden relative shadow-lg">
                {feature.image ? (
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-300 opacity-50" />
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-xl"
                    />
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
