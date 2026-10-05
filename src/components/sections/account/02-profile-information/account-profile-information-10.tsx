import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, ChevronRight, ChevronLeft, Edit3, Save } from 'lucide-react';

export function AccountProfileInformation10() {
  const [activeTab, setActiveTab] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
    gender: 'Female',
  });

  const tabs = [
    { title: 'Personal Identity', field: 'fullName', val: profile.fullName, desc: 'Primary legal name on account' },
    { title: 'Contact Email', field: 'email', val: profile.email, desc: 'Used for order notifications' },
    { title: 'Phone Number', field: 'phone', val: profile.phone, desc: 'Used for SMS shipping updates' },
    { title: 'Date of Birth', field: 'dob', val: profile.dob, desc: 'Birthday surprise rewards' },
  ];

  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              REACT BITS INFINITE MENU INSPIRATION
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">Horizontal Interactive Profile</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-xl text-xs font-semibold border border-cyan-500/30 hover:bg-cyan-500/30 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'Cancel' : 'Edit Selected'}
          </button>
        </div>

        {/* Horizontal Slide Selector Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>0{idx + 1}.</span>
              <span>{tab.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Selected Horizontal Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-slate-900/80 p-8 rounded-3xl border border-slate-800 space-y-6"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase">{tabs[activeTab].title} Details</span>

          <div className="space-y-2">
            <label className="text-xs text-slate-400">{tabs[activeTab].desc}</label>
            {isEditing ? (
              <input
                type="text"
                value={tabs[activeTab].val}
                onChange={(e) => setProfile({ ...profile, [tabs[activeTab].field]: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-lg font-bold text-white focus:outline-none focus:border-cyan-400"
              />
            ) : (
              <div className="text-3xl font-extrabold text-white">{tabs[activeTab].val}</div>
            )}
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <button
              disabled={activeTab === 0}
              onClick={() => setActiveTab(activeTab - 1)}
              className="text-xs text-slate-400 hover:text-white disabled:opacity-30 flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              disabled={activeTab === tabs.length - 1}
              onClick={() => setActiveTab(activeTab + 1)}
              className="text-xs text-cyan-400 hover:text-cyan-300 disabled:opacity-30 flex items-center gap-1 font-semibold"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AccountProfileInformation10;
