import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WarrantyInformation9({ data }: { data: any }) {
  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-slate-900 flex items-center justify-center perspective-[1000px]">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
        whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-slate-800 p-1 rounded-3xl border border-slate-700 shadow-2xl"
      >
        <div className="bg-slate-900 rounded-[22px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Global Warranty</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              No matter where you travel, our warranty travels with you. Get support and replacements at any of our 500+ global service centers.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-200 transition-colors">
              Find a Center
            </button>
          </div>
          <div className="w-48 h-48 rounded-full border-[8px] border-slate-800 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,255,255,0.05)]">
            <motion.div 
              className="absolute inset-0 border-t-[8px] border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-white text-4xl">🌍</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
