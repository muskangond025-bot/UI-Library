import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter7Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      placeholder: string;
      buttonText: string;
      disclaimer: string;
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Newsletter7({ data }: Newsletter7Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#fafaf9] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Floating Glass Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[100px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-300 rounded-full blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-10 md:p-20 text-center shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-white w-full max-w-4xl"
        >
          <span className="bg-white border border-stone-200 text-stone-900 font-bold uppercase tracking-widest text-xs px-4 py-2 rounded-full mb-8 inline-block shadow-sm">
            Stay Connected
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight leading-tight">
            {data.content.heading}
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            {data.content.description}
          </p>

          <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-3 mb-8 bg-white/60 p-2 rounded-full border border-white shadow-inner" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full px-6 py-4 bg-transparent focus:outline-none text-stone-900 placeholder:text-stone-500 font-medium"
              required
            />
            <button 
              type="submit"
              className="w-full md:w-auto bg-stone-900 text-white font-bold px-10 py-4 rounded-full hover:bg-stone-800 transition-colors shadow-lg hover:shadow-xl shrink-0"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-stone-500">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
