import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, Camera, Edit3, Save, Check } from 'lucide-react';

const leftPanel: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const rightPanel: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

export function AccountProfileInformation3() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    gender: 'Female',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Side Profile Card */}
        <motion.div
          variants={leftPanel}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-indigo-950/40 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between items-center text-center space-y-6"
        >
          <div className="space-y-4">
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-mono uppercase">
              IDENTITY CARD
            </span>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                alt={profile.fullName}
                className="w-28 h-28 rounded-3xl object-cover ring-2 ring-indigo-500/40 shadow-2xl mx-auto"
              />
              <button className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-500 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">{profile.fullName}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{profile.email}</p>
            </div>
          </div>

          <div className="w-full pt-6 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 block mb-1">Account Security Status</span>
            <span className="text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1">
              <Check className="w-3.5 h-3.5" /> 2FA Protection Active
            </span>
          </div>
        </motion.div>

        {/* Right Side Editable Form */}
        <motion.div
          variants={rightPanel}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 bg-slate-900/60 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-6"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-white">Editable Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel Edit' : 'Edit Information'}
            </button>
          </div>

          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsEditing(false); }}>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">Full Name</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.fullName}
                onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">Email Address</label>
              <input
                type="email"
                disabled={!isEditing}
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">Phone Number</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
              />
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" /> Save Profile
                </button>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountProfileInformation3;
