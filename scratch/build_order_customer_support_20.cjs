const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'order', '05-customer-support');

const components = [
  // 01 — LIVE ORDER SUPPORT HUB
  {
    id: 1,
    name: 'OrderCustomerSupport1',
    dir: 'order-customer-support-1',
    title: 'Live Order Support Hub — Real-Time Agent Status',
    desc: 'Interactive post-order support hub featuring live agent status indicators, quick issue triggers, and direct chat actions.',
    code: `import React from 'react';
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
`
  },
  // 02 — INTERACTIVE FAQ ACCORDION
  {
    id: 2,
    name: 'OrderCustomerSupport2',
    dir: 'order-customer-support-2',
    title: 'Interactive FAQ Accordion — Height Transition',
    desc: 'Post-purchase FAQ section featuring smooth expandable accordion items and instant search topics.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export function OrderCustomerSupport2() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'How do I change my shipping address after placing an order?', a: 'Address changes can be requested within 2 hours of placing your order. Click "Modify Address" in your order dashboard or contact live chat.' },
    { q: 'Can I add or remove items from this order?', a: 'Once an order is confirmed, items cannot be edited directly, but our support team can assist with additions prior to warehouse processing.' },
    { q: 'What should I do if my tracking status is not updating?', a: 'Tracking updates can take up to 24 hours to register with the carrier. If no updates appear after 48 hours, reach out to priority support.' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex justify-between items-center border-b border-slate-800 pb-4"
        >
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Self Help Center</span>
            <h2 className="text-2xl font-bold text-white">Post-Purchase FAQs</h2>
          </div>
          <HelpCircle className="w-6 h-6 text-cyan-400" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full p-5 text-left font-semibold text-sm sm:text-base text-white flex justify-between items-center gap-4 hover:text-cyan-400 transition-colors"
              >
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: open === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-400 border-t border-slate-800/60 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport2;
`
  },
  // 03 — INSTANT HELP CARDS GRID
  {
    id: 3,
    name: 'OrderCustomerSupport3',
    dir: 'order-customer-support-3',
    title: 'Instant Help Cards Grid — Stagger Entrance',
    desc: 'Grid layout of instant post-order resolution actions with hover elevation and crisp icons.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, MapPin, Shield, FileText, ArrowRight } from 'lucide-react';

export function OrderCustomerSupport3() {
  const cards = [
    { title: 'Track Order Live', desc: 'Real-time GPS carrier updates', icon: MapPin, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { title: 'Returns & Exchanges', desc: 'Initiate 30-day hassle free return', icon: RefreshCw, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { title: 'Buyer Protection', desc: 'Full coverage & money back guarantee', icon: Shield, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { title: 'Request Invoice', desc: 'Download official tax receipt PDF', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Instant Actions</span>
          <h2 className="text-2xl font-bold text-white">Order Self-Service Portal</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ y: -6 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-all shadow-xl group cursor-pointer flex flex-col justify-between"
              >
                <div className={\`p-3 rounded-xl w-fit \${c.bg} \${c.color}\`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{c.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{c.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-300 group-hover:text-white pt-2 border-t border-slate-900">
                  Select <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport3;
`
  },
  // 04 — SPLIT-SCREEN SUPPORT CONSOLE
  {
    id: 4,
    name: 'OrderCustomerSupport4',
    dir: 'order-customer-support-4',
    title: 'Split-Screen Support Console — Dual Panel',
    desc: 'Dual-pane console separating order status overview from an interactive quick ticket submission form.',
    code: `import React, { useState } from 'react';
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
              className={\`w-full py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg \${
                sent ? 'bg-emerald-500 text-slate-950' : 'bg-indigo-500 hover:bg-indigo-400 text-slate-950'
              }\`}
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
`
  },
  // 05 — CONCIERGE LIVE CHAT WIDGET
  {
    id: 5,
    name: 'OrderCustomerSupport5',
    dir: 'order-customer-support-5',
    title: 'Concierge Live Chat Widget — Typing Indicator',
    desc: 'Simulated live chat conversation window showcasing order support messaging and typing status.',
    code: `import React from 'react';
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
`
  },
  // 06 — VISUAL TICKET PROGRESS TRACKER
  {
    id: 6,
    name: 'OrderCustomerSupport6',
    dir: 'order-customer-support-6',
    title: 'Visual Ticket Progress Tracker — Milestone Stepper',
    desc: 'Support ticket resolution timeline tracking submitted inquiry status from review to resolution.',
    code: `import React from 'react';
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
              className={\`p-4 rounded-2xl border \${
                s.active
                  ? 'bg-purple-950/40 border-purple-500/60 ring-2 ring-purple-500/20'
                  : s.done
                  ? 'bg-slate-950 border-purple-500/30'
                  : 'bg-slate-950/40 border-slate-800 opacity-50'
              }\`}
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
`
  },
  // 07 — MINIMAL MONOCHROME HELP DESK
  {
    id: 7,
    name: 'OrderCustomerSupport7',
    dir: 'order-customer-support-7',
    title: 'Minimal Monochrome Help Desk — Refined Typography',
    desc: 'High-contrast monochrome help layout focused on clear contact choices and spatial whitespace.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport7() {
  return (
    <section className="w-full bg-neutral-950 text-neutral-100 py-12 px-4 sm:px-6 rounded-2xl border border-neutral-800 my-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="border-b border-neutral-800 pb-6 flex justify-between items-end"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-1">05 / ASSISTANCE</span>
            <h2 className="text-3xl font-light tracking-tight text-white">CUSTOMER SUPPORT</h2>
          </div>
          <span className="text-xs font-mono text-neutral-400">ORDER #849202</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">01 / LIVE CHAT</span>
            <p className="text-lg font-medium text-neutral-200">Instant Messaging</p>
            <p className="text-xs text-neutral-400">Available 24 Hours Daily</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">02 / PHONE</span>
            <p className="text-lg font-mono text-neutral-200">+1 (800) 492-0192</p>
            <p className="text-xs text-neutral-400">Mon-Fri 08:00 - 20:00 EST</p>
          </div>

          <div className="space-y-2 border-l border-neutral-800 pl-4">
            <span className="text-xs font-mono text-neutral-500 uppercase">03 / TICKET</span>
            <p className="text-lg font-medium text-neutral-200">Email Inquiry</p>
            <p className="text-xs text-neutral-400">Response within 2 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport7;
`
  },
  // 08 — DARK LUXURY CONCIERGE SUPPORT
  {
    id: 8,
    name: 'OrderCustomerSupport8',
    dir: 'order-customer-support-8',
    title: 'Dark Luxury Concierge Support — VIP Glow Panel',
    desc: 'Exclusive dark luxury VIP concierge support layout with gold typography and dedicated account manager card.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ShieldCheck, PhoneCall } from 'lucide-react';

export function OrderCustomerSupport8() {
  return (
    <section className="w-full bg-gradient-to-b from-stone-950 via-zinc-950 to-black text-amber-50 py-12 px-4 sm:px-6 rounded-2xl border border-amber-900/30 my-4 relative overflow-hidden shadow-2xl">
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-amber-900/30 pb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">VIP CONCIERGE</span>
              <h3 className="text-2xl font-serif tracking-wide text-white">Dedicated Private Support</h3>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-200 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
            ORDER #849202
          </span>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="bg-stone-900/60 backdrop-blur border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono text-amber-400 uppercase">YOUR PERSONAL SPECIALIST</span>
            <h4 className="text-xl font-serif text-white">Elena Rostova</h4>
            <p className="text-xs text-stone-400">Directly managing your order dispatch & white-glove delivery.</p>
          </div>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs transition-colors shadow-lg flex items-center gap-2 shrink-0"
          >
            <PhoneCall className="w-4 h-4" /> Connect Directly
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport8;
`
  },
  // 09 — SELF-SERVICE ORDER ACTION GRID
  {
    id: 9,
    name: 'OrderCustomerSupport9',
    dir: 'order-customer-support-9',
    title: 'Self-Service Order Action Grid — Quick Operations',
    desc: 'Self-service action menu enabling quick post-order operations like changing speed, address, or cancellation.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, XCircle, FileText } from 'lucide-react';

export function OrderCustomerSupport9() {
  const actions = [
    { title: 'Change Delivery Address', icon: MapPin, desc: 'Update destination prior to dispatch' },
    { title: 'Upgrade Shipping Speed', icon: Truck, desc: 'Switch to Overnight Air' },
    { title: 'Request Tax Invoice', icon: FileText, desc: 'Download official receipt PDF' },
    { title: 'Cancel Order Item', icon: XCircle, desc: 'Cancel eligible line item' },
  ];

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Self-Service Menu</span>
          <h2 className="text-2xl font-bold text-white">Manage Order #849202</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex items-center gap-4 cursor-pointer hover:border-indigo-500/50 shadow-lg"
              >
                <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">{act.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{act.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport9;
`
  },
  // 10 — 3D PERSPECTIVE SUPPORT CENTER
  {
    id: 10,
    name: 'OrderCustomerSupport10',
    dir: 'order-customer-support-10',
    title: '3D Perspective Support Center — Card Tilt Motion',
    desc: '3D perspective card layout displaying knowledge base, live chat, and telephone help lines.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare, Phone } from 'lucide-react';

export function OrderCustomerSupport10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white">3D Support Center</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Knowledge Base</h3>
            <p className="text-xs text-slate-400">Search 100+ guides for Order #849202 FAQs.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Live Chat Hub</h3>
            <p className="text-xs text-slate-400">Connect in real time with an agent.</p>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <Phone className="w-8 h-8 text-blue-400" />
            <h3 className="font-bold text-lg text-white">Hotline Help</h3>
            <p className="text-xs text-slate-400">Direct toll-free customer support.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport10;
`
  },
  // 11 — CATEGORY-TABBED SUPPORT PORTAL
  {
    id: 11,
    name: 'OrderCustomerSupport11',
    dir: 'order-customer-support-11',
    title: 'Category-Tabbed Support Portal — Smooth Switch',
    desc: 'Category tabbed portal organizing support help by Shipping, Returns, and Payment.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function OrderCustomerSupport11() {
  const [tab, setTab] = useState<'Shipping' | 'Returns' | 'Payment'>('Shipping');

  const content = {
    Shipping: 'Tracking updates take up to 24 hours. Address updates permitted within 2 hours of order.',
    Returns: '30-day hassle-free returns. Pre-paid shipping labels provided upon request.',
    Payment: 'Full payment authorization confirmed. Invoices downloadable from your portal.',
  };

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-1">Help Portal</span>
            <h2 className="text-2xl font-bold text-white">Order Support Topics</h2>
          </div>
          <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {(['Shipping', 'Returns', 'Payment'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={\`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all \${
                  tab === t ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }\`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-2 text-sm text-slate-300"
          >
            <h3 className="font-bold text-base text-white">{tab} Guidance</h3>
            <p className="leading-relaxed">{content[tab]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default OrderCustomerSupport11;
`
  },
  // 12 — AI ORDER ASSISTANT CHATBOT
  {
    id: 12,
    name: 'OrderCustomerSupport12',
    dir: 'order-customer-support-12',
    title: 'AI Order Assistant Chatbot — Message Bubble Motion',
    desc: 'Interactive AI support chatbot UI providing automated responses for order status inquiries.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Send } from 'lucide-react';

export function OrderCustomerSupport12() {
  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <h2 className="text-2xl font-bold text-white mb-4">AI Support Assistant</h2>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex gap-3">
              <Bot className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-xs text-slate-200">
                Hi! I can instantly resolve queries for Order #849202. What would you like to update?
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Track Delivery</button>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Change Address</button>
              <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg">Cancel Order</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport12;
`
  },
  // 13 — EDITORIAL SUPPORT MAGAZINE
  {
    id: 13,
    name: 'OrderCustomerSupport13',
    dir: 'order-customer-support-13',
    title: 'Editorial Support Magazine — Headline Reveal',
    desc: 'Editorial fashion-forward support layout featuring large bold headlines and direct channel links.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport13() {
  return (
    <section className="w-full bg-stone-950 text-stone-100 py-12 px-4 sm:px-6 rounded-2xl border border-stone-800 my-4 font-serif">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="border-b border-stone-800 pb-6">
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white uppercase">WE ARE HERE TO HELP.</h1>
          <p className="text-xs font-mono text-stone-400 font-sans mt-2">DEDICATED POST-PURCHASE CARE / ORDER #849202</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans text-sm">
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">01 / CHAT</span>
            <p className="font-bold text-white">Live Messaging</p>
            <p className="text-xs text-stone-400">Available 24/7</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">02 / PHONE</span>
            <p className="font-mono font-bold text-white">+1 (800) 492-0192</p>
            <p className="text-xs text-stone-400">Toll Free Hotline</p>
          </div>
          <div>
            <span className="text-xs font-mono text-amber-400 uppercase block mb-1">03 / INQUIRY</span>
            <p className="font-bold text-white">Email Ticket</p>
            <p className="text-xs text-stone-400">Priority Response</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport13;
`
  },
  // 14 — ORDER ISSUE RESOLVER STEPPER
  {
    id: 14,
    name: 'OrderCustomerSupport14',
    dir: 'order-customer-support-14',
    title: 'Order Issue Resolver Stepper — Step Selection',
    desc: 'Interactive resolution wizard guiding users through selecting an issue and dispatching resolution requests.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function OrderCustomerSupport14() {
  const [step, setStep] = useState(1);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-indigo-400 uppercase">Step Wizard</span>
          <h2 className="text-2xl font-bold text-white">Issue Resolution Assistant</h2>
        </motion.div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
            <span>STEP {step} OF 3</span>
            <span>ORDER #849202</span>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">What do you need help with?</h4>
              <button onClick={() => setStep(2)} className="w-full p-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-xs text-left text-white border border-slate-800">
                Wrong Shipping Address
              </button>
              <button onClick={() => setStep(2)} className="w-full p-3 bg-slate-900 hover:bg-slate-800 rounded-xl text-xs text-left text-white border border-slate-800">
                Cancel an Item
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white">Select Preferred Resolution</h4>
              <button onClick={() => setStep(3)} className="w-full p-3 bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-bold rounded-xl text-xs">
                Submit Auto-Resolution Request
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-2">
              <Check className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-base text-white">Request Dispatched!</h4>
              <p className="text-xs text-slate-400">An agent has been notified and will update your order shortly.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport14;
`
  },
  // 15 — CALLBACK REQUEST PANEL
  {
    id: 15,
    name: 'OrderCustomerSupport15',
    dir: 'order-customer-support-15',
    title: 'Callback Request Panel — Scheduled Call Slots',
    desc: 'Callback schedule interface allowing customers to book a phone callback slot from support.',
    code: `import React, { useState } from 'react';
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
                  className={\`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all \${
                    selectedSlot === s ? 'bg-purple-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }\`}
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
`
  },
  // 16 — MULTI-CHANNEL CONTACT MATRIX
  {
    id: 16,
    name: 'OrderCustomerSupport16',
    dir: 'order-customer-support-16',
    title: 'Multi-Channel Contact Matrix — Response Time Badges',
    desc: 'Matrix layout comparing Live Chat, WhatsApp, Phone, and Email response times.',
    code: `import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';

export function OrderCustomerSupport16() {
  const channels = [
    { name: 'Live Chat', time: '< 2 Mins', icon: MessageSquare, color: 'text-emerald-400' },
    { name: 'WhatsApp', time: '< 5 Mins', icon: MessageCircle, color: 'text-green-400' },
    { name: 'Phone', time: 'Instant', icon: Phone, color: 'text-cyan-400' },
    { name: 'Email', time: '< 2 Hours', icon: Mail, color: 'text-purple-400' },
  ];

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase block mb-1">Channel Matrix</span>
          <h2 className="text-2xl font-bold text-white">Contact Response Matrix</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3"
              >
                <Icon className={\`w-6 h-6 \${c.color}\`} />
                <h4 className="font-bold text-sm text-white">{c.name}</h4>
                <span className="text-xs font-mono text-slate-400 block">SLA: {c.time}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport16;
`
  },
  // 17 — FLOATING ACTION HUB
  {
    id: 17,
    name: 'OrderCustomerSupport17',
    dir: 'order-customer-support-17',
    title: 'Floating Action Hub — Levitation Motion',
    desc: 'Levitating support action cards floating around central post-purchase order assistance text.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport17() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">HELP DESK</span>
          <h2 className="text-3xl font-extrabold text-white">SUPPORT FOR ORDER #849202</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Live Chat</h4>
            <p className="text-xs text-slate-400">Instant agent connection</p>
          </motion.div>

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Phone Help</h4>
            <p className="text-xs text-slate-400">Direct voice hotline</p>
          </motion.div>

          <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-2 shadow-xl">
            <h4 className="font-bold text-base text-white">Email Ticket</h4>
            <p className="text-xs text-slate-400">Submit inquiry form</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport17;
`
  },
  // 18 — VISUAL RETURN & EXCHANGE PORTAL
  {
    id: 18,
    name: 'OrderCustomerSupport18',
    dir: 'order-customer-support-18',
    title: 'Visual Return & Exchange Portal — Interactive Step Guide',
    desc: 'Hassle-free return and exchange portal with pre-filled mock order items and step-by-step guidance.',
    code: `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Check } from 'lucide-react';

export function OrderCustomerSupport18() {
  const [selected, setSelected] = useState(false);

  return (
    <section className="w-full bg-slate-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">Return Center</span>
          <h2 className="text-2xl font-bold text-white">Easy Returns & Exchanges</h2>
        </motion.div>

        <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">Items Eligible for 30-Day Return</h4>
            <span className="text-xs font-mono text-emerald-400">Order #849202</span>
          </div>

          <div
            onClick={() => setSelected(!selected)}
            className={\`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all \${
              selected ? 'bg-emerald-950/40 border-emerald-500/50' : 'bg-slate-900 border-slate-800'
            }\`}
          >
            <div>
              <p className="font-semibold text-sm text-white">Classic Tailored Wool Blazer</p>
              <p className="text-xs text-slate-400">Size: M • Color: Charcoal</p>
            </div>
            {selected && <Check className="w-5 h-5 text-emerald-400" />}
          </div>

          <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5">
            <RefreshCw className="w-4 h-4" /> Generate Pre-Paid Return Label
          </button>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport18;
`
  },
  // 19 — HEADLINE MOMENT SUPPORT HERO
  {
    id: 19,
    name: 'OrderCustomerSupport19',
    dir: 'order-customer-support-19',
    title: 'Headline Moment Support Hero — Text Transition',
    desc: 'Bold "NEED HELP WITH ORDER #849202?" hero banner transitioning into instant support actions.',
    code: `import React from 'react';
import { motion } from 'framer-motion';

export function OrderCustomerSupport19() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }}>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">24/7 DEDICATED CARE</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">NEED HELP WITH<br/>ORDER #849202?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Live Chat</h4>
            <p className="text-xs text-slate-400">Connect instantly with an online agent.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.1 }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Phone Line</h4>
            <p className="text-xs text-slate-400">Speak directly with priority team.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: 0.2 }} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
            <h4 className="font-bold text-base text-white">Submit Ticket</h4>
            <p className="text-xs text-slate-400">Email request with 2h SLA.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport19;
`
  },
  // 20 — AWARD-STYLE CUSTOMER EXPERIENCE HUB
  {
    id: 20,
    name: 'OrderCustomerSupport20',
    dir: 'order-customer-support-20',
    title: 'Award-Style Customer Experience Hub — Ultimate Support UI',
    desc: 'Ultimate post-order customer support hub combining live agent indicators, ticket timeline, interactive FAQ accordion, 3D tilt, and micro-interactions.',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award, MessageSquare, Phone, HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export function OrderCustomerSupport20() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const faqs = [
    { q: 'Can I modify my shipping address?', a: 'Address edits are permitted within 2 hours of order placement directly through chat.' },
    { q: 'How do I start a return?', a: 'Returns can be initiated within 30 days of arrival using our instant self-service return portal.' },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> White-Glove Support
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Support Hub</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            ORDER #849202 CARE
          </span>
        </motion.div>

        {/* Support Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <MessageSquare className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Live Concierge</h3>
            <p className="text-xs text-zinc-400">Instant agent messaging</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <Phone className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Priority Hotline</h3>
            <p className="text-xs text-zinc-400">+1 (800) 492-0192</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-3 shadow-xl"
          >
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-lg text-white">Knowledge Base</h3>
            <p className="text-xs text-zinc-400">Self-service solutions</p>
          </motion.div>
        </div>

        {/* Accordion FAQs */}
        <div className="space-y-3 pt-4 border-t border-zinc-800">
          <h4 className="text-xs font-mono text-amber-400 uppercase">Frequent Questions</h4>
          {faqs.map((f, idx) => (
            <div key={idx} className="bg-zinc-900/40 rounded-xl border border-zinc-800 overflow-hidden">
              <button
                onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                className="w-full p-4 text-left font-semibold text-xs text-white flex justify-between items-center"
              >
                <span>{f.q}</span>
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              </button>
              <AnimatePresence>
                {faqOpen === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 text-xs text-zinc-400"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderCustomerSupport20;
`
  }
];

// Write components and json
components.forEach(comp => {
  const targetFolder = path.join(baseDir, comp.dir);
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Write TSX
  const tsxPath = path.join(targetFolder, `${comp.name}.tsx`);
  fs.writeFileSync(tsxPath, comp.code, 'utf8');

  // Write JSON
  const jsonPath = path.join(targetFolder, `${comp.dir}.json`);
  const jsonContent = {
    id: comp.dir,
    title: comp.title,
    category: "order-customer-support",
    description: comp.desc
  };
  fs.writeFileSync(jsonPath, JSON.stringify(jsonContent, null, 2), 'utf8');

  console.log(`Generated ${comp.name} with animations & JSON metadata.`);
});

console.log('Successfully created all 20 Order Customer Support variants!');
