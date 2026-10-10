import React, { useState } from 'react';
import { Copy, Check, Box } from 'lucide-react';

export const GlobalAnnouncementBar4: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('SPATIAL3D');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-3 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-full bg-slate-900/50 backdrop-blur-xl border border-purple-500/30 py-2 px-6 flex items-center justify-between text-xs relative z-10">
        <div className="flex items-center gap-2 font-medium">
          <Box className="w-4 h-4 text-pink-400 animate-bounce" />
          <span>Apple Vision 3D Drop Live: Claim early access with code <strong className="text-pink-300">SPATIAL3D</strong></span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-500 hover:to-pink-500 shadow-md flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'CLAIMED!' : 'CLAIM CODE'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar4;
