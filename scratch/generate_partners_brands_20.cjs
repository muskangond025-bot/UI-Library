const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/about/10-about-partners-brands');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

function writeComp(numStr, code) {
  const dirPath = path.join(baseDir, `partners-brands-${numStr}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const filePath = path.join(dirPath, `AboutPartnersBrands${parseInt(numStr, 10)}.tsx`);
  fs.writeFileSync(filePath, code, 'utf8');
}

// ============================================================================
// #01: FROSTED GLASSMORPHISM
// ============================================================================
writeComp('01', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Globe2, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export function AboutPartnersBrands1() {
  const partners = [
    { name: 'NVIDIA AI Tech', tier: 'Global Premier', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=200&q=80', metric: '99.9% Integration' },
    { name: 'AWS Cloud Systems', tier: 'Infrastructure Partner', logo: 'https://images.unsplash.com/photo-1542744094-3a3172720449?auto=format&fit=crop&w=200&q=80', metric: 'Multi-Region Scale' },
    { name: 'Google Cloud Platform', tier: 'Enterprise Security', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80', metric: 'Zero-Trust Node' },
    { name: 'Microsoft Azure Alliance', tier: 'Strategic Ecosystem', logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&q=80', metric: 'Global Deployment' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> GLASSMORPHISM #01
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-indigo-200">
            Global Enterprise Brand Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Frosted glassmorphism panels with ambient lighting and real-time alliance status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/15 hover:border-cyan-400/60 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase">
                    {p.tier}
                  </span>
                  <Globe2 className="w-5 h-5 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{p.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{p.metric}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4" /> Verified Alliance
                </span>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #02: DARK OBSIDIAN GLASS
// ============================================================================
writeComp('02', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Lock, ArrowUpRight } from 'lucide-react';

export function AboutPartnersBrands2() {
  const brands = [
    { name: 'Quantum Core Systems', status: 'Active Node', hash: '0x992A...44F1' },
    { name: 'CyberSec Shield Labs', status: 'Audited Partner', hash: '0x11B8...99E0' },
    { name: 'Neural AI Tech Alliance', status: 'Premier Tier', hash: '0x77C3...D102' },
    { name: 'Zero Trust Foundation', status: 'Global Sponsor', hash: '0x44D9...F992' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> OBSIDIAN GLASS #02
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-cyan-400">
            Dark Obsidian Brand Alliance
          </h2>
          <p className="opacity-70 text-base sm:text-lg">
            High-contrast obsidian glass with glowing cyan border reflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800 hover:border-cyan-500/60 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{b.status}</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{b.name}</h3>
                  <span className="text-xs font-mono text-zinc-500 block mt-1">Hash: {b.hash}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-cyan-400 font-bold">
                <span>VERIFIED IDENTITY</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #03: SOFT NEUMORPHISM
// ============================================================================
writeComp('03', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, CheckCircle2, Award } from 'lucide-react';

export function AboutPartnersBrands3() {
  const items = [
    { title: 'Alpha Tech Ventures', cat: 'Venture Capital', score: '99.8%' },
    { title: 'Starlight Design Labs', cat: 'UX Research', score: '98.5%' },
    { title: 'HyperScale Cloud', cat: 'DevOps & Infra', score: '99.9%' },
    { title: 'Nexus Robotics Alliance', cat: 'Hardware Partner', score: '97.9%' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 text-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-slate-600" /> NEUMORPHISM #03
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Soft Neumorphic Strategic Partners
          </h2>
          <p className="opacity-70 text-base sm:text-lg text-slate-600">
            Extruded dual-shadow inset/outset depth effects with tactile click feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-7 rounded-3xl bg-slate-100 transition-all duration-300 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff] hover:shadow-[12px_12px_24px_#cbd5e1,-12px_-12px_24px_#ffffff] flex flex-col justify-between space-y-6 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff] w-fit text-slate-700">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">{item.cat}</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600 font-bold">
                <span>Match Score</span>
                <span className="text-emerald-600">{item.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #04: HOLO CHROMA FOIL
// ============================================================================
writeComp('04', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, Zap } from 'lucide-react';

export function AboutPartnersBrands4() {
  const brands = [
    { title: 'Chroma Horizon Labs', tag: 'Quantum AI', code: 'CHROMA-01' },
    { title: 'Spectra Cyber Defense', tag: 'Zero Trust', code: 'CHROMA-02' },
    { title: 'Prismatic Cloud Tech', tag: 'Scalable Infra', code: 'CHROMA-03' },
    { title: 'Nebula Vision Inc.', tag: 'Spatial Computing', code: 'CHROMA-04' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> HOLO CHROMA #04
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300">
            Holographic Chromatic Brand Foil
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Iridescent rainbow gradient shimmer borders with dynamic light refraction angles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-950/40 to-slate-900/90 backdrop-blur-xl border border-pink-500/30 hover:border-cyan-400 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/10 text-pink-300 border border-white/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-mono font-bold uppercase">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">{b.title}</h3>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{b.code}</span>
                <span className="text-pink-400 flex items-center gap-1 font-bold">Verify Foil <ExternalLink className="w-3 h-3" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #05: CLAYMORPHISM (3D SOFT)
// ============================================================================
writeComp('05', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ExternalLink, CheckCircle2 } from 'lucide-react';

export function AboutPartnersBrands5() {
  const brands = [
    { title: 'Clay Cloud Enterprise', category: '3D Infrastructure', code: 'CLAY-001', tag: 'Premier Tier' },
    { title: 'Mint Green ESG Alliance', category: 'Sustainability', code: 'CLAY-002', tag: 'Eco Standard' },
    { title: 'Soft Surface Design Lab', category: 'Spatial UI', code: 'CLAY-003', tag: 'Verified' },
    { title: 'Pastel Cyber Tech', category: 'Data Protection', code: 'CLAY-004', tag: 'Audited' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-teal-50 to-slate-100 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" /> CLAYMORPHISM 3D #05
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            3D Claymorphic Strategic Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg text-slate-700">
            Fluffy 3D rounded clay logo cards with inner top-light shadow & squishy button feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="p-7 rounded-3xl bg-white border border-slate-200 shadow-[0_20px_40px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-300 text-slate-950 font-bold shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                    {b.tag}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider block">{b.category}</span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-emerald-700 font-bold">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> {b.code}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #06: NEO-BRUTALISM
// ============================================================================
writeComp('06', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Terminal } from 'lucide-react';

export function AboutPartnersBrands6() {
  const partners = [
    { title: 'RAW CYBER FORCE', category: 'DEVOPS / KUBERNETES', code: 'BRUTAL-01' },
    { title: 'STARK VECTOR AI', category: 'NEURAL MODELS', code: 'BRUTAL-02' },
    { title: 'HARDWARE ZERO', category: 'FIPS 140-3 SECURITY', code: 'BRUTAL-03' },
    { title: 'BLOCK CHAIN CORE', category: 'LEDGER AUDIT', code: 'BRUTAL-04' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-yellow-400 text-black border-y-4 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black text-yellow-400 text-xs font-mono font-black tracking-widest uppercase border-2 border-black">
            <Sparkles className="w-3.5 h-3.5" /> NEO-BRUTALISM #06
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">
            STARK NEO-BRUTALIST ALLIANCE
          </h2>
          <p className="font-mono font-bold text-base sm:text-lg">
            High-contrast hard shadows, heavy black borders, and raw industrial typography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ x: -4, y: -4 }}
              className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_#000000] flex flex-col justify-between space-y-6 transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2 bg-yellow-400 border-2 border-black font-black text-xs font-mono">
                    #{idx + 1}
                  </div>
                  <span className="font-mono font-bold text-xs bg-black text-white px-2 py-1">{p.code}</span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-none">{p.title}</h3>
                <p className="font-mono text-xs font-bold text-zinc-600">{p.category}</p>
              </div>

              <div className="pt-4 border-t-4 border-black flex items-center justify-between font-mono font-black text-xs">
                <span>STATUS: VERIFIED</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #07: METALLIC CHROMIUM
// ============================================================================
writeComp('07', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, ExternalLink } from 'lucide-react';

export function AboutPartnersBrands7() {
  const brands = [
    { title: 'Platinum Chromium Labs', tier: 'Tier 1 Alliance' },
    { title: 'Silver Steel Cyber Shield', tier: 'Premier Auditor' },
    { title: 'Liquid Metal Cloud Tech', tier: 'Global Infrastructure' },
    { title: 'Titanium Hardware Corp', tier: 'Cryptographic Node' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800 border border-slate-600 text-slate-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> METALLIC CHROMIUM #07
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400">
            Metallic Chromium Brand Partners
          </h2>
          <p className="opacity-70 text-base sm:text-lg">
            Brushed platinum gradient borders with liquid metal sheen reflections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 border-2 border-slate-400/40 hover:border-slate-200 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-slate-700/40 text-slate-200 border border-slate-500/50 w-fit">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">{b.tier}</span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-slate-100">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-slate-300 font-bold">
                <span>EMBOSSED SEAL</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #08: CYBERPUNK HUD GLASS
// ============================================================================
writeComp('08', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Radio } from 'lucide-react';

export function AboutPartnersBrands8() {
  const partners = [
    { title: 'CYBER-CYAN-NODE-01', speed: '100 Gbps', ping: '1.2ms' },
    { title: 'NEON-RADAR-GATEWAY', speed: '400 Gbps', ping: '0.8ms' },
    { title: 'LIME-SECURITY-GRID', speed: '200 Gbps', ping: '1.5ms' },
    { title: 'QUANTUM-HUD-PARTNER', speed: '800 Gbps', ping: '0.4ms' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-mono font-bold tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5 animate-ping text-lime-400" /> CYBERPUNK HUD #08
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-fuchsia-400 font-mono">
            CYBERPUNK HUD BRAND ALLIANCE
          </h2>
          <p className="opacity-80 text-base sm:text-lg font-mono text-slate-400">
            Scanline radar sweep animations with real-time network latency HUD stats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-lime-500/40 hover:border-lime-400 transition-all shadow-[0_0_25px_rgba(132,204,22,0.2)] flex flex-col justify-between space-y-6 font-mono"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs text-lime-400 font-bold">
                  <span>SYS-STATUS: ONLINE</span>
                  <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wider">{p.title}</h3>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between"><span>Throughput:</span><span className="text-lime-400 font-bold">{p.speed}</span></div>
                <div className="flex justify-between"><span>Latency:</span><span className="text-cyan-400 font-bold">{p.ping}</span></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #09: VELVET MATTE GLASS
// ============================================================================
writeComp('09', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

export function AboutPartnersBrands9() {
  const brands = [
    { title: 'Velvet Soft Creative', category: 'Brand Identity', rating: '5.0 Star' },
    { title: 'Rose Satin Studio', category: 'Spatial Experience', rating: '4.9 Star' },
    { title: 'Coral Sunset Design', category: 'Product System', rating: '5.0 Star' },
    { title: 'Silk Matte Agency', category: 'Luxury Media', rating: '4.8 Star' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-rose-950 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" /> VELVET MATTE #09
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-pink-300 to-amber-200">
            Velvet Matte Strategic Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Satin sheen finish with ultra-soft diffuse background blur and rose gold aura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-rose-950/20 backdrop-blur-3xl border border-rose-500/20 hover:border-rose-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-300 border border-rose-500/20 w-fit">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-rose-400 font-bold uppercase">{b.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{b.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-rose-500/20 flex items-center justify-between text-xs font-mono text-rose-300">
                <span className="flex items-center gap-1 font-bold"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {b.rating}</span>
                <span>PARTNER</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #10: LIQUID AURORA MORPHISM
// ============================================================================
writeComp('10', `import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Waves, ArrowRight } from 'lucide-react';

export function AboutPartnersBrands10() {
  const items = [
    { title: 'Aurora Wave Cloud', node: 'Node 01', speed: 'Fast Flow' },
    { title: 'Emerald Stream AI', node: 'Node 02', speed: 'Realtime' },
    { title: 'Fluid Hydro System', node: 'Node 03', speed: 'Scalable' },
    { title: 'Cyan Morph Alliance', node: 'Node 04', speed: 'Instant' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono font-bold tracking-widest uppercase">
            <Waves className="w-3.5 h-3.5 text-teal-400 animate-pulse" /> LIQUID AURORA #10
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-200">
            Liquid Aurora Morphism Partners
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Animated SVG wave gradients flowing dynamically behind brand logo cards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-2xl border border-teal-500/30 hover:border-teal-400 transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-teal-400 font-bold uppercase">{it.node}</span>
                  <Waves className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{it.title}</h3>
              </div>

              <div className="pt-4 border-t border-teal-500/20 flex items-center justify-between text-xs font-mono text-teal-300 font-bold">
                <span>{it.speed}</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

// ============================================================================
// #11 TO #20: Prism, Parallax, Skeuomorphic, Bento, Bio-Glass, Cosmic, Drawer, Synthwave, Diamond
// ============================================================================

writeComp('11', `import React from 'react';
import { Sparkles, Sun } from 'lucide-react';
export function AboutPartnersBrands11() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> PRISM LIGHT #11</span>
        <h2 className="text-3xl font-black">Prism Light Beam Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-slate-900 border border-violet-500/30 space-y-3">
              <Sun className="w-6 h-6 text-violet-400" />
              <h3 className="text-lg font-bold">Prism Partner Node 0{n}</h3>
              <p className="text-xs font-mono text-slate-400">Prism refraction light beam tracking on hover.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('12', `import React from 'react';
import { Sparkles, Layers } from 'lucide-react';
export function AboutPartnersBrands12() {
  return (
    <section className="w-full py-16 px-4 bg-slate-900 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> PARALLAX STACKED #12</span>
        <h2 className="text-3xl font-black">Floating Parallax Multi-Plane Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3 shadow-2xl">
              <Layers className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold">Parallax Partner Layer 0{n}</h3>
              <p className="text-xs font-mono text-slate-400">Multi-layer parallax scroll elevation.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('13', `import React from 'react';
import { Sparkles, Shield } from 'lucide-react';
export function AboutPartnersBrands13() {
  return (
    <section className="w-full py-16 px-4 bg-zinc-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> SKEUOMORPHIC BEVEL #13</span>
        <h2 className="text-3xl font-black">Skeuomorphic Glossy Bevel Seal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-gradient-to-b from-stone-800 to-stone-900 border-2 border-amber-500/40 space-y-3">
              <Shield className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-amber-100">Glossy Bevel Partner 0{n}</h3>
              <p className="text-xs font-mono text-amber-400/80">Real-feel glass edge bevels & seals.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('14', `import React from 'react';
import { Sparkles } from 'lucide-react';
export function AboutPartnersBrands14() {
  return (
    <section className="w-full py-16 px-4 bg-white text-slate-900 border-y border-slate-200 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-700 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> MONOCHROME HAIRLINE #14</span>
        <h2 className="text-3xl font-black">Monochrome Hairline Matrix Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 border border-slate-300 space-y-2">
              <span className="text-[10px] font-mono text-slate-500">MATRIX-REF-0{n}</span>
              <h3 className="text-lg font-bold">Minimal Brand Partner 0{n}</h3>
              <p className="text-xs font-mono text-slate-600">Zero clutter architectural typography.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('15', `import React from 'react';
import { Sparkles, Grid } from 'lucide-react';
export function AboutPartnersBrands15() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> BENTO BOX GRID #15</span>
        <h2 className="text-3xl font-black">Bento Box Modular Partner Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-8 rounded-3xl bg-slate-900 border border-orange-500/30 md:col-span-2 space-y-3">
            <span className="text-xs font-mono text-orange-400 font-bold">PREMIER GLOBAL TIER</span>
            <h3 className="text-2xl font-bold">NVIDIA & AWS Global Infrastructure</h3>
            <p className="text-xs text-slate-400">Multi-region cloud node deployment partner.</p>
          </div>
          <div className="p-8 rounded-3xl bg-orange-950/40 border border-orange-500/30 space-y-3">
            <span className="text-xs font-mono text-orange-300 font-bold">SECURITY TIER</span>
            <h3 className="text-xl font-bold">Google Security</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
`);

writeComp('16', `import React from 'react';
import { Sparkles, Leaf } from 'lucide-react';
export function AboutPartnersBrands16() {
  return (
    <section className="w-full py-16 px-4 bg-emerald-950 text-emerald-100 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> FROSTED BIO-GLASS #16</span>
        <h2 className="text-3xl font-black text-white">Frosted Emerald Bio-Glass Eco Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-emerald-900/40 border border-emerald-500/30 space-y-3">
              <Leaf className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Eco Net-Zero Partner 0{n}</h3>
              <p className="text-xs text-emerald-300/80">Organic leaf particle glow.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('17', `import React from 'react';
import { Sparkles, Orbit } from 'lucide-react';
export function AboutPartnersBrands17() {
  return (
    <section className="w-full py-16 px-4 bg-purple-950 text-purple-100 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> COSMIC STARFIELD #17</span>
        <h2 className="text-3xl font-black text-white">Cosmic Starfield Brand Orbit</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-purple-900/40 border border-purple-400/30 space-y-3">
              <Orbit className="w-6 h-6 text-purple-300" />
              <h3 className="text-lg font-bold text-white">Cosmic Partner Orbit 0{n}</h3>
              <p className="text-xs text-purple-300/80">Twinkling starfield background particles.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('18', `import React, { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
export function AboutPartnersBrands18() {
  const [open, setOpen] = useState(false);
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> CASE STUDY DRAWER MODAL #18</span>
        <h2 className="text-3xl font-black">Interactive Case Study Drawer Modal</h2>
        <button onClick={() => setOpen(!open)} className="px-6 py-3 rounded-2xl bg-amber-500 text-slate-950 font-bold text-sm">
          {open ? 'Close Case Study Drawer' : 'Preview Case Study Drawer Modal'}
        </button>
        {open && (
          <div className="p-8 rounded-3xl bg-slate-900 border border-amber-500/40 text-left max-w-xl mx-auto space-y-3">
            <h3 className="text-xl font-bold">NVIDIA & Cloud Alliance Case Study</h3>
            <p className="text-xs font-mono text-slate-400">METRICS: +450% Processing Throughput | 99.999% SLA</p>
          </div>
        )}
      </div>
    </section>
  );
}
`);

writeComp('19', `import React from 'react';
import { Sparkles, Radio } from 'lucide-react';
export function AboutPartnersBrands19() {
  return (
    <section className="w-full py-16 px-4 bg-slate-950 text-white text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> SYNTHWAVE GRID #19</span>
        <h2 className="text-3xl font-black">Synthwave Neon Perspective Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-slate-900 border border-fuchsia-500/40 space-y-3">
              <Radio className="w-6 h-6 text-fuchsia-400 animate-pulse" />
              <h3 className="text-lg font-bold text-white">Synthwave Brand 0{n}</h3>
              <p className="text-xs font-mono text-fuchsia-300/80">Retro sunset perspective grid lines.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

writeComp('20', `import React from 'react';
import { Sparkles, Gem } from 'lucide-react';
export function AboutPartnersBrands20() {
  return (
    <section className="w-full py-16 px-4 bg-black text-amber-100 text-center">
      <div className="max-w-7xl mx-auto space-y-8">
        <span className="px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase"><Sparkles className="w-3.5 h-3.5 inline mr-2"/> ULTRA LUXURY DIAMOND #20</span>
        <h2 className="text-3xl font-black text-amber-200">Ultra Luxury Diamond Faceted Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[1,2,3].map(n => (
            <div key={n} className="p-6 rounded-3xl bg-stone-900 border-2 border-amber-400/40 space-y-3">
              <Gem className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Diamond Tier Partner 0{n}</h3>
              <p className="text-xs font-mono text-amber-400">FACETED DIAMOND GEOMETRY</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`);

console.log('Successfully created all 20 AboutPartnersBrands components.');
