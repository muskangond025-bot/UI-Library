"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../../sections/types';

export function Banner2({ section }: SectionProps) {
  const { settings, styles } = section;

  // Derive styles from JSON
  const alignMap: Record<string, string> = {
    left: 'items-start text-left mx-0',
    center: 'items-center text-center mx-auto',
    right: 'items-end text-right ml-auto'
  };
  const alignmentClasses = alignMap[styles.align || 'center'];

  const themeClasses = styles.theme === 'dark' 
    ? 'text-white' 
    : 'text-zinc-900';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className={`relative w-full h-[600px] sm:h-[700px] lg:h-[800px] flex overflow-hidden ${themeClasses}`}>
      
      {/* Background Image Layer */}
      {settings.backgroundImage && (
        <motion.div 
          initial={{ scale: 1.15, filter: 'blur(10px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={settings.backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {styles.overlay && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          )}
        </motion.div>
      )}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <motion.div 
          className={`flex flex-col max-w-3xl w-full ${alignmentClasses}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {settings.eyebrow && (
            <motion.span 
              variants={itemVariants}
              className="mb-4 inline-block px-3 py-1 text-sm font-semibold tracking-widest uppercase border border-current rounded-full opacity-90 shadow-sm"
            >
              {settings.eyebrow}
            </motion.span>
          )}

          {settings.title && (
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] drop-shadow-md"
            >
              {settings.title}
            </motion.h1>
          )}

          {settings.description && (
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl lg:text-2xl mb-10 opacity-90 max-w-2xl font-light leading-relaxed drop-shadow-md"
            >
              {settings.description}
            </motion.p>
          )}

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            {settings.primaryAction && (
              <a 
                href={settings.primaryAction.url}
                className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                  styles.theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100 shadow-white/20'
                    : 'bg-black text-white hover:bg-gray-900 shadow-black/20'
                }`}
              >
                {settings.primaryAction.label}
              </a>
            )}
            
            {settings.secondaryAction && (
              <a 
                href={settings.secondaryAction.url}
                className="px-8 py-4 rounded-full font-semibold backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/20 shadow-lg"
              >
                {settings.secondaryAction.label}
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
