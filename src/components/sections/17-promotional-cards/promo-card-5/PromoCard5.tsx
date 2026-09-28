import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PromoCard5Props {
  data: {
    content: {
      badge: string;
      title: string;
      description: string;
      cta: { text: string; url: string };
      hiddenMessage?: string;
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function PromoCard5({ data }: PromoCard5Props) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center p-6 font-sans relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />
      
      <div 
        className="relative z-10 w-full max-w-2xl cursor-pointer"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onClick={() => setIsRevealed(!isRevealed)}
      >
        {/* The Base/Inside Card (The Secret) */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-orange-500 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-center p-12 overflow-hidden border-4 border-white/20">
          {/* Confetti background effect inside */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, white 2px, transparent 0)', backgroundSize: '30px 30px' }} />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isRevealed ? 1 : 0.8, opacity: isRevealed ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10"
          >
            <span className="text-black font-black uppercase tracking-[0.3em] text-sm mb-4 block">Congratulations</span>
            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg mb-6 leading-tight">
              {data.content.hiddenMessage || "You've Unlocked The Deal"}
            </h2>
            <a 
              href={data.content.cta.url}
              className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-black/20"
            >
              Claim Reward
            </a>
          </motion.div>
        </div>

        {/* The Cover (Splits in half) */}
        {/* Left Cover Half */}
        <motion.div 
          className="absolute top-0 bottom-0 left-0 w-1/2 bg-white/10 backdrop-blur-xl border-t border-l border-b border-white/20 rounded-l-3xl z-20 flex flex-col items-end justify-center pr-1 overflow-hidden"
          animate={{ x: isRevealed ? '-100%' : '0%', opacity: isRevealed ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'left' }}
        >
          <div className="w-[200%] text-right pr-6 absolute right-0">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              {data.content.title.split(' ')[0]}
            </h3>
          </div>
        </motion.div>

        {/* Right Cover Half */}
        <motion.div 
          className="absolute top-0 bottom-0 right-0 w-1/2 bg-white/10 backdrop-blur-xl border-t border-r border-b border-white/20 rounded-r-3xl z-20 flex flex-col items-start justify-center pl-1 overflow-hidden"
          animate={{ x: isRevealed ? '100%' : '0%', opacity: isRevealed ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'right' }}
        >
          <div className="w-[200%] text-left pl-6 absolute left-0">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              {data.content.title.split(' ').slice(1).join(' ')}
            </h3>
          </div>
        </motion.div>

        {/* Center Lock / Badge (Disappears on reveal) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          animate={{ scale: isRevealed ? 0 : 1, opacity: isRevealed ? 0 : 1, rotate: isRevealed ? 180 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-24 h-24 bg-black rounded-full flex flex-col items-center justify-center border-4 border-white shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            <svg className="w-8 h-8 text-white mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest text-center leading-none">
              Hover<br/>to open
            </span>
          </div>
        </motion.div>

        {/* Invisible spacer to give the container height based on content */}
        <div className="relative z-0 opacity-0 pointer-events-none p-24 md:p-32 w-full h-[400px]">
          Spacer for aspect ratio
        </div>

      </div>
    </div>
  );
}
