import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial4Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial4({ data }: Testimonial4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16 border-l-4 border-[#00ff41] pl-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black uppercase text-[#00ff41] tracking-widest mb-2"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm tracking-widest"
          >
            &gt; {data.content.description}_
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.content.testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-[#00ff41]/30 p-8 hover:border-[#00ff41] transition-colors relative group"
            >
              <div className="absolute top-0 right-0 p-2 bg-[#00ff41]/10 text-[#00ff41] text-xs font-bold border-l border-b border-[#00ff41]/30 group-hover:border-[#00ff41] transition-colors">
                SEQ_0{idx + 1}
              </div>
              <p className="text-gray-300 mb-8 mt-4 leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
                <div className="w-12 h-12 border border-[#00ff41] p-1">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-[#00ff41]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
