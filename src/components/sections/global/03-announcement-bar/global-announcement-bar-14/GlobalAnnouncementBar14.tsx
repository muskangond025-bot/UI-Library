import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar14: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ARCH20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-black text-white font-mono border-b border-slate-800 py-2.5 px-8 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[10px] text-slate-500">[LAT 48.8566° N]</span>
          <span className="font-bold tracking-widest">ARCHITECTURAL RELEASE • 20% DISCOUNT</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 bg-white text-black font-bold uppercase tracking-wider hover:bg-slate-200 flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED' : 'CODE: ARCH20'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar14;
