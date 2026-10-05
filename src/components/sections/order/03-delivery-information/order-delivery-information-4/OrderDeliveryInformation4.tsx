import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Truck, Check } from 'lucide-react';

export function OrderDeliveryInformation4() {
  const steps = [
    { title: 'Order Processed', date: 'Oct 12', done: true },
    { title: 'Package Dispatched', date: 'Oct 13', done: true },
    { title: 'In Transit', date: 'Oct 14', active: true },
    { title: 'Final Arrival', date: 'Oct 15', done: false },
  ];

  return (
    <section className="w-full bg-zinc-900 text-white py-10 px-4 sm:px-6 rounded-2xl border border-zinc-800 my-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Pane: Journey */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 bg-zinc-950/80 p-6 sm:p-8 rounded-2xl border border-zinc-800 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-zinc-100">Delivery Journey</h3>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                On Schedule
              </span>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-zinc-800">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[31px] top-0.5 w-4 h-4 rounded-full border-2 ${
                    step.active
                      ? 'bg-emerald-500 border-emerald-400 ring-4 ring-emerald-500/20'
                      : step.done
                      ? 'bg-emerald-400 border-emerald-400'
                      : 'bg-zinc-900 border-zinc-700'
                  }`}>
                    {step.done && <Check className="w-2.5 h-2.5 text-zinc-950 stroke-[3]" />}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${step.active ? 'text-emerald-400' : 'text-zinc-200'}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-zinc-500">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
            <span>Tracking Ref: <strong className="font-mono text-zinc-200">DH-TRK-28491</strong></span>
            <span>DripExpress Carrier</span>
          </div>
        </motion.div>

        {/* Right Pane: Information */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-zinc-800/80 flex flex-col justify-between shadow-xl"
        >
          <div>
            <span className="text-xs text-emerald-400 font-mono tracking-wider uppercase block mb-1">Expected Window</span>
            <h2 className="text-3xl font-extrabold text-white mb-6">12–15 October 2026</h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <Truck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Standard Express Ground</p>
                  <p className="text-xs text-zinc-400">Direct warehouse transit (3-5 business days)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Delivery Address</p>
                  <p className="text-xs text-zinc-400">742 Evergreen Terrace, San Francisco, CA 94107</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-200">Contactless Delivery Enabled</p>
                  <p className="text-xs text-zinc-400">Driver authorized to leave package at front door.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default OrderDeliveryInformation4;
