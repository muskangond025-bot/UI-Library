import React, { useState } from 'react';
import { Award, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar15: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('HERITAGE25');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-amber-100 font-serif border-b border-amber-500/30 py-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 italic">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Heritage Collection: Complimentary Engraving & 25% Off with code <strong className="text-amber-300 font-sans not-italic font-bold">HERITAGE25</strong></span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-xl bg-amber-500 text-amber-950 font-sans font-bold hover:bg-yellow-400 shadow-md flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'ENGRAVED!' : 'COPY CODE'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar15;
