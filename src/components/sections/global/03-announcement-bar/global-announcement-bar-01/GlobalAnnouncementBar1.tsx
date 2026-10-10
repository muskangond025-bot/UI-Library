import React, { useState } from 'react';
import { Sparkles, Copy, Check, X, Clock } from 'lucide-react';

export const GlobalAnnouncementBar1: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('SUMMER50');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full py-3 px-6 bg-gradient-to-r from-rose-100 via-purple-100 to-pink-100 relative text-slate-800">
      <div className="max-w-6xl mx-auto rounded-full bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl py-2 px-6 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <Sparkles className="w-4 h-4 text-rose-500 animate-spin [animation-duration:8s]" />
          <span>Flash Sale Ends Soon: Use code <strong className="text-rose-600 font-bold">SUMMER50</strong> for 50% OFF!</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden sm:flex items-center gap-1 bg-rose-50 text-rose-700 px-3 py-1 rounded-full font-mono font-bold">
            <Clock className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
            <span>02h : 45m : 12s</span>
          </div>

          <button
            onClick={handleCopy}
            className="px-3.5 py-1 rounded-full bg-slate-900 text-white font-bold text-[11px] hover:bg-rose-600 transition-colors flex items-center gap-1.5 shadow-sm"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
          </button>

          <button onClick={() => setVisible(false)} className="text-slate-400 hover:text-slate-700 p-1">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GlobalAnnouncementBar1;
