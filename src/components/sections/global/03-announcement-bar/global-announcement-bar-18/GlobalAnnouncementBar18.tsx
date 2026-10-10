import React, { useState } from 'react';
import { Leaf, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar18: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ECO2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-emerald-950 text-emerald-100 border-b border-emerald-500/30 py-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Leaf className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>Bio-Sphere Eco Drop: Plant 5 Trees with every purchase using code <strong className="text-emerald-300">ECO2026</strong></span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'PLANTED!' : 'COPY CODE'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar18;
