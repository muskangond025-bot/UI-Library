import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function OrderDeliveryInformation10() {
  const dates = [
    { day: 'MON', date: '12', month: 'OCT', status: 'Range Start', active: true },
    { day: 'TUE', date: '13', month: 'OCT', status: 'Expected', active: true },
    { day: 'WED', date: '14', month: 'OCT', status: 'Expected', active: true },
    { day: 'THU', date: '15', month: 'OCT', status: 'Range End', active: true },
    { day: 'FRI', date: '16', month: 'OCT', status: 'Backup', active: false },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Calendar Schedule</span>
            <h2 className="text-2xl font-bold text-white">Delivery Window Highlight</h2>
          </div>
          <div className="bg-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 border border-slate-700">
            TRACK: DH-TRK-28491
          </div>
        </div>

        {/* Date Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {dates.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`p-4 rounded-xl text-center border transition-all ${
                d.active
                  ? 'bg-emerald-950/40 border-emerald-500/60 ring-1 ring-emerald-500/20'
                  : 'bg-slate-950/40 border-slate-800 opacity-50'
              }`}
            >
              <span className="text-xs font-mono text-slate-400 block">{d.day}</span>
              <span className="text-2xl font-black text-white block my-1">{d.date}</span>
              <span className="text-[10px] font-mono text-emerald-400 block uppercase">{d.month}</span>
              <span className="text-[10px] text-slate-400 block mt-2">{d.status}</span>
            </motion.div>
          ))}
        </div>

        {/* Details Footer */}
        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <span>Estimated Window: <strong>12–15 October 2026</strong></span>
          </div>
          <span className="text-slate-400">Carrier: DripExpress Ground (3-5 Days)</span>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation10;
