import React from 'react';
import { motion } from 'framer-motion';

interface PromoCard9Props {
  data: {
    content: { badge: string; title: string; description: string; cta: { text: string; url: string } };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function PromoCard9({ data }: PromoCard9Props) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center p-6 md:p-12 font-mono relative overflow-hidden bg-[#1E1E1E]" style={{ color: data.style.textColor }}>
      
      {/* 3D Isometric Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00FF41 1px, transparent 1px),
            linear-gradient(to bottom, #00FF41 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          transformOrigin: 'top center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-[#1E1E1E] pointer-events-none" />

      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-xl bg-[#111] border-2 border-[#00FF41] p-10 md:p-12 text-center shadow-[0_20px_50px_rgba(0,255,65,0.2)] rounded-lg"
      >
        <span className="inline-block px-3 py-1 bg-[#00FF41]/20 text-[#00FF41] border border-[#00FF41] text-xs font-bold uppercase tracking-widest mb-6">
          [{data.content.badge}]
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">
          {data.content.title}
        </h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto">
          {data.content.description}
        </p>
        <a href={data.content.cta.url} className="px-10 py-4 bg-[#00FF41] text-black font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:shadow-[0_0_20px_#00FF41] transition-all inline-block">
          {data.content.cta.text}_
        </a>
      </motion.div>
    </div>
  );
}
