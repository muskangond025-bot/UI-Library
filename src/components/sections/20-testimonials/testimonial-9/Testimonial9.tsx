import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial9Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial9({ data }: Testimonial9Props) {
  const testimonials = data.content.testimonials;

  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">{data.content.heading}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Large Item */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:col-span-2 md:row-span-2 bg-blue-600 text-white rounded-[2rem] p-10 flex flex-col justify-between shadow-xl"
          >
            <svg className="w-12 h-12 text-blue-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12">"{testimonials[0]?.content}"</p>
            <div className="flex items-center gap-4">
              <img src={testimonials[0]?.avatar} alt={testimonials[0]?.name} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" />
              <div>
                <h4 className="font-bold text-xl">{testimonials[0]?.name}</h4>
                <p className="text-blue-200">{testimonials[0]?.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Small Items */}
          {testimonials.slice(1, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: (idx + 1) * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <p className="text-slate-600 line-clamp-4">"{testimonial.content}"</p>
              <div className="flex items-center gap-3 mt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
