import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial20Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial20({ data }: Testimonial20Props) {
  // Triple up for the endless wall effect
  const wallData = [...data.content.testimonials, ...data.content.testimonials, ...data.content.testimonials];

  return (
    <div className="w-full py-24 font-sans bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20 mb-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 max-w-2xl mx-auto"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative z-10 before:absolute before:left-0 before:top-0 before:w-48 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-48 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:z-20">
        
        {/* Row 1 */}
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          className="flex gap-4 mb-4 px-4 items-stretch"
        >
          {wallData.map((testimonial, idx) => (
            <div key={`r1-${idx}`} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl min-w-[300px] flex flex-col justify-between hover:border-zinc-600 transition-colors cursor-default">
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-xs font-bold text-zinc-300">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          animate={{ x: [-2000, 0] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="flex gap-4 px-4 items-stretch"
        >
          {wallData.map((testimonial, idx) => (
            <div key={`r2-${idx}`} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl min-w-[300px] flex flex-col justify-between hover:border-zinc-600 transition-colors cursor-default">
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-xs font-bold text-zinc-300">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}
