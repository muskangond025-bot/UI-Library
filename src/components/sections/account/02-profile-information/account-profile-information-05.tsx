import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const lineRevealVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
};

export function AccountProfileInformation5() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
  });

  return (
    <div className="w-full bg-white text-black p-8 md:p-16 min-h-[700px] flex items-center font-sans">
      <div className="max-w-4xl mx-auto w-full space-y-10">
        <div className="flex justify-between items-end">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              02 / MINIMAL PROFILE
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-black tracking-tight">
              PERSONAL DETAILS
            </h1>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-xs font-mono uppercase tracking-wider underline hover:text-neutral-600 transition-colors"
          >
            {isEditing ? '[ CANCEL ]' : '[ EDIT DATA ]'}
          </button>
        </div>

        <motion.div
          variants={lineRevealVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-px bg-black origin-left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { label: 'FULL NAME', field: 'fullName', val: profile.fullName },
            { label: 'EMAIL ADDRESS', field: 'email', val: profile.email },
            { label: 'PHONE NUMBER', field: 'phone', val: profile.phone },
            { label: 'DATE OF BIRTH', field: 'dob', val: profile.dob },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <span className="text-[10px] font-mono text-neutral-400 tracking-wider block">{item.label}</span>
              {isEditing ? (
                <input
                  type="text"
                  value={item.val}
                  onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                  className="w-full text-xl font-light border-b border-black py-1 focus:outline-none bg-transparent"
                />
              ) : (
                <div className="text-xl font-light text-black tracking-tight">{item.val}</div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          variants={lineRevealVariants}
          initial="hidden"
          animate="visible"
          className="w-full h-px bg-neutral-200 origin-left"
        />

        {isEditing && (
          <div className="flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-3 bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              SAVE CHANGES
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountProfileInformation5;
