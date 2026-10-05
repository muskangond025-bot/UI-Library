import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, ShieldCheck, Edit3 } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: 'easeInOut' }
  })
};

export function AccountProfileInformation15() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    gender: 'Female',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">GROUPED PROFILE SECTIONS</span>
            <h1 className="text-2xl font-bold text-white mt-1">Categorized Profile Information</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Sections'}
          </button>
        </div>

        {/* Grouped Sections */}
        <div className="space-y-6">
          {/* Section 1: Personal */}
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4"
          >
            <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <User className="w-4 h-4" /> Personal Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Full Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Gender</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.gender}
                  onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
                />
              </div>
            </div>
          </motion.div>

          {/* Section 2: Contact */}
          <motion.div
            custom={1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4"
          >
            <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <Mail className="w-4 h-4" /> Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Email Address</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-400">Phone Number</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation15;
