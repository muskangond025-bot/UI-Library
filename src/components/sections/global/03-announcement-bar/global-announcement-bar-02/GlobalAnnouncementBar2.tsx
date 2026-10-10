import React, { useState } from 'react';
import { Radio, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar2: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('CYBER2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-950 text-cyan-400 font-mono border-b border-cyan-500/30 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-slate-300">SYSTEM_ALERT: FREE GLOBAL EXPRESS SHIPPING ON ORDERS OVER $150</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-rose-400 font-bold">⚡ CODE: CYBER2026</span>
          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-cyan-950 border border-cyan-400 text-cyan-300 font-bold hover:bg-cyan-500 hover:text-black transition-colors flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar2;
