import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial10Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial10({ data }: Testimonial10Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#020617] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Cinematic Spotlight Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 font-light"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="w-full max-w-5xl relative">
          {data.content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-6 hover:-translate-y-2 transition-transform duration-500`}
              style={{
                zIndex: 3 - idx,
                transform: `scale(${1 - idx * 0.05}) translateY(${idx * -20}px)`,
                opacity: 1 - (idx * 0.2)
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.3)]" 
                />
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                  <h4 className="text-xl font-bold text-white tracking-wide">{testimonial.name}</h4>
                  <p className="text-indigo-400 uppercase tracking-widest text-sm mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
