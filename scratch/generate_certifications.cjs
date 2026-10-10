const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../src/components/sections/about/09-about-certifications');

if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true });
}

const styles = [
  { name: 'ISO 9001:2026 Quality Management', tag: 'Global Compliance', badge: 'Certified', bg: 'from-slate-900 via-indigo-950 to-slate-950', border: 'indigo-500/30', accent: 'indigo-400' },
  { name: 'SOC 2 Type II Security & Privacy', tag: 'Enterprise Security', badge: 'Verified', bg: 'from-slate-950 via-slate-900 to-cyan-950', border: 'cyan-500/30', accent: 'cyan-400' },
  { name: 'GDPR & CCPA Data Governance', tag: 'Privacy Standard', badge: 'Compliant', bg: 'from-zinc-950 via-emerald-950 to-slate-950', border: 'emerald-500/30', accent: 'emerald-400' },
  { name: 'ISO 27001 Information Security', tag: 'Cyber Resilience', badge: 'Audited', bg: 'from-slate-950 via-purple-950 to-slate-900', border: 'purple-500/30', accent: 'purple-400' },
  { name: 'PCI-DSS v4.0 Financial Security', tag: 'Payment Standard', badge: 'Tier 1 Certified', bg: 'from-slate-900 via-amber-950 to-slate-950', border: 'amber-500/30', accent: 'amber-400' },
  { name: 'HIPAA Health Data Compliance', tag: 'Healthcare Security', badge: 'Verified', bg: 'from-slate-950 via-teal-950 to-slate-900', border: 'teal-500/30', accent: 'teal-400' },
  { name: 'Zero-Carbon Net Zero Standard', tag: 'Sustainability', badge: 'Eco Certified', bg: 'from-emerald-950 via-slate-950 to-teal-950', border: 'emerald-500/40', accent: 'emerald-300' },
  { name: 'AWS Premier Cloud Partner', tag: 'Cloud Excellence', badge: 'Premier Tier', bg: 'from-slate-950 via-orange-950 to-slate-900', border: 'orange-500/30', accent: 'orange-400' },
  { name: 'Google Cloud Specialized Security', tag: 'AI & Cloud Security', badge: 'Specialized', bg: 'from-slate-900 via-blue-950 to-slate-950', border: 'blue-500/30', accent: 'blue-400' },
  { name: 'Microsoft Gold Security Partner', tag: 'Enterprise Cloud', badge: 'Gold Certified', bg: 'from-slate-950 via-sky-950 to-slate-900', border: 'sky-500/30', accent: 'sky-400' },
  { name: 'CMMI Level 5 Process Maturity', tag: 'Operational Quality', badge: 'Highest Rating', bg: 'from-slate-900 via-rose-950 to-slate-950', border: 'rose-500/30', accent: 'rose-400' },
  { name: 'FedRAMP High Authorization', tag: 'Government Security', badge: 'Authorized', bg: 'from-slate-950 via-indigo-950 to-blue-950', border: 'indigo-500/40', accent: 'indigo-300' },
  { name: 'AICPA SOC 3 Public Trust Report', tag: 'Public Attestation', badge: 'Verified', bg: 'from-zinc-950 via-slate-900 to-zinc-900', border: 'slate-400/30', accent: 'slate-200' },
  { name: 'TISAX AL3 Automotive Security', tag: 'Automotive Cyber', badge: 'AL3 Level', bg: 'from-slate-950 via-red-950 to-slate-900', border: 'red-500/30', accent: 'red-400' },
  { name: 'B-Corp Impact Certified 2026', tag: 'ESG & Sustainability', badge: 'B-Corp Status', bg: 'from-emerald-950 via-emerald-900 to-slate-950', border: 'emerald-400/40', accent: 'emerald-300' },
  { name: 'FIPS 140-3 Cryptographic Standard', tag: 'Hardware Security', badge: 'Level 3 Validated', bg: 'from-slate-900 via-violet-950 to-slate-950', border: 'violet-500/30', accent: 'violet-400' },
  { name: 'UL Cyber Assurance Program', tag: 'IoT & System Safety', badge: 'CAP Certified', bg: 'from-slate-950 via-yellow-950 to-slate-900', border: 'yellow-500/30', accent: 'yellow-400' },
  { name: 'CREST Accredited Penetration Testing', tag: 'Offensive Security', badge: 'Accredited', bg: 'from-slate-900 via-fuchsia-950 to-slate-950', border: 'fuchsia-500/30', accent: 'fuchsia-400' },
  { name: 'ESG Platinum Sustainability Badge', tag: 'Global ESG Standard', badge: 'Top 1% Global', bg: 'from-emerald-950 via-teal-900 to-slate-950', border: 'teal-400/40', accent: 'teal-300' },
  { name: 'IEEE Quantum-Safe Cryptography', tag: 'Next-Gen Cyber Security', badge: 'Post-Quantum Safe', bg: 'from-slate-950 via-cyan-950 to-indigo-950', border: 'cyan-400/40', accent: 'cyan-300' }
];

for (let i = 1; i <= 20; i++) {
  const num = String(i).padStart(2, '0');
  const folderName = `certifications-${num}`;
  const dirPath = path.join(baseDir, folderName);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const s = styles[i - 1];
  const compName = `AboutCertifications${i}`;

  const code = `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, Lock, ExternalLink, Sparkles, FileCheck, Globe, Star } from 'lucide-react';

export function ${compName}({ data }: { data?: any }) {
  const items = [
    { title: '${s.name}', category: '${s.tag}', status: '${s.badge}', code: 'CERT-2026-0${i}A', year: '2026' },
    { title: 'ISO 27001 Security Management', category: 'Information Security', status: 'Verified', code: 'CERT-2026-0${i}B', year: '2025' },
    { title: 'SOC 2 Type II Compliance', category: 'Trust & Privacy', status: 'Audited', code: 'CERT-2026-0${i}C', year: '2026' },
    { title: 'GDPR Enterprise Standard', category: 'Data Governance', status: 'Active', code: 'CERT-2026-0${i}D', year: '2025' }
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ${s.bg} text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${s.border} text-${s.accent} text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> CERTIFICATION & COMPLIANCE #${num}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-${s.accent}">
            Verified Industry Standards & Certifications
          </h2>
          <p className="opacity-80 text-base sm:text-lg">
            Our commitment to enterprise security, global quality standards, and environmental responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-${s.border} hover:border-${s.accent} transition-all duration-300 shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-white/10 text-${s.accent} border border-white/10 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-${s.accent}/10 border border-${s.accent}/30 text-${s.accent} text-[10px] font-mono font-bold uppercase">
                    {item.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">{item.category}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-${s.accent} transition-colors">{item.title}</h3>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5 text-${s.accent}" />
                  {item.code}
                </span>
                <span className="flex items-center gap-1 text-${s.accent} font-bold group-hover:underline cursor-pointer">
                  Verify <ExternalLink className="w-3 h-3" />
                </span>
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
}

console.log('Successfully generated 20 AboutCertifications components.');
