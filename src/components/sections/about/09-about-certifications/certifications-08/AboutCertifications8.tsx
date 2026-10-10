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

export function AboutCertifications8({ data }: { data?: any }) {
  const isBright = false;

  const cards = [
    {
        "title": "AI & Machine Learning Engineering Certification",
        "code": "CERT-2026-AI-01",
        "issueDate": "OCT 2026",
        "expiry": "PERPETUAL",
        "authority": "Global AI & Neural Institute",
        "verifyUrl": "https://verify.ai-institute.org/AI-5511",
        "skills": [
            "PyTorch",
            "Transformers",
            "LLM Fine-Tuning",
            "MLOps"
        ]
    },
    {
        "title": "Generative AI & LLM Systems Certification",
        "code": "CERT-2026-LLM-02",
        "issueDate": "AUG 2026",
        "expiry": "PERPETUAL",
        "authority": "OpenAI Research Network",
        "verifyUrl": "https://verify.openai-research.org/LLM-4420",
        "skills": [
            "Prompt Engineering",
            "RAG Architecture",
            "Vector DB",
            "LangChain"
        ]
    },
    {
        "title": "Computer Vision & Deep Learning Standard",
        "code": "CERT-2026-CV-03",
        "issueDate": "MAY 2026",
        "expiry": "MAY 2029",
        "authority": "Vision Computing Society",
        "verifyUrl": "https://verify.vision-comp.org/CV-3310",
        "skills": [
            "OpenCV",
            "YOLOv8",
            "Neural Nets",
            "TensorFlow"
        ]
    }
];

  return (
    <section className={`w-full py-16 px-4 sm:px-6 lg:px-8 ${'bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white'} overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase ${'bg-purple-500/10 text-purple-300 border-purple-500/30'}`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> CYBER CLAYMORPHISM #08 • ANIMATION: PURPLE CLAY MESH & METADATA POP ${isBright ? '• LIGHT THEME' : '• DARK THEME'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            AI & Machine Learning Engineering Certification
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            3D Claymorphism Dynamic Mesh Badge & Minimal Text Preview Metadata
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
                  ? 'bg-white/90 backdrop-blur-xl border-white/15 hover:border-purple-400/60'
                  : 'bg-slate-900/60 backdrop-blur-xl border-white/15 hover:border-purple-400/60'
              }`}
            >
              {/* 1. CARD HEADER */}
              <div className="space-y-3 pb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-60">ACCREDITED CERTIFICATE</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border ${'bg-purple-500/10 text-purple-300 border-purple-500/30'}`}>
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
                    className={`relative z-10 p-5 flex items-center gap-4 border border-white/40 cursor-pointer rounded-3xl ${'bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-400 text-white shadow-[0_15px_35px_rgba(168,85,247,0.4)]'}`}
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
