"use client";
import React from 'react';
import { ShieldCheck, Award, Lock, CheckCircle2 } from 'lucide-react';

export function GlobalTrustCertification5() {
  return (
    <section className="w-full py-20 px-6 bg-slate-50 text-slate-900 font-sans border-y border-slate-200">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">TRUST STRIP #5</span>
            <h2 className="text-2xl font-extrabold text-slate-950 mt-2">Enterprise Security Guarantees</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '256-Bit SSL Protection', icon: <Lock className="w-5 h-5 text-indigo-600" /> },
            { title: 'SOC-2 Type II Certified', icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> },
            { title: 'ISO 27001 Security Standard', icon: <Award className="w-5 h-5 text-indigo-600" /> },
            { title: '30-Day Money Back Guarantee', icon: <CheckCircle2 className="w-5 h-5 text-indigo-600" /> },
          ].map((b, idx) => (
            <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                {b.icon}
              </div>
              <span className="text-xs font-bold text-slate-900 leading-snug">{b.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}