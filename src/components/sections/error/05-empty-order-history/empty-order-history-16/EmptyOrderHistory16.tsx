import React from 'react';
import { Activity, Radio, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory16: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-950 text-blue-300 font-mono">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-blue-950/80 border-2 border-blue-500/60 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)]">
          <Activity className="w-14 h-14 text-blue-400 animate-pulse" />
        </div>
        <span className="px-4 py-1.5 rounded bg-blue-900/60 text-blue-300 border border-blue-700/50 text-xs font-mono mb-4 inline-block">LOGISTICS_SIGNAL: ZERO_SHIPMENTS</span>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">LOGISTICS FREQUENCY QUIET</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm font-sans">Signal telemetry detected 0 active or historical shipments. Initiate first dispatch sequence.</p>
        <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)] inline-flex items-center gap-2">
          <Radio className="w-5 h-5" />
          <span>INITIATE DISPATCH</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
export default EmptyOrderHistory16;
