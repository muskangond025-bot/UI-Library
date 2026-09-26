"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

const IconComponent = ({ name, className, style }: { name: string; className?: string; style?: React.CSSProperties }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.Box className={className} style={style} />;
  return <Icon className={className} style={style} />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

export function PromotionalBanner8({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#f1f5f9';
  const textCol = styles?.textColor || '#0f172a';
  const cardBg = styles?.cardBg || '#ffffff';
  const accent = styles?.accentColor || '#4f46e5';
  
  const features = settings?.features || [];

  return (
    <section 
      className="w-full py-20 px-4 md:px-8 flex justify-center items-center font-sans overflow-hidden min-h-screen"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-7xl grid grid-cols-12 gap-4 md:gap-6"
      >
        {/* Main CTA Hero Bento Box - Spans 12 cols on mobile, 8 cols on desktop */}
        <motion.div 
          variants={itemVariants}
          className="col-span-12 lg:col-span-8 rounded-[2rem] p-8 md:p-14 flex flex-col justify-center relative overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500"
          style={{ backgroundColor: cardBg }}
        >
          {/* Subtle background decoration */}
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-150" style={{ backgroundColor: accent }} />
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full opacity-5 pointer-events-none transition-transform duration-700 group-hover:scale-150 delay-100" style={{ backgroundColor: accent }} />

          <div className="relative z-10 max-w-2xl">
            <h4 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: accent }}>
              {settings.subTitle}
            </h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight">
              {settings.mainTitle}
            </h2>
            <p className="text-lg md:text-xl opacity-70 mb-10 max-w-xl leading-relaxed font-medium">
              {settings.description}
            </p>
            
            <motion.a
              href={settings.ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-bold text-white shadow-lg overflow-hidden relative group/btn w-max"
              style={{ backgroundColor: accent }}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-10 transition-opacity" />
              <span className="relative z-10">{settings.ctaText}</span>
              <LucideIcons.ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Highlight Image/Graphic Bento Box - Spans 12 cols on mobile, 4 cols on desktop */}
        <motion.div 
          variants={itemVariants}
          className="col-span-12 lg:col-span-4 rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 min-h-[300px]"
          style={{ backgroundColor: accent, color: '#ffffff' }}
        >
          {/* Dot Grid Background */}
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
          
          <motion.div 
            className="w-32 h-32 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl relative z-10 cursor-pointer"
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <LucideIcons.Layers className="w-16 h-16 text-white" />
          </motion.div>
          <p className="mt-8 font-bold text-xl tracking-wide relative z-10 group-hover:text-white/90 transition-colors">Seamless Integration</p>
        </motion.div>

        {/* Dynamic Feature Boxes - Bottom Row */}
        {features.map((feature: any, idx: number) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`${feature.colSpan} rounded-[2rem] p-8 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500`}
            style={{ backgroundColor: cardBg }}
            whileHover={{ y: -5 }}
          >
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              style={{ backgroundColor: `${accent}15` }}
            >
              <IconComponent name={feature.icon} className="w-7 h-7" style={{ color: accent }} />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">{feature.title}</h3>
            <p className="opacity-60 text-base font-medium">{feature.desc}</p>
            
            {/* Hover arrow indicator */}
            <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
              <LucideIcons.ArrowUpRight className="w-6 h-6 opacity-30" style={{ color: accent }} />
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}
