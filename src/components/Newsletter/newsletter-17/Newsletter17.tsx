import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter17Props {
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

export default function Newsletter17({ data }: Newsletter17Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full border-t-2 border-black pt-12">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-black tracking-tighter mb-8 leading-none"
        >
          {data.content.heading}
        </motion.h2>
        
        <p className="text-2xl text-gray-600 mb-16 max-w-2xl">
          {data.content.description}
        </p>

        <form className="w-full relative mb-12 group" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={data.content.placeholder}
            className="w-full bg-transparent border-b-4 border-black text-4xl md:text-6xl font-black text-black placeholder:text-gray-300 pb-4 focus:outline-none focus:border-blue-600 transition-colors"
            required
          />
          <button 
            type="submit"
            className="absolute right-0 bottom-4 text-2xl md:text-4xl font-black text-black group-hover:text-blue-600 transition-colors cursor-pointer"
          >
            &rarr;
          </button>
        </form>

        <p className="text-lg font-bold text-gray-400 uppercase tracking-widest">
          {data.content.disclaimer}
        </p>

      </div>
    </div>
  );
}
