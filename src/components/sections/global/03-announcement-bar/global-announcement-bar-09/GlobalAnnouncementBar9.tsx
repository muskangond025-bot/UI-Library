import React, { useState } from 'react';
import { FileText, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar9: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('EDITORIAL2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#faf8f5] text-stone-900 font-serif border-b border-stone-300 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-sans uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-stone-700" />
          <span>Gazette Issue Vol. 42: Complimentary Monogramming on Leather Goods</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 border border-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-colors flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'APPLIED!' : 'CODE: EDITORIAL2026'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar9;
