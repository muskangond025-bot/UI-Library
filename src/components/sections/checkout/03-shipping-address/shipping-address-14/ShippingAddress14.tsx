import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ArrowRight, Check } from 'lucide-react';

export function ShippingAddress14({ data }: { data?: any }) {
  const [street, setStreet] = useState('100 Focus St');
  const [city, setCity] = useState('Boston');
  const [zip, setZip] = useState('02108');
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const fields = [
    { id: 0, label: 'Street Address', value: street, setter: setStreet, icon: MapPin },
    { id: 1, label: 'City Jurisdiction', value: city, setter: setCity, icon: Navigation },
    { id: 2, label: 'ZIP Zone', value: zip, setter: setZip, icon: Compass },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-slate-100 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-8">
          <div>
            <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-widest block mb-1">
              LOCATION PIN SYSTEM
            </span>
            <h2 className="text-xl font-bold text-white">Gliding Location Pin Focus</h2>
          </div>
          <span className="px-3 py-1 bg-lime-400/10 text-lime-400 border border-lime-400/20 text-xs font-semibold rounded-full flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Pin Row #{activeIdx + 1}
          </span>
        </div>

        <div className="space-y-6">
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
            <Check className="w-4 h-4" /> Map pin tracking active
          </span>
          <button className="px-6 py-3 bg-lime-400 hover:bg-lime-300 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress14;