import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Sparkles, ArrowRight } from 'lucide-react';

export function CustomerInformation13({ data }: { data?: any }) {
  const [email, setEmail] = useState('ethan.hunt@example.com');
  const [name, setName] = useState('Ethan Hunt');
  const [phone, setPhone] = useState('+1 (555) 345-6789');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      {/* Soft Ambient Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.15, 1, 1.15], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/15 rounded-full blur-2xl pointer-events-none"
      />

      {/* Crisp Solid Glass Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-slate-900/90 backdrop-blur-md border border-slate-700/80 rounded-3xl p-8 sm:p-12 shadow-2xl text-slate-100"
      >
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Crisp Glassmorphic UI
            </div>
            <h2 className="text-2xl font-bold text-white">Customer Information</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">256-Bit SSL Encrypted</span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">Email Address</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-blue-400 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-8 py-3.5 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2 shadow-lg shadow-blue-500/20">
              <span>Next: Shipping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation13;