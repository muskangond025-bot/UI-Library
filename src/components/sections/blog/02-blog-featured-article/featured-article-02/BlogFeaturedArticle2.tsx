import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Clock, ArrowRight } from 'lucide-react';

export function BlogFeaturedArticle2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  return (
    <div className="w-full py-8 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto p-8 rounded-3xl bg-slate-900 shadow-[15px_15px_30px_#0b0f19,-15px_-15px_30px_#1b253b] border border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)]">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1800&q=80"} alt="Soft Neumorphism" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold tracking-widest uppercase">
              NEUMORPHIC SPOTLIGHT #02
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {settings.title || 'THE ART OF TACTILE NEUMORPHIC INTERFACES'}
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {settings.excerpt || 'Exploring soft dimensional depth, dual shadow dynamics, and tactile feedback in modern web product design.'}
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
              <button className="px-6 py-3 rounded-xl bg-slate-900 shadow-[6px_6px_12px_#0b0f19,-6px_-6px_12px_#1b253b] active:shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2">
                <span>Explore Story</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}