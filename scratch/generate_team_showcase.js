import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'about', '08-about-team-showcase');
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const styles = [
  { num: 1, title: 'FROSTED GLASSMORPHISM', bg: 'bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl' },
  { num: 2, title: 'NEUMORPHIC SOFT TACTILE', bg: 'bg-[#eef2f7] text-slate-800', card: 'bg-[#eef2f7] shadow-[12px_12px_24px_#d1d9e6,-12px_-12px_24px_#ffffff] border border-white/60 text-slate-800' },
  { num: 3, title: 'CYBERPUNK HOLOGRAPHIC HUD', bg: 'bg-black text-cyan-400', card: 'bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-slate-200' },
  { num: 4, title: 'MULTI-LAYER DEPTH STACK', bg: 'bg-slate-900 text-white', card: 'bg-slate-800/80 border border-slate-700 text-slate-200 shadow-xl' },
  { num: 5, title: 'SOFT 3D CLAYMORPHIC', bg: 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 text-slate-900', card: 'bg-white border-2 border-orange-200 shadow-xl text-slate-800 rounded-[2.5rem]' },
  { num: 6, title: 'FROSTED BENTO GRID', bg: 'bg-slate-950 text-white', card: 'bg-slate-900/80 backdrop-blur-md border border-white/10 text-white shadow-lg' },
  { num: 7, title: 'LIQUID CHROME METALLIC', bg: 'bg-gradient-to-tr from-slate-950 via-zinc-900 to-black text-slate-100', card: 'bg-gradient-to-br from-slate-900/90 to-black border border-zinc-700/60 text-slate-200' },
  { num: 8, title: 'AURORA FLUID MESH', bg: 'bg-slate-950 text-white relative overflow-hidden', card: 'bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-2xl' },
  { num: 9, title: 'SPLIT-PANE LEADER FOCUS', bg: 'bg-slate-900 text-slate-100', card: 'bg-slate-800 border border-slate-700 text-slate-200 shadow-xl' },
  { num: 10, title: 'DARK OBSIDIAN VELVET', bg: 'bg-neutral-950 text-amber-100', card: 'bg-neutral-900/90 border border-amber-500/20 text-neutral-200 shadow-2xl' },
  { num: 11, title: 'SKEUOMORPHIC JOURNAL CARD', bg: 'bg-[#faf6f0] text-slate-800', card: 'bg-white border border-amber-200 shadow-md text-slate-800' },
  { num: 12, title: 'SCI-FI TELEMETRY CONSOLE', bg: 'bg-slate-950 text-emerald-400', card: 'bg-slate-900/90 border border-emerald-500/30 text-slate-200 shadow-lg' },
  { num: 13, title: 'BENTO STACKED GLASS', bg: 'bg-slate-900 text-white', card: 'bg-white/10 backdrop-blur-xl border border-white/15 text-white shadow-xl' },
  { num: 14, title: 'FLOATING CAPSULE PILL', bg: 'bg-slate-950 text-white', card: 'bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-[2rem]' },
  { num: 15, title: 'NEON EDGE RAINBOW GLOW', bg: 'bg-slate-950 text-white', card: 'bg-slate-900 border-2 border-indigo-500/50 text-white shadow-xl' },
  { num: 16, title: 'ARCHITECTURAL BLUEPRINT', bg: 'bg-slate-900 text-sky-400', card: 'bg-slate-950 border border-sky-500/40 text-sky-100 shadow-sm' },
  { num: 17, title: 'EDITORIAL MAGAZINE COVER', bg: 'bg-stone-900 text-stone-100', card: 'bg-stone-800 border border-stone-700 text-stone-200 shadow-lg' },
  { num: 18, title: 'PRISMATIC CHROMATIC REFRACTION', bg: 'bg-slate-950 text-fuchsia-300', card: 'bg-white/10 backdrop-blur-2xl border border-fuchsia-500/30 text-white shadow-2xl' },
  { num: 19, title: 'VINTAGE DEBOSSED NEUMORPHIC', bg: 'bg-[#e2e8f0] text-slate-800', card: 'bg-[#e2e8f0] shadow-[inset_5px_5px_10px_#cbd5e1,inset_-5px_-5px_10px_#ffffff] text-slate-800' },
  { num: 20, title: 'ULTRA FLAGSHIP HERO SHOWCASE', bg: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white', card: 'bg-white/10 backdrop-blur-2xl border-2 border-indigo-500/30 text-white shadow-2xl' }
];

styles.forEach(s => {
  const numStr = s.num < 10 ? '0' + s.num : '' + s.num;
  const dirName = 'team-' + numStr;
  const compName = 'AboutTeamShowcase' + s.num;
  const compDir = path.join(baseDir, dirName);

  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  const code = `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Twitter, Github, Mail, Award } from 'lucide-react';

export function ${compName}({ data }: { data?: any }) {
  const members = [
    { name: 'Elena Rostova', role: 'Chief Executive Officer', bio: 'Former VP of Design & Innovation leading scalable enterprise strategy.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
    { name: 'Marcus Vance', role: 'Head of Product Engineering', bio: 'Specialist in distributed micro-frontend architectures and AI automation.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
    { name: 'Sarah Lin', role: 'Principal UX Architect', bio: 'Pioneering accessible multi-morphism component systems & spatial UI.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80' },
    { name: 'David Miller', role: 'VP of AI Research', bio: 'Directing generative design models and real-time design token compilation.', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 ${s.bg} overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-black tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> ${s.title} #${numStr}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Meet Our World-Class Team</h2>
          <p className="opacity-80 text-base sm:text-lg">The visionaries, engineers, and designers crafting next-generation digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={\`p-6 rounded-3xl flex flex-col justify-between space-y-6 transition-all duration-300 ${s.card}\`}
            >
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-inner group">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-3 text-white">
                      <Linkedin className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                      <Twitter className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                      <Github className="w-5 h-5 cursor-pointer hover:text-indigo-400" />
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <span className="text-xs font-mono font-semibold text-indigo-400 block">{m.role}</span>
                  <p className="opacity-80 text-xs leading-relaxed pt-2">{m.bio}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono opacity-60">
                <span>TEAM MEMBER 0{i+1}</span>
                <Award className="w-4 h-4 text-indigo-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`;

  fs.writeFileSync(path.join(compDir, compName + '.tsx'), code, 'utf-8');
});

console.log('Successfully generated all 20 Team Showcase components!');
