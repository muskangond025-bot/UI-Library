import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Warehouse, Hotel, MapPin, ArrowRight } from 'lucide-react';

export function ShippingAddress9({ data }: { data?: any }) {
  const [selectedMatrix, setSelectedMatrix] = useState('home');
  const [street, setStreet] = useState('200 Ocean Drive');
  const [city, setCity] = useState('Miami');
  const [zip, setZip] = useState('33139');

  const matrixItems = [
    { id: 'home', label: 'Home Villa', icon: Home },
    { id: 'work', label: 'Work HQ', icon: Briefcase },
    { id: 'locker', label: 'Parcel Locker', icon: Warehouse },
    { id: 'hotel', label: 'Concierge Hotel', icon: Hotel },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Location Type Matrix</h2>

        {/* 4-Way Location Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {matrixItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedMatrix === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMatrix(item.id)}
                className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between h-24 ${
                  isSelected ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400 ring-1 ring-emerald-500' : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-semibold">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="space-y-4 pt-2">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
              <MapPin className="w-4 h-4 text-slate-500 absolute left-4 top-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-400 transition"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress9;