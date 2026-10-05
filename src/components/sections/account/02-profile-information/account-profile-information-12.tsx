import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { User, Mail, Phone, Edit3, Save } from 'lucide-react';

export function AccountProfileInformation12() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
  });

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
    <div className="w-full bg-slate-950 text-white p-8 md:p-14 min-h-[700px] flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <div className="text-center space-y-2">
          <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-mono uppercase">
            CONTROLLED 3D PERSPECTIVE
          </span>
          <h1 className="text-3xl font-bold text-white">3D Interactive Profile Card</h1>
        </div>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="bg-slate-900/90 rounded-3xl p-8 border border-cyan-500/30 shadow-2xl space-y-6 relative overflow-hidden"
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt={profile.fullName}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-400/40"
              />
              <div>
                <h2 className="text-xl font-bold text-white">{profile.fullName}</h2>
                <p className="text-xs text-slate-400">{profile.email}</p>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded-xl text-xs font-semibold border border-cyan-500/30 transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit 3D Card'}
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              ) : (
                <div className="text-base font-bold text-white">{profile.fullName}</div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Email Address</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              ) : (
                <div className="text-base font-bold text-white">{profile.email}</div>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-400">Phone Number</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              ) : (
                <div className="text-base font-bold text-white">{profile.phone}</div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountProfileInformation12;
