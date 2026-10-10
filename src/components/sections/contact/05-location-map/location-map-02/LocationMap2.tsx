import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Search, Layers, Compass, CheckCircle2 } from 'lucide-react';

export const LocationMap2: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState(false);

  const locations = [
  {
    "id": 1,
    "name": "SoHo Innovation Flagship",
    "city": "New York, USA",
    "coords": "40.7251° N, 74.0021° W",
    "status": "Open Now",
    "address": "452 Spring Street, NY 10012",
    "phone": "+1 (212) 555-0192",
    "hours": "10 AM - 8 PM"
  },
  {
    "id": 2,
    "name": "Mayfair Executive Lounge",
    "city": "London, UK",
    "coords": "51.5123° N, 0.1432° W",
    "status": "Open Now",
    "address": "18 Conduit Street, W1S 2XN",
    "phone": "+44 20 7946 0912",
    "hours": "10 AM - 7 PM"
  },
  {
    "id": 3,
    "name": "Ginza Spatial Lab",
    "city": "Tokyo, Japan",
    "coords": "35.6712° N, 139.7651° E",
    "status": "Closing Soon",
    "address": "6-10-1 Ginza, Chuo-ku",
    "phone": "+81 3 5555 0143",
    "hours": "11 AM - 9 PM"
  },
  {
    "id": 4,
    "name": "Le Marais Art Outpost",
    "city": "Paris, France",
    "coords": "48.8576° N, 2.3578° E",
    "status": "Open Now",
    "address": "34 Rue Vieille du Temple",
    "phone": "+33 1 42 68 55 00",
    "hours": "10:30 AM - 7:30 PM"
  }
];
  const current = locations.find(l => l.id === activeId) || locations[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-blue-50/60 text-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-indigo-100 text-indigo-700 border border-indigo-200">
            FLOATING GLASS PLANNER
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Floating Card Route Planner
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Turn-by-turn route planner with floating glass control card & landmark indicators
          </p>
        </div>

        {/* DRIBBLE FULL-BLEED MAP WITH OVERLAY GLASS CARD */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl h-[580px] bg-slate-900 flex items-center justify-center">
          {/* SIMULATED MAP VECTOR CANVAS */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 1000 600" fill="none">
            <path d="M 100 200 Q 300 100 600 300 T 900 400" stroke="#818cf8" strokeWidth="4" strokeDasharray="8 8" />
            <circle cx="600" cy="300" r="16" fill="#4f46e5" opacity="0.6" className="animate-ping" />
            <circle cx="600" cy="300" r="8" fill="#4f46e5" />
          </svg>

          {/* FLOATING DRIBBLE CONTROL GLASS CARD */}
          <div className="absolute top-6 left-6 z-20 w-full max-w-sm bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-xl space-y-4 text-slate-800">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search outpost..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
              {locations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => setActiveId(loc.id)}
                  className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                    activeId === loc.id
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{loc.name}</span>
                    <span className="text-[10px] opacity-80">{loc.city}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200/80 space-y-2 text-xs">
              <p className="flex items-center gap-2 text-slate-600 font-medium">
                <MapPin className="w-4 h-4 text-indigo-600" />
                {current.address}
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-indigo-600" />
                {current.phone}
              </p>
              <p className="flex items-center gap-2 text-slate-600">
                <Clock className="w-4 h-4 text-indigo-600" />
                {current.hours}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <MapPin className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(current.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Navigate</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
