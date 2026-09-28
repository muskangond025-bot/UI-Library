import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface PromoCard3Props {
  data: {
    content: {
      badge: string;
      title: string;
      description: string;
      cta: { text: string; url: string };
      benefits: string[];
    };
    style: {
      backgroundColor: string;
      textColor: string;
    };
  };
}

export default function PromoCard3({ data }: PromoCard3Props) {
  // Mouse tracking for 3D card tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center py-20 px-6 font-sans relative"
      style={{ backgroundColor: data.style.backgroundColor, color: data.style.textColor }}
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest mb-6">
              {data.content.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-tight">
              {data.content.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              {data.content.description}
            </p>
            
            <ul className="space-y-4 mb-12">
              {data.content.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-800 font-medium">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <a 
              href={data.content.cta.url}
              className="inline-block px-10 py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-gray-800 hover:scale-105 transition-all shadow-xl shadow-black/20"
            >
              {data.content.cta.text}
            </a>
          </motion.div>
        </div>

        {/* Right Side: 3D CSS Card */}
        <div 
          className="flex justify-center items-center perspective-[1000px] py-12"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -20, 0] }}
            transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            className="w-[340px] h-[214px] md:w-[480px] md:h-[300px] rounded-3xl relative p-8 shadow-2xl flex flex-col justify-between border border-white/10"
          >
            {/* Dark gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)]" />
            
            {/* Metallic texture/reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl opacity-50" />
            
            {/* Card Content */}
            <div className="relative z-10 flex justify-between items-start" style={{ transform: "translateZ(30px)" }}>
              <div className="text-white/80 font-bold tracking-widest uppercase text-sm md:text-base">
                PREMIUM
              </div>
              {/* Fake NFC icon */}
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </div>
            
            <div className="relative z-10 mt-auto" style={{ transform: "translateZ(40px)" }}>
              {/* Fake Chip */}
              <div className="w-10 h-8 md:w-12 md:h-10 border border-gray-600 rounded-md bg-gradient-to-br from-gray-400 to-gray-300 mb-6 flex items-center justify-center opacity-80">
                <div className="w-6 h-4 border border-gray-500 rounded-sm" />
              </div>
              
              <div className="flex justify-between items-end">
                <div className="text-white font-mono text-xl md:text-2xl tracking-widest opacity-90 drop-shadow-md">
                  **** **** **** 9012
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/80 mix-blend-screen -mr-4 md:-mr-6 relative">
                  <div className="absolute right-6 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-orange-500/80 mix-blend-screen" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
