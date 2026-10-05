import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Navigation, Compass } from 'lucide-react';

export function ShippingAddress4({ data }: { data?: any }) {
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [zip, setZip] = useState('97477');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 sm:p-12 text-neutral-100 shadow-2xl"
      >
        <div className="mb-10 flex justify-between items-end border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
              FLOATING LOCATION SYSTEM
            </span>
            <h2 className="text-2xl font-bold text-neutral-50">Delivery Destination</h2>
          </div>
          <span className="text-xs text-neutral-500 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-violet-400" /> Lat/Long Geocoded
          </span>
        </div>

        <div className="space-y-8">
          <div className="relative">
            <input
              type="text"
              id="street-input-4"
              value={street}
              onFocus={() => setFocusedField('street')}
              onBlur={() => setFocusedField(null)}
              onChange={(e) => setStreet(e.target.value)}
              className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              placeholder=" "
            />
            <label
              htmlFor="street-input-4"
              className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                street || focusedField === 'street'
                  ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                  : 'top-4 text-sm text-neutral-500'
              }`}
            >
              Street Address & Unit
            </label>
            <MapPin className="w-4 h-4 text-neutral-600 absolute right-5 top-5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="city-input-4"
                value={city}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setCity(e.target.value)}
                className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                placeholder=" "
              />
              <label
                htmlFor="city-input-4"
                className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                  city || focusedField === 'city'
                    ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                    : 'top-4 text-sm text-neutral-500'
                }`}
              >
                City Jurisdiction
              </label>
              <Navigation className="w-4 h-4 text-neutral-600 absolute right-5 top-5" />
            </div>

            <div className="relative">
              <input
                type="text"
                id="zip-input-4"
                value={zip}
                onFocus={() => setFocusedField('zip')}
                onBlur={() => setFocusedField(null)}
                onChange={(e) => setZip(e.target.value)}
                className="peer w-full bg-neutral-950 border border-neutral-800 rounded-2xl px-5 pt-6 pb-2 text-sm text-neutral-100 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
                placeholder=" "
              />
              <label
                htmlFor="zip-input-4"
                className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                  zip || focusedField === 'zip'
                    ? 'top-2 text-[10px] font-semibold text-violet-400 uppercase tracking-wider'
                    : 'top-4 text-sm text-neutral-500'
                }`}
              >
                Postal Code
              </label>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button className="w-full sm:w-auto px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-semibold text-xs rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-violet-600/25">
              <span>Confirm Location</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ShippingAddress4;