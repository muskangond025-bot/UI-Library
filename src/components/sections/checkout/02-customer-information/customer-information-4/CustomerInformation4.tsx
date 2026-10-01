import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lock } from 'lucide-react';

export function CustomerInformation4({ data }: { data?: any }) {
  const [email, setEmail] = useState('morgan.lee@example.com');
  const [name, setName] = useState('Morgan Lee');
  const [phone, setPhone] = useState('+1 (555) 456-7890');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-neutral-100 shadow-2xl"
      >
        <div className="mb-10 flex justify-between items-end border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
              Customer Identification
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Enter Details</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-violet-400" /> Express Checkout
          </span>
        </div>

        <div className="space-y-8">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              id="name-input-4"
              value={name}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="name-input-4"
              className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                name || focusedField === 'name'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }`}
            >
              Full Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email-input-4"
              value={email}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="email-input-4"
              className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                email || focusedField === 'email'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }`}
            >
              Email Address (Receipt & Notifications)
            </label>
          </div>

          {/* Phone Field */}
          <div className="relative">
            <input
              type="tel"
              id="phone-input-4"
              value={phone}
              onFocus={() => setFocusedField('phone')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setPhone(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="phone-input-4"
              className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                phone || focusedField === 'phone'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }`}
            >
              Mobile Phone
            </label>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
              <span>Save & Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default CustomerInformation4;