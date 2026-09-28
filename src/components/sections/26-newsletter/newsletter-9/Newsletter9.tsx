import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter9Props {
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

export default function Newsletter9({ data }: Newsletter9Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-gray-200 shadow-2xl">
        
        {/* Left: Image */}
        <div className="h-[300px] lg:h-auto relative hidden md:block group overflow-hidden">
           <img 
             src={data.content.image} 
             alt="Newsletter" 
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
           <div className="absolute bottom-8 left-8">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-black text-2xl shadow-lg">
               @
             </div>
           </div>
        </div>

        {/* Right: Content */}
        <div className="bg-gray-50 p-10 md:p-20 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight leading-tight">
              {data.content.heading}
            </h2>
            <p className="text-xl text-gray-600 mb-12 font-medium">
              {data.content.description}
            </p>

            <form className="w-full flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full bg-white border-2 border-gray-200 text-black px-6 py-5 rounded-2xl focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-400 font-medium shadow-sm"
                required
              />
              <button 
                type="submit"
                className="w-full bg-black hover:bg-blue-600 text-white font-bold px-8 py-5 rounded-2xl transition-colors shadow-lg"
              >
                {data.content.buttonText}
              </button>
            </form>

            <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <p className="text-sm text-gray-500 font-medium">
                {data.content.disclaimer}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
