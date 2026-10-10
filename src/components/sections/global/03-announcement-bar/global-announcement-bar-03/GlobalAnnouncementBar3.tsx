import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar3: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('VELVET30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-3 px-6 bg-[#f0e6e4] text-slate-800">
      <div className="max-w-5xl mx-auto p-2.5 px-6 rounded-2xl bg-[#f0e6e4] shadow-[6px_6px_12px_#ccbebc,-6px_-6px_12px_#ffffff] flex items-center justify-between text-xs border border-white/40">
        <div className="flex items-center gap-2 font-semibold">
          <Sparkles className="w-4 h-4 text-rose-500 animate-pulse" />
          <span>Spring Velvet Suite: Extra 30% discount automatically applied at checkout!</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 rounded-xl bg-[#f0e6e4] shadow-[3px_3px_6px_#ccbebc,-3px_-3px_6px_#ffffff] text-rose-600 font-bold hover:bg-rose-500 hover:text-white transition-all flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED!' : 'CODE: VELVET30'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar3;
