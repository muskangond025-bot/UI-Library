import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Copy, Check, MessageSquare, Globe, Sparkles, ShieldCheck } from 'lucide-react';

export function ContactInformation16({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactDetails = [
    { icon: Phone, label: 'Phone Line', value: '+1 (800) 555-0199', detail: 'Mon-Fri 8am-8pm EST' },
    { icon: Mail, label: 'Email Support', value: 'support@brand.com', detail: 'Guaranteed 15-min response' },
    { icon: MapPin, label: 'Global HQ', value: '500 Howard St, San Francisco, CA', detail: 'Suite 400 • USA' },
    { icon: Clock, label: 'Operating Hours', value: '24/7 Global Live Routing', detail: 'SF • London • Tokyo' }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F0FDF4] text-emerald-950 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-5 py-2 bg-emerald-100 border-emerald-300 text-emerald-800 flex items-center gap-2.5 text-xs font-mono font-extrabold uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              CONTACT INFORMATION #16 • BRIGHT LIGHT
            </motion.div>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
            {settings.title || '3D STACKED GLASS LIGHT DIRECTORY'}
          </h2>
          <p className="text-sm font-mono tracking-wider uppercase opacity-80 font-bold">
            3D STACKED GLASS LIGHT • MULTI-CHANNEL SUPPORT DIRECTORY
          </p>
        </div>

        {/* 4 Interactive Contact Cards Grid with Click-to-Copy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-white/40 border border-gray-200/80 backdrop-blur-md space-y-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-600 font-bold">
                  <item.icon className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(item.value, item.label)}
                  className="p-2 rounded-xl hover:bg-black/5 transition-colors text-xs font-mono flex items-center gap-1 opacity-70 hover:opacity-100"
                  title="Click to copy"
                >
                  {copiedText === item.label ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono uppercase opacity-70 font-bold">{item.label}</div>
                <div className="text-base font-bold tracking-tight mt-1">{item.value}</div>
                <div className="text-xs font-mono opacity-60 mt-0.5">{item.detail}</div>
              </div>

              {copiedText === item.label && (
                <div className="text-[10px] font-mono text-emerald-600 font-bold animate-pulse">
                  Copied to clipboard!
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
