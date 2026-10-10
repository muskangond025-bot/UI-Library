import React, { useState } from 'react';
import { Sparkles, Copy, Check, Truck, Shield } from 'lucide-react';

export const GlobalAnnouncementBar11: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('BENTO40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-2.5 px-6 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
          <Truck className="w-3.5 h-3.5 text-blue-600" />
          <span className="font-semibold">Free Express Shipping</span>
        </div>

        <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-700 px-4 py-1 rounded-full shadow-sm font-bold">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>40% Off Spring Collection — Code: BENTO40</span>
        </div>

        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-full bg-slate-900 text-white font-bold hover:bg-rose-600 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED!' : 'COPY DISCOUNT'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar11;
