import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DoorOpen, Bell, Check } from 'lucide-react';

export function OrderDeliveryInformation13() {
  const [leaveAtDoor, setLeaveAtDoor] = useState(true);
  const [ringBell, setRingBell] = useState(false);

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">Courier Instructions</span>
            <h2 className="text-2xl font-bold text-white">Delivery Info & Drop Preferences</h2>
          </div>
          <div className="bg-slate-900 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 border border-slate-800">
            REF: DH-TRK-28491
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Info */}
          <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <span className="text-xs text-slate-400 uppercase font-mono">Carrier & ETA</span>
            <h3 className="text-2xl font-bold text-white">Oct 12–15, 2026</h3>
            <p className="text-xs text-violet-400 font-medium">DripExpress Standard Ground (3-5 Days)</p>
            <p className="text-xs text-slate-400">Destination: 742 Evergreen Terrace, San Francisco, CA</p>
          </div>

          {/* Preferences */}
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl">
            <span className="text-xs text-slate-400 uppercase font-mono">Drop Preferences</span>

            <div
              onClick={() => setLeaveAtDoor(!leaveAtDoor)}
              className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                leaveAtDoor ? 'bg-violet-950/40 border-violet-500/50' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <DoorOpen className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Leave at Front Door</p>
                  <p className="text-xs text-slate-400">Contactless drop authorized</p>
                </div>
              </div>
              {leaveAtDoor && <Check className="w-4 h-4 text-violet-400" />}
            </div>

            <div
              onClick={() => setRingBell(!ringBell)}
              className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                ringBell ? 'bg-violet-950/40 border-violet-500/50' : 'bg-slate-950 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-violet-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Ring Doorbell</p>
                  <p className="text-xs text-slate-400">Notify upon arrival</p>
                </div>
              </div>
              {ringBell && <Check className="w-4 h-4 text-violet-400" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation13;
