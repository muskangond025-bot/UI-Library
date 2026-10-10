import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Clock, Sparkles, ExternalLink, ChevronRight, CheckCircle2, Search } from 'lucide-react';

export function StoreLocations19({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [selectedCity, setSelectedCity] = useState(0);

  const stores = [
    { city: 'San Francisco', name: 'Flagship Spatial Hub', address: '500 Howard St, Suite 400', hours: '9am - 8pm PST', phone: '+1 (415) 555-0199', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80' },
    { city: 'New York', name: 'SoHo Design Gallery', address: '120 Spring St, SoHo', hours: '10am - 9pm EST', phone: '+1 (212) 555-0142', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80' },
    { city: 'London', name: 'Mayfair Boutique', address: '42 Bond St, Mayfair', hours: '10am - 7pm GMT', phone: '+44 20 7946 0912', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80' },
    { city: 'Tokyo', name: 'Ginza Innovation Tower', address: '6-10-1 Ginza, Chuo City', hours: '11am - 8pm JST', phone: '+81 3 5555 0188', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F0FDF4] text-slate-900 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center">
          <div className="px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full flex items-center gap-2.5 text-xs font-mono font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 animate-pulse" />
            STORE LOCATIONS #19 • APPOINTMENT PICKER
          </div>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            {settings.title || 'PASTEL MINT STORE PICKUP BOOKING'}
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-wider uppercase opacity-80 font-bold">
            Appointment Picker • STRUCTURAL RETAIL SHOWCASE
          </p>
        </div>

        {/* Dynamic Structural Layout per Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left City Switcher */}
          <div className="lg:col-span-5 space-y-4">
            {stores.map((st, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedCity(idx)}
                whileHover={{ x: 6 }}
                className={`p-6 rounded-3xl border transition-all cursor-pointer ${
                  selectedCity === idx
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-xl'
                    : 'bg-white/40 border-gray-200/80 hover:bg-white/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="text-lg font-bold font-mono">{st.city}</div>
                      <div className="text-xs opacity-80">{st.name}</div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${selectedCity === idx ? 'rotate-90' : ''}`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Selected Store Detail Display */}
          <motion.div
            key={selectedCity}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border-2 border-gray-200/80 shadow-2xl group flex flex-col justify-end p-8"
          >
            <img
              src={stores[selectedCity].img}
              alt={stores[selectedCity].city}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="relative z-10 text-white space-y-4">
              <div>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-mono font-bold uppercase">
                  OPEN NOW • {stores[selectedCity].hours}
                </span>
                <h3 className="text-3xl font-black mt-2">{stores[selectedCity].city} Flagship</h3>
                <p className="text-sm font-mono opacity-80">{stores[selectedCity].address}</p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button className="px-6 py-3 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg">
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </button>
                <button className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/40 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white/30 transition-all">
                  <Phone className="w-4 h-4" />
                  <span>{stores[selectedCity].phone}</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
