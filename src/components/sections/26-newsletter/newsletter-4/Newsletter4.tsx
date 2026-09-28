import React from 'react';
import { motion } from 'framer-motion';

interface Newsletter4Props {
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

export default function Newsletter4({ data }: Newsletter4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black" style={{ color: data.style.textColor }}>
      <div className="max-w-4xl mx-auto w-full border border-[#00ff41]/30 p-1 md:p-2 bg-zinc-950">
        
        <div className="border border-[#00ff41]/30 p-8 md:p-12 relative bg-black">
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00ff41]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00ff41]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00ff41]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00ff41]" />

          <div className="text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-8">
            &gt; /SYS/MAIL/SUBSCRIBE.EXE
          </div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6"
          >
            {data.content.heading}
          </motion.h2>
          
          <p className="text-zinc-400 text-sm mb-12 lowercase font-light">
            {'//'} {data.content.description}
          </p>

          <form className="w-full flex flex-col md:flex-row gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
            <div className="w-full relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff41]">{'>'}</span>
              <input 
                type="email" 
                placeholder={data.content.placeholder}
                className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-4 focus:outline-none focus:border-[#00ff41]/50 focus:bg-zinc-800 transition-colors placeholder:text-zinc-700"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41] py-4 px-8 uppercase text-xs font-bold hover:bg-[#00ff41] hover:text-black transition-colors shrink-0"
            >
              [ {data.content.buttonText} ]
            </button>
          </form>

          <p className="text-xs text-zinc-600">
            {data.content.disclaimer}
          </p>

        </div>
      </div>
    </div>
  );
}
