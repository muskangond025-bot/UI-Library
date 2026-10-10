import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Layers, Sparkles } from 'lucide-react';

export const LocationMap4: React.FC = () => {
  const [selected, setSelected] = useState(0);
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

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-950 via-slate-900 to-black text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-purple-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-md">
            FROSTED BENTO MAP
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Multi-City Bento Map Hub
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Frosted bento spatial layout embedding multi-city interactive map modules with layer toggles
          </p>
        </div>

        {/* BENTO SPATIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`rounded-3xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden min-h-[300px] ${
                selected === idx
                  ? 'bg-purple-900/40 border-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.25)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-purple-500/50'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2.5 py-1 rounded-full">
                    {loc.city}
                  </span>
                  <span className="text-xs font-mono text-emerald-400">{loc.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{loc.name}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  {loc.address}
                </p>
              </div>

              {/* SIMULATED ISOMETRIC RADAR PREVIEW */}
              <div className="my-6 h-28 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                <Compass className="w-8 h-8 text-purple-400 animate-spin-slow opacity-80" />
                <span className="text-[10px] font-mono text-purple-300 absolute bottom-2 left-3">{loc.coords}</span>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400 font-mono">{loc.phone}</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
