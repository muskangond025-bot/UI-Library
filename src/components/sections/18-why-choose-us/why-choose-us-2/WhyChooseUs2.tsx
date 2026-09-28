import React from 'react';
import { motion } from 'framer-motion';

interface WhyChooseUs2Props {
  data: {
    content: { heading: string; description: string; features: { title: string; description: string }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function WhyChooseUs2({ data }: WhyChooseUs2Props) {
  // Bento grid classes layout
  const gridClasses = [
    "md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600",
    "md:col-span-1 md:row-span-1 bg-zinc-800",
    "md:col-span-1 md:row-span-1 bg-zinc-800",
    "md:col-span-2 md:row-span-1 bg-gradient-to-r from-pink-500 to-rose-500",
  ];

  return (
    <div className="w-full min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center font-sans overflow-hidden" style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Advantage</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
            {data.content.heading}
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8">
            {data.content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px]">
          {data.content.features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl overflow-hidden relative group flex flex-col justify-end ${gridClasses[idx % gridClasses.length]}`}
            >
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-50 transition-opacity">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white/70 text-sm font-medium">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
