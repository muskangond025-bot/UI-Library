"use client";
import React from 'react';
import { HelpCircle, MessageSquare, ShieldCheck, CreditCard, RefreshCw } from 'lucide-react';

export function GlobalFaq9() {
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
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Bento Knowledge Grid #9</h2>
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
}