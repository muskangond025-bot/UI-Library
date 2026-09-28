import React from 'react';
import { motion } from 'framer-motion';

interface BuyingGuide4Props {
  data: {
    content: { 
      heading: string; 
      description: string; 
      lastUpdated: string;
      items: { award: string; name: string; image: string; price: string; verdict: string; pros: string[]; cons: string[]; specs: {label: string; value: string}[]; buyLink: string; }[]
    };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function BuyingGuide4({ data }: BuyingGuide4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Terminal Header */}
        <div className="mb-20 border border-[#00ff41]/30 p-8 bg-zinc-950 relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00ff41]" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00ff41]" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00ff41]" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00ff41]" />
          
          <div className="text-[#00ff41] text-xs font-bold uppercase tracking-widest mb-4">
            &gt; INIT_BUYING_GUIDE.EXE
          </div>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-zinc-400 text-sm mb-4">{'//'} {data.content.description}</p>
          <div className="text-zinc-600 text-[10px] uppercase">
            LAST_SYNC: {data.content.lastUpdated}
          </div>
        </div>

        {/* Terminal Grid */}
        <div className="flex flex-col gap-12">
          {data.content.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-zinc-800 bg-zinc-950 p-1 hover:border-[#00ff41]/50 transition-colors group cursor-pointer"
            >
              <div className="border border-zinc-800 p-6 flex flex-col lg:flex-row gap-8 bg-black relative">
                
                {/* Left: Image & Badge */}
                <div className="w-full lg:w-1/3 flex flex-col border border-zinc-800 p-4">
                  <div className="bg-[#00ff41]/10 text-[#00ff41] text-xs font-bold uppercase tracking-widest p-2 border border-[#00ff41]/30 mb-4 text-center">
                    [ AWARD: {item.award} ]
                  </div>
                  <div className="w-full aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                  </div>
                  <div className="text-white text-xl font-bold text-center border-b border-zinc-800 pb-4 mb-4">
                    {item.price}
                  </div>
                  <button className="w-full bg-[#00ff41]/20 text-[#00ff41] border border-[#00ff41] py-2 uppercase text-xs font-bold hover:bg-[#00ff41] hover:text-black transition-colors">
                    Execute Purchase
                  </button>
                </div>

                {/* Right: Data */}
                <div className="w-full lg:w-2/3 flex flex-col">
                  <h3 className="text-3xl font-black text-white uppercase mb-4 border-b border-zinc-800 pb-4 group-hover:text-[#00ff41] transition-colors">
                    &gt; {item.name}_
                  </h3>
                  
                  <div className="text-zinc-400 text-sm mb-6 bg-zinc-900/50 p-4 border-l-2 border-[#00ff41]">
                    <span className="text-[#00ff41]">VERDICT:</span> {item.verdict}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-zinc-800 p-4">
                      <div className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-zinc-800 pb-2">PROS.log</div>
                      <ul className="space-y-1">
                        {item.pros.map((pro, i) => <li key={i} className="text-zinc-400 text-xs text-green-400/80">+ {pro}</li>)}
                      </ul>
                    </div>
                    <div className="border border-zinc-800 p-4">
                      <div className="text-white font-bold uppercase text-[10px] tracking-widest mb-2 border-b border-zinc-800 pb-2">CONS.log</div>
                      <ul className="space-y-1">
                        {item.cons.map((con, i) => <li key={i} className="text-zinc-400 text-xs text-red-400/80">- {con}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-auto border border-zinc-800 p-4">
                    <div className="text-[#00ff41] font-bold uppercase text-[10px] tracking-widest mb-2">SYSTEM_SPECS</div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {item.specs.map((spec, i) => (
                        <div key={i}>
                          <div className="text-zinc-600 text-[10px] uppercase">{spec.label}</div>
                          <div className="text-white text-xs font-bold">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
