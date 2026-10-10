const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/about/09-about-certifications');

const configs = [
  {
    num: '05',
    id: 5,
    title: 'Frontend Engineering Certification',
    subtitle: 'Claymorphic 3D Dynamic Mesh Badge & Neo-Minimalist Text Preview with Verified Authority Link',
    isBright: true,
    bg: 'bg-gradient-to-b from-slate-50 via-amber-50/50 to-slate-100 text-slate-900',
    headerBadge: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    clayBadge: 'bg-gradient-to-tr from-amber-400 via-orange-400 to-yellow-300 text-slate-950 shadow-[0_15px_30px_rgba(251,191,36,0.4)]',
    cardBorder: 'border-slate-200 shadow-slate-200/80 hover:border-amber-400',
    cards: [
      { title: 'Frontend Engineering Certification', code: 'CERT-2026-FE-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'W3C & Global Web Alliance', verifyUrl: 'https://verify.w3c-web.org/cert/FE-9901', skills: ['React 19', 'TypeScript', 'TailwindCSS v4', 'Framer Motion'] },
      { title: 'UI/UX Spatial Design Certification', code: 'CERT-2026-UX-02', issueDate: 'SEP 2026', expiry: 'PERPETUAL', authority: 'Design Systems Institute', verifyUrl: 'https://verify.designsystems.org/cert/UX-8820', skills: ['Figma Tokens', 'Micro-Interactions', 'Glassmorphism', 'Accessibility'] },
      { title: 'Modern JavaScript & Web Performance', code: 'CERT-2026-JS-03', issueDate: 'AUG 2026', expiry: 'OCT 2029', authority: 'JS Open Web Standard', verifyUrl: 'https://verify.jsorg.io/cert/JS-7731', skills: ['Vite 8', 'Web Workers', 'Performance Optimization', 'ESNext'] }
    ]
  },
  {
    num: '06',
    id: 6,
    title: 'Full-Stack Architecture Certification',
    subtitle: 'Dark Claymorphic 3D Dynamic Mesh Layout & Neo-Minimalist Metadata with Authority Verification',
    isBright: false,
    bg: 'bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white',
    headerBadge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    clayBadge: 'bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-[0_15px_35px_rgba(99,102,241,0.4)]',
    cardBorder: 'border-white/15 hover:border-indigo-400/60',
    cards: [
      { title: 'Full-Stack Architecture Certification', code: 'CERT-2026-FS-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'Enterprise Tech Alliance', verifyUrl: 'https://verify.enterprisetech.org/FS-4412', skills: ['Node.js', 'Next.js 15', 'GraphQL', 'PostgreSQL'] },
      { title: 'Microservices & API Gateway Standard', code: 'CERT-2026-MS-02', issueDate: 'JUL 2026', expiry: 'PERPETUAL', authority: 'Open API Consortium', verifyUrl: 'https://verify.openapi.org/MS-3391', skills: ['gRPC', 'REST Architecture', 'Kafka', 'Redis'] },
      { title: 'Distributed Systems & Cloud Scale', code: 'CERT-2026-DS-03', issueDate: 'MAY 2026', expiry: 'MAY 2029', authority: 'Cloud Scale Foundation', verifyUrl: 'https://verify.cloudscale.io/DS-2201', skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS'] }
    ]
  },
  {
    num: '07',
    id: 7,
    title: 'Cloud Security & DevOps Certification',
    subtitle: 'Bright Neo-Minimalism Theme with 3D Dynamic Clay Mesh & Verified Authority Tag Sub-Component',
    isBright: true,
    bg: 'bg-gradient-to-b from-sky-50 via-slate-50 to-cyan-50 text-slate-900',
    headerBadge: 'bg-cyan-500/10 text-cyan-700 border-cyan-500/30',
    clayBadge: 'bg-gradient-to-tr from-cyan-400 via-sky-400 to-blue-400 text-slate-950 shadow-[0_15px_30px_rgba(34,211,238,0.4)]',
    cardBorder: 'border-slate-200 shadow-slate-200/80 hover:border-cyan-400',
    cards: [
      { title: 'Cloud Security & DevOps Certification', code: 'CERT-2026-SEC-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'Cloud Security Alliance', verifyUrl: 'https://verify.cloudsecurityalliance.org/SEC-9912', skills: ['DevSecOps', 'Zero Trust', 'IAM Security', 'Kubernetes'] },
      { title: 'ISO 27001 Lead Security Auditor', code: 'CERT-2026-ISO-02', issueDate: 'JUN 2026', expiry: 'PERPETUAL', authority: 'International ISO Board', verifyUrl: 'https://verify.iso-audit.org/ISO-8831', skills: ['Risk Assessment', 'FIPS 140-3', 'Compliance', 'Audit'] },
      { title: 'SOC 2 Type II Compliance Master', code: 'CERT-2026-SOC-03', issueDate: 'APR 2026', expiry: 'APR 2029', authority: 'AICPA Trust Authority', verifyUrl: 'https://verify.aicpa.org/SOC-7710', skills: ['Privacy Standard', 'Data Encryption', 'SOC Reporting', 'Governance'] }
    ]
  },
  {
    num: '08',
    id: 8,
    title: 'AI & Machine Learning Engineering Certification',
    subtitle: '3D Claymorphism Dynamic Mesh Badge & Minimal Text Preview Metadata',
    isBright: false,
    bg: 'bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white',
    headerBadge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    clayBadge: 'bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-400 text-white shadow-[0_15px_35px_rgba(168,85,247,0.4)]',
    cardBorder: 'border-white/15 hover:border-purple-400/60',
    cards: [
      { title: 'AI & Machine Learning Engineering Certification', code: 'CERT-2026-AI-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'Global AI & Neural Institute', verifyUrl: 'https://verify.ai-institute.org/AI-5511', skills: ['PyTorch', 'Transformers', 'LLM Fine-Tuning', 'MLOps'] },
      { title: 'Generative AI & LLM Systems Certification', code: 'CERT-2026-LLM-02', issueDate: 'AUG 2026', expiry: 'PERPETUAL', authority: 'OpenAI Research Network', verifyUrl: 'https://verify.openai-research.org/LLM-4420', skills: ['Prompt Engineering', 'RAG Architecture', 'Vector DB', 'LangChain'] },
      { title: 'Computer Vision & Deep Learning Standard', code: 'CERT-2026-CV-03', issueDate: 'MAY 2026', expiry: 'MAY 2029', authority: 'Vision Computing Society', verifyUrl: 'https://verify.vision-comp.org/CV-3310', skills: ['OpenCV', 'YOLOv8', 'Neural Nets', 'TensorFlow'] }
    ]
  },
  {
    num: '09',
    id: 9,
    title: 'Cybersecurity & PenTesting Certification',
    subtitle: 'Bright Emerald Theme with Clay Dynamic Mesh Badge & Official Verified Badge Tag',
    isBright: true,
    bg: 'bg-gradient-to-b from-emerald-50 via-slate-50 to-teal-50 text-slate-900',
    headerBadge: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
    clayBadge: 'bg-gradient-to-tr from-emerald-400 via-teal-400 to-green-300 text-slate-950 shadow-[0_15px_30px_rgba(52,211,153,0.4)]',
    cardBorder: 'border-slate-200 shadow-slate-200/80 hover:border-emerald-400',
    cards: [
      { title: 'Cybersecurity & PenTesting Certification', code: 'CERT-2026-CYBER-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'CREST & Offensive Security', verifyUrl: 'https://verify.crest-security.org/CYBER-1102', skills: ['Ethical Hacking', 'OWASP Top 10', 'Network Penetration', 'Metasploit'] },
      { title: 'Zero-Trust Architecture Standard', code: 'CERT-2026-ZT-02', issueDate: 'JUL 2026', expiry: 'PERPETUAL', authority: 'NIST Cyber Standards', verifyUrl: 'https://verify.nist-cyber.gov/ZT-9930', skills: ['Micro-segmentation', 'IAM Policy', 'PKI Encryption', 'Endpoint Security'] },
      { title: 'Incident Response & Threat Hunting', code: 'CERT-2026-IR-03', issueDate: 'MAR 2026', expiry: 'MAR 2029', authority: 'Global CERT Network', verifyUrl: 'https://verify.cert-net.org/IR-8821', skills: ['SIEM Logging', 'Forensics', 'Threat Intel', 'Malware Analysis'] }
    ]
  },
  {
    num: '10',
    id: 10,
    title: 'UX & Product Design Systems Certification',
    subtitle: 'Vibrant Neo-Minimalist Clay Layout & Authority Link Sub-Component',
    isBright: false,
    bg: 'bg-gradient-to-b from-slate-950 via-rose-950 to-slate-900 text-white',
    headerBadge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    clayBadge: 'bg-gradient-to-tr from-rose-500 via-pink-500 to-orange-400 text-white shadow-[0_15px_35px_rgba(244,63,94,0.4)]',
    cardBorder: 'border-white/15 hover:border-rose-400/60',
    cards: [
      { title: 'UX & Product Design Systems Certification', code: 'CERT-2026-UXDS-01', issueDate: 'OCT 2026', expiry: 'PERPETUAL', authority: 'Design Leadership Alliance', verifyUrl: 'https://verify.designleadership.org/UXDS-7711', skills: ['Design Tokens', 'Accessibility WCAG', 'Figma Systems', 'Atomic UI'] },
      { title: 'Spatial Computing & 3D Web UI Certification', code: 'CERT-2026-3D-02', issueDate: 'AUG 2026', expiry: 'PERPETUAL', authority: 'Spatial Web Consortium', verifyUrl: 'https://verify.spatialweb.org/3D-6620', skills: ['Three.js', 'WebGL', 'Glassmorphism', 'Neumorphism'] },
      { title: 'Human-Centered Research & Usability Testing', code: 'CERT-2026-HCI-03', issueDate: 'JUN 2026', expiry: 'JUN 2029', authority: 'HCI International Council', verifyUrl: 'https://verify.hci-council.org/HCI-5531', skills: ['User Journey Mapping', 'A/B Testing', 'Eye Tracking', 'Usability Auditing'] }
    ]
  }
];

for (const cfg of configs) {
  const compName = `AboutCertifications${cfg.id}`;
  const dirPath = path.join(baseDir, `certifications-${cfg.num}`);

  const code = `import React, { useState } from 'react';
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
    <div className={\`inline-flex items-center gap-2 p-2.5 rounded-2xl border text-xs font-mono font-semibold transition-all shadow-sm w-full justify-between \${
      isBright 
        ? 'bg-white/80 border-slate-200 text-slate-800 shadow-slate-200/50 hover:bg-white' 
        : 'bg-white/10 border-white/15 text-slate-200 hover:bg-white/15'
    }\`}>
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

export function ${compName}({ data }: { data?: any }) {
  const isBright = ${cfg.isBright};

  const cards = ${JSON.stringify(cfg.cards, null, 4)};

  return (
    <section className={\`w-full py-16 px-4 sm:px-6 lg:px-8 \${'${cfg.bg}'} overflow-hidden relative\`}>
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className={\`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono font-bold tracking-widest uppercase \${'${cfg.headerBadge}'}\`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> CERTIFICATION #${cfg.num} \${isBright ? '• LIGHT THEME' : '• DARK THEME'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            ${cfg.title}
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            ${cfg.subtitle}
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
              className={\`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden group \${
                isBright
                  ? 'bg-white/90 backdrop-blur-xl ${cfg.cardBorder}'
                  : 'bg-slate-900/60 backdrop-blur-xl ${cfg.cardBorder}'
              }\`}
            >
              {/* 1. CARD HEADER */}
              <div className="space-y-3 pb-4 border-b border-black/5 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase opacity-60">ACCREDITED CERTIFICATE</span>
                  <span className={\`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase border \${'${cfg.headerBadge}'}\`}>
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
                    className={\`relative z-10 p-5 flex items-center gap-4 border border-white/40 cursor-pointer rounded-3xl \${'${cfg.clayBadge}'}\`}
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
`;

  fs.writeFileSync(path.join(dirPath, `${compName}.tsx`), code, 'utf8');
  console.log(`Updated ${compName}`);
}

console.log('Successfully updated AboutCertifications 5 through 10.');
