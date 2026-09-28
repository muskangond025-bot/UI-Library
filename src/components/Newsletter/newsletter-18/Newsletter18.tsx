import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter18Props {
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

export default function Newsletter18({ data }: Newsletter18Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#0f172a] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-slate-900/40 backdrop-blur-2xl border border-slate-700/50 p-1 rounded-[3rem] shadow-2xl group hover:border-blue-500/50 transition-all duration-500 relative"
        >
          {/* Neon Hover Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-[3.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />

          <div className="bg-slate-900 rounded-[2.5rem] border border-slate-800 relative z-10 p-10 md:p-16 text-center overflow-hidden">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 relative z-10">
              {data.content.heading}
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto relative z-10">
              {data.content.description}
            </p>

            <form className="max-w-lg mx-auto flex flex-col gap-4 mb-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-5 rounded-2xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                {data.content.buttonText}
              </button>
            </form>

            <p className="text-sm text-slate-500 relative z-10">
              {data.content.disclaimer}
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
