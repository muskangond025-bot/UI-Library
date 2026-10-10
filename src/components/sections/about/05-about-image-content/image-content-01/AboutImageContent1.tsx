import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AboutImageContent1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 lg:p-14 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> GLASS EDITORIAL #01
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.15]">CRAFTING DISRUPTIVE VISUAL EXPERIENCE</h2>
            <p className="text-slate-300 text-base leading-relaxed">{settings.excerpt || 'We unite high-end visual design with deep technical precision to create digital products that lead markets.'}</p>
            <div className="space-y-3 pt-2">
              {['Seamless Responsive Layouts', 'Ultra Fast Component Speed', 'Accessible Color Contrast'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
            <img src={settings.featuredImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"} alt="Glass Media" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
