import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight, Clock, Sparkles } from 'lucide-react';

export function OffersHero1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data || {};
  const eyebrow = settings.eyebrow || 'LIMITED-TIME OFFER';
  const title = settings.title || 'UP TO 50% OFF';
  const description = settings.description || 'Discover selected luxury styles at exclusive prices for a limited time.';
  const code = settings.code || 'DEAL50';
  const validUntil = settings.validUntil || 'ENDS 30 SEPTEMBER';
  const primaryCta = settings.primaryCta || 'SHOP THE DEAL';
  const secondaryCta = settings.secondaryCta || 'VIEW ALL OFFERS';
  const bgImage = settings.bgImage || 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80';

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl">
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.img
          src={bgImage}
          alt="Campaign Background"
          className="w-[125%] h-full object-cover max-w-none"
          animate={{ x: ['0%', '-12%', '0%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 flex flex-col justify-center min-h-[540px]">
        <div className="max-w-2xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-500 uppercase"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/60 px-4 py-2 rounded-xl text-xs font-mono text-amber-300">
              <Tag className="w-4 h-4 text-amber-400" />
              <span>USE CODE: <strong className="text-white text-sm font-bold tracking-wider">{code}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{validUntil}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              <span>{primaryCta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm rounded-xl transition-all">
              {secondaryCta}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OffersHero1;
