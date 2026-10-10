import React, { useState } from 'react';
import { Orbit, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar12: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('COSMIC50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-950 text-indigo-200 border-b border-indigo-500/30 py-2.5 px-6 font-mono relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <Orbit className="w-4 h-4 text-indigo-400 animate-spin [animation-duration:15s]" />
          <span>GALACTIC_ALERT: 50% ORBITAL DISCOUNT ON ALL GALACTIC PURCHASES</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 rounded-full bg-indigo-600 text-white font-bold hover:bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'CLAIMED!' : 'CODE: COSMIC50'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar12;
