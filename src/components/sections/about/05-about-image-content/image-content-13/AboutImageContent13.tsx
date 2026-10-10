import React from 'react';
import { motion } from 'framer-motion';

export function AboutImageContent13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        {/* Main Content Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <span>✦</span> Bento Grid Media
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
              {settings.title || 'Modular Visual Systems Built for Enterprise Performance'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {settings.excerpt || 'Harmonizing multi-layered UI components with seamless media integration. Experience next-generation digital interfaces designed with visual clarity and precision.'}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-purple-400">99.9%</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Reliability</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-indigo-400">2.4x</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Faster Load</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">100+</div>
              <div className="text-xs text-slate-400 font-medium uppercase mt-1">Modules</div>
            </div>
          </div>
        </motion.div>

        {/* Media Frame Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-gradient-to-br from-purple-900/20 via-slate-900/80 to-slate-950 border border-purple-500/20 rounded-3xl p-3 relative overflow-hidden group min-h-[350px] flex items-center justify-center"
        >
          <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden">
            <img 
              src={settings.featuredImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} 
              alt="Bento Media" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50">
              <p className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Dynamic Layout Node</p>
              <p className="text-xs text-slate-400 mt-0.5">Optimized responsive render engine</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
