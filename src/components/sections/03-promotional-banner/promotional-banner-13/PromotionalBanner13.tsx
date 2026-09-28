"use client";
import React from 'react';
import { motion } from 'framer-motion';

export interface PromotionalBannerProps {
  section: {
    id: string;
    type: string;
    variant?: string;
    settings: Record<string, any>;
    styles: Record<string, any>;
  };
}

export function PromotionalBanner13({ section }: PromotionalBannerProps) {
  const { settings, styles } = section;
  const bg = styles?.backgroundColor || '#d1d5db';
  const textCol = styles?.textColor || '#000000';
  const accent = styles?.accentColor || '#ff2a00';
  const ticketBg = styles?.ticketBg || '#ffffff';

  // Generate a fake barcode using randomized widths
  // We use fixed seed array so it doesn't cause hydration mismatch
  const fixedBarcodeWidths = [3, 1, 4, 2, 5, 1, 1, 3, 4, 2, 1, 6, 2, 3, 1, 2, 4, 1, 3, 2, 5, 1, 2, 3, 1];
  
  const barcodeBars = fixedBarcodeWidths.map((width, i) => (
    <div 
      key={i} 
      style={{ 
        width: `${width}px`, 
        height: '100%', 
        backgroundColor: textCol,
        marginRight: `${(i % 3) + 1}px`
      }} 
    />
  ));

  return (
    <section 
      className="w-full min-h-screen py-24 px-4 md:px-10 flex items-center justify-center font-mono overflow-hidden selection:bg-black selection:text-white"
      style={{ backgroundColor: bg, color: textCol }}
    >
      <motion.div
        initial={{ y: 150, rotate: -8, opacity: 0 }}
        whileInView={{ y: 0, rotate: -2, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="relative w-full max-w-5xl flex flex-col md:flex-row group"
        style={{ 
          backgroundColor: ticketBg, 
          border: `4px solid ${textCol}`,
          boxShadow: `20px 20px 0px 0px ${textCol}`,
        }}
      >
        
        {/* Rubber Stamp Animation */}
        <motion.div 
          className="absolute z-50 pointer-events-none"
          style={{ top: '8%', right: '25%' }}
          initial={{ scale: 6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.6 }}
        >
          <div 
            className="border-4 px-6 py-2 rounded-xl text-5xl font-black rotate-12 mix-blend-multiply"
            style={{ color: accent, borderColor: accent, textShadow: '2px 2px 0 rgba(0,0,0,0.1)' }}
          >
            VALID
          </div>
        </motion.div>

        {/* LEFT: Main Ticket Body */}
        <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 border-b-4 pb-8 gap-6" style={{ borderColor: textCol }}>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] font-sans" style={{ color: textCol }}>
              {settings.eventName}
            </h1>
            <div className="text-right font-black text-2xl uppercase px-6 py-3 border-4 whitespace-nowrap" style={{ borderColor: textCol, backgroundColor: accent, color: ticketBg }}>
              {settings.discount}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-50 mb-2">Valid Until</p>
              <p className="text-2xl font-black">{settings.date}</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-50 mb-2">Location</p>
              <p className="text-2xl font-black">{settings.location}</p>
            </div>
          </div>
          
          <p className="text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-14 border-l-4 pl-6" style={{ borderColor: textCol }}>
            {settings.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mt-auto">
            <a 
              href={settings.ctaLink}
              className="w-full sm:w-auto text-center px-10 py-5 text-xl font-black uppercase tracking-widest border-4 transition-all hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0"
              style={{ 
                backgroundColor: textCol, 
                color: ticketBg, 
                borderColor: textCol,
                boxShadow: `8px 8px 0px 0px ${accent}` 
              }}
            >
              {settings.ctaText}
            </a>
            <div className="text-center sm:text-left text-lg md:text-xl font-black uppercase px-6 py-5 border-4 border-dashed" style={{ borderColor: textCol }}>
              {settings.code}
            </div>
          </div>
        </div>

        {/* RIGHT: Ticket Stub (Hidden on very small screens) */}
        <div 
          className="hidden md:flex w-48 lg:w-64 border-l-[6px] border-dashed flex-col items-center justify-between p-8 relative overflow-hidden" 
          style={{ borderColor: textCol, backgroundColor: '#f3f4f6' }}
        >
          {/* Semi-circle cutouts to simulate perforation */}
          <div className="absolute top-0 -left-[18px] w-8 h-8 rounded-full -translate-y-1/2" style={{ backgroundColor: bg, border: `4px solid ${textCol}` }} />
          <div className="absolute bottom-0 -left-[18px] w-8 h-8 rounded-full translate-y-1/2" style={{ backgroundColor: bg, border: `4px solid ${textCol}` }} />
          
          <div className="w-full flex-1 flex justify-center items-center mt-10">
            <p 
              className="text-4xl lg:text-5xl font-black uppercase font-sans tracking-widest whitespace-nowrap" 
              style={{ color: textCol, writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              ADMIT ONE
            </p>
          </div>
          
          <div className="w-full h-32 flex justify-center items-center mt-10 mb-8">
             <div className="flex w-full h-full justify-center items-center bg-transparent transform -rotate-90 scale-[2.0]">
               {barcodeBars}
             </div>
          </div>
          
          <div className="w-full text-center mt-auto">
            <p className="text-xl font-bold tracking-widest">#842091</p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
