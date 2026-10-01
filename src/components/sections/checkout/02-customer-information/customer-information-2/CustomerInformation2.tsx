import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export function CustomerInformation2({ data }: { data?: any }) {
  const [email, setEmail] = useState('jordan.smith@example.com');
  const [name, setName] = useState('Jordan Smith');
  const [phone, setPhone] = useState('+1 (555) 987-6543');

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl">
        {/* Left Panel - Opposite Slide Entrance */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:col-span-5 bg-gradient-to-br from-indigo-900/50 via-slate-900 to-slate-950 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step 1 of 3</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Customer Information</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enter your contact details to enable real-time order tracking and digital delivery receipts.
            </p>
          </div>

          <div className="relative z-10 my-8 bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 p-4 rounded-2xl">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400">Checkout Cart</span>
              <span className="text-indigo-400 font-semibold">2 Items</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-semibold text-slate-200">Total Due</span>
              <span className="text-xl font-extrabold text-white">$248.00</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>256-bit encrypted secure guest checkout</span>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right Panel - Opposite Slide Entrance */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          className="md:col-span-7 p-8 bg-slate-900/60 flex flex-col justify-between"
        >
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Contact Form</h3>
              <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">Already have an account?</button>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="Jordan Smith"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="jordan@example.com"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-medium mb-1.5">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-indigo-500 transition"
                  placeholder="+1 (555) 000-0000"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-400">All fields required</span>
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition flex items-center gap-2 shadow-lg shadow-indigo-600/20">
              <span>Next: Shipping Address</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CustomerInformation2;