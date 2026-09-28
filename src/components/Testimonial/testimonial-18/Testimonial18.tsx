import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial18Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial18({ data }: Testimonial18Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="border-t-4 border-black pt-8 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-serif font-black text-black leading-none"
          >
            {data.content.heading}
          </motion.h2>
          <p className="font-sans font-bold text-gray-500 uppercase tracking-widest text-sm max-w-xs text-right">
            {data.content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {data.content.testimonials.slice(0, 4).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="text-4xl font-serif font-black text-black">"</div>
              <p className="font-serif text-2xl md:text-3xl text-gray-900 leading-snug">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                <div className="font-sans">
                  <h4 className="font-bold text-black uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
