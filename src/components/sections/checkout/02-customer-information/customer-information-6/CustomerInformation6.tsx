import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, Check, ArrowRight } from 'lucide-react';

export function CustomerInformation6({ data }: { data?: any }) {
  const [email, setEmail] = useState('chris.evans@example.com');
  const [name, setName] = useState('Chris Evans');
  const [phone, setPhone] = useState('+1 (555) 678-9012');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const colVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Column 1: Title & Editorial Watermark */}
          <motion.div variants={colVariants} className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest block">
              SECTION 01 // EDITORIAL GRID
            </span>
            <h2 className="text-3xl font-extrabold text-zinc-100 tracking-tight leading-tight">
              CUSTOMER IDENTITY & CONTACT
            </h2>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We require accurate customer contact information to verify order authenticity and handle post-purchase communications seamlessly.
            </p>
            <div className="pt-4 border-t border-zinc-800">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">STATUS: DRAFT CHECKOUT</span>
            </div>
          </motion.div>

          {/* Column 2: Main Form */}
          <motion.div variants={colVariants} className="md:col-span-5 space-y-5">
            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <User className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <Mail className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Phone</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 pl-11 text-sm text-zinc-100 focus:outline-none focus:border-rose-500 transition"
                />
                <Phone className="w-4 h-4 text-zinc-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </motion.div>

          {/* Column 3: Summary Action Box */}
          <motion.div variants={colVariants} className="md:col-span-3 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-zinc-400 mb-3">Preferences</h3>
              <div className="space-y-3 text-xs text-zinc-300">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-rose-500 rounded" />
                  <span>Receive news & drop alerts</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-rose-500 rounded" />
                  <span>SMS order updates</span>
                </label>
              </div>
            </div>

            <button className="w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/20">
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation6;