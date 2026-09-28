import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial6Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial6({ data }: Testimonial6Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#1e293b] overflow-hidden border-b-8 border-yellow-400" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="mb-20 bg-yellow-400 p-8 md:p-12 border-4 border-black shadow-[16px_16px_0_0_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black uppercase text-black mb-4 tracking-tighter leading-none"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl md:text-2xl font-bold text-black max-w-3xl"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {data.content.testimonials.slice(0, 4).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-black p-8 md:p-10 shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all group relative"
            >
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500 border-4 border-black rounded-full flex items-center justify-center font-black text-white text-2xl group-hover:scale-125 transition-transform">
                "
              </div>
              <p className="text-black font-bold text-xl md:text-2xl leading-relaxed mb-8">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-6 border-t-4 border-black pt-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 border-4 border-black object-cover" />
                <div>
                  <h4 className="font-black text-black text-xl uppercase tracking-wider">{testimonial.name}</h4>
                  <p className="font-bold text-gray-600 uppercase text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
