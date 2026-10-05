import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, ArrowRight, Home, Briefcase, Warehouse } from 'lucide-react';

export function ShippingAddress3({ data }: { data?: any }) {
  const [street, setStreet] = useState('555 Mission Street, Apt 12B');
  const [city, setCity] = useState('San Francisco');
  const [stateZip, setStateZip] = useState('CA 94105');
  const [locationType, setLocationType] = useState('home');

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-xl">
        {/* Milestone Stepper */}
        <div className="mb-10 relative">
          <div className="flex items-center justify-between relative z-10 max-w-lg mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-bold text-xs flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs text-slate-400">Cart Identification</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="w-9 h-9 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-lg shadow-emerald-500/20"
              >
                2
              </motion.div>
              <span className="text-xs font-semibold text-emerald-400">Shipping Location</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-slate-400 font-medium text-xs flex items-center justify-center">
                3
              </div>
              <span className="text-xs text-slate-400">Payment Method</span>
            </div>
          </div>

          <div className="absolute top-4 left-0 w-full flex justify-center px-24 pointer-events-none">
            <svg className="w-full h-1 overflow-visible">
              <line x1="0" y1="0" x2="100%" y2="0" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
              <motion.line
                x1="0"
                y1="0"
                x2="50%"
                y2="0"
                stroke="#10b981"
                strokeWidth="2.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Location Type Selection Cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setLocationType('home')}
            className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
              locationType === 'home' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <Home className="w-4 h-4" />
            <span className="text-xs font-semibold">Residential</span>
          </button>
          <button
            type="button"
            onClick={() => setLocationType('office')}
            className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
              locationType === 'office' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-xs font-semibold">Office HQ</span>
          </button>
          <button
            type="button"
            onClick={() => setLocationType('warehouse')}
            className={`p-3 rounded-2xl border text-center transition flex flex-col items-center gap-1.5 ${
              locationType === 'warehouse' ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
            }`}
          >
            <Warehouse className="w-4 h-4" />
            <span className="text-xs font-semibold">Hub Locker</span>
          </button>
        </div>

        {/* Input Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Street Address</label>
            <div className="relative">
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-11 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
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
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">State & ZIP Code</label>
              <input
                type="text"
                value={stateZip}
                onChange={(e) => setStateZip(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
              <Check className="w-4 h-4" /> Milestone Location Verified
            </span>
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2">
              Proceed <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingAddress3;