import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter6Props {
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

export default function Newsletter6({ data }: Newsletter6Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#ecfccb] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Soft Background Orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#d9f99d] rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#bef264] rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-2xl rounded-[3rem] p-10 md:p-20 text-center shadow-[0_20px_50px_rgba(101,163,13,0.1)] border border-white"
        >
          <div className="w-16 h-16 rounded-full bg-[#bef264] text-[#3f6212] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#bef264]/50">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-[#3f6212] mb-6 tracking-tight leading-tight">
            {data.content.heading}
          </h2>
          <p className="text-xl text-[#4d7c0f] font-medium mb-12 max-w-2xl mx-auto">
            {data.content.description}
          </p>

          <form className="max-w-md mx-auto relative flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full px-8 py-5 rounded-[2rem] bg-white border-2 border-transparent focus:outline-none focus:border-[#84cc16] transition-all text-[#14532d] shadow-inner placeholder:text-[#65a30d]"
              required
            />
            <button 
              type="submit"
              className="w-full bg-[#84cc16] hover:bg-[#65a30d] text-white font-black px-8 py-5 rounded-[2rem] transition-all shadow-lg shadow-[#84cc16]/30 hover:shadow-xl hover:shadow-[#84cc16]/40 hover:-translate-y-1"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-[#4d7c0f] font-medium opacity-80">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
