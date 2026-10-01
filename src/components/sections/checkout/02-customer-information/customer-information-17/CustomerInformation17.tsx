import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, ChevronDown, ArrowRight } from 'lucide-react';

export function CustomerInformation17({ data }: { data?: any }) {
  const [email, setEmail] = useState('emma.watson@example.com');
  const [name, setName] = useState('Emma Watson');
  const [phone, setPhone] = useState('+1 (555) 789-0123');
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">
          Progressive Disclosure Checkout Form
        </h2>

        <div className="space-y-5">
          {/* Primary Required Fields */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address (Required)</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <Mail className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name (Required)</label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
              />
              <User className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          {/* Toggle Button for Secondary Fields */}
          <button
            type="button"
            onClick={() => setShowSecondary(!showSecondary)}
            className="flex items-center gap-2 text-xs text-purple-400 hover:text-purple-300 font-semibold pt-2"
          >
            <span>{showSecondary ? 'Hide Optional Preferences' : '+ Add phone number & notification options'}</span>
            <motion.div animate={{ rotate: showSecondary ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </button>

          {/* Secondary Fields Expanded via Accordion */}
          <AnimatePresence>
            {showSecondary && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden space-y-5 pt-2"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Phone (Optional)</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-purple-500 transition"
                    />
                    <Phone className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-xl transition flex items-center gap-2">
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation17;