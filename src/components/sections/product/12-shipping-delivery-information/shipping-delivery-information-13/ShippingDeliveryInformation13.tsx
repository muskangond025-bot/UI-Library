import React from 'react';
import { motion } from 'framer-motion';
import { Box, Shield, Gift, CheckCircle2 } from 'lucide-react';

export default function ShippingDeliveryInformation13({ data }: { data: any }) {
  const settings = data?.section?.settings || {};

  const layers = [
    { title: "01. Outer Eco-Armor", desc: "100% recycled heavy-gauge cardboard shield engineered to withstand 50kg external pressure." },
    { title: "02. Shock Absorption", desc: "Custom molded paper pulp cradle cradles product body preventing internal shift." },
    { title: "03. Moisture Lock", desc: "Hermetically sealed organic cotton sleeve protects against moisture during transit." },
    { title: "04. Unboxing Elegance", desc: "Bespoke ribbon tab for effortless, scratch-free unboxing." }
  ];

  return (
    <div className="w-full py-16 px-4 md:px-8 bg-slate-950 text-white rounded-3xl overflow-hidden relative border border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            {settings.eyebrow || 'ECO-PROTECTION'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {settings.title || 'Packaging & Protection Story'}
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {settings.description || 'Sustainable shock-proof materials engineered to protect delicate products during travel.'}
          </p>
        </div>

        {/* Sequential Layer Reveal Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {layers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 text-amber-400 mb-4">
                  <Shield className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold tracking-wider uppercase">LAYER SECURITY</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{layer.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-6 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>VERIFIED SUSTAINABLE</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
