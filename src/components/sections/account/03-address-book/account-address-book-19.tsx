import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles } from 'lucide-react';

const mockMeters = [
  { label: 'USPS Address Match', val: 100, text: '100%', detail: 'Postal format 100% verified', color: '#10b981' },
  { label: 'Courier Gate Access', val: 100, text: '2 PASSKEYS', detail: '24/7 Doorman & Gate code active', color: '#6366f1' },
  { label: 'Saved Destinations', val: 75, text: '3 / 4', detail: '3 active locations registered', color: '#f59e0b' },
  { label: 'Express Dispatch Score', val: 100, text: 'OPTIMAL', detail: 'Priority global courier active', color: '#ec4899' },
];

export const AccountAddressBook19: React.FC = () => {
  return (
    <div className="w-full bg-[#0a0a0e] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl flex flex-col justify-between">
      {/* Title */}
      <div className="pb-6 border-b border-neutral-800 flex justify-between items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">GAMIFIED VERIFICATION STORY</span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Address Verification Story</h1>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono rounded-full flex items-center gap-1.5 font-bold">
          <Sparkles className="w-3.5 h-3.5" /> 100% Address Match
        </span>
      </div>

      {/* Main Radial Meters Grid */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMeters.map((m, idx) => {
          const radius = 40;
          const stroke = 6;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (m.val / 100) * circumference;

          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * idx, duration: 0.6 }}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col items-center text-center justify-between"
            >
              {/* Radial Meter SVG */}
              <div className="relative w-28 h-28 my-2 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke="#1f2937"
                    strokeWidth={stroke}
                    fill="none"
                  />
                  <motion.circle
                    cx="56"
                    cy="56"
                    r={radius}
                    stroke={m.color}
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: strokeDashoffset }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute font-mono font-bold text-xs text-white px-1 text-center">{m.text}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mt-2">{m.label}</h3>
                <p className="text-xs text-neutral-400 mt-1 font-mono">{m.detail}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <div className="p-6 bg-neutral-900/60 border border-neutral-800 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-white font-bold">ALL DESTINATIONS VERIFIED</span>
            <p className="text-neutral-400">Primary delivery address: 450 Fashion Ave, PH 14B</p>
          </div>
        </div>

        <button className="px-5 py-2.5 bg-emerald-400 text-black font-bold rounded-full hover:bg-emerald-300 transition-colors">
          Manage Destinations →
        </button>
      </div>
    </div>
  );
};
