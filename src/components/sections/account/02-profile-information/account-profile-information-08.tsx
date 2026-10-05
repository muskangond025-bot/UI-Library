import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Phone, Calendar, Mail, User, Edit3 } from 'lucide-react';

export function AccountProfileInformation8() {
  const completionPercentage = 80;
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercentage / 100) * circumference;

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '',
    dob: '',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left SVG Ring Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-slate-900/80 rounded-3xl p-8 border border-slate-800 flex flex-col items-center text-center space-y-6"
        >
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={radius} className="text-slate-800" strokeWidth="8" stroke="currentColor" fill="transparent" />
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
            <h2 className="text-xl font-bold text-white">Profile Completeness</h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Complete missing phone & DOB fields to reach 100% verification score.
            </p>
          </div>
        </motion.div>

        {/* Right Missing Info & Form Column */}
        <div className="lg:col-span-7 bg-slate-900/60 rounded-3xl p-6 border border-slate-800 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              Personal Info Verification
            </h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-3.5 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Information'}
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-emerald-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">Full Name</h4>
                  <p className="text-xs text-slate-400">{profile.fullName}</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">Email Address</h4>
                  <p className="text-xs text-slate-400">{profile.email}</p>
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-amber-500/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <div>
                  <h4 className="text-xs font-bold text-white">Phone Number</h4>
                  <p className="text-xs text-amber-400">Missing — Required for SMS alerts</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase">Action Required</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation8;
