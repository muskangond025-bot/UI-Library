import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';

export function AboutBrandStory7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-black text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl p-1 bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          <div className="bg-slate-950 rounded-[23px] p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900 border border-slate-700 rounded-full text-slate-200 text-xs font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-slate-300 shrink-0" /> CHROME LIQUID #07
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-400 tracking-tight leading-[1.15]">
                {settings.title || 'PRECISION CHROME METALLIC BRAND IDENTITY'}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {settings.excerpt || 'Precision liquid metal highlights and high-contrast chrome borders engineered for futuristic company identity presentations.'}
              </p>
              <div className="pt-4 border-t border-slate-800">
                <motion.button whileHover={{ scale: 1.03 }} className="px-8 py-3.5 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-extrabold text-xs uppercase tracking-widest rounded-xl flex items-center gap-2">
                  <span>Explore Chrome Story</span> <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-700 group shadow-2xl">
              <img src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} alt="Chrome Metal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
