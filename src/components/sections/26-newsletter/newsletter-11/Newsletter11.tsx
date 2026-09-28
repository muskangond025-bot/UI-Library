import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter11Props {
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

export default function Newsletter11({ data }: Newsletter11Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#f8fafc]" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Info */}
        <div className="flex flex-col justify-center pr-0 lg:pr-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-xl text-slate-500 mb-12">{data.content.description}</p>
          
          <form className="w-full flex flex-col gap-4 mb-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full bg-white border border-slate-200 text-slate-900 px-6 py-5 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all placeholder:text-slate-400 shadow-sm"
              required
            />
            <button 
              type="submit"
              className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold px-8 py-5 rounded-2xl transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200 hover:-translate-y-1"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-slate-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {data.content.disclaimer}
          </p>
        </div>

        {/* Right Offset Image */}
        <div className="relative h-[400px] lg:h-[600px] w-full mt-12 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute top-0 right-0 w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={data.content.image} 
              alt="Newsletter" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-0 left-0 w-3/4 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                ))}
              </div>
              <p className="text-sm font-bold text-slate-900">Join 10k+ subscribers</p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
