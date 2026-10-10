import React, { useState } from 'react';
import { Activity, Copy, Check } from 'lucide-react';

export const GlobalAnnouncementBar16: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('WAVE50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-950 text-purple-300 font-mono border-b border-purple-500/40 py-2.5 px-6 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span>AUDIO_FREQUENCY: 50% EQUALIZER DISCOUNT APPLIED</span>
        </div>
        <button
          onClick={handleCopy}
          className="px-4 py-1 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'TUNED!' : 'CODE: WAVE50'}</span>
        </button>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar16;
