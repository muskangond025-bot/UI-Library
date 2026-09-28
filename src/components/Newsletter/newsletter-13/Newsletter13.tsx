import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter13Props {
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

export default function Newsletter13({ data }: Newsletter13Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 bg-white font-serif" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full border-4 border-black p-8 md:p-12 relative">
        
        {/* Newspaper Corner Accents */}
        <div className="absolute top-2 left-2 w-full h-full border-2 border-black pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-black pb-12 lg:pb-0 lg:pr-16 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none mb-6">
              {data.content.heading}
            </h2>
            <p className="text-2xl text-gray-800 italic">
              {data.content.description}
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-sans font-bold uppercase tracking-widest text-xs mb-6 block text-center lg:text-left">
              Join the list
            </span>
            
            <form className="flex flex-col gap-6 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full px-0 py-4 bg-transparent font-sans text-xl focus:outline-none border-b-4 border-black placeholder:text-gray-400 text-black placeholder:font-black placeholder:uppercase"
                required
              />
              <button 
                type="submit"
                className="w-full bg-black text-white font-sans font-black uppercase tracking-widest px-8 py-5 hover:bg-gray-800 transition-colors"
              >
                {data.content.buttonText}
              </button>
            </form>

            <p className="font-sans text-xs uppercase tracking-widest text-gray-500 text-center lg:text-left">
              {data.content.disclaimer}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
