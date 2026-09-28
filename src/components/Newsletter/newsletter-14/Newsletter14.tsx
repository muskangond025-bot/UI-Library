import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter14Props {
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

export default function Newsletter14({ data }: Newsletter14Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#1e1b4b] relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Info */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-500/30 text-indigo-300 font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] self-start"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            System Alert
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-200 to-purple-400 mb-6 tracking-tight drop-shadow-lg leading-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-indigo-200/80 text-xl font-light mb-8">{data.content.description}</p>
        </div>

        {/* Right Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-indigo-950/40 backdrop-blur-md rounded-[2rem] border border-indigo-500/30 p-8 md:p-12 shadow-[0_0_30px_rgba(79,70,229,0.2)] relative"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-emerald-400 rounded-tl-[2rem]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-emerald-400 rounded-br-[2rem]" />

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-2 block">Email_Address</label>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full bg-indigo-900/20 border border-indigo-500/30 text-indigo-100 px-6 py-4 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-indigo-900/40 transition-colors placeholder:text-indigo-500/50"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-indigo-950 font-bold px-8 py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.4)] mt-2"
            >
              {data.content.buttonText}
            </button>
            <p className="text-xs text-indigo-400/60 font-mono text-center mt-4">
              {data.content.disclaimer}
            </p>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
