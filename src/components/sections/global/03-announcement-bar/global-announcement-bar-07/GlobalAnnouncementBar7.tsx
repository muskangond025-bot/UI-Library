import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar7: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('PASTEL25');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-2.5 px-6 bg-amber-50 text-slate-800">
      <div className="max-w-6xl mx-auto p-2 px-6 rounded-2xl bg-white border-2 border-amber-100 shadow-[6px_6px_12px_rgba(251,191,36,0.15)] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Gift className="w-4 h-4 text-amber-500 animate-bounce" />
          <span>Special Pastel Gift: Free Handcrafted Gift Box With Orders Over $100!</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-xl bg-amber-400 text-slate-900 font-extrabold hover:bg-amber-500 shadow-sm flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'CLAIMED!' : 'GIFT: PASTEL25'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar7;
