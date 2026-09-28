import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial13Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial13({ data }: Testimonial13Props) {
  const half = Math.ceil(data.content.testimonials.length / 2);
  const col1 = [...data.content.testimonials.slice(0, half), ...data.content.testimonials.slice(0, half)];
  const col2 = [...data.content.testimonials.slice(half), ...data.content.testimonials.slice(half)];

  return (
    <div className="w-full h-[900px] font-sans bg-[#0f172a] overflow-hidden flex flex-col md:flex-row items-center relative" style={{ color: data.style.textColor }}>
      
      <div className="w-full md:w-5/12 p-12 z-20 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 font-light"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full md:w-7/12 h-full relative overflow-hidden flex gap-6 px-6 mask-vertical-fades">
        
        {/* Top & Bottom Fade Masks (Using Tailwind arbitrary values for standard masking) */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(to bottom, #0f172a, transparent 15%, transparent 85%, #0f172a)' }} />

        {/* Col 1 */}
        <motion.div 
          animate={{ y: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="w-1/2 flex flex-col gap-6"
        >
          {col1.map((testimonial, idx) => (
            <div key={`c1-${idx}`} className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl shrink-0">
              <p className="text-slate-300 leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Col 2 */}
        <motion.div 
          animate={{ y: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="w-1/2 flex flex-col gap-6 pt-12"
        >
          {col2.map((testimonial, idx) => (
            <div key={`c2-${idx}`} className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl shrink-0">
              <p className="text-slate-300 leading-relaxed mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}
