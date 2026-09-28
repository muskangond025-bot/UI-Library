import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter3Props {
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

export default function Newsletter3({ data }: Newsletter3Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 bg-[#fafafa] font-serif border-y-2 border-black" style={{ color: data.style.textColor }}>
      <div className="max-w-5xl mx-auto w-full text-center">
        
        <span className="font-sans font-bold uppercase tracking-widest text-xs border-b-2 border-black pb-2 mb-8 inline-block">
          The Weekly Dispatch
        </span>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-8"
        >
          {data.content.heading}
        </motion.h2>
        
        <p className="text-2xl text-gray-700 italic max-w-2xl mx-auto mb-16">
          {data.content.description}
        </p>

        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-0 border-2 border-black" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder={data.content.placeholder}
            className="w-full px-6 py-5 bg-transparent font-sans text-lg focus:outline-none focus:bg-gray-100 transition-colors border-b-2 md:border-b-0 md:border-r-2 border-black placeholder:text-gray-500 text-black"
            required
          />
          <button 
            type="submit"
            className="w-full md:w-auto bg-black text-white font-sans font-black uppercase tracking-widest px-10 py-5 hover:bg-gray-800 transition-colors shrink-0"
          >
            {data.content.buttonText}
          </button>
        </form>

        <p className="mt-8 font-sans text-xs uppercase tracking-widest text-gray-500">
          {data.content.disclaimer}
        </p>

      </div>
    </div>
  );
}
