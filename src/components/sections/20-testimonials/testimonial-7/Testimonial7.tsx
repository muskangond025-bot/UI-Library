import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial7Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial7({ data }: Testimonial7Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#fafafa]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-light text-slate-800 mb-6 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <div className="w-12 h-px bg-slate-300 mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
          {data.content.testimonials.slice(0, 4).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <svg className="w-8 h-8 text-slate-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-slate-700 text-lg md:text-xl font-light leading-relaxed mb-10 flex-1">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-80" />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 font-light">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
