import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial8Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial8({ data }: Testimonial8Props) {
  return (
    <div className="w-full py-24 font-sans bg-[#050505] overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative h-[500px] perspective-[1200px] flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ rotateY: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="relative w-80 h-80 preserve-3d"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {data.content.testimonials.slice(0, 5).map((testimonial, idx) => {
            const angle = (360 / 5) * idx;
            return (
              <div 
                key={idx} 
                className="absolute top-0 left-0 w-full h-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-8 rounded-3xl flex flex-col justify-between shadow-2xl"
                style={{ 
                  transform: `rotateY(${angle}deg) translateZ(400px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                <div>
                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

    </div>
  );
}
