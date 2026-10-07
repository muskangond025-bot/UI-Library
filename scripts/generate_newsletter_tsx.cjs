const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/blog/08-blog-newsletter');

const animatedComponents = {
  1: `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function BlogNewsletter1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-14 backdrop-blur-2xl shadow-2xl relative z-10 text-center space-y-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5 animate-spin" /> GLASS HERO SUB #01
        </motion.div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{settings.sectionTitle}</h2>
        <p className="text-slate-300 text-base max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 text-sm" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3.5 bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center gap-2">
            <span>{settings.buttonText}</span> <ArrowRight className="w-4 h-4" />
          </motion.button>
        </form>
        <p className="text-xs text-slate-500 font-mono">{settings.disclaimer}</p>
      </div>
    </div>
  );
}`,

  2: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter2({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-900 shadow-[15px_15px_30px_#0b0f19,-15px_-15px_30px_#1b253b] border border-slate-800/80 text-center space-y-6">
        <span className="px-4 py-1.5 rounded-xl bg-slate-900 shadow-[inset_3px_3px_6px_#0b0f19,inset_-3px_-3px_6px_#1b253b] text-sky-400 text-xs font-bold uppercase">
          NEUMORPHIC DUAL-SHADOW BOX #02
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 shadow-[inset_4px_4px_8px_#0b0f19,inset_-4px_-4px_8px_#1b253b] text-white placeholder-slate-500 text-sm focus:outline-none" />
          <motion.button whileTap={{ scale: 0.96 }} className="px-6 py-3 rounded-xl bg-slate-900 shadow-[6px_6px_12px_#0b0f19,-6px_-6px_12px_#1b253b] active:shadow-[inset_3px_3px_6px_#0b0f19] text-sky-400 font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  3: `import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogNewsletter3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-cyan-400 font-mono relative overflow-hidden">
      <motion.div className="absolute inset-x-0 h-0.5 bg-cyan-400/50 blur-sm pointer-events-none" animate={{ y: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
      <div className="max-w-4xl mx-auto border border-cyan-500/40 p-8 sm:p-12 rounded-xl bg-slate-950 text-center space-y-6 relative z-10">
        <div className="flex justify-center items-center gap-2 text-xs text-cyan-400"><Terminal className="w-4 h-4 animate-pulse" /> [HOLO_CYBER_TERMINAL_SUB // 03]</div>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white">{settings.sectionTitle}</h2>
        <p className="text-cyan-200/70 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-black border border-cyan-500/50 text-cyan-300 placeholder-cyan-700 text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-cyan-500 text-black font-bold text-xs uppercase tracking-widest">
            EXECUTE_SUB()
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  4: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter4({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl translate-x-3 translate-y-3 border border-emerald-500/20" />
        <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
          <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded">
            DEPTH CARD BOX #04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-lg bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ y: -2 }} className="px-6 py-3 bg-emerald-500 text-zinc-950 font-bold text-xs uppercase rounded-lg">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  5: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter5({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-indigo-950/40 text-indigo-100">
      <div className="max-w-4xl mx-auto bg-indigo-900/60 border border-indigo-400/30 rounded-[2.5rem] p-8 sm:p-14 backdrop-blur-xl text-center space-y-6 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.4)]">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-300/30 text-indigo-200 text-xs font-extrabold uppercase">
          CLAYMORPHIC 3D FORM #05
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-indigo-200/80 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-6 py-3.5 rounded-2xl bg-indigo-950/80 border border-indigo-400/30 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} className="px-8 py-3.5 rounded-2xl bg-indigo-500 text-white font-black text-xs uppercase shadow-[inset_0_2px_4px_rgba(255,255,255,0.4)]">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  6: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter6({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl text-center space-y-6">
        <span className="px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold">
          FROSTED FLOATING CAPSULE #06
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 rounded-2xl bg-rose-500 text-white font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  7: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter7({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-slate-200">
      <div className="max-w-4xl mx-auto p-[1px] bg-gradient-to-r from-slate-600 via-slate-200 to-slate-700 rounded-3xl relative overflow-hidden group">
        <div className="bg-slate-950 rounded-[23px] p-8 sm:p-14 text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-slate-300 text-xs font-mono uppercase">
            CHROME METALLIC SHEEN #07
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-gradient-to-r from-slate-200 to-slate-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  8: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter8({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white relative overflow-hidden">
      <motion.div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-500 rounded-full blur-[100px] opacity-30 pointer-events-none" animate={{ x: ['-50%', '-45%', '-55%', '-50%'], y: ['-50%', '-55%', '-45%', '-50%'] }} transition={{ duration: 10, repeat: Infinity }} />
      <div className="max-w-4xl mx-auto relative z-10 bg-slate-900/40 border border-white/10 backdrop-blur-3xl rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl">
        <span className="px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
          AURORA MESH BOX #08
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-purple-100/80 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3.5 rounded-2xl bg-slate-950/80 border border-white/20 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-7 py-3.5 bg-purple-500 text-white font-bold text-xs uppercase rounded-2xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  9: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter9({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold">SPLIT CONTENT #09</span>
          <h2 className="text-3xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-400 text-xs">{settings.sectionSubtitle}</p>
        </div>
        <div className="space-y-3 bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <input type="email" placeholder={settings.inputPlaceholder} className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.02 }} className="w-full py-3 bg-blue-500 text-slate-950 font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  10: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter10({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-violet-500/30 rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase">
          DARK VELVET RADAR #10
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-zinc-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 bg-violet-600 text-white font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  11: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter11({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-stone-900 text-stone-200">
      <div className="max-w-4xl mx-auto bg-stone-950 border border-stone-800 p-8 sm:p-12 rounded-2xl shadow-[8px_8px_0px_#1c1917] text-center space-y-6">
        <span className="px-4 py-1 bg-amber-500 text-stone-950 font-mono font-bold text-xs uppercase rounded">
          JOURNAL STAMP BOX #11
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-100">{settings.sectionTitle}</h2>
        <p className="text-stone-400 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-stone-900 border border-stone-700 text-white text-xs font-sans focus:outline-none" />
          <motion.button whileHover={{ y: -2 }} className="px-6 py-3 bg-amber-500 text-stone-950 font-bold text-xs uppercase rounded font-mono">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  12: `import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function BlogNewsletter12({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-emerald-400 font-mono">
      <div className="max-w-4xl mx-auto border border-emerald-500/40 p-8 sm:p-12 rounded-lg bg-emerald-950/20 text-center space-y-6">
        <div className="flex justify-center items-center gap-2 text-xs text-emerald-400"><Terminal className="w-4 h-4 animate-pulse" /> [TELEMETRY_SUB_BOX // 12]</div>
        <h2 className="text-3xl sm:text-5xl font-bold uppercase text-white">{settings.sectionTitle}</h2>
        <p className="text-emerald-300/70 text-xs sm:text-sm font-sans max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-black border border-emerald-500/50 text-emerald-300 text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-emerald-500 text-black font-bold text-xs uppercase">
            EXECUTE_SUB()
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  13: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter13({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl text-center space-y-6">
        <span className="px-3 py-1 bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-bold rounded-full">
          BENTO SUBSCRIBER #13
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-2xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 rounded-2xl bg-teal-500 text-slate-950 font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  14: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter14({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-blue-500/30 rounded-full p-8 sm:p-10 backdrop-blur-xl text-center space-y-4">
        <span className="px-4 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold rounded-full">
          LIQUID CAPSULE BAR #14
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold text-white">{settings.sectionTitle}</h2>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-full bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 rounded-full bg-blue-500 text-slate-950 font-bold text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  15: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter15({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl relative overflow-hidden">
        <div className="bg-slate-950 rounded-[22px] p-8 sm:p-12 text-center space-y-6">
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-mono font-bold rounded-full">
            NEON EDGE GLOW CARD #15
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none" />
            <motion.button whileHover={{ scale: 1.04 }} className="px-6 py-3 bg-pink-500 text-black font-bold text-xs uppercase rounded-xl">
              {settings.buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}`,

  16: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto border-l-2 border-orange-500 pl-6 sm:pl-10 space-y-6">
        <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">ARCHITECTURAL HAIRLINE FORM #16</span>
        <h2 className="text-3xl sm:text-5xl font-light text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-400 text-sm max-w-xl">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none" />
          <motion.button whileHover={{ x: 4 }} className="px-6 py-3 border border-orange-500 text-orange-400 hover:bg-orange-500/10 font-mono text-xs uppercase">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  17: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter17({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-6">
        <span className="px-3 py-1 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded">MAGAZINE OVERLAY SUB BOX #17</span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-3 bg-yellow-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  18: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter18({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <span className="px-4 py-1.5 bg-cyan-400/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase rounded-full">
          PRISMATIC REFRACTION BOX #18
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-cyan-100/70 text-sm max-w-xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-slate-950/80 border border-cyan-400/30 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.04, filter: 'hue-rotate(90deg)' }} className="px-6 py-3 bg-cyan-400 text-slate-950 font-bold text-xs uppercase rounded-xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  19: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-12 px-4 bg-zinc-900 text-amber-100">
      <div className="max-w-4xl mx-auto bg-zinc-900 border border-amber-800/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-inner">
        <span className="px-3.5 py-1.5 bg-zinc-950 border border-amber-700/50 text-amber-400 text-xs font-mono font-bold rounded-lg">
          EMBOSSED VINTAGE RETRO #19
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-amber-50">{settings.sectionTitle}</h2>
        <p className="text-amber-200/70 text-xs sm:text-sm max-w-xl mx-auto font-sans">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-5 py-3 rounded-xl bg-zinc-950 border border-amber-900/50 text-amber-100 text-xs font-sans focus:outline-none" />
          <motion.button whileTap={{ scale: 0.97 }} className="px-6 py-3 bg-amber-700 text-zinc-950 font-bold text-xs uppercase rounded-xl font-mono">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`,

  20: `import React from 'react';
import { motion } from 'framer-motion';

export function BlogNewsletter20({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};

  return (
    <div className="w-full py-14 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto bg-slate-950 border border-fuchsia-500/30 rounded-[3rem] p-10 sm:p-16 text-center space-y-8">
        <span className="px-5 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold tracking-widest uppercase rounded-full">
          ULTRA STREAM FULL-BLEED #20
        </span>
        <h2 className="text-3xl sm:text-6xl font-black text-white">{settings.sectionTitle}</h2>
        <p className="text-slate-300 text-base max-w-2xl mx-auto">{settings.sectionSubtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input type="email" placeholder={settings.inputPlaceholder} className="flex-1 px-6 py-4 rounded-2xl bg-black border border-slate-700 text-white text-sm focus:outline-none" />
          <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-fuchsia-500 text-black font-extrabold text-xs uppercase rounded-2xl">
            {settings.buttonText}
          </motion.button>
        </div>
      </div>
    </div>
  );
}`
};

// Write TSX files
Object.keys(animatedComponents).forEach(id => {
  const numStr = id.toString().padStart(2, '0');
  const dirName = `newsletter-${numStr}`;
  const compName = `BlogNewsletter${id}`;
  const filePath = path.join(baseDir, dirName, `${compName}.tsx`);
  
  fs.writeFileSync(filePath, animatedComponents[id]);
});

console.log('Successfully generated all 20 TSX components for Blog Newsletter!');
