import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar19: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('STICKER50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-pink-50 border-b-4 border-slate-900 py-2.5 px-6 text-xs text-slate-900 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-black uppercase">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 rounded bg-yellow-300 border-2 border-slate-900 rotate-[-2deg]">★ POP SALE!</span>
          <span>50% OFF STICKER PACKS & MERCH!</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 bg-slate-900 text-yellow-300 border-2 border-slate-900 shadow-[3px_3px_0px_#000] hover:bg-rose-600 hover:text-white flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'STUCK!' : 'CODE: STICKER50'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar19;
