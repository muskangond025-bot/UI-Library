import React, { useState } from 'react';
import { Zap, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar5: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('BRUTAL50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-yellow-300 border-b-4 border-black text-black font-sans py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-black uppercase">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 fill-black" />
          <span>★ 50% OFF EVERYTHING ★ USE CODE: BRUTAL50 ★ FREE WORLDWIDE EXPRESS SHIPPING ★</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 bg-black text-yellow-300 border-2 border-black shadow-[3px_3px_0px_#fff] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar5;
