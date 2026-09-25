"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { SectionProps } from '../../sections/types';

export function Banner3({ section }: SectionProps) {
  const { settings, styles } = section;

  return (
    <section className="relative w-full h-[600px] sm:h-[700px] lg:h-[800px] bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] opacity-40 pointer-events-none"
          style={{
            background: 'conic-gradient(from 90deg at 50% 50%, #000000 0%, #1a1a1a 50%, #333333 100%)',
            filter: 'blur(100px)'
          }}
        />
        {settings.backgroundImage && (
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            src={settings.backgroundImage}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay pointer-events-none"
          />
        )}
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        {/* Main Typography Area */}
        <div className="lg:col-span-8 flex flex-col justify-center h-full pt-12">
          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500"
            >
              {settings.title}
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-6 mt-6 sm:mt-10"
          >
            <div className="w-16 sm:w-24 h-px bg-white/50 shrink-0" />
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 max-w-xl leading-relaxed">
              {settings.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {settings.primaryAction && (
              <a href={settings.primaryAction.url} className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300">
                {settings.primaryAction.label}
              </a>
            )}
            {settings.secondaryAction && (
              <a href={settings.secondaryAction.url} className="px-8 sm:px-10 py-4 sm:py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white/10 transition-colors duration-300">
                {settings.secondaryAction.label}
              </a>
            )}
          </motion.div>
        </div>

        {/* Floating Abstract Element or Badge */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center h-full">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 50, delay: 0.5 }}
            className="w-56 h-56 rounded-full border border-white/10 flex items-center justify-center relative backdrop-blur-md bg-white/5 shadow-2xl"
          >
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full border border-dashed border-white/30"
            />
            <div className="text-center flex flex-col items-center justify-center gap-2">
              <span className="text-3xl">🏆</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] leading-loose text-gray-300">
                Awwwards<br/>Winner<br/>2026
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
