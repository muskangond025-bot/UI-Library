import React, { useState } from 'react';
import { Snowflake, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar6: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('FREEZE40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-950 text-cyan-200 border-b border-cyan-500/30 py-2.5 px-6 font-mono relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs relative z-10">
        <div className="flex items-center gap-3">
          <Snowflake className="w-4 h-4 text-cyan-400 animate-spin [animation-duration:10s]" />
          <span>CRYOGENIC_VAULT: 40% UNFREEZE DISCOUNT APPLIED</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'UNFROZEN!' : 'CODE: FREEZE40'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar6;
