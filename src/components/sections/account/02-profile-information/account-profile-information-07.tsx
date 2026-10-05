import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, Edit3, Save } from 'lucide-react';

const svgPathVariants: Variants = {
  hidden: { pathLength: 0 },
  visible: { pathLength: 1, transition: { duration: 1.5, ease: 'easeInOut' } }
};

export function AccountProfileInformation7() {
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
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">TIMELINE STRUCTURE</span>
            <h1 className="text-3xl font-bold text-white mt-1">Profile Timeline Dossier</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 rounded-xl text-xs font-semibold border border-indigo-500/30 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Timeline'}
          </button>
        </div>

        <div className="relative bg-slate-900/60 p-8 md:p-12 rounded-3xl border border-slate-800">
          {/* Vertical SVG Line */}
          <div className="absolute left-10 md:left-14 top-12 bottom-12 w-0.5 bg-slate-800">
            <svg className="w-full h-full overflow-visible">
              <motion.line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="#6366f1"
                strokeWidth="2"
                variants={svgPathVariants}
                initial="hidden"
                animate="visible"
              />
            </svg>
          </div>

          <div className="space-y-8 pl-10 md:pl-14 relative z-10">
            {[
              { label: 'FULL NAME', field: 'fullName', val: profile.fullName, icon: User },
              { label: 'EMAIL ADDRESS', field: 'email', val: profile.email, icon: Mail },
              { label: 'PHONE NUMBER', field: 'phone', val: profile.phone, icon: Phone },
              { label: 'GENDER', field: 'gender', val: profile.gender, icon: Calendar },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[51px] md:-left-[67px] top-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center text-indigo-400">
                    <Icon className="w-3 h-3" />
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{step.label}</span>
                    {isEditing ? (
                      <input
                        type="text"
                        value={step.val}
                        onChange={(e) => setProfile({ ...profile, [step.field]: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    ) : (
                      <div className="text-base font-bold text-white">{step.val}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {isEditing && (
            <div className="pt-6 flex justify-end">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" /> Save Timeline Details
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation7;
