import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, Camera, Sparkles, Check, Edit3, Save, ShieldCheck } from 'lucide-react';

const glassContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

const iconFloatingVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
};

export function AccountProfileInformation2() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
    gender: 'Female',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[700px] flex items-center relative overflow-hidden">
      {/* Ambient background Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto w-full space-y-8 relative z-10">
        {/* Glass Header */}
        <div className="flex justify-between items-center bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3">
            <motion.div variants={iconFloatingVariants} animate="animate" className="p-3 bg-cyan-500/20 text-cyan-300 rounded-2xl border border-cyan-500/30">
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <div>
              <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest">REACT BITS GLASS CONCEPT</span>
              <h1 className="text-2xl font-bold text-white">Glassmorphism Profile</h1>
            </div>
          </div>

          {!isEditing ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/40 transition-all flex items-center gap-2"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </motion.button>
          ) : (
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-slate-300 text-xs rounded-xl border border-white/10"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Glass Card Container */}
        <motion.form
          onSubmit={handleSave}
          variants={glassContainerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl space-y-8"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-white/10 pb-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80"
                alt={profile.fullName}
                className="w-24 h-24 rounded-2xl object-cover ring-2 ring-cyan-400/40 shadow-xl"
              />
              {isEditing && (
                <button type="button" className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center text-white">
                  <Camera className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-2xl font-bold text-white">{profile.fullName}</h2>
              <p className="text-xs text-slate-300">{profile.email}</p>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-mono border border-cyan-500/20">
                Verified Identity
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Full Name', field: 'fullName', val: profile.fullName, icon: User },
              { label: 'Email Address', field: 'email', val: profile.email, icon: Mail },
              { label: 'Phone Number', field: 'phone', val: profile.phone, icon: Phone },
              { label: 'Date of Birth', field: 'dob', val: profile.dob, icon: Calendar },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="space-y-2">
                  <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                    {item.label}
                  </label>
                  <input
                    type="text"
                    disabled={!isEditing}
                    value={item.val}
                    onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 disabled:opacity-70 transition-colors"
                  />
                </div>
              );
            })}
          </div>

          {isEditing && (
            <div className="flex justify-end pt-4 border-t border-white/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <Save className="w-4 h-4" /> Save Glass Profile
              </motion.button>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}

export default AccountProfileInformation2;
