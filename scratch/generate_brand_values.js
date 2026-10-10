import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'about', '07-about-brand-values');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const styles = [
  { num: 1, title: 'BRIGHT GLASS MORPHISM', bg: 'bg-gradient-to-b from-slate-50 via-white to-blue-50/30', card: 'bg-white/70 backdrop-blur-xl border border-blue-100 shadow-xl shadow-blue-100/50' },
  { num: 2, title: 'NEUMORPHIC SOFT LIGHT', bg: 'bg-[#eef2f7]', card: 'bg-[#eef2f7] shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff]' },
  { num: 3, title: 'SOFT 3D CLAYMORPHISM', bg: 'bg-gradient-to-tr from-amber-50/50 via-rose-50/30 to-sky-50', card: 'bg-white border-2 border-rose-100 shadow-xl shadow-rose-100/40 rounded-[2.5rem]' },
  { num: 4, title: 'AURORA VIBRANT MESH', bg: 'bg-slate-50', card: 'bg-white/80 backdrop-blur-xl border border-white shadow-xl shadow-indigo-100/30' },
  { num: 5, title: 'BRIGHT BENTO GRID', bg: 'bg-white', card: 'bg-slate-50 border border-slate-200 shadow-sm' },
  { num: 6, title: 'PASTEL LIQUID GLASS', bg: 'bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50', card: 'bg-white/80 backdrop-blur-2xl border border-white shadow-xl shadow-purple-100/50' },
  { num: 7, title: 'NEUMORPHIC SOFT EMBOSS', bg: 'bg-[#f0f3f8]', card: 'bg-[#f0f3f8] shadow-[10px_10px_20px_#d9e0ea,-10px_-10px_20px_#ffffff] border border-white/60' },
  { num: 8, title: 'SUNBURST VIBRANT MORPHISM', bg: 'bg-gradient-to-tr from-amber-100/60 via-orange-50 to-yellow-100/40', card: 'bg-white/90 backdrop-blur-md border border-amber-200/60 shadow-lg shadow-amber-200/30' },
  { num: 9, title: 'CLEAN MINIMALIST MONO', bg: 'bg-slate-50', card: 'bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]' },
  { num: 10, title: 'EMERALD FROSTED MESH', bg: 'bg-gradient-to-b from-emerald-50 via-teal-50 to-cyan-50', card: 'bg-white/75 backdrop-blur-xl border border-emerald-200/50 shadow-xl shadow-emerald-100/40' },
  { num: 11, title: 'LIGHT SKEUOMORPHIC CARD', bg: 'bg-amber-50/40', card: 'bg-white border border-amber-200/80 shadow-md shadow-amber-900/5' },
  { num: 12, title: 'BRIGHT SCI-FI TELEMETRY', bg: 'bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50', card: 'bg-white/80 backdrop-blur-md border border-cyan-300 shadow-md' },
  { num: 13, title: 'CHROME PRISMATIC LIGHT', bg: 'bg-gradient-to-tr from-rose-50 via-sky-50 to-indigo-50', card: 'bg-white/70 backdrop-blur-2xl border-2 border-white shadow-2xl' },
  { num: 14, title: 'FLOATING CAPSULE MORPHISM', bg: 'bg-gradient-to-b from-slate-50 to-indigo-50/40', card: 'bg-white/90 backdrop-blur-lg border border-slate-200 shadow-xl rounded-[2rem]' },
  { num: 15, title: 'RAINBOW GRADIENT BORDER', bg: 'bg-slate-50', card: 'bg-white border-2 border-indigo-200 shadow-xl' },
  { num: 16, title: 'ARCHITECTURAL BLUEPRINT LIGHT', bg: 'bg-sky-50/50', card: 'bg-white border border-sky-300 shadow-sm' },
  { num: 17, title: 'EDITORIAL MAGAZINE BRIGHT', bg: 'bg-gradient-to-b from-stone-50 via-orange-50/20 to-stone-50', card: 'bg-white border border-stone-200 shadow-lg' },
  { num: 18, title: 'PRISMATIC REFRACTION LIGHT', bg: 'bg-gradient-to-r from-violet-50 via-fuchsia-50 to-pink-50', card: 'bg-white/80 backdrop-blur-xl border border-pink-200 shadow-xl' },
  { num: 19, title: 'RETRO DEBOSSED NEUMORPHIC', bg: 'bg-[#eef2f5]', card: 'bg-[#eef2f5] shadow-[inset_4px_4px_8px_#d1d7de,inset_-4px_-4px_8px_#ffffff]' },
  { num: 20, title: 'ULTRA FLAGSHIP HERO LIGHT', bg: 'bg-gradient-to-br from-indigo-50 via-white to-purple-50', card: 'bg-white/90 backdrop-blur-2xl border-2 border-indigo-100 shadow-2xl' }
];

styles.forEach(s => {
  const numStr = s.num < 10 ? '0' + s.num : '' + s.num;
  const dirName = 'brand-values-' + numStr;
  const compName = 'AboutBrandValues' + s.num;
  const compDir = path.join(baseDir, dirName);
  
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }
  
  const code = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Target, Heart, Award } from 'lucide-react';

export function ${compName}({ data }: { data?: any }) {
  const values = [
    { title: 'Uncompromising Integrity', desc: 'Ethical execution, radical honesty, and total commitment to open transparency across all teams.', icon: Shield },
    { title: 'Purposeful Innovation', desc: 'Solving real-world challenges through elegant component architecture and forward-thinking design.', icon: Zap },
    { title: 'Customer Empathy', desc: 'Deep respect for user experience drives every button click, pixel offset, and micro-interaction.', icon: Heart },
    { title: 'Excellence Standard', desc: 'Setting industry benchmarks with high speed, zero compromise, and enterprise grade scalability.', icon: Target }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 ${s.bg} text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 shadow-md text-indigo-600 text-xs font-black tracking-widest uppercase border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5" /> ${s.title} #${numStr}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">Pillars of Our Brand Values</h2>
          <p className="text-slate-600 text-base sm:text-lg">Guiding principles shaping our culture, engineering standard, and product vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className={\`p-8 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 ${s.card}\`}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                  <span>VALUE 0{i+1}</span>
                  <Award className="w-4 h-4 text-indigo-500 opacity-60" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(path.join(compDir, compName + '.tsx'), code, 'utf-8');
});

console.log('Successfully created all 20 Brand Values components!');
