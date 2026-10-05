import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Edit3, Save } from 'lucide-react';

const leftReveal: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
};

const rightReveal: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
};

export function AccountProfileInformation14() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
  });

  return (
    <div className="w-full bg-[#0e0e11] text-neutral-100 p-8 md:p-16 min-h-[720px] flex items-center font-serif">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        <div className="border-b border-neutral-800 pb-6 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
              SPLIT EDITORIAL FORM
            </span>
            <h1 className="text-4xl md:text-5xl font-normal text-white">PATRON DOSSIER</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-mono uppercase tracking-wider text-amber-400 hover:underline"
          >
            {isEditing ? '[ CANCEL ]' : '[ EDIT DOSSIER ]'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Identity */}
          <motion.div
            variants={leftReveal}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-6 bg-neutral-900/60 p-8 rounded-3xl border border-neutral-800"
          >
            <span className="text-xs font-mono text-neutral-400 uppercase">01 / IDENTITY SPOTLIGHT</span>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt={profile.fullName}
              className="w-28 h-28 rounded-2xl object-cover ring-2 ring-amber-400/40"
            />
            <div>
              <h2 className="text-2xl font-serif text-white">{profile.fullName}</h2>
              <p className="text-xs text-neutral-400 mt-1 font-sans">{profile.email}</p>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            variants={rightReveal}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 bg-neutral-900/40 p-8 rounded-3xl border border-neutral-800 font-sans"
          >
            <span className="text-xs font-mono text-neutral-400 uppercase">02 / PERSONAL SPECIFICATIONS</span>

            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Full Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Email Address</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">Phone Number</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation14;
