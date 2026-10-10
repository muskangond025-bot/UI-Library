import React, { useState } from 'react';
import { Zap, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar10: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('LASER50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-black text-fuchsia-400 font-mono border-b border-fuchsia-500/60 p-2.5 px-6 relative overflow-hidden text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-fuchsia-500 animate-bounce" />
          <span className="text-white">[ MATRIX_BEAM: 50% NEON DISCOUNT ACTIVE ]</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 bg-fuchsia-600 text-black font-black uppercase hover:bg-fuchsia-400 shadow-[3px_3px_0px_#fff] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'ACTIVATED!' : 'CODE: LASER50'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar10;
