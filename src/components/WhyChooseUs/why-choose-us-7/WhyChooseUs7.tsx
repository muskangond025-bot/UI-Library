import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs7Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs7({ data }: WhyChooseUs7Props) {
  // We duplicate features for the infinite scroll effect
  const marqueeFeatures = [...data.content.features, ...data.content.features, ...data.content.features];

  return (
    <div className="w-full min-h-screen py-24 flex flex-col justify-center font-sans overflow-hidden relative bg-[#fafafa]" style={{ color: data.style.textColor }}>
      
      {/* Background Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-5 pointer-events-none rotate-[-5deg] scale-110">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {marqueeFeatures.map((f, i) => (
            <span key={i} className="text-8xl font-black uppercase">{f.title} • </span>
          ))}
        </motion.div>
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {marqueeFeatures.map((f, i) => (
            <span key={i} className="text-8xl font-black uppercase text-transparent stroke-black" style={{ WebkitTextStroke: '2px black' }}>{f.title} • </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-white/80 backdrop-blur-sm rounded-3xl p-4 md:p-8 inline-block shadow-2xl"
        >
          {data.content.heading}
        </motion.h2>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-16 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg font-medium">
          {data.content.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform border border-gray-100 text-left"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
