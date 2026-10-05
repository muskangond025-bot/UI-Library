import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, HelpCircle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export function OrderCustomerSupport1() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl border border-slate-800 my-4 shadow-2xl">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Live Support Online
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Need Help With Your Order?</h2>
            <p className="text-slate-400 text-sm mt-1">Order #849202 • Dedicated Assistance</p>
          </div>
          <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 text-right">
            <span className="text-xs text-slate-400 block">Avg Response Time</span>
            <span className="text-sm font-bold text-emerald-400 font-mono">Under 2 Minutes</span>
          </div>
        </motion.div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all shadow-xl group"
          >
            <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl w-fit">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Live Concierge Chat</h3>
              <p className="text-xs text-slate-400 mt-1">Chat directly with an order specialist now.</p>
            </div>
            <motion.button whileTap={{ scale: 0.95 }} className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 shadow-lg">
              Start Chat <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-cyan-500/50 transition-all shadow-xl group"
          >
            <div className="p-3 bg-cyan-500/20 text-cyan-400 rounded-xl w-fit">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Priority Phone Line</h3>
              <p className="text-xs text-slate-400 mt-1">Speak directly with our support team.</p>
            </div>
            <motion.button whileTap={{ scale: 0.95 }} className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5">
              +1 (800) 492-0192
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-purple-500/50 transition-all shadow-xl group"
          >
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl w-fit">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Email Inquiry Ticket</h3>
              <p className="text-xs text-slate-400 mt-1">Submit order changes or question form.</p>
            </div>
            <motion.button whileTap={{ scale: 0.95 }} className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5">
              Submit Ticket
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport1;
