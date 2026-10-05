import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Camera, Edit3, Save } from 'lucide-react';

const avatarScaleVariants: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

export function AccountProfileInformation13() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center space-y-10">
        {/* Avatar Visual Centerpiece */}
        <motion.div
          variants={avatarScaleVariants}
          initial="hidden"
          animate="visible"
          className="relative inline-block group"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
            alt={profile.fullName}
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover ring-4 ring-indigo-500/50 shadow-2xl mx-auto cursor-pointer"
          />
          <button className="absolute bottom-2 right-2 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-2xl transition-transform hover:scale-110">
            <Camera className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">AVATAR CENTERPIECE FOCUS</span>
          <h1 className="text-3xl font-extrabold text-white">{profile.fullName}</h1>
          <p className="text-xs text-slate-400">{profile.email}</p>
        </div>

        {/* Editable Details below Avatar */}
        <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 max-w-2xl mx-auto space-y-6 text-left">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h3 className="text-sm font-bold text-white">Identity Details</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-indigo-400 hover:underline font-mono"
            >
              {isEditing ? 'Cancel' : 'Edit Information'}
            </button>
          </div>

          <div className="space-y-4">
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
              <label className="text-xs font-mono text-slate-400">Email Address</label>
              <input
                type="email"
                disabled={!isEditing}
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation13;
