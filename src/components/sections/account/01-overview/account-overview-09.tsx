import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, AlertCircle, Phone, MapPin, Sliders, ChevronRight, User } from 'lucide-react';

export function AccountOverview9() {
  const completionPercentage = 80;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left SVG Ring Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-slate-900/80 rounded-3xl p-8 border border-slate-800 flex flex-col items-center text-center space-y-6"
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                className="text-slate-800"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
              />
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                className="text-indigo-500"
                strokeWidth="8"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-white">{completionPercentage}%</span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Completed</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Profile Completion</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Complete missing information to unlock 100 VIP reward points.
            </p>
          </div>
        </motion.div>

        {/* Right Missing Information Checklist Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="bg-slate-900/60 rounded-3xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              Missing Information Details
            </h3>

            <div className="space-y-3">
              {[
                { name: 'Phone Verification', desc: 'Add phone number for SMS tracking alerts', icon: Phone, action: 'Add Phone' },
                { name: 'Backup Delivery Address', desc: 'Add secondary address for faster checkout', icon: MapPin, action: 'Add Address' },
                { name: 'Shopping Preferences', desc: 'Select favorite categories & apparel sizes', icon: Sliders, action: 'Set Preferences' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between gap-4 hover:border-indigo-500/40 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="p-2.5 bg-slate-800 text-indigo-400 rounded-xl">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors">
                      {item.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountOverview9;
