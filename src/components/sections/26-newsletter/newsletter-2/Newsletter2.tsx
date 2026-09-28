import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter2Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      placeholder: string;
      buttonText: string;
      disclaimer: string;
      image: string;
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function Newsletter2({ data }: Newsletter2Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
        
        {/* Left: Content */}
        <div className="bg-slate-900 p-10 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              {data.content.heading}
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              {data.content.description}
            </p>

            <form className="w-full flex flex-col gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full bg-slate-800/50 border border-slate-700 text-white px-6 py-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                required
              />
              <button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                {data.content.buttonText}
              </button>
            </form>

            <p className="text-sm text-slate-500">
              {data.content.disclaimer}
            </p>
          </motion.div>
        </div>

        {/* Right: Image */}
        <div className="h-[400px] lg:h-auto relative bg-slate-800 hidden md:block">
           <img 
             src={data.content.image} 
             alt="Newsletter" 
             className="w-full h-full object-cover mix-blend-overlay opacity-50"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-80" />
        </div>

      </div>
    </div>
  );
}
