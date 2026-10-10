import React, { useState } from 'react';
import { Headphones, MessageSquare, Mail, Phone, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

export const SupportInformation11: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-rose-50/50 text-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-rose-100 text-rose-700 border border-rose-200">
            3D CLAY SUPPORT
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            3D Soft Clay Support Outposts
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Soft tactile 3D elements with direct WhatsApp, Email & Phone triggers
          </p>
        </div>

        {/* STRUCTURAL CARD DECK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-indigo-600/30">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Live Chat</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Talk to our live support team 24/7 for instant query resolution.</p>
            </div>
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2">
              <span>Start Live Chat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Toll-Free Hotline</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Direct hotline access for VIP customers & critical escalations.</p>
            </div>
            <a href="tel:+18005550199" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2">
              <span>Call Hotline</span>
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email Ticketing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Submit complex technical issues and receive updates within 4 hours.</p>
            </div>
            <button className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm rounded-2xl transition-colors flex items-center justify-center gap-2">
              <span>Submit Ticket</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
