import React, { useState } from 'react';
import { Gem, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar13: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('PRISM30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-2.5 px-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 text-slate-900 text-xs font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Gem className="w-4 h-4 text-purple-600 animate-pulse" />
          <span>Prismatic Light Drop: 30% Off Jewel Vault with code <strong className="text-purple-700">PRISM30</strong></span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-pink-600 transition-colors shadow-sm flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar13;
