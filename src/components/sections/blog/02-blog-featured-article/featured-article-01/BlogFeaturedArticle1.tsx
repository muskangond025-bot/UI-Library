import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, ArrowRight, User, Bookmark, Share2 } from 'lucide-react';

export function BlogFeaturedArticle1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto relative rounded-3xl p-8 lg:p-14 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> GLASS EDITORIAL #01
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              {settings.title || 'THE FUTURE OF SUSTAINABLE DIGITAL ARCHITECTURE'}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {settings.excerpt || 'Exploring how zero-carbon cloud infrastructure and glassmorphic UI principles are reshaping modern web experiences.'}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-t border-white/10 pt-4">
              <span className="text-amber-400 font-bold">{settings.author?.name || 'Elena Rostova'}</span>
              <span>•</span>
              <span>{settings.date || 'OCT 07, 2026'}</span>
              <span>•</span>
              <span>{settings.readTime || '6 MIN READ'}</span>
            </div>
            <div className="pt-2">
              <button className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2">
                <span>Read Full Article</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3] group">
              <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Editorial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-xs font-mono">
                Glassmorphism Blur: 24px
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}