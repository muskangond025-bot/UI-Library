import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Camera, Edit2, Check, ArrowRight } from 'lucide-react';

const heroAvatarVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 15 }
  }
};

const staggerDetails: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.4 }
  })
};

export function AccountProfileInformation4() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    gender: 'Female',
  });

  return (
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        {/* Large Profile Hero Avatar Section */}
        <div className="text-center space-y-4">
          <motion.div
            variants={heroAvatarVariants}
            initial="hidden"
            animate="visible"
            className="relative inline-block"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt={profile.fullName}
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-4 ring-indigo-500/40 shadow-2xl mx-auto"
            />
            <button className="absolute bottom-2 right-2 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-xl transition-transform hover:scale-110">
              <Camera className="w-5 h-5" />
            </button>
          </motion.div>

          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">{profile.fullName}</h1>
            <p className="text-sm text-slate-400 mt-1">{profile.email}</p>
          </div>
        </div>

        {/* Staggered Editable Details */}
        <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-xs font-mono text-indigo-400 uppercase">PROFILE HERO SPECIFICATIONS</span>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 transition-colors flex items-center gap-1.5"
            >
              <Edit2 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Details'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Full Name', field: 'fullName', val: profile.fullName },
              { label: 'Email', field: 'email', val: profile.email },
              { label: 'Phone', field: 'phone', val: profile.phone },
              { label: 'Gender', field: 'gender', val: profile.gender },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={staggerDetails}
                initial="hidden"
                animate="visible"
                className="space-y-1.5"
              >
                <label className="text-xs font-mono text-slate-400">{item.label}</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={item.val}
                  onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 disabled:opacity-70 transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation4;
