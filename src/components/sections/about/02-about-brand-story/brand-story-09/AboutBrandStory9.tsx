import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight } from 'lucide-react';

export function AboutBrandStory9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl bg-slate-950"
        >
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider rounded-md">
                <Layers className="w-3.5 h-3.5 shrink-0" /> SPLIT TIMELINE #09
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.15] tracking-tight">
                {settings.title || 'SPLIT CAROUSEL BRAND EVOLUTION & MILESTONES'}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                {settings.excerpt || 'Dual-pane editorial layout featuring milestone timeline indicators and smooth dynamic story updates.'}
              </p>
            </div>
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <motion.button whileHover={{ scale: 1.03 }} className="px-7 py-3.5 bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl flex items-center gap-2">
                <span>Explore Timeline</span> <ArrowRight className="w-4 h-4" />
              </motion.button>
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((idx) => (
                  <button key={idx} onClick={() => setActiveIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-10 bg-blue-500' : 'w-3 bg-slate-800'}`} />
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80"} alt="Split Brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
