import React from 'react';
import { Star } from 'lucide-react';

export function AccountReviewsRatings7() {
  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 aspect-square bg-slate-800 rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Product" className="w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-7 space-y-4">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-white">Nike Air Max Pulse</h2>
          <p className="text-slate-300 text-base leading-relaxed">"Best daily sneakers I have owned in years. High quality mesh and great heel support."</p>
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings7;
