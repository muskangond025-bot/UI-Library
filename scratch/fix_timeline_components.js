import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'about', '06-about-company-timeline');

const styles = [
  { num: 1, title: 'FROSTED GLASS TIMELINE', bg: 'bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl' },
  { num: 2, title: 'NEUMORPHIC LIGHT CHRONICLE', bg: 'bg-[#eef2f7] text-slate-800', card: 'bg-[#eef2f7] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] border border-white/60 text-slate-800' },
  { num: 3, title: 'CYBERPUNK HOLO TIMELINE', bg: 'bg-black text-cyan-400', card: 'bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-slate-200' },
  { num: 4, title: 'MULTI-LAYER ELEVATED ROADMAP', bg: 'bg-slate-900 text-white', card: 'bg-slate-800/80 border border-slate-700 text-slate-200 shadow-xl' },
  { num: 5, title: 'SOFT 3D CLAYMORPHIC MILESTONES', bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-slate-900', card: 'bg-white border-2 border-orange-200 shadow-xl shadow-orange-100/50 text-slate-800 rounded-[2.5rem]' },
  { num: 6, title: 'FROSTED BENTO ROADMAP', bg: 'bg-slate-950 text-white', card: 'bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-lg' },
  { num: 7, title: 'LIQUID CHROME METALLIC', bg: 'bg-gradient-to-tr from-slate-950 via-zinc-900 to-black text-slate-100', card: 'bg-gradient-to-br from-slate-900/90 to-black border border-zinc-700/60 shadow-2xl text-slate-200' },
  { num: 8, title: 'AURORA MESH GLASS CHRONOLOGY', bg: 'bg-slate-950 text-white relative overflow-hidden', card: 'bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-2xl' },
  { num: 9, title: 'SPLIT-PANE FOCUS TIMELINE', bg: 'bg-slate-900 text-slate-100', card: 'bg-slate-800 border border-slate-700 text-slate-200 shadow-xl' },
  { num: 10, title: 'DARK OBSIDIAN VELVET', bg: 'bg-neutral-950 text-amber-100', card: 'bg-neutral-900/90 border border-amber-500/20 text-neutral-200 shadow-2xl' },
  { num: 11, title: 'SKEUOMORPHIC JOURNAL MILESTONES', bg: 'bg-[#faf6f0] text-slate-800', card: 'bg-white border border-amber-200 shadow-md text-slate-800' },
  { num: 12, title: 'SCI-FI TELEMETRY TIMELINE', bg: 'bg-slate-950 text-emerald-400', card: 'bg-slate-900/90 border border-emerald-500/30 text-slate-200 shadow-lg' },
  { num: 13, title: 'BENTO STACKED GLASS ROADMAP', bg: 'bg-slate-900 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-xl' },
  { num: 14, title: 'FLOATING CAPSULE CHRONOLOGY', bg: 'bg-slate-950 text-white', card: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-[2rem]' },
  { num: 15, title: 'NEON EDGE RAINBOW TIMELINE', bg: 'bg-slate-950 text-white', card: 'bg-slate-900 border-2 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] text-white' },
  { num: 16, title: 'ARCHITECTURAL BLUEPRINT ROADMAP', bg: 'bg-slate-900 text-sky-400', card: 'bg-slate-950 border border-sky-500/40 text-sky-100 shadow-sm' },
  { num: 17, title: 'FULL-BLEED MAGAZINE MILESTONES', bg: 'bg-stone-900 text-stone-100', card: 'bg-stone-800 border border-stone-700 text-stone-200 shadow-lg' },
  { num: 18, title: 'PRISMATIC REFRACTION CHRONICLE', bg: 'bg-slate-950 text-fuchsia-300', card: 'bg-white/10 backdrop-blur-2xl border border-fuchsia-500/30 text-white shadow-2xl' },
  { num: 19, title: 'VINTAGE DEBOSSED NEUMORPHIC', bg: 'bg-[#e2e8f0] text-slate-800', card: 'bg-[#e2e8f0] shadow-[inset_5px_5px_10px_#cbd5e1,inset_-5px_-5px_10px_#ffffff] text-slate-800' },
  { num: 20, title: 'ULTRA FLAGSHIP HERO TIMELINE', bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white', card: 'bg-white/10 backdrop-blur-2xl border-2 border-indigo-500/30 text-white shadow-2xl' }
];

styles.forEach(s => {
  const numStr = s.num < 10 ? '0' + s.num : '' + s.num;
  const dirName = 'timeline-' + numStr;
  const compName = 'AboutCompanyTimeline' + s.num;
  const compDir = path.join(baseDir, dirName);
  
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }
  
  const code = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flag, Rocket, Trophy, Globe } from 'lucide-react';

export function ${compName}({ data }: { data?: any }) {
  const milestones = [
    { year: '2020', title: 'Company Foundation', desc: 'Started with a visionary team of 3 engineers aiming to redefine modern web component architecture.', icon: Rocket },
    { year: '2022', title: 'Global Series A & Expansion', desc: 'Scaled operations across 12 countries and crossed 100,000 active developer deployments.', icon: Globe },
    { year: '2024', title: 'Flagship UI Design System', desc: 'Launched enterprise component libraries featuring native micro-interactions and multi-morphism themes.', icon: Trophy },
    { year: '2026', title: 'AI-Native Automation', desc: 'Integrated autonomous design engines and real-time design tokens for global enterprise teams.', icon: Flag }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 ${s.bg} overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> ${s.title} #${numStr}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Company Journey & Key Milestones</h2>
          <p className="opacity-80 text-base sm:text-lg">Tracing our history from founding vision to global industry leadership.</p>
        </div>

        <div className="relative">
          {/* Vertical central connector line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-500/20 -translate-x-1/2 rounded-full" />

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={\`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center \${isEven ? '' : 'lg:flex-row-reverse'}\`}
                >
                  <div className={\`lg:col-span-5 \${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}\`}>
                    <div className={\`p-8 rounded-3xl space-y-4 ${s.card}\`}>
                      <span className="inline-block px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs">
                        YEAR {m.year}
                      </span>
                      <h3 className="text-2xl font-bold">{m.title}</h3>
                      <p className="opacity-80 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="lg:col-span-2 flex justify-center items-center z-10">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/40 border-4 border-slate-900">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  <div className={\`lg:col-span-5 hidden lg:block \${isEven ? 'lg:order-2' : ''}\`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(path.join(compDir, compName + '.tsx'), code, 'utf-8');
});

console.log('Successfully fixed Company Timeline components!');
