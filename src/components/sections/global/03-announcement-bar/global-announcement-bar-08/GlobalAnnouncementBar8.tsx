import React, { useState } from 'react';
import { Gamepad2, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar8: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('ARCADE8BIT');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-950 text-emerald-400 font-mono border-b-2 border-emerald-500/80 p-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 animate-pulse" />
          <span className="text-white font-bold">QUEST ALERT: 2X MULTIPLIER ON FIRST ORDER</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-3 py-1 bg-emerald-500 text-black font-black uppercase hover:bg-emerald-400 flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'COINS ADDED!' : 'CODE: ARCADE8BIT'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar8;
