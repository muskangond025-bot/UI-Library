import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial5Props {
  data: {
    content: { heading: string; description: string; testimonials: { name: string; role: string; content: string; avatar: string; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Testimonial5({ data }: Testimonial5Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-pink-300 to-purple-300 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-40 blur-3xl -translate-y-1/2 -z-10"
      />
      <motion.div 
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-300 to-cyan-300 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] opacity-40 blur-3xl -translate-y-1/2 -z-10"
      />

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-slate-800"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium max-w-2xl mx-auto"
          >
            {data.content.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {data.content.testimonials.slice(0, 3).map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/40 backdrop-blur-2xl border border-white/60 p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(31,38,135,0.07)] hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg className="w-10 h-10 text-purple-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-700 text-lg leading-relaxed font-medium">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-purple-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
