import React, { useState } from 'react';
import { Sun, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar20: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('SYNTH80S');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-r from-purple-950 via-slate-950 to-pink-950 text-pink-300 font-mono border-b border-pink-500/40 py-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-pink-400 animate-pulse" />
          <span className="text-white font-bold">OUTRUN THE SALE: 80s SYNTHWAVE DISCOUNT ACTIVE</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-black hover:from-pink-600 hover:to-purple-700 shadow-[0_0_15px_rgba(236,72,153,0.5)] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'CRUISED!' : 'CODE: SYNTH80S'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar20;
