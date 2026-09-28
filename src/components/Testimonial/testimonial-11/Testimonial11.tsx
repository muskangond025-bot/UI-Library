import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial11Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial11({ data }: Testimonial11Props) {
  return (
    <div className="w-full min-h-screen font-sans bg-[#f8fafc] flex flex-col lg:flex-row overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Sticky Header Side */}
      <div className="w-full lg:w-1/2 p-12 md:p-24 flex flex-col justify-center sticky top-0 h-screen bg-[#f8fafc] z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-500 font-medium max-w-md"
        >
          {data.content.description}
        </motion.p>
      </div>

      {/* Scrolling Content Side */}
      <div className="w-full lg:w-1/2 p-6 md:p-12 lg:py-24 bg-slate-100 border-l border-slate-200 shadow-[inset_20px_0_40px_rgba(0,0,0,0.02)]">
        <div className="flex flex-col gap-8 max-w-xl mx-auto">
          {data.content.testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500"
            >
              <div className="text-4xl text-blue-500 opacity-20 font-serif mb-4 leading-none">"</div>
              <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-10">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-5">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover shadow-inner" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
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
