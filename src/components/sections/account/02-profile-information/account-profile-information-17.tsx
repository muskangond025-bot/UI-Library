import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Edit3, Save, Check } from 'lucide-react';

export function AccountProfileInformation17() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    language: 'English (US)',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Settings-style Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/80 p-6 rounded-3xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20">
              <Settings className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-indigo-400 uppercase">PREMIUM SETTINGS PROFILE</span>
              <h1 className="text-2xl font-bold text-white">Identity & Account Settings</h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> Preferences Updated
              </span>
            )}
            {!isEditing ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" /> Modify Preferences
              </motion.button>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 text-xs rounded-xl border border-slate-700"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Form Controls */}
        <form onSubmit={handleSave} className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400">Preferred Language</label>
              <input
                type="text"
                disabled={!isEditing}
                value={profile.language}
                onChange={(e) => setProfile({ ...profile, language: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
              />
            </div>
          </div>

          {isEditing && (
            <div className="pt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" /> Save Preferences
              </motion.button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default AccountProfileInformation17;
