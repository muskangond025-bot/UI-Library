import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard2Props {
  data: {
    content: {
      badge: string;
      title: string;
      description: string;
      cta: { text: string; url: string };
      scrollingText: string[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function PromoCard2({ data }: PromoCard2Props) {
  // Create a long array for the infinite scroll effect
  const repeatedText = [...data.content.scrollingText, ...data.content.scrollingText, ...data.content.scrollingText, ...data.content.scrollingText];

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8 font-sans overflow-hidden relative"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      
      {/* Background Infinite Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-[10rem] font-black uppercase"
        >
          {repeatedText.map((text, i) => <span key={`bg1-${i}`}>{text}</span>)}
        </motion.div>
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-[10rem] font-black uppercase"
        >
          {repeatedText.map((text, i) => <span key={`bg2-${i}`}>{text}</span>)}
        </motion.div>
      </div>

      {/* Main Promo Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row group">
        
        {/* Left Side: Infinite Menu Visual */}
        <div className="w-full md:w-1/2 bg-black text-white p-12 relative overflow-hidden flex flex-col justify-center border-r border-black/10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
          
          <motion.div 
            animate={{ y: [0, -500] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="flex flex-col gap-6 items-center"
          >
            {repeatedText.map((text, i) => (
              <h3 
                key={`menu-${i}`} 
                className="text-4xl md:text-5xl font-black uppercase text-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer text-white mix-blend-difference"
              >
                {text}
              </h3>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white relative">
          <span className="inline-block px-4 py-1.5 rounded-full border border-black/20 bg-gray-100 text-black text-xs font-bold uppercase tracking-widest mb-8 w-max">
            {data.content.badge}
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-black">
            {data.content.title}
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {data.content.description}
          </p>
          
          <a 
            href={data.content.cta.url}
            className="inline-flex items-center gap-4 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-max group/btn"
          >
            <span>{data.content.cta.text}</span>
            <svg 
              className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  );
}
