import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter19Props {
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

export default function Newsletter19({ data }: Newsletter19Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full relative h-[600px] flex items-center justify-center">
        
        {/* Floating Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8 }}
          className="absolute left-0 md:left-[10%] top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl hidden md:block border-4 border-white z-0"
        >
          <img 
            src={data.content.image} 
            alt="Newsletter" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Content Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 w-full max-w-lg bg-yellow-50 p-10 md:p-14 rounded-[3rem] border border-yellow-200 shadow-[0_30px_60px_rgba(0,0,0,0.1)] md:ml-auto md:mr-[10%]"
        >
          <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-yellow-900 font-bold text-2xl mb-8 rotate-[-10deg]">
            *
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight leading-tight">
            {data.content.heading}
          </h2>
          <p className="text-lg text-stone-600 mb-10 font-medium">
            {data.content.description}
          </p>

          <form className="w-full flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full bg-white border border-yellow-300 text-stone-900 px-6 py-4 rounded-2xl focus:outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all placeholder:text-stone-400 font-medium shadow-inner"
              required
            />
            <button 
              type="submit"
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-xl"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-stone-500 font-medium">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
