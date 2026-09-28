import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';


export function Banner12({ section }: any) {
  const { settings = {} } = section || {};
  
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-black flex items-center">
      
      {/* Background Image with Parallax & Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <img 
          src={settings.backgroundImage || "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop"} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-[0.2em] uppercase">
              {settings.badge || "PREMIUM EDITION"}
            </span>
          </motion.div>

          <div className="flex flex-col gap-2 mb-8">
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-light text-white tracking-tight"
              >
                {settings.titleLine1 || "IMAGINE"}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 tracking-tighter"
              >
                {settings.titleLine2 || "THE FUTURE"}
              </motion.h1>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-gray-300 font-light max-w-xl mb-12 leading-relaxed"
          >
            {settings.description || "Step into a realm of unprecedented elegance. Handcrafted experiences with dynamic aesthetics."}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              <span className="relative z-10">{settings.primaryAction?.label || "Get Started"}</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
            <button className="group px-6 py-4 rounded-full font-medium text-white transition-colors hover:text-gray-300 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="tracking-wide uppercase text-sm">{settings.secondaryAction?.label || "View Showreel"}</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
