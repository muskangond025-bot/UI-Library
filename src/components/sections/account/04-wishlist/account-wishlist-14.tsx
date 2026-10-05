import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function AccountWishlist14() {
  const steps = [
    { period: 'Saved Today', name: 'Nike Air Max 270', price: '$150' },
    { period: 'Saved Last Week', name: 'Oversized Denim Jacket', price: '$120' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Save Chronology</h2>

        <div className="relative pl-8 space-y-8 border-l-2 border-rose-500/30 ml-4">
          {steps.map((step) => (
            <div key={step.period} className="relative">
              <div className="absolute -left-[41px] top-1 p-2 rounded-full bg-rose-600 text-white">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
                <span className="text-xs uppercase font-bold text-rose-400">{step.period}</span>
                <h3 className="text-xl font-bold text-white mt-1">{step.name}</h3>
                <p className="text-sm font-bold text-slate-300 mt-1">{step.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountWishlist14;
