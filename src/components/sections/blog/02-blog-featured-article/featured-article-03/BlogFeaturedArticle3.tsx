import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap } from 'lucide-react';

export function BlogFeaturedArticle3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-black text-cyan-400 font-mono">
      <div className="max-w-7xl mx-auto rounded-2xl border border-cyan-500/40 p-8 bg-slate-950/90 relative overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]">
        <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-500/20 border-b border-l border-cyan-500/40 text-[10px] tracking-widest">
          SYS.HOLO_HUD // V3.0
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2 text-xs text-cyan-300">
              <Terminal className="w-4 h-4" /> <span>HOLOGRAPHIC CYBER SPOTLIGHT #03</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-wide uppercase leading-none drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
              {settings.title || 'QUANTUM ENCRYPTION & NEURAL MESH PROTOCOLS'}
            </h1>
            <p className="text-cyan-200/70 text-sm sm:text-base leading-relaxed font-sans">
              {settings.excerpt || 'Analyzing the convergence of zero-knowledge cryptography and decentralized neural networks in 2026.'}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 border-t border-cyan-900/60">
              <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs uppercase tracking-widest clip-corner">
                INITIALIZE_READ
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 relative aspect-square border border-cyan-500/30 rounded-xl overflow-hidden p-2">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"} alt="Cyber" className="w-full h-full object-cover opacity-80 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}