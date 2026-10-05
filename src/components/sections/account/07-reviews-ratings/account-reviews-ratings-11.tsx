import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function AccountReviewsRatings11() {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Interactive Rating Star Bar</h2>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <motion.div key={s} whileHover={{ scale: 1.2 }} onClick={() => setRating(s)} onMouseEnter={() => setHover(s)} onMouseLeave={() => setHover(0)} className="cursor-pointer">
              <Star className={'w-10 h-10 ' + (s <= (hover || rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-700')} />
            </motion.div>
          ))}
        </div>
        <p className="text-sm font-bold text-amber-400">Selected Rating: {rating} / 5 Stars</p>
      </div>
    </section>
  );
}

export default AccountReviewsRatings11;
