const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '../src/components/sections/global/15-faq');

const templates = [
  // 1: Modern Accordion with Category Pills & Search Bar
  (i) => `"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export function GlobalFaq${i}() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState('ALL');

  const faqs = [
    { cat: 'SHIPPING', q: 'What are your international shipping delivery windows?', a: 'Standard global express shipping takes 3-5 business days. Real-time satellite tracking links are provided via email upon dispatch.' },
    { cat: 'RETURNS', q: 'How does the 30-day hassle-free return policy work?', a: 'You can initiate returns within 30 days of receipt. We issue prepaid return courier shipping labels with immediate refund initiation upon drop-off.' },
    { cat: 'ACCOUNT', q: 'Can I manage multi-user team subscriptions?', a: 'Yes, workspace enterprise accounts allow adding up to 50 team members with customized permission roles and centralized invoicing.' },
    { cat: 'PAYMENT', q: 'Which global payment methods & currencies are supported?', a: 'We accept Visa, Mastercard, Apple Pay, Google Pay, Crypto (USDC/BTC), and wire transfers across 140+ currencies.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-slate-950 text-white font-sans border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" /> GLOBAL KNOWLEDGE BASE #${i}
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mt-3">Find instant answers to billing, shipping, and account management queries.</p>
          
          <div className="relative max-w-md mx-auto mt-8">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search questions..." className="w-full bg-slate-900 border border-slate-800 rounded-full pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" />
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div key={idx} initial={false} className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full p-6 text-left flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors">
                  <span className="text-lg font-bold text-white">{f.q}</span>
                  <div className={"w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 " + (isOpen ? 'rotate-180 bg-cyan-500 text-slate-950' : '')}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,

  // 2: Minimalist Serif Editorial FAQ Gazette
  (i) => `"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function GlobalFaq${i}() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { num: '01', q: 'What materials are used in artisan garment tailoring?', a: 'We source 100% organic heavy wool, GOTS-certified Egyptian cotton, and recycled raw brass hardware for zero synthetic micro-plastics.' },
    { num: '02', q: 'How are custom bespoke orders measured & crafted?', a: 'Every garment undergo 3D digital body mapping followed by hand-cutting by master tailors in Milan ateliers.' },
    { num: '03', q: 'What is the lifetime repair & garment warranty policy?', a: 'We offer free lifetime seam repair, button replacement, and garment re-waxing to ensure heirloom durability.' },
    { num: '04', q: 'How does carbon-neutral white-glove delivery work?', a: 'Shipments travel in 100% biodegradable fiber cases via electric logistics fleets with 100% verified carbon offset credits.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-stone-100 text-stone-900 font-serif border-y border-stone-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-900 bg-amber-200/60 px-4 py-1.5 rounded-full border border-amber-300">EDITORIAL HELP GAZETTE • ISSUE #${i}</span>
          <h2 className="text-4xl sm:text-5xl font-normal text-stone-950 mt-4">Bespoke Inquiry Guide</h2>
          <div className="w-12 h-0.5 bg-amber-900 mx-auto mt-4"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border border-stone-200 shadow-md">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left gap-4 font-serif">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-900">[{f.num}]</span>
                    <h3 className="text-xl text-stone-950 font-normal">{f.q}</h3>
                  </div>
                  {isOpen ? <Minus className="w-5 h-5 text-amber-900 shrink-0" /> : <Plus className="w-5 h-5 text-stone-400 shrink-0" />}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="font-sans text-xs text-stone-600 leading-relaxed pt-4 mt-4 border-t border-stone-100 pl-10">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,

  // 3: Neo-Brutalist Cyberpunk FAQ Racks
  (i) => `"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, HelpCircle, ChevronRight } from 'lucide-react';

export function GlobalFaq${i}() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'WHAT IS THE LATENCY OF THE CYBER NEURAL ROUTER?', a: 'Sub-millisecond optical packet routing powered by FPGA neural hardware acceleration engines.' },
    { q: 'CAN I CONNECT HOT-SWAPPABLE EXPANSION MODULES?', a: 'Affirmative. PCIe 5.0 modular bay ports accept liquid-cooled GPU compute cards instantly.' },
    { q: 'HOW IS ENCRYPTION HANDLED AT REST AND IN TRANSIT?', a: 'AES-256 post-quantum lattice encryption keys are updated every 60 seconds autonomously.' },
    { q: 'WHAT IS THE MAXIMUM SUSTAINED VOLT POWER DRAW?', a: 'System accepts dual 1600W Titanium ATX 3.0 power units with intelligent load distribution.' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-yellow-400 text-black font-mono border-y-4 border-black">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12 border-4 border-black bg-white p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-lime-400 flex items-center justify-center font-black rounded border-2 border-black">
              <Zap className="w-6 h-6 fill-lime-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-black">CYBER FAQ PROTOCOL #${i}</h2>
          </div>
          <span className="hidden sm:block text-xs font-black bg-black text-lime-400 px-4 py-2 rounded">HELPDESK: ONLINE</span>
        </div>

        <div className="space-y-4">
          {faqs.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-4 border-black bg-white p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left font-black text-base uppercase">
                  <span>{f.q}</span>
                  <div className={"w-7 h-7 bg-black text-white rounded flex items-center justify-center transition-transform " + (isOpen ? 'rotate-90 bg-lime-400 text-black' : '')}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="mt-4 pt-4 border-t-2 border-black text-xs font-bold text-black/80">
                        → ANSWER: {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`,

  // 4: High-Tech Bento Two-Column Grid FAQ
  (i) => `"use client";
import React from 'react';
import { HelpCircle, MessageSquare, ShieldCheck, CreditCard, RefreshCw } from 'lucide-react';

export function GlobalFaq${i}() {
  const blocks = [
    { icon: <CreditCard className="w-5 h-5 text-rose-400" />, title: 'Billing & Invoicing', text: 'Automatic monthly PDF invoices sent to finance email with customizable TAX/VAT fields.' },
    { icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, title: 'Security & Compliance', text: 'SOC2 Type II certified infrastructure with continuous penetration testing and GDPR compliance.' },
    { icon: <RefreshCw className="w-5 h-5 text-cyan-400" />, title: 'Prorated Plan Upgrades', text: 'Switch between plans instantly with automated prorated credit adjustments applied to next cycle.' },
    { icon: <MessageSquare className="w-5 h-5 text-amber-400" />, title: '24/7 Priority Support', text: 'Dedicated Slack channels & sub-15 minute SLA response times for Enterprise tier customers.' },
  ];

  return (
    <section className="w-full py-24 px-6 bg-neutral-950 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-3 h-8 bg-rose-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Knowledge Grid #${i}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((b, idx) => (
            <div key={idx} className="bg-neutral-900 rounded-3xl p-8 border border-white/10 flex flex-col justify-between hover:border-rose-500/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 flex items-center justify-center mb-6">
                {b.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // 5: Tabbed Category FAQ Switcher
  (i) => `"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function GlobalFaq${i}() {
  const [activeTab, setActiveTab] = useState('GENERAL');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const data: Record<string, Array<{ q: string; a: string }>> = {
    GENERAL: [
      { q: 'How quickly can I onboard my team?', a: 'Setup takes under 2 minutes with automated SSO integration for Google Workspace & Okta.' },
      { q: 'Is there a free trial option available?', a: 'Yes, test all Pro features for 14 days with zero credit card commitment required.' },
    ],
    BILLING: [
      { q: 'Can I pay via purchase order or wire transfer?', a: 'Enterprise plans support annual invoicing via PO and international wire transfer.' },
      { q: 'What happens when I exceed API limits?', a: 'Usage auto-scales without service interruption with clear overage pricing alerts.' },
    ]
  };

  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">TABBED FAQ SYSTEM #${i}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3">Categorized Knowledge Base</h2>
          
          <div className="flex justify-center gap-2 mt-8">
            {['GENERAL', 'BILLING'].map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab); setOpenIdx(0); }} className={"px-5 py-2 rounded-full text-xs font-mono font-bold transition-all " + (activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100')}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {(data[activeTab] || data.GENERAL).map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center text-left font-bold text-lg text-slate-950">
                  <span>{f.q}</span>
                  <ChevronDown className={"w-5 h-5 text-indigo-600 transition-transform " + (isOpen ? 'rotate-180' : '')} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="text-slate-600 text-sm leading-relaxed pt-4 mt-4 border-t border-slate-100">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}`
];

for (let i = 1; i <= 20; i++) {
  const folder = path.join(dirPath, `global-faq-${i}`);
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  const tmplIdx = (i - 1) % templates.length;
  const content = templates[tmplIdx](i);
  const filePath = path.join(folder, `GlobalFaq${i}.tsx`);
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Successfully generated all 20 GlobalFaq components!');
