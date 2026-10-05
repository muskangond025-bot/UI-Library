import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function AccountReviewsRatings3() {
  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-2 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.1, type: 'spring' }}>
              <Star className="w-10 h-10 fill-amber-400" />
            </motion.div>
          ))}
        </div>
        <h2 className="text-4xl font-extrabold text-white">5.0 OUT OF 5 STARS</h2>
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left">
          <h3 className="text-xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-slate-300 text-sm mt-2 font-medium">"Top notch cushioning and perfect build quality."</p>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings3;
