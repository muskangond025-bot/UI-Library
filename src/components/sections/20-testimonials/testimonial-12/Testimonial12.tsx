import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial12Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial12({ data }: Testimonial12Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-black text-black mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-gray-500">{data.content.description}</p>
        </div>

        <div className="flex flex-col gap-6 w-full bg-slate-50 p-6 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm relative">
          
          <div className="absolute top-4 text-center w-full left-0 text-xs text-slate-400 font-bold uppercase tracking-widest">Today</div>

          {data.content.testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-end gap-3 max-w-[85%] ${idx % 2 === 0 ? 'self-start' : 'self-end flex-row-reverse'}`}
            >
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-10 h-10 rounded-full object-cover shrink-0 shadow-sm"
              />
              <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'}`}>
                <span className="text-xs text-slate-500 mb-1 mx-2">{testimonial.name} • {testimonial.role}</span>
                <div 
                  className={`px-6 py-4 rounded-3xl text-[15px] leading-relaxed shadow-sm ${
                    idx % 2 === 0 
                      ? 'bg-white text-slate-800 rounded-bl-sm border border-slate-100' 
                      : 'bg-blue-600 text-white rounded-br-sm'
                  }`}
                >
                  {testimonial.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
