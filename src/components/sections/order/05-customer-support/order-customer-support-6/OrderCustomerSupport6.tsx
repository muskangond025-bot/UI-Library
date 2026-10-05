import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, UserCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function OrderCustomerSupport6() {
  const steps = [
    { label: 'Ticket Submitted', date: 'Oct 12, 10:15 AM', done: true },
    { label: 'Agent Assigned', date: 'Oct 12, 10:18 AM', done: true },
    { label: 'In Review', date: 'Oct 12, 10:25 AM', active: true },
    { label: 'Resolution Confirmed', date: 'Pending', done: false },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4"
        >
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">Ticket Progress</span>
            <h2 className="text-2xl font-bold text-white">Active Support Request #TK-8492</h2>
          </div>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full">
            In Progress
          </span>
        </motion.div>

        {/* Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.12 }}
              className={`p-4 rounded-2xl border ${
                s.active
                  ? 'bg-purple-950/40 border-purple-500/60 ring-2 ring-purple-500/20'
                  : s.done
                  ? 'bg-slate-950 border-purple-500/30'
                  : 'bg-slate-950/40 border-slate-800 opacity-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {s.done ? (
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                ) : s.active ? (
                  <span className="w-3 h-3 rounded-full bg-purple-400 animate-ping" />
                ) : (
                  <span className="w-3 h-3 rounded-full bg-slate-700" />
                )}
                <span className="text-[10px] font-mono text-slate-400 uppercase">STEP 0{i+1}</span>
              </div>
              <h4 className="font-bold text-sm text-white">{s.label}</h4>
              <p className="text-[11px] text-slate-400 mt-1 font-mono">{s.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport6;
