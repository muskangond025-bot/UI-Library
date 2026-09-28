import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter15Props {
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

export default function Newsletter15({ data }: Newsletter15Props) {
  return (
    <div className="w-full py-24 pl-6 md:pl-12 font-sans bg-[#fafaf9]" style={{ color: data.style.textColor }}>
      
      <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pr-6 md:pr-12 custom-scrollbar" style={{ scrollbarWidth: 'none' }}>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="min-w-[90vw] md:min-w-[800px] snap-center bg-stone-900 rounded-[3rem] p-10 md:p-16 text-stone-100 shadow-xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
        >
          {/* Abstract Shape */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-stone-800 rounded-full blur-[50px] pointer-events-none" />

          <div className="flex-1 relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              {data.content.heading}
            </h2>
            <p className="text-xl text-stone-400 font-medium mb-12">
              {data.content.description}
            </p>

            <form className="w-full flex flex-col md:flex-row gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full px-6 py-5 rounded-2xl bg-stone-800 border-none focus:outline-none focus:ring-2 focus:ring-stone-600 transition-all text-white placeholder:text-stone-500"
                required
              />
              <button 
                type="submit"
                className="w-full md:w-auto bg-stone-100 hover:bg-white text-stone-900 font-black px-10 py-5 rounded-2xl transition-all shrink-0 shadow-lg"
              >
                {data.content.buttonText}
              </button>
            </form>

            <p className="text-sm text-stone-500 font-medium">
              {data.content.disclaimer}
            </p>
          </div>

          <div className="w-full md:w-1/3 h-[300px] md:h-[400px] rounded-3xl overflow-hidden relative shrink-0">
            <img 
              src={data.content.image} 
              alt="Newsletter" 
              className="w-full h-full object-cover"
            />
          </div>

        </motion.div>

      </div>
    </div>
  );
}
