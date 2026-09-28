import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter12Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      placeholder: string;
      buttonText: string;
      disclaimer: string;
      image: string;
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Newsletter12({ data }: Newsletter12Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#020617] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-20 group-hover:scale-105 transition-transform duration-[10s] ease-linear pointer-events-none">
        <img 
          src={data.content.image} 
          alt="Background" 
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
      </div>

      <div className="max-w-3xl mx-auto w-full relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            Stay Updated
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {data.content.heading}
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            {data.content.description}
          </p>

          <form className="w-full bg-slate-900/60 backdrop-blur-xl p-2 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-2 mb-8 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full bg-transparent text-white px-6 py-4 focus:outline-none placeholder:text-slate-500 text-lg"
              required
            />
            <button 
              type="submit"
              className="w-full md:w-auto bg-white hover:bg-slate-200 text-black font-bold px-10 py-4 rounded-xl transition-colors shrink-0"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-slate-500">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
