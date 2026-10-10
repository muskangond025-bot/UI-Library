import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Users, Award, Globe } from 'lucide-react';

export function AboutCompanyStatistics1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> COMPANY STATISTICS #01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200 leading-[1.15]">
            GLOBAL METRICS & PROVEN IMPACT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
            <Globe className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-black text-amber-400 font-mono">140+</h3>
            <p className="text-sm font-bold text-white">COUNTRIES REACHED</p>
            <p className="text-xs text-slate-400">Serving enterprise clients worldwide across continents.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
            <Users className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-black text-amber-400 font-mono">3.2M+</h3>
            <p className="text-sm font-bold text-white">ACTIVE DEVELOPERS</p>
            <p className="text-xs text-slate-400">Building software with our modern UI design systems.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
            <TrendingUp className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-black text-amber-400 font-mono">99.99%</h3>
            <p className="text-sm font-bold text-white">UPTIME RELIABILITY</p>
            <p className="text-xs text-slate-400">Fault-tolerant distributed cloud infrastructure performance.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-3">
            <Award className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-black text-amber-400 font-mono">250+</h3>
            <p className="text-sm font-bold text-white">INDUSTRY AWARDS</p>
            <p className="text-xs text-slate-400">Recognized globally for UX excellence and architecture.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
