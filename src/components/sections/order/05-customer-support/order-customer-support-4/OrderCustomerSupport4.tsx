import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

export function OrderCustomerSupport4() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Pane */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Direct Assistance</span>
            <h2 className="text-2xl font-bold text-white mb-4">Support Console</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have questions regarding Order #849202? Submit your inquiry directly to your assigned fulfillment agent.
            </p>

            <div className="mt-6 space-y-3 font-mono text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">ORDER ID</span>
                <span className="text-indigo-400 font-bold">#849202</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-slate-500 block">ASSIGNED AGENT</span>
                <span className="text-white font-bold">Sarah M. (Senior Specialist)</span>
              </div>
            </div>
          </div>

          <span className="text-[11px] text-slate-500 mt-6 block">Dedicated Support Guarantee • 24/7 Coverage</span>
        </motion.div>

        {/* Right Form Pane */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-white mb-2">Submit Support Request</h3>
            
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Select Issue Category</label>
              <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:border-indigo-500 outline-none">
                <option>Shipping & ETA Query</option>
                <option>Change Delivery Address</option>
                <option>Item Specification Help</option>
                <option>Return / Exchange Request</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">Message Details</label>
              <textarea 
                rows={3} 
                placeholder="Describe your request..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-indigo-500 outline-none resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              className={`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg ${
                sent ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-500 hover:bg-indigo-400 text-slate-950'
              }`}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" /> Request Submitted Successfully
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Dispatch Request to Agent
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport4;
