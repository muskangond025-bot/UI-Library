import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink, Sparkles, CheckCircle2, Copy, Check, Layers, Cpu, Code2 } from 'lucide-react';

// Verified Badge Sub-Component showcasing Official Authority Link
function VerifiedBadgeTag({ authority, verifyUrl, isBright }: { authority: string; verifyUrl: string; isBright: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(verifyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`inline-flex items-center gap-2 p-2.5 rounded-2xl border text-xs font-mono font-semibold transition-all shadow-sm w-full justify-between ${
      isBright 
        ? 'bg-white/80 border-slate-200 text-slate-800 shadow-slate-200/50 hover:bg-white' 
        : 'bg-white/10 border-white/15 text-slate-200 hover:bg-white/15'
    }`}>
      <div className="flex items-center gap-1.5 truncate">
        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 font-bold" />
        <span className="truncate max-w-[150px] sm:max-w-[180px] font-bold opacity-90">{authority}</span>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px]"
          title="Copy Verification Link"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
        <a
          href={verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400"
          title="Open Authority Verification"
        >
          <span>Verify</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export function AboutCertifications5({ data }: { data?: any }) {
  const isBright = true;

  const cards = [
    {
        "title": "Frontend Engineering Certification",
        "code": "CERT-2026-FE-01",
        "issueDate": "OCT 2026",
        "expiry": "PERPETUAL",
        "authority": "W3C & Global Web Alliance",
        "verifyUrl": "https://verify.w3c-web.org/cert/FE-9901",
        "skills": [
            "React 19",
            "TypeScript",
            "TailwindCSS v4",
            "Framer Motion"
        ]
    },
    {
        "title": "UI/UX Spatial Design Certification",
        "code": "CERT-2026-UX-02",
        "issueDate": "SEP 2026",
        "expiry": "PERPETUAL",
        "authority": "Design Systems Institute",
        "verifyUrl": "https://verify.designsystems.org/cert/UX-8820",
        "skills": [
            "Figma Tokens",
            "Micro-Interactions",
            "Glassmorphism",
            "Accessibility"
        ]
    },
    {
        "title": "Modern JavaScript & Web Performance",
        "code": "CERT-2026-JS-03",
        "issueDate": "AUG 2026",
        "expiry": "OCT 2029",
        "authority": "JS Open Web Standard",
        "verifyUrl": "https://verify.jsorg.io/cert/JS-7731",
        "skills": [
            "Vite 8",
            "Web Workers",
            "Performance Optimization",
            "ESNext"
        ]
    }
];

  return (
    <section className={`w-full py-16 px-4 sm:px-6 lg:px-8 ${'bg-gradient-to-b from-slate-50 via-amber-50/50 to-slate-100 text-slate-900'} overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase ${'bg-amber-500/10 text-amber-700 border-amber-500/30'}`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> 3D CLAYMORPHISM #05 • ANIMATION: LIGHT CLAY MESH & TACTILE PRESS ${isBright ? '• LIGHT THEME' : '• DARK THEME'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Frontend Engineering Certification
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Claymorphic 3D Dynamic Mesh Badge & Neo-Minimalist Text Preview with Verified Authority Link
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group ${
                isBright
                  ? 'bg-white/90 backdrop-blur-xl border-slate-200 shadow-slate-200/80 hover:border-amber-400'
                  : 'bg-slate-900/60 backdrop-blur-xl border-slate-200 shadow-slate-200/80 hover:border-amber-400'
              }`}
            >
              {/* 1. CARD HEADER */}
              <div className="space-y-3 pb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-60">ACCREDITED CERTIFICATE</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${'bg-amber-500/10 text-amber-700 border-amber-500/30'}`}>
                    VERIFIED
                  </span>
                </div>
                <h3 className="text-xl font-bold tracking-tight leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* 2. BODY MEDIA: Claymorphism 3D Dynamic Mesh Badge & Neo-Minimalism Text Preview */}
              <div className="space-y-5">
                {/* Claymorphism 3D Dynamic Mesh Badge */}
                <div className="relative aspect-[16/9] rounded-2xl flex items-center justify-center overflow-hidden p-6 bg-slate-500/5 border border-slate-500/10">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:14px_14px]" />
                  
                  {/* Clay 3D Mesh Badge Element */}
                  <motion.div
                    animate={{ rotateY: [0, 8, -8, 0], rotateX: [0, 4, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`relative z-10 p-5 flex items-center gap-4 border border-white/40 cursor-pointer rounded-3xl ${'bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-300 text-slate-950 shadow-[0_15px_30px_rgba(251,191,36,0.4)]'}`}
                  >
                    <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-inner">
                      <Award className="w-8 h-8 shrink-0" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest block opacity-90">3D DYNAMIC MESH</span>
                      <h4 className="text-base font-black tracking-tight">{card.code}</h4>
                    </div>
                  </motion.div>
                </div>

                {/* Neo-Minimalism Text Preview & Metadata */}
                <div className="p-4 rounded-2xl bg-slate-500/5 border border-slate-500/10 space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="opacity-60">Issue Date:</span>
                    <span className="font-bold">{card.issueDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-60">Validity:</span>
                    <span className="font-bold text-emerald-500 dark:text-emerald-400">{card.expiry}</span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-black/5 dark:border-white/5">
                    {card.skills.map((s: string, sIdx: number) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 text-[10px] font-bold">
                        #{s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. VERIFIED BADGE TAG SUB-COMPONENT */}
              <div className="pt-2">
                <VerifiedBadgeTag
                  authority={card.authority}
                  verifyUrl={card.verifyUrl}
                  isBright={isBright}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
