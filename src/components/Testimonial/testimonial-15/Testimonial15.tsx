import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial15Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial15({ data }: Testimonial15Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full relative">
        
        <div className="absolute top-0 right-0 text-[300px] leading-none text-slate-50 font-serif font-black -z-10 -mt-20 -mr-20 select-none">
          "
        </div>

        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-slate-500 font-medium"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="flex flex-col gap-12">
          {data.content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className="w-full md:w-2/3 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 p-10 rounded-3xl relative">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  {testimonial.content}
                </p>
              </div>
              <div className={`w-full md:w-1/3 flex items-center gap-4 ${idx % 2 === 0 ? 'justify-start md:justify-center' : 'justify-start md:justify-center'}`}>
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-4 border-slate-50" />
                <div>
                  <h4 className="font-bold text-xl text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
