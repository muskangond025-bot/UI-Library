import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ShieldCheck, FileText, Globe2, Copy, Check, Sparkles, Award, Scale, DollarSign, ExternalLink } from 'lucide-react';

export function BusinessInformation3({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const businessSpecs = [
    { icon: Building2, label: 'Legal Entity', value: 'Antigravity UI Technologies Inc.', detail: 'Delaware C-Corp • Reg #7492019' },
    { icon: Scale, label: 'Tax Registration', value: 'EIN: 98-4720194 / VAT: EU3820194', detail: 'Compliant across 85+ regions' },
    { icon: Award, label: 'D-U-N-S Number', value: '08-192-8401', detail: 'Dun & Bradstreet Verified' },
    { icon: ShieldCheck, label: 'Compliance SLA', value: 'ISO-27001 & SOC-2 Type II', detail: 'Audited annually by Deloitte' }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFDF5] text-black overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Top Badge & Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-5 py-2 bg-black text-white font-mono font-black border-2 border-black rounded-none shadow-[4px_4px_0px_#000] flex items-center gap-2.5 text-xs font-mono font-extrabold uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              BUSINESS INFORMATION #3 • BRIGHT LIGHT
            </motion.div>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-black">
            {settings.title || 'NEO-BRUTALISM BUSINESS DIRECTORY'}
          </h2>
          <p className="text-sm font-mono tracking-wider uppercase opacity-80 font-bold">
            NEO-BRUTALISM • VERIFIED CORPORATE METADATA & LEGAL REGISTRY
          </p>
        </div>

        {/* 4 Interactive Business Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessSpecs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 bg-white border-3 border-black shadow-[6px_6px_0px_#000] space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 font-bold">
                  <item.icon className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(item.value, item.label)}
                  className="p-2 rounded-xl hover:bg-black/5 transition-colors text-xs font-mono flex items-center gap-1 opacity-70 hover:opacity-100"
                  title="Copy registration code"
                >
                  {copiedField === item.label ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono uppercase opacity-70 font-bold">{item.label}</div>
                <div className="text-base font-bold tracking-tight mt-1">{item.value}</div>
                <div className="text-xs font-mono opacity-60 mt-0.5">{item.detail}</div>
              </div>

              {copiedField === item.label && (
                <div className="text-[10px] font-mono text-emerald-600 font-bold animate-pulse">
                  Registration code copied!
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Corporate Factsheet & Investor Download Bar */}
        <div className="p-6 rounded-3xl bg-white/40 border border-gray-200/80 backdrop-blur-md flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-indigo-600 shrink-0" />
            <div>
              <h4 className="text-sm font-bold leading-none">Download Official Corporate Factsheet (PDF)</h4>
              <p className="text-xs opacity-70 font-mono mt-1">Includes tax certificates, auditor reports, and investor deck (2.4 MB)</p>
            </div>
          </div>
          <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-md">
            <span>Download Factsheet</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
