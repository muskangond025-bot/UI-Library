import React from 'react';
import { motion } from 'framer-motion';
import { Send, User, Bot, CheckCheck } from 'lucide-react';

export function OrderCustomerSupport5() {
  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">DripExpress Order Assistant</h3>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Session • Order #849202
                </span>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">24/7 AUTOMATED</span>
          </div>

          {/* Chat Messages */}
          <div className="space-y-4 text-xs">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 p-3.5 rounded-2xl rounded-tl-none border border-slate-800 max-w-md space-y-1">
                <p className="text-slate-200">Hello! I see you recently completed Order #849202. How can I assist you with your delivery today?</p>
                <span className="text-[9px] text-slate-500 block">12:34 PM</span>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <User className="w-4 h-4" />
              </div>
              <div className="bg-indigo-600/20 border border-indigo-500/30 p-3.5 rounded-2xl rounded-tr-none max-w-md space-y-1">
                <p className="text-white">Hi! Can I add contactless porch delivery instructions?</p>
                <span className="text-[9px] text-indigo-300 flex items-center gap-1 justify-end">
                  12:35 PM <CheckCheck className="w-3 h-3 text-indigo-400" />
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-900 p-3.5 rounded-2xl rounded-tl-none border border-slate-800 max-w-md">
                <p className="text-emerald-400 font-semibold">Done! I updated driver instructions for Order #849202 to contactless porch drop.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport5;
