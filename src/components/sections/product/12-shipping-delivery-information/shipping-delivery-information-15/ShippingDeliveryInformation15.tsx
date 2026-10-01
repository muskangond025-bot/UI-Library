import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, HeartHandshake } from 'lucide-react';

export default function ShippingDeliveryInformation15({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const facts = [
    { title: "100% On-Time Guarantee", desc: "Refunded shipping if delayed by 24h" },
    { title: "Zero Hidden Surcharges", desc: "All duties calculated upfront" },
    { title: "Eco-Linen Packaging", desc: "100% plastic-free recyclable materials" },
    { title: "Doorstep OTP Verification", desc: "Safe photo & code verified handover" }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'OUR COMMITMENT'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'The 100% Delivery Guarantee'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'On-time delivery, damage-free arrival, and zero hidden surcharge pledge.'}
          </p>
        </div>

        {/* Central Promise Badge & Surrounding Orbital Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Central Hero Promise Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-950 border-2 border-emerald-500 p-8 md:p-10 rounded-3xl text-center shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center min-h-[320px]"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mb-6 shadow-lg">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-snug">
              "Fast. Trackable. Carefully delivered."
            </h3>
            <p className="text-xs text-emerald-300/80 max-w-xs leading-relaxed">
              Back by our unconditional replacement or instant refund pledge.
            </p>
          </motion.div>

          {/* Surrounding Supporting Fact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facts.map((fact, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-slate-900 border border-slate-800 p-6 rounded-2xl"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{fact.title}</h4>
                <p className="text-xs text-slate-400">{fact.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
