import React, { useState } from 'react';
import { Sun, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar17: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('TERRA30');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#f7f0eb] text-amber-950 font-serif border-b border-amber-900/10 py-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-800 animate-spin [animation-duration:20s]" />
          <span className="font-bold">Artisan Terracotta Studio: 30% Off Ceramic Pottery</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-full bg-amber-900 text-amber-50 font-sans font-bold hover:bg-amber-800 flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'APPLIED!' : 'CODE: TERRA30'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar17;
