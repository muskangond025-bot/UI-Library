import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter16Props {
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

export default function Newsletter16({ data }: Newsletter16Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black relative overflow-hidden" style={{ color: data.style.textColor }}>
      
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10 flex justify-center">
        
        <div className="border border-white/10 hover:border-white/50 transition-colors bg-zinc-950 p-1 w-full max-w-2xl group">
          <div className="border border-white/10 bg-black relative p-8 md:p-12">
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />

            <div className="text-zinc-600 text-xs mb-8">
              {'<SYS_MOD>'} <span className="text-white">NEWSLETTER_SUBSCRIPTION</span> {'</SYS_MOD>'}
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
            >
              {data.content.heading}_
            </motion.h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed lowercase font-light mb-12">
              <span className="text-zinc-600">{'>>'}</span> {data.content.description}
            </p>

            <form className="w-full flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative border border-zinc-800 bg-zinc-900 group-hover:border-zinc-600 transition-colors">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 font-bold">$</span>
                <input 
                  type="email" 
                  placeholder={data.content.placeholder}
                  className="w-full bg-transparent text-white pl-10 pr-4 py-4 focus:outline-none placeholder:text-zinc-700 font-mono text-sm"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 uppercase text-xs font-bold hover:bg-zinc-300 transition-colors"
              >
                [ {data.content.buttonText} ]
              </button>
            </form>

            <div className="border-t border-white/10 pt-4">
               <p className="text-xs text-zinc-600 uppercase font-light">
                 {data.content.disclaimer}
               </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
