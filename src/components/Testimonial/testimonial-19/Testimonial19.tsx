import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial19Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial19({ data }: Testimonial19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-[#09090b] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="px-4 py-1 border border-pink-500 text-pink-500 text-xs font-bold uppercase tracking-widest mb-6">
            User_Logs.exe
          </div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-500">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {data.content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] bg-gradient-to-b from-zinc-800 to-zinc-950 hover:from-pink-500 hover:to-purple-600 transition-colors duration-500 rounded-none group"
            >
              <div className="bg-[#09090b] h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="text-pink-500 mb-6 font-black text-xl">{'//'} MSG_0{idx + 1}</div>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 lowercase">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 p-1 group-hover:bg-pink-500/20 transition-colors">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-500 uppercase">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
