import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export function OffersFeatured6() {
  const stripeDeals = [
    { title: 'Payment Terminal Pro', desc: 'Custom NFC payment processor hardware.', price: '$199', orig: '$299' },
    { title: 'Developer Keypad Hub', desc: 'Hot-swappable mechanical keypads.', price: '$89', orig: '$149' }
  ];

  return (
    <div className="w-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-purple-700 text-white p-8 sm:p-14 font-sans rounded-3xl relative overflow-hidden shadow-2xl">
      {/* Stripe-style ambient glowing shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <span className="px-4 py-1.5 bg-white/20 text-white border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 backdrop-blur-md">
            <Zap className="w-4 h-4 text-amber-300" /> STRIPE GRADIENT MESH CANVAS
          </span>
          <h2 className="text-4xl font-extrabold text-white">Stripe Mesh Featured Offers</h2>
          <p className="text-purple-100 text-sm max-w-md mx-auto">Vibrant multi-color fluid canvas with translucent feature cards</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stripeDeals.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20 flex flex-col justify-between h-80 shadow-2xl"
            >
              <div>
                <span className="text-[10px] font-mono text-amber-300 font-bold uppercase">MESH HIGHLIGHT #0{idx + 1}</span>
                <h3 className="font-extrabold text-2xl text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex justify-between items-end pt-6 border-t border-white/10">
                <div>
                  <div className="text-3xl font-black text-white">{item.price}</div>
                  <div className="text-xs text-purple-200 line-through">{item.orig}</div>
                </div>
                <button className="px-6 py-3 bg-white text-indigo-950 font-extrabold text-xs uppercase rounded-2xl hover:bg-amber-300 transition-colors flex items-center gap-1">
                  Claim <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OffersFeatured6;
