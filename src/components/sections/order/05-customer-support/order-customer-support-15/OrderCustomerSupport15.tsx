import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Calendar } from 'lucide-react';

export function OrderCustomerSupport15() {
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');

  const slots = ['10:00 AM', '02:00 PM', '04:30 PM'];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest block mb-1">Phone Callback</span>
          <h2 className="text-2xl font-bold text-white">Schedule a Callback</h2>
        </motion.div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-2">
            <h4 className="font-bold text-base text-white">Request Phone Call for Order #849202</h4>
            <p className="text-xs text-slate-400">Our support specialist will call you at your preferred time slot.</p>
            <div className="flex gap-2 pt-2">
              {slots.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSlot(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedSlot === s ? 'bg-purple-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center gap-2 shrink-0">
            <PhoneCall className="w-4 h-4" /> Book Callback
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport15;
