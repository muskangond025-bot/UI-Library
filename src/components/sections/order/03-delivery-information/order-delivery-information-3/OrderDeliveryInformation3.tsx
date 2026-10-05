import React from 'react';
import { motion } from 'framer-motion';
import { PackageCheck, Truck, Copy, ExternalLink, Calendar, MapPin } from 'lucide-react';

export function OrderDeliveryInformation3() {
  const [copied, setCopied] = React.useState(false);
  const trackId = "DH-TRK-28491";

  const handleCopy = () => {
    navigator.clipboard.writeText(trackId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full bg-slate-950 text-white py-10 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
        >
          {/* Card Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/20">
                <PackageCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Delivery Details</h3>
                <p className="text-xs text-slate-400">Order #849202 • Standard Ground</p>
              </div>
            </div>
            <div className="bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-3">
              <span className="text-xs text-slate-400">Tracking:</span>
              <span className="font-mono font-bold text-indigo-400 text-sm">{trackId}</span>
              <motion.button whileTap={{ scale: 0.9 }} onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                <Copy className="w-3.5 h-3.5" />
              </motion.button>
              {copied && <span className="text-[10px] text-emerald-400 font-mono">Copied!</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-b border-slate-800">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Expected Arrival</span>
                  <p className="text-lg font-semibold text-white">12–15 October, 2026</p>
                  <p className="text-xs text-emerald-400">On Schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Carrier & Speed</span>
                  <p className="text-base font-medium text-slate-200">DripExpress Ground</p>
                  <p className="text-xs text-slate-400">Estimated 3–5 Business Days</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-slate-400 block">Destination Summary</span>
                  <p className="text-base font-medium text-slate-200">San Francisco Hub</p>
                  <p className="text-xs text-slate-400">742 Evergreen Terrace, SF, CA</p>
                </div>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-lg border border-slate-800">
                <span className="text-xs text-slate-400 block">Special Handling</span>
                <p className="text-xs text-slate-300 font-medium mt-0.5">Contactless Delivery • Gate Code #4920</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex justify-between items-center text-xs">
            <span className="text-slate-400">Need changes? Update before dispatch.</span>
            <button className="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">
              Tracking Portal <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation3;
