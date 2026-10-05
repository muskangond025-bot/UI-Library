import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Edit3, Save, Zap } from 'lucide-react';

export function AccountProfileInformation19() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
  });

  return (
    <div className="w-full bg-[#07090e] text-cyan-100 p-8 md:p-14 min-h-[700px] flex items-center">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Digital Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/90 p-6 rounded-3xl border border-cyan-500/30">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl border border-cyan-500/30">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                FUTURE DIGITAL IDENTITY SYSTEM
              </span>
              <h1 className="text-2xl font-bold text-white">Digital Profile Interface</h1>
            </div>
          </div>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded-xl text-xs font-mono border border-cyan-500/30 transition-colors flex items-center gap-1.5"
          >
            <Edit3 className="w-3.5 h-3.5" /> {isEditing ? 'ABORT EDIT' : 'EDIT DIGITAL DATA'}
          </button>
        </div>

        {/* Digital Grid Cards */}
        <div className="bg-slate-900/60 p-8 rounded-3xl border border-cyan-500/20 space-y-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'DIGITAL IDENTITY NAME', field: 'fullName', val: profile.fullName },
              { label: 'AUTHENTICATED EMAIL', field: 'email', val: profile.email },
              { label: 'ENCRYPTED PHONE', field: 'phone', val: profile.phone },
              { label: 'CHRONO DATE OF BIRTH', field: 'dob', val: profile.dob },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-cyan-400 tracking-wider block">{item.label}</span>
                {isEditing ? (
                  <input
                    type="text"
                    value={item.val}
                    onChange={(e) => setProfile({ ...profile, [item.field]: e.target.value })}
                    className="w-full bg-slate-900 border border-cyan-500/40 rounded-xl px-3 py-1.5 text-sm text-white focus:outline-none"
                  />
                ) : (
                  <div className="text-base font-mono font-bold text-white">{item.val}</div>
                )}
              </div>
            ))}
          </div>

          {isEditing && (
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono font-bold text-xs rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-1.5"
              >
                <Save className="w-4 h-4" /> COMMIT DIGITAL DATA
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountProfileInformation19;
