import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Crown, Sparkles, Shield, Edit3, Save } from 'lucide-react';

const darkCardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

export function AccountProfileInformation11() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    gender: 'Female',
  });

  return (
    <div className="w-full bg-[#0a0a0c] text-slate-100 p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        {/* Luxury Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-amber-500/20 pb-8">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt={profile.fullName}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-amber-500/50 shadow-2xl"
              />
              <span className="absolute -bottom-1 -right-1 bg-amber-500 text-black p-1 rounded-full">
                <Crown className="w-3.5 h-3.5" />
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
                LUXURY PRIVATE CLIENT
              </span>
              <h1 className="text-3xl font-serif text-white tracking-tight">{profile.fullName}</h1>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold rounded-full tracking-wider uppercase transition-all"
          >
            {isEditing ? 'Cancel Edit' : 'Edit Dossier'}
          </button>
        </div>

        {/* Layered Luxury Profile Card */}
        <motion.div
          variants={darkCardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-b from-[#141418] to-[#0d0d10] p-8 rounded-3xl border border-amber-500/20 shadow-2xl space-y-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
            {[
              { label: 'PATRON NAME', field: 'fullName', val: profile.fullName },
              { label: 'CONFIDENTIAL EMAIL', field: 'email', val: profile.email },
              { label: 'CONCIERGE PHONE', field: 'phone', val: profile.phone },
              { label: 'GENDER SPECIFICATION', field: 'gender', val: profile.gender },
            ].map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider text-amber-400/80">{item.label}</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.val}
                    onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                    className="w-full bg-[#0a0a0c] border border-amber-500/30 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                ) : (
                  <div className="text-lg font-serif text-white">{item.val}</div>
                )}
              </div>
            ))}
          </div>

          {isEditing && (
            <div className="flex justify-end pt-4 border-t border-slate-800 relative z-10">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/20"
              >
                Save Luxury Dossier
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default AccountProfileInformation11;
