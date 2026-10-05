import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Crown, Sparkles, User, Mail, Phone, Calendar, Camera, Edit3, Save, CheckCircle2 } from 'lucide-react';

export function AccountProfileInformation20() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [6, -6]);
  const rotateY = useTransform(x, [-80, 80], [-6, 6]);

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
    gender: 'Female',
  });

  const completionPercent = 80;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (completionPercent / 100) * circumference;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="w-full bg-[#0a0a0d] text-slate-100 p-8 md:p-14 min-h-[750px] flex items-center">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {/* Master Award Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative overflow-hidden bg-gradient-to-r from-amber-950/30 via-slate-900 to-indigo-950/30 rounded-3xl p-8 md:p-12 border border-amber-500/30 shadow-2xl space-y-8"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Master Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                  alt={profile.fullName}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover ring-2 ring-amber-500/50 shadow-2xl"
                />
                <span className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-xl shadow-lg">
                  <Crown className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> MASTER PROFILE
                  </span>
                  <span className="text-xs text-slate-400 font-mono">ID: #MK-90241</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-serif text-white tracking-tight mt-1">
                  {profile.fullName}
                </h1>
                <p className="text-xs text-slate-400 mt-1">{profile.email}</p>
              </div>
            </div>

            {/* SVG Progress Ring */}
            <div className="flex items-center gap-4 bg-slate-950/60 p-4 rounded-2xl border border-amber-500/20">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r={radius} className="text-slate-800" strokeWidth="6" stroke="currentColor" fill="transparent" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="text-amber-400"
                    strokeWidth="6"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-xs font-bold text-amber-400">{completionPercent}%</span>
              </div>
              <div className="text-left">
                <span className="text-[11px] font-mono text-slate-400 uppercase">Profile Status</span>
                <p className="text-sm font-bold text-white">80% Verified</p>
              </div>
            </div>
          </div>

          {/* Form Fields inside Master Card */}
          <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800/60 space-y-6 relative z-10">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-xs font-mono uppercase text-amber-400">PERSONAL SPECIFICATIONS MANAGEMENT</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-3.5 py-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold rounded-xl border border-amber-500/30 transition-colors flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel Edit' : 'Edit Master Profile'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">FULL NAME</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400">EMAIL ADDRESS</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70"
                />
              </div>
            </div>

            {isEditing && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase rounded-xl shadow-lg shadow-amber-400/20"
                >
                  Save Master Profile
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountProfileInformation20;
