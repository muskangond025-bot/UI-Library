import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export function OrderDeliveryInformation16() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ rotateX: 15, rotateY: -10, opacity: 0 }}
          whileInView={{ rotateX: 0, rotateY: 0, opacity: 1 }}
          viewport={{ once: false }}
          whileHover={{ rotateX: 5, rotateY: -5 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6"
        >
          <div className="flex justify-between items-center border-b border-slate-800 pb-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/20">
                <Box className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">3D Parcel Manifest</span>
                <h3 className="text-2xl font-bold text-white">Express Shipment</h3>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-slate-400 block">TRACKING ID</span>
              <span className="font-mono text-sm font-bold text-blue-400">DH-TRK-28491</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Estimated Arrival</span>
              <p className="text-2xl font-extrabold text-white">12–15 OCT</p>
              <p className="text-xs text-emerald-400 mt-1">DripExpress Ground (3-5 Days)</p>
            </div>
            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 uppercase font-mono block mb-1">Destination</span>
              <p className="text-base font-bold text-white">San Francisco, CA</p>
              <p className="text-xs text-slate-400 mt-1">742 Evergreen Terrace</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation16;
