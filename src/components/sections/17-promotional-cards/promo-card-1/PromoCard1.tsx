import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard1Props {
  data: {
    content: {
      badge: string;
      title: string;
      description: string;
      cta: { text: string; url: string };
      features: string[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function PromoCard1({ data }: PromoCard1Props) {
  // A mock glass icon component for the visual
  const GlassIcon = ({ className, delay }: { className: string, delay: number }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [0, -15, 0], opacity: 1 }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 1, delay: delay * 0.5 }
      }}
      className={`absolute w-24 h-24 rounded-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[10px] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 blur-sm opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-2xl" />
    </motion.div>
  );

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center py-20 px-6 font-sans relative overflow-hidden"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Glass Icons */}
      <GlassIcon className="top-4 left-4 md:top-[15%] md:left-[15%] rotate-12 z-20" delay={0} />
      <GlassIcon className="bottom-4 left-4 md:bottom-[20%] md:left-[20%] -rotate-12 scale-75 z-20" delay={1} />
      <GlassIcon className="top-10 right-4 md:top-[25%] md:right-[15%] -rotate-6 scale-125 z-20" delay={2} />
      <GlassIcon className="bottom-10 right-10 md:bottom-[15%] md:right-[25%] rotate-45 scale-50 z-20" delay={0.5} />

      {/* Main Glass Promotional Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full mx-auto"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] p-12 md:p-20 text-center flex flex-col items-center">
          
          {/* Card Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-32 bg-gradient-to-b from-white/10 to-transparent opacity-50" />
          
          <motion.span 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/50 bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6"
          >
            {data.content.badge}
          </motion.span>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 bg-gradient-to-br from-white via-white to-white/40 text-transparent bg-clip-text"
          >
            {data.content.title}
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mb-12"
          >
            {data.content.description}
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {data.content.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/80 text-sm font-medium">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </motion.div>
          
          <motion.a 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            href={data.content.cta.url}
            className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            {data.content.cta.text}
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
