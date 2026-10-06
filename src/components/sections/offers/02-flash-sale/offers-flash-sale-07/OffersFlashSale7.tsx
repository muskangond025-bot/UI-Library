import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Terminal, Crosshair } from 'lucide-react';

export function OffersFlashSale7() {
  const telemetry = [
    { code: 'SYS-701', target: 'TACTICAL RECON DRONE', status: 'LOCKED', stock: '04 UNITS', off: '-55%', val: '$340' },
    { code: 'SYS-702', target: 'NIGHT VISION GOGGLE X', status: 'ACTIVE', stock: '09 UNITS', off: '-48%', val: '$510' },
    { code: 'SYS-703', target: 'ENCRYPTED STORAGE CORE', status: 'STANDBY', stock: '15 UNITS', off: '-60%', val: '$120' }
  ];

  return (
    <div className="w-full bg-zinc-950 text-emerald-500 p-8 sm:p-12 font-mono rounded-none border border-emerald-500/40 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-emerald-500/30 pb-4 gap-4">
          <div className="flex items-center gap-3">
            <Radio className="w-6 h-6 text-emerald-400 animate-pulse" />
            <div>
              <h2 className="text-2xl font-bold tracking-wider text-emerald-400">TACTICAL RADAR COMMAND</h2>
              <span className="text-xs text-emerald-600">DEFCON-1 FLASH SALE TELEMETRY</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs bg-emerald-950/80 px-4 py-2 border border-emerald-500/40 text-emerald-300">
            <Crosshair className="w-4 h-4 text-emerald-400" /> TIMELOCK: 01:44:29:08
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {telemetry.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, borderColor: 'rgba(16,185,129,0.8)' }}
              className="bg-black/90 p-6 border border-emerald-500/30 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex justify-between text-xs text-emerald-600 mb-4">
                  <span>[{item.code}]</span>
                  <span className="text-emerald-400 font-bold">{item.status}</span>
                </div>
                <div className="w-full h-36 bg-emerald-950/20 border border-emerald-500/20 mb-4 flex items-center justify-center relative">
                  <Terminal className="w-10 h-10 text-emerald-500/40 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-bold text-white text-base tracking-wide mb-2">{item.target}</h3>
                <div className="text-xs text-emerald-600 mb-4">REMAINING ASSETS: {item.stock}</div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-emerald-500/20">
                <div>
                  <span className="text-2xl font-bold text-emerald-400">{item.val}</span>
                  <span className="text-xs text-emerald-600 ml-2">{item.off}</span>
                </div>
                <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-xs tracking-wider uppercase transition-colors">
                  ENGAGE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale7;
