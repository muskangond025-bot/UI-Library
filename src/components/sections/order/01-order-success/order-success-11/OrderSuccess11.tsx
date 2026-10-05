import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function OrderSuccess11({ data }: { data?: any }) {
  const particles = [
    { x: -50, y: -60, color: 'bg-emerald-400' },
    { x: 50, y: -55, color: 'bg-teal-300' },
    { x: -70, y: 35, color: 'bg-cyan-400' },
    { x: 70, y: 40, color: 'bg-emerald-300' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl text-center relative overflow-hidden">
      {particles.map((p, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 1.8 }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 1.5 }}
          className={"absolute w-3.5 h-3.5 rounded-full " + p.color + " left-1/2 top-1/3 pointer-events-none"}
        />
      ))}
      <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">CELEBRATING SUCCESS</span>
      <h3 className="text-2xl font-bold text-white mb-2">Order Placed Successfully!</h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">Order #DH-28491 (₹4,999) has been placed.</p>
    </div>
  );
}
export default OrderSuccess11;