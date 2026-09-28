"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, ShieldAlert, Cpu } from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

const CHARS = '!<>-_\\/[]{}—=+*^?#01X';

// Component that scrambles text until it resolves
const ScrambleText = ({ text, delay = 0, trigger }: { text: string, delay?: number, trigger: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText('');
      return;
    }
    
    let frame = 0;
    let timeout: any;
    
    const startDelay = setTimeout(() => {
      const run = () => {
        let result = '';
        let completed = 0;
        
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' ';
            completed++;
            continue;
          }
          
          if (frame >= (i * 3)) {
            result += text[i];
            completed++;
          } else {
            result += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }
        
        setDisplayText(result);
        
        if (completed < text.length) {
          frame++;
          // Randomize glitch speed slightly
          timeout = setTimeout(run, 20 + Math.random() * 20);
        }
      };
      
      run();
    }, delay * 1000);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(startDelay);
    };
  }, [text, delay, trigger]);

  return <span className="inline-block">{displayText || '\u00A0'}</span>;
};

export function PromotionalBanner16({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#050505';
  const textCol = styles?.textColor || '#00ff41';
  const accent = styles?.accentColor || '#008f11';
  const secCol = styles?.secondaryColor || '#ffffff';
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[800px] h-screen overflow-hidden flex items-center justify-center font-mono selection:bg-[#00ff41] selection:text-black"
      style={{ backgroundColor: bg, color: textCol }}
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)
          `, 
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg) scale(2.5) translateY(-100px)',
          transformOrigin: 'top'
        }}
      />
      
      {/* Glowing scanline effect */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none z-10"
        style={{ background: `linear-gradient(to bottom, transparent, ${textCol}, transparent)` }}
        animate={{ y: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      
      {/* Corner UI Elements */}
      <div className="absolute top-8 left-8 flex items-center gap-2 opacity-50 z-20">
        <Cpu className="w-5 h-5 animate-pulse" />
        <span className="text-xs tracking-widest">SYS.CORE.V.2</span>
      </div>
      <div className="absolute bottom-8 right-8 text-xs tracking-widest opacity-50 z-20">
        {settings.subtitle}
      </div>

      {/* Main Terminal Window */}
      <div className="relative z-30 max-w-4xl w-full mx-4 border px-6 py-10 md:p-16 backdrop-blur-sm" style={{ borderColor: accent, backgroundColor: 'rgba(0,0,0,0.6)' }}>
        
        {/* Terminal Header */}
        <div className="absolute top-0 left-0 w-full h-8 flex items-center px-4 border-b gap-4" style={{ borderColor: accent, backgroundColor: 'rgba(0,143,17,0.2)' }}>
           <Terminal className="w-4 h-4" />
           <span className="text-xs uppercase tracking-widest opacity-80">Terminal_Access</span>
        </div>

        <div className="mt-4 flex flex-col items-start gap-8">
          
          <div className="flex items-center gap-4 text-red-500 mb-2">
            <ShieldAlert className="w-8 h-8 animate-pulse" />
            <span className="text-sm md:text-base font-bold tracking-[0.4em] uppercase">
              <ScrambleText text="WARNING: ENCRYPTED DEAL" delay={0.2} trigger={isInView} />
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none" style={{ textShadow: `0 0 20px ${accent}` }}>
            <ScrambleText text={settings.title} delay={0.6} trigger={isInView} />
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: secCol }}>
            <ScrambleText text={settings.discount} delay={1.4} trigger={isInView} />
          </h2>
          
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed opacity-80 mt-6 border-l-2 pl-4" style={{ borderColor: accent }}>
            <ScrambleText text={settings.description} delay={2.0} trigger={isInView} />
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 w-full">
            <motion.a
              href={settings.ctaLink}
              whileHover={{ 
                scale: 1.05, 
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: `0px 0px 15px ${textCol}` 
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 text-xl font-bold uppercase tracking-widest border transition-all"
              style={{ backgroundColor: textCol, color: bg, borderColor: textCol }}
            >
              {settings.ctaText}
            </motion.a>
            
            <div className="w-full sm:w-auto text-center sm:text-left text-xl font-bold px-6 py-4 border-2 border-dashed" style={{ borderColor: accent }}>
               <ScrambleText text={settings.code} delay={3.5} trigger={isInView} />
            </div>
          </div>
          
          {/* Blinking Cursor */}
          <motion.div 
            animate={{ opacity: [1, 0, 1] }} 
            transition={{ duration: 1, repeat: Infinity }}
            className="w-4 h-8 mt-4"
            style={{ backgroundColor: textCol }}
          />
        </div>
      </div>
    </section>
  );
}
