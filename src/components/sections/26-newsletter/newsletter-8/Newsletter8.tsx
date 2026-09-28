import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter8Props {
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

export default function Newsletter8({ data }: Newsletter8Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-[#1e1b4b] to-[#1e1b4b] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-indigo-950/40 backdrop-blur-xl border border-indigo-500/20 rounded-[3rem] p-10 md:p-20 text-center shadow-[0_0_50px_rgba(79,70,229,0.15)] relative overflow-hidden group hover:border-indigo-400/40 transition-colors duration-500"
        >
          {/* Neon Glow Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Newsletter_Module
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-400 mb-6 tracking-tight drop-shadow-lg">
              {data.content.heading}
            </h2>
            <p className="text-xl text-indigo-200/80 font-light mb-12 max-w-2xl mx-auto">
              {data.content.description}
            </p>

            <form className="max-w-xl mx-auto relative flex flex-col md:flex-row gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full px-8 py-5 rounded-2xl bg-indigo-900/30 border border-indigo-500/30 focus:outline-none focus:border-indigo-400 focus:bg-indigo-900/50 transition-all text-indigo-100 placeholder:text-indigo-400/50 shadow-inner"
                required
              />
              <button 
                type="submit"
                className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.5)] shrink-0"
              >
                {data.content.buttonText}
              </button>
            </form>

            <p className="text-xs font-mono text-indigo-400/50">
              {data.content.disclaimer}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
