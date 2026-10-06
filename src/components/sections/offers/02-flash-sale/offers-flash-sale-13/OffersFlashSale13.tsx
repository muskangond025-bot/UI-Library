import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Clock } from 'lucide-react';

export function OffersFlashSale13() {
  const nodes = [
    { title: 'Spatial Pods', price: '$89', discount: '50% OFF', category: 'AUDIO' },
    { title: 'Smart Watch', price: '$149', discount: '40% OFF', category: 'WEARABLE' },
    { title: 'Gaming Mouse', price: '$49', discount: '55% OFF', category: 'PERIPHERAL' },
    { title: 'Desk Dock', price: '$79', discount: '45% OFF', category: 'ACCESSORY' }
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-8 sm:p-14 font-sans rounded-3xl border border-slate-800">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header with Integrated Countdown Hub */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-slate-900/80 p-8 rounded-3xl border border-cyan-500/30 backdrop-blur-md gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" /> RADIAL ORBIT RADAR HUB
            </span>
            <h2 className="text-3xl font-extrabold text-white">Synchronized Orbital Flash Deals</h2>
          </div>

          {/* Central Timer Hub */}
          <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-900 to-indigo-950 border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center gap-4 shrink-0">
            <Clock className="w-8 h-8 text-cyan-400 animate-pulse" />
            <div>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block">RADAR EXPIRING IN</span>
              <span className="text-2xl font-black font-mono text-white">02 : 44 : 12</span>
            </div>
          </div>
        </div>

        {/* Satellite Deal Nodes Layout (Structured Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-900/90 p-6 rounded-3xl border border-cyan-500/30 backdrop-blur-md flex flex-col justify-between h-52 shadow-xl hover:border-cyan-400 transition-all group"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-3">
                  <span className="text-cyan-400 font-bold">NODE #0{idx + 1}</span>
                  <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded text-[10px] font-bold">{node.discount}</span>
                </div>
                <h3 className="font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">{node.title}</h3>
                <span className="text-[11px] text-slate-500 font-mono block mt-1">{node.category}</span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-800/80">
                <span className="text-2xl font-black text-cyan-400">{node.price}</span>
                <button className="p-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-2xl transition-colors font-bold">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale13;
