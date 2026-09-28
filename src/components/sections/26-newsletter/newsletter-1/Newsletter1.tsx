import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter1Props {
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

export default function Newsletter1({ data }: Newsletter1Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-white" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-16 text-center shadow-xl shadow-slate-100"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {data.content.heading}
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            {data.content.description}
          </p>

          <form className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-3 mb-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={data.content.placeholder}
              className="w-full px-6 py-4 rounded-full border border-slate-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
              required
            />
            <button 
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-colors shrink-0 shadow-lg shadow-blue-600/30"
            >
              {data.content.buttonText}
            </button>
          </form>

          <p className="text-sm text-slate-500">
            {data.content.disclaimer}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
