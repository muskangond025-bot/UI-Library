import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight } from 'lucide-react';

export function CustomerInformation9({ data }: { data?: any }) {
  const [email, setEmail] = useState('derek.blake@example.com');
  const [name, setName] = useState('Derek Blake');
  const [phone, setPhone] = useState('+1 (555) 901-2345');

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Asymmetric Block 1: Top-Left Entry */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 bg-emerald-950/40 border border-emerald-800/50 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">
              ASymmetric Grid // 09
            </span>
            <h2 className="text-3xl font-extrabold text-emerald-100 tracking-tight mb-4">
              Your Details
            </h2>
            <p className="text-xs text-emerald-300/70 leading-relaxed">
              We align customer contact verification asynchronously for fast order dispatch.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-emerald-800/40">
            <span className="text-xs font-semibold text-emerald-400">Guest Checkout Session</span>
          </div>
        </motion.div>

        {/* Asymmetric Block 2: Bottom-Right Entry */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl space-y-5"
        >
          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Name</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 uppercase mb-2">Phone</label>
            <div className="relative">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2">
              <span>Proceed to Shipping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation9;