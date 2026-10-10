import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, ZoomIn, ZoomOut, Share2, CheckCircle2, ShieldCheck } from 'lucide-react';

export const LocationMap20: React.FC = () => {
  const [activeId, setActiveId] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
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

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(current.coords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-stone-950 via-amber-950/20 to-black text-amber-50 border-amber-500/30 border transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-amber-500/10 text-amber-300 border border-amber-500/40">
            VIP EXECUTIVE CONCIERGE
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            VIP Concierge Executive Navigation Map
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Private chauffeur & helicopter pad coordinates map for executive arrivals
          </p>
        </div>

        {/* MAP CONTAINER & INTERACTIVE CONTROLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LOCATION SELECTOR LIST */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">Selected Pinpoints</h3>
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveId(loc.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  activeId === loc.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base">{loc.name}</h4>
                  <span className="text-xs opacity-75">{loc.status}</span>
                </div>
                <p className="text-xs mt-1 opacity-80">{loc.address}</p>
                <div className="text-[11px] font-mono mt-2 opacity-60 flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  {loc.coords}
                </div>
              </button>
            ))}
          </div>

          {/* SIMULATED VECTOR MAP STAGE */}
          <div className="lg:col-span-8 bg-slate-900 rounded-3xl border border-slate-800 p-6 relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* VECTOR MAP SVG BACKGROUND */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel / 100})` }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 500" fill="none">
                <path d="M50 100 C 200 150, 400 50, 750 200 C 600 350, 300 400, 50 100 Z" stroke="#d97706" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="250" cy="180" r="12" fill="#d97706" opacity="0.4" />
                <circle cx="480" cy="280" r="18" fill="#d97706" opacity="0.3" />
                <circle cx="620" cy="140" r="10" fill="#d97706" opacity="0.5" />
              </svg>
            </div>

            {/* TOP FLOATING TOOLBAR */}
            <div className="relative z-10 flex items-center justify-between bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>GPS LOCK: {current.coords}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 15, 150))}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 15, 75))}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyCoords}
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Share Coords'}</span>
                </button>
              </div>
            </div>

            {/* CENTER MAP PINPOINT CARD */}
            <div className="relative z-10 my-auto text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 text-indigo-400 mb-4 border border-indigo-500/40 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{current.name}</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">{current.address}</p>
            </div>

            {/* BOTTOM NAV BAR */}
            <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Official Geolocation Verified
              </span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(current.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/30"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
