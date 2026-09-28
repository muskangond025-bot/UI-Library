import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter20Props {
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

export default function Newsletter20({ data }: Newsletter20Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#09090b]" style={{ color: data.style.textColor }}>
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-y border-zinc-800 py-16">
          
          <div className="md:col-span-5 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-800 pb-12 md:pb-0 md:pr-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-xl text-zinc-500 font-medium">{data.content.description}</p>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder={data.content.placeholder}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white px-8 py-6 rounded-[2rem] text-xl focus:outline-none focus:border-white transition-colors placeholder:text-zinc-600 font-light"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-3 bottom-3 bg-white text-black font-bold uppercase tracking-widest text-xs px-8 rounded-2xl hover:bg-zinc-200 transition-colors"
                >
                  {data.content.buttonText}
                </button>
              </div>
              <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest pl-4">
                {data.content.disclaimer}
              </p>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
