import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'about', '06-about-company-timeline');

const layouts = [
  // 1. Vertical
  { num: 1, type: 'vertical', title: 'CLASSIC VERTICAL CHRONICLE', bg: 'bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl' },
  // 2. Horizontal
  { num: 2, type: 'horizontal', title: 'COMPACT HORIZONTAL STEPPER', bg: 'bg-[#eef2f7] text-slate-800', card: 'bg-[#eef2f7] shadow-[10px_10px_20px_#d1d9e6,-10px_-10px_20px_#ffffff] border border-white/60 text-slate-800' },
  // 3. Gantt Chart
  { num: 3, type: 'gantt', title: 'DESKTOP DASHBOARD GANTT CHART', bg: 'bg-slate-950 text-cyan-400', card: 'bg-slate-900/90 border border-cyan-500/40 shadow-2xl text-slate-200' },
  // 4. Activity Feed
  { num: 4, type: 'activity', title: 'SAAS & SOCIAL REAL-TIME ACTIVITY FEED', bg: 'bg-slate-900 text-white', card: 'bg-slate-800/80 border border-slate-700 text-slate-200 shadow-xl' },
  
  // 5. Vertical
  { num: 5, type: 'vertical', title: 'SOFT 3D CLAYMORPHIC VERTICAL', bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-slate-900', card: 'bg-white border-2 border-orange-200 shadow-xl text-slate-800 rounded-[2.5rem]' },
  // 6. Horizontal
  { num: 6, type: 'horizontal', title: 'FROSTED BENTO HORIZONTAL TRACK', bg: 'bg-slate-950 text-white', card: 'bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-lg' },
  // 7. Gantt Chart
  { num: 7, type: 'gantt', title: 'LIQUID CHROME PROJECT GANTT', bg: 'bg-gradient-to-tr from-slate-950 via-zinc-900 to-black text-slate-100', card: 'bg-gradient-to-br from-slate-900/90 to-black border border-zinc-700/60 text-slate-200' },
  // 8. Activity Feed
  { num: 8, type: 'activity', title: 'AURORA MESH REAL-TIME ACTIVITY LOGS', bg: 'bg-slate-950 text-white relative overflow-hidden', card: 'bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-2xl' },
  
  // 9. Vertical
  { num: 9, type: 'vertical', title: 'SPLIT-PANE VERTICAL FOCUS', bg: 'bg-slate-900 text-slate-100', card: 'bg-slate-800 border border-slate-700 text-slate-200 shadow-xl' },
  // 10. Horizontal
  { num: 10, type: 'horizontal', title: 'DARK OBSIDIAN HORIZONTAL JOURNEY', bg: 'bg-neutral-950 text-amber-100', card: 'bg-neutral-900/90 border border-amber-500/20 text-neutral-200 shadow-2xl' },
  // 11. Gantt Chart
  { num: 11, type: 'gantt', title: 'SKEUOMORPHIC ROADMAP GANTT CHART', bg: 'bg-[#faf6f0] text-slate-800', card: 'bg-white border border-amber-200 shadow-md text-slate-800' },
  // 12. Activity Feed
  { num: 12, type: 'activity', title: 'SCI-FI HUD REAL-TIME TELEMETRY FEED', bg: 'bg-slate-950 text-emerald-400', card: 'bg-slate-900/90 border border-emerald-500/30 text-slate-200 shadow-lg' },
  
  // 13. Vertical
  { num: 13, type: 'vertical', title: 'BENTO STACKED GLASS VERTICAL', bg: 'bg-slate-900 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-xl' },
  // 14. Horizontal
  { num: 14, type: 'horizontal', title: 'FLOATING CAPSULE HORIZONTAL STEPPER', bg: 'bg-slate-950 text-white', card: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-[2rem]' },
  // 15. Gantt Chart
  { num: 15, type: 'gantt', title: 'NEON EDGE RAINBOW GANTT MATRIX', bg: 'bg-slate-950 text-white', card: 'bg-slate-900 border-2 border-indigo-500/50 text-white' },
  // 16. Activity Feed
  { num: 16, type: 'activity', title: 'ARCHITECTURAL BLUEPRINT LOG STREAM', bg: 'bg-slate-900 text-sky-400', card: 'bg-slate-950 border border-sky-500/40 text-sky-100 shadow-sm' },

  // 17. Vertical
  { num: 17, type: 'vertical', title: 'FULL-BLEED MAGAZINE VERTICAL', bg: 'bg-stone-900 text-stone-100', card: 'bg-stone-800 border border-stone-700 text-stone-200 shadow-lg' },
  // 18. Horizontal
  { num: 18, type: 'horizontal', title: 'PRISMATIC HORIZONTAL REFRACTION STEPPER', bg: 'bg-slate-950 text-fuchsia-300', card: 'bg-white/10 backdrop-blur-2xl border border-fuchsia-500/30 text-white shadow-2xl' },
  // 19. Gantt Chart
  { num: 19, type: 'gantt', title: 'RETRO DEBOSSED GANTT SCHEDULE', bg: 'bg-[#e2e8f0] text-slate-800', card: 'bg-[#e2e8f0] shadow-[inset_5px_5px_10px_#cbd5e1,inset_-5px_-5px_10px_#ffffff] text-slate-800' },
  // 20. Activity Feed
  { num: 20, type: 'activity', title: 'ULTRA FLAGSHIP REAL-TIME EVENT STREAM', bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white', card: 'bg-white/10 backdrop-blur-2xl border-2 border-indigo-500/30 text-white shadow-2xl' }
];

layouts.forEach(s => {
  const numStr = s.num < 10 ? '0' + s.num : '' + s.num;
  const dirName = 'timeline-' + numStr;
  const compName = 'AboutCompanyTimeline' + s.num;
  const compDir = path.join(baseDir, dirName);

  let layoutCode = '';

  if (s.type === 'vertical') {
    layoutCode = `
        {/* VERTICAL: Best for High Data Volume (Top to Bottom) */}
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-500/20 -translate-x-1/2 rounded-full" />
          <div className="space-y-8 lg:space-y-12">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isEven = i % 2 === 0;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className={\`grid grid-cols-1 lg:grid-cols-12 gap-6 items-center \${isEven ? '' : 'lg:flex-row-reverse'}\`}>
                  <div className={\`lg:col-span-5 \${isEven ? 'lg:text-right' : 'lg:order-2 lg:text-left'}\`}>
                    <div className={\`p-8 rounded-3xl space-y-4 ${s.card}\`}>
                      <span className="inline-block px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs">YEAR {m.year}</span>
                      <h3 className="text-2xl font-bold">{m.title}</h3>
                      <p className="opacity-80 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
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
        </div>`;
  } else if (s.type === 'horizontal') {
    layoutCode = `
        {/* HORIZONTAL: Best for Low Data Volume (Left to Right Fixed Steps) */}
        <div className="relative pt-8">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-500/30 -translate-y-1/2 rounded-full z-0" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }} className="flex flex-col items-center space-y-6">
                  <div className={\`p-6 rounded-3xl space-y-3 w-full flex-1 flex flex-col justify-between ${s.card}\`}>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs">{m.year}</span>
                      <span className="text-xs font-mono font-bold opacity-60">STEP 0{i+1}</span>
                    </div>
                    <h3 className="text-xl font-bold">{m.title}</h3>
                    <p className="opacity-80 text-xs leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg border-4 border-slate-900 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>`;
  } else if (s.type === 'gantt') {
    layoutCode = `
        {/* GANTT CHART: Best for Desktop Dashboard Multi-Project Schedules */}
        <div className={\`p-8 rounded-3xl space-y-8 overflow-x-auto ${s.card}\`}>
          <div className="flex items-center justify-between min-w-[700px] border-b border-slate-700/50 pb-4 text-xs font-mono font-bold opacity-60">
            <span>PROJECT PHASE / MILESTONE</span>
            <div className="grid grid-cols-4 gap-12 text-center w-1/2">
              <span>Q1 2024</span>
              <span>Q2 2024</span>
              <span>Q3 2024</span>
              <span>Q4 2024</span>
            </div>
          </div>
          <div className="space-y-6 min-w-[700px]">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center justify-between gap-6">
                <div className="w-1/2 space-y-1">
                  <h4 className="font-bold text-base">{m.title}</h4>
                  <p className="opacity-70 text-xs">{m.desc}</p>
                </div>
                <div className="w-1/2 bg-slate-800/50 h-8 rounded-xl p-1 relative flex items-center">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: \`\${(i + 1) * 23}%\` }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="h-full rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-end px-3 text-[10px] font-bold text-white shadow-md">
                    {m.year}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>`;
  } else if (s.type === 'activity') {
    layoutCode = `
        {/* ACTIVITY FEED: Best for SaaS & Social Real-Time Event Logs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className={\`p-6 rounded-2xl flex items-start gap-4 hover:translate-x-1.5 transition-transform ${s.card}\`}>
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">{m.title}</h4>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-semibold">{m.year} • Live</span>
                  </div>
                  <p className="opacity-80 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>`;
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
${layoutCode}
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(path.join(compDir, compName + '.tsx'), code, 'utf-8');
});

console.log('Successfully updated Company Timeline with 4 distinct layout types: Vertical, Horizontal, Gantt Chart & Activity Feed!');
