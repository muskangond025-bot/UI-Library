import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial2Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial2({ data }: Testimonial2Props) {
  const marqueeItems = [...data.content.testimonials, ...data.content.testimonials];

  return (
    <div className="w-full py-24 font-sans overflow-hidden bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative overflow-hidden before:absolute before:left-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#0f172a] before:to-transparent before:z-20 after:absolute after:right-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#0f172a] after:to-transparent after:z-20 py-8">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-8 px-8 items-stretch"
        >
          {marqueeItems.map((testimonial, idx) => (
            <div key={idx} className="min-w-[350px] md:min-w-[450px] bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-3xl flex flex-col justify-between hover:bg-slate-800 transition-colors">
              <svg className="w-10 h-10 text-blue-500 mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 flex-1">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-700" />
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
