import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { User, Mail, Phone, Calendar, Camera, Check, ArrowRight, X } from 'lucide-react';

const clipHeaderVariants: Variants = {
  hidden: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)', opacity: 0 },
  visible: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' }
  }
};

const formRevealVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.3, ease: 'easeInOut' }
  }
};

export function AccountProfileInformation1() {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '+1 (555) 234-5678',
    dob: '1995-08-14',
    gender: 'Female',
    bio: 'Product Designer & Ecommerce Enthusiast based in New York.',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="w-full bg-stone-950 text-stone-100 p-8 md:p-16 min-h-[720px] flex items-center font-serif">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        {/* Editorial Header with Clip-Path Reveal */}
        <div className="border-b border-stone-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              EDITORIAL PROFILE DOSSIER
            </span>
            <motion.div variants={clipHeaderVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl md:text-6xl font-normal text-white tracking-tight leading-none">
                PERSONAL IDENTITY <br />
                <span className="italic font-light text-stone-400">& PROFILE INFORMATION</span>
              </h1>
            </motion.div>
          </div>

          <div className="flex items-center gap-3">
            {saved && (
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <Check className="w-4 h-4" /> Changes Saved
              </span>
            )}
            {!isEditing ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-stone-100 text-stone-950 font-sans font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all flex items-center gap-2 group"
              >
                <span>Edit Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            ) : (
              <button
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 bg-stone-900 border border-stone-700 text-stone-300 font-sans text-xs rounded-full hover:bg-stone-800 transition-colors flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" /> Cancel
              </button>
            )}
          </div>
        </div>

        {/* Editorial Form Layout */}
        <motion.form
          onSubmit={handleSave}
          variants={formRevealVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start font-sans"
        >
          {/* Avatar Column */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 p-6 bg-stone-900/60 rounded-3xl border border-stone-800">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt={formData.fullName}
                className="w-32 h-32 rounded-full object-cover ring-2 ring-amber-400/40 shadow-2xl"
              />
              {isEditing && (
                <button
                  type="button"
                  className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="w-6 h-6" />
                </button>
              )}
            </div>
            <div>
              <h3 className="text-xl font-serif text-white">{formData.fullName}</h3>
              <p className="text-xs text-stone-400">{formData.email}</p>
            </div>
          </div>

          {/* Form Fields Column */}
          <div className="lg:col-span-8 space-y-6 bg-stone-900/40 p-8 rounded-3xl border border-stone-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-stone-400">Full Name</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-stone-400">Email Address</label>
                <input
                  type="email"
                  disabled={!isEditing}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-stone-400">Phone Number</label>
                <input
                  type="text"
                  disabled={!isEditing}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-stone-400">Date of Birth</label>
                <input
                  type="date"
                  disabled={!isEditing}
                  value={formData.dob}
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-stone-400">Bio / Personal Note</label>
              <textarea
                rows={3}
                disabled={!isEditing}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full bg-stone-950 border border-stone-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-400 disabled:opacity-70 transition-colors"
              />
            </div>

            {isEditing && (
              <div className="pt-4 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-400/20"
                >
                  Save Dossier Changes
                </motion.button>
              </div>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  );
}

export default AccountProfileInformation1;
