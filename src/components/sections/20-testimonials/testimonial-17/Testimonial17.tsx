import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial17Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial17({ data }: Testimonial17Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#1e1b4b] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '90px 90px', backgroundPosition: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400 mb-6"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-indigo-200 text-lg"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {data.content.testimonials.slice(0, 4).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30 p-8 rounded-3xl hover:border-indigo-400/80 hover:bg-indigo-900/50 transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.1)] hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] flex flex-col justify-between group"
            >
              <p className="text-indigo-100 text-lg font-light leading-relaxed mb-8">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-indigo-500/30 pt-6 group-hover:border-indigo-400/50 transition-colors">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-indigo-400" />
                <div>
                  <h4 className="font-bold text-indigo-50">{testimonial.name}</h4>
                  <p className="text-sm text-indigo-300">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
