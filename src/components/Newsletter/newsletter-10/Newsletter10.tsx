import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter10Props {
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

export default function Newsletter10({ data }: Newsletter10Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#09090b] relative flex flex-col justify-center" style={{ color: data.style.textColor }}>
      
      <div className="max-w-5xl mx-auto w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 border-b border-zinc-800 pb-12">
            <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-8">
              {data.content.heading}
            </h2>
            <p className="text-2xl text-zinc-500 font-light max-w-3xl mx-auto">
              {data.content.description}
            </p>
          </div>

          <form className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-6 mb-12" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full bg-transparent border-b-2 border-zinc-700 text-white px-4 py-4 text-2xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 font-light"
              required
            />
            <button 
              type="submit"
              className="w-full md:w-auto font-bold uppercase tracking-widest text-sm text-zinc-900 bg-white px-10 py-5 rounded-full hover:bg-zinc-200 transition-colors shrink-0"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
