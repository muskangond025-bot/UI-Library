import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter5Props {
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

export default function Newsletter5({ data }: Newsletter5Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="border-4 border-black bg-yellow-400 p-8 md:p-16 shadow-[16px_16px_0_0_rgba(0,0,0,1)] text-center flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase text-black tracking-tighter leading-none mb-6">
            {data.content.heading}
          </h2>
          <p className="text-black font-bold text-xl md:text-2xl mb-12 max-w-2xl">
            {data.content.description}
          </p>

          <form className="w-full max-w-2xl flex flex-col md:flex-row gap-6 mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full px-6 py-4 bg-white border-4 border-black text-black font-bold text-lg placeholder:text-gray-500 focus:outline-none focus:bg-gray-100 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-colors"
              required
            />
            <button 
              type="submit"
              className="w-full md:w-auto bg-black text-white font-black uppercase px-8 py-4 border-4 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all shrink-0"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm font-bold text-black uppercase tracking-widest bg-white/50 px-4 py-2 border-2 border-black">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
