import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, Phone, ArrowRight, Check } from 'lucide-react';

export function CustomerInformation14({ data }: { data?: any }) {
  const [email, setEmail] = useState('logan.paul@example.com');
  const [name, setName] = useState('Logan Paul');
  const [phone, setPhone] = useState('+1 (555) 456-7890');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const fields = [
    { id: 0, label: 'Full Name', value: name, setter: setName, icon: User },
    { id: 1, label: 'Email Address', value: email, setter: setEmail, icon: Mail },
    { id: 2, label: 'Mobile Phone', value: phone, setter: setPhone, icon: Phone },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              FIELD FOCUS SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Interactive Customer Form</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full">
            Active Field #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-6 relative">
          {fields.map((field) => {
            const Icon = field.icon;
            const isActive = activeIdx === field.id;
            return (
              <div
                key={field.id}
                onFocus={() => setActiveIdx(field.id)}
                className={`p-4 rounded-2xl border transition-all duration-300 relative ${
                  isActive ? 'bg-slate-950 border-lime-400/80 shadow-lg shadow-lime-400/5' : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <label className="block text-xs font-semibold text-slate-400 mb-1.5">{field.label}</label>
                <div className="relative">
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => field.setter(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-100 focus:outline-none pl-8 py-1"
                  />
                  <Icon className={`w-4 h-4 absolute left-0 top-1.5 transition ${isActive ? 'text-lime-400' : 'text-slate-500'}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-lime-400 flex items-center gap-1 font-medium">
            <Check className="w-4 h-4" /> Real-time active focus tracking
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue Checkout <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerInformation14;