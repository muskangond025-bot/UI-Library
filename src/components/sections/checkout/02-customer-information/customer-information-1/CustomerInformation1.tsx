import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export function CustomerInformation1({ data }: { data?: any }) {
  const [email, setEmail] = useState('alex.morgan@example.com');
  const [fullName, setFullName] = useState('Alex Morgan');
  const [phone, setPhone] = useState('+1 (555) 234-5678');
  const [isGuest, setIsGuest] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl relative overflow-hidden"
      >
        {/* Editorial Top Accent */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold block mb-1">
              01 — CHECKOUT STEP
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Customer Details
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-stone-800/80 p-1.5 rounded-full border border-stone-700/50">
            <button
              onClick={() => setIsGuest(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                isGuest ? 'bg-amber-400 text-stone-950 shadow-md font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Guest Checkout
            </button>
            <button
              onClick={() => setIsGuest(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                !isGuest ? 'bg-amber-400 text-stone-950 shadow-md font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Member Sign In
            </button>
          </div>
        </motion.div>

        {/* Form Fields */}
        <div className="mt-8 space-y-6">
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                  placeholder="Jane Doe"
                />
                <User className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                  placeholder="+1 (555) 000-0000"
                />
                <Phone className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">
              Email Address for Receipt & Order Tracking *
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 placeholder-stone-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition"
                placeholder="alex@example.com"
              />
              <Mail className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-stone-800/80">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-stone-700 text-amber-400 focus:ring-amber-400 bg-stone-950 accent-amber-400"
              />
              <span className="text-xs text-stone-400 group-hover:text-stone-300 transition">
                Send SMS updates & digital order receipt
              </span>
            </label>

            <button
              type="button"
              className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl transition flex items-center justify-center gap-2"
            >
              Continue to Shipping
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation1;
