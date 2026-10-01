import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmptyCartSection1({ data }: { data?: any }) {
  const settings = data?.section?.settings || {"title":"Your Cart Is Empty","subtitle":"Explore our latest curated collections to find handcrafted items you'll love","primaryCta":{"label":"Start Shopping","href":"/shop"},"categories":[{"name":"New Arrivals","href":"/new"},{"name":"Best Sellers","href":"/best-sellers"},{"name":"Trending Apparel","href":"/apparel"},{"name":"Accessories","href":"/accessories"}]};

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-slate-950 text-white font-sans overflow-hidden border-y border-slate-800">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        {/* AWWWARDS-Level Animated Tracing SVG Cart */}
        <div className="w-36 h-36 mb-6 relative flex items-center justify-center">
          <svg viewBox="0 0 120 120" fill="none" className="w-full h-full text-indigo-400">
            {/* Ambient Pulsing Glow Background Ring */}
            <motion.circle 
              cx="60" cy="60" r="50" 
              stroke="rgba(99, 102, 241, 0.2)" 
              strokeWidth="2" 
              strokeDasharray="6 6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Tracing Cart Basket Outline */}
            <motion.path
              d="M20 25 H35 L45 75 H95 L105 35 H38"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="12 6"
              animate={{ strokeDashoffset: [-36, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Animated Wireframe Wheels */}
            <g>
              <motion.circle cx="50" cy="90" r="8" stroke="#38bdf8" strokeWidth="3" fill="#0f172a"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <line x1="50" y1="82" x2="50" y2="98" stroke="#38bdf8" strokeWidth="2" />
              <line x1="42" y1="90" x2="58" y2="90" stroke="#38bdf8" strokeWidth="2" />
            </g>
            <g>
              <motion.circle cx="90" cy="90" r="8" stroke="#38bdf8" strokeWidth="3" fill="#0f172a"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <line x1="90" y1="82" x2="90" y2="98" stroke="#38bdf8" strokeWidth="2" />
              <line x1="82" y1="90" x2="98" y2="90" stroke="#38bdf8" strokeWidth="2" />
            </g>
            {/* Floating Sparkle inside empty cart */}
            <motion.path 
              d="M70 45 L73 52 L80 55 L73 58 L70 65 L67 58 L60 55 L67 52 Z" 
              fill="#f59e0b"
              animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-2">01 / CONTINUOUS SVG DASH TRACING</span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{settings.title}</h2>
        <p className="text-sm text-slate-400 mb-8 max-w-sm">{settings.subtitle}</p>
        
        <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all">
          <span>{settings.primaryCta?.label || 'Start Shopping'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
export default EmptyCartSection1;