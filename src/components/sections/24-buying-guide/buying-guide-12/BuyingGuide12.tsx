import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface BuyingGuide12Props {
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

export default function BuyingGuide12({ data }: BuyingGuide12Props) {
  return (
    <div className="w-full font-sans bg-[#020617]" style={{ color: data.style.textColor }}>
      
      {/* Intro Section */}
      <div className="w-full min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-24 relative z-10 bg-[#020617]">
        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-6 border border-blue-500/30 bg-blue-500/10 px-4 py-2 rounded-full">
          {data.content.lastUpdated}
        </span>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight max-w-4xl"
        >
          {data.content.heading}
        </motion.h2>
        <p className="text-xl text-slate-400 max-w-2xl">{data.content.description}</p>
        <div className="mt-12 animate-bounce text-slate-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      {/* Full Height Sections */}
      {data.content.items.map((item, idx) => {
        const sectionRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
          target: sectionRef,
          offset: ["start end", "end start"]
        });
        const yPos = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
        const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

        return (
          <div ref={sectionRef} key={idx} className="w-full min-h-screen relative flex items-center overflow-hidden border-t border-slate-900">
            
            {/* Parallax Image Background */}
            <motion.div 
              style={{ y: yPos, opacity }} 
              className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]"
            >
               <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent" />
            </motion.div>

            {/* Content Container */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              <div className="flex flex-col justify-center">
                <span className="text-white font-bold uppercase tracking-widest text-[10px] mb-4 bg-blue-600 px-3 py-1 self-start">{item.award}</span>
                <h3 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">{item.name}</h3>
                <div className="text-3xl font-light text-slate-400 mb-8">{item.price}</div>
                <p className="text-xl text-slate-300 font-light leading-relaxed mb-12">
                  {item.verdict}
                </p>
                <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors self-start">
                  Check Availability
                </button>
              </div>

              <div className="flex flex-col justify-center gap-6">
                 
                 <div className="bg-[#020617]/80 backdrop-blur-xl p-8 border border-slate-800 rounded-3xl">
                    <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-6 border-b border-slate-800 pb-4">Pros</h4>
                    <ul className="space-y-4">
                      {item.pros.map((pro, i) => <li key={i} className="text-slate-300 font-medium flex gap-4"><span className="text-emerald-500">✓</span> {pro}</li>)}
                    </ul>
                 </div>

                 <div className="bg-[#020617]/80 backdrop-blur-xl p-8 border border-slate-800 rounded-3xl">
                    <h4 className="text-rose-400 font-bold uppercase tracking-widest text-xs mb-6 border-b border-slate-800 pb-4">Cons</h4>
                    <ul className="space-y-4">
                      {item.cons.map((con, i) => <li key={i} className="text-slate-300 font-medium flex gap-4"><span className="text-rose-500">✕</span> {con}</li>)}
                    </ul>
                 </div>

                 <div className="bg-[#020617]/80 backdrop-blur-xl p-8 border border-slate-800 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
                    {item.specs.map((spec, i) => (
                      <div key={i}>
                        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">{spec.label}</div>
                        <div className="text-white font-medium text-sm">{spec.value}</div>
                      </div>
                    ))}
                 </div>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}
