import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial16Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial16({ data }: Testimonial16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f0fdf4] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-[#14532d] mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-[#166534] text-lg font-medium">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-12">
          {data.content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white border-2 border-[#bbf7d0] p-10 rounded-[3rem] relative shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Overlapping Avatar */}
              <div className="absolute -top-12 left-10 p-2 bg-white rounded-full">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-20 h-20 rounded-full object-cover border-4 border-[#86efac]"
                />
              </div>
              
              <div className="mt-12">
                <p className="text-[#166534] text-lg font-medium leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-[#14532d] text-xl">{testimonial.name}</h4>
                  <p className="text-[#15803d] font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
