import React from 'react';
import { Activity, MessageSquare, Phone, ShieldCheck, Clock, CheckCircle2, Zap } from 'lucide-react';

export const SupportInformation4: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple-950 via-slate-900 to-black text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3 bg-purple-500/20 text-purple-300 border border-purple-400/30 backdrop-blur-md">
            SPATIAL SUPPORT BENTO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
            Spatial Support & Status Bento
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto opacity-80">
            Live system status monitors, active incident resolution timelines, and chat queues
          </p>
        </div>

        {/* STRUCTURAL SPATIAL BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* TILE 1: SYSTEM UPTIME MONITOR */}
          <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                SYSTEM HEALTH: 99.99%
              </span>
              <span className="text-xs font-mono text-emerald-400">OPERATIONAL</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Live Support Telemetry</h3>
              <p className="text-xs text-slate-400 mb-6">Real-time status of payment gateways, API clusters, & support bots.</p>
              
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">API Gateway</span>
                  <span className="text-sm font-bold text-emerald-400">Operational</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Billing Node</span>
                  <span className="text-sm font-bold text-emerald-400">Operational</span>
                </div>
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Support Chat</span>
                  <span className="text-sm font-bold text-purple-400">12 Agents Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* TILE 2: INSTANT LIVE CHAT LAUNCHER */}
          <div className="bg-gradient-to-br from-purple-900/60 to-indigo-950/80 backdrop-blur-xl border border-purple-400/40 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Instant Live Chat</h3>
              <p className="text-xs text-purple-200">Connect with a senior agent in under 20 seconds.</p>
            </div>
            <button className="w-full mt-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-bold text-xs rounded-2xl transition-all shadow-lg shadow-purple-500/30">
              Launch Live Chat
            </button>
          </div>

          {/* TILE 3: PHONE HOTLINE DESK */}
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Phone Desk</h3>
              <p className="text-xs text-slate-400">+1 (800) 555-0199</p>
            </div>
            <a href="tel:+18005550199" className="w-full mt-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-center font-bold text-xs rounded-2xl transition-all">
              Call Hotline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
