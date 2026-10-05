import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Edit3, Save } from 'lucide-react';

export function AccountProfileInformation6() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto w-full space-y-8 relative z-10">
        {/* Floating Identity Header Card */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 shadow-2xl flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt={profile.fullName}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500/40"
            />
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase">FLOATING PROFILE MODULES</span>
              <h1 className="text-xl font-bold text-white">{profile.fullName}</h1>
              <p className="text-xs text-slate-400">{profile.email}</p>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Modules'}
          </button>
        </motion.div>

        {/* Floating Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Full Name', field: 'fullName', val: profile.fullName, icon: User, floatDelay: 0 },
            { label: 'Email Address', field: 'email', val: profile.email, icon: Mail, floatDelay: 1 },
            { label: 'Phone Number', field: 'phone', val: profile.phone, icon: Phone, floatDelay: 0.5 },
            { label: 'Date of Birth', field: 'dob', val: profile.dob, icon: Calendar, floatDelay: 1.5 },
          ].map((module, idx) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={idx}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4 + idx * 0.5, repeat: Infinity, ease: 'easeInOut', delay: module.floatDelay }}
                className="bg-slate-900/70 backdrop-blur-md p-6 rounded-3xl border border-slate-800 shadow-xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{module.label}</span>
                  <div className="p-2 bg-slate-800 text-indigo-400 rounded-xl">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                {isEditing ? (
                  <input
                    type="text"
                    value={module.val}
                    onChange={(e) => setProfile({ ...profile, [module.field]: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
                  />
                ) : (
                  <div className="text-lg font-bold text-white">{module.val}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {isEditing && (
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" /> Save Floating Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountProfileInformation6;
