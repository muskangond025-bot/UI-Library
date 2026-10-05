import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const magRevealText: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } }
};

const magRevealAvatar: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2, ease: 'easeInOut' } }
};

export function AccountProfileInformation18() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
  });

  return (
    <div className="w-full bg-[#0d0d0f] text-neutral-100 p-8 md:p-16 min-h-[720px] flex items-center font-serif">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Magazine Masthead */}
        <div className="border-b border-neutral-800 pb-6 flex justify-between items-end">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase">
              ISSUE N° 12 • PROFILE FEATURE
            </span>
            <h1 className="text-4xl md:text-6xl text-white tracking-tight">THE PROFILE DIGEST</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-mono uppercase text-amber-400 hover:underline"
          >
            {isEditing ? '[ CANCEL ]' : '[ EDIT PROFILE ]'}
          </button>
        </div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            variants={magRevealText}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono text-neutral-400">PATRON SPECIFICATIONS</span>
            <h2 className="text-3xl md:text-4xl text-white leading-snug">
              Alex Morgan,<br />
              <span className="italic text-neutral-400 font-light">Product Designer & Patron</span>
            </h2>

            <div className="space-y-4 font-sans pt-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">FULL NAME</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.fullName}
                    onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2 text-sm text-white"
                  />
                ) : (
                  <div className="text-lg font-serif text-white">{profile.fullName}</div>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-neutral-400">EMAIL ADDRESS</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2 text-sm text-white"
                  />
                ) : (
                  <div className="text-lg font-serif text-white">{profile.email}</div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={magRevealAvatar}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-4"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=350&q=80"
              alt={profile.fullName}
              className="w-full h-80 object-cover rounded-3xl border border-neutral-800 shadow-2xl"
            />
            <span className="text-xs font-mono text-neutral-500 block text-center">
              FIG. 01 — VERIFIED IDENTITY PORTRAIT
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation18;
