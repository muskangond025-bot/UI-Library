import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview14Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview14({ data }: CustomerReview14Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-sans bg-[#0f172a] overflow-hidden" style={{ color: data.style.textColor }}>
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-slate-800 pb-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-slate-400">{data.content.description}</p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-black text-white">{data.content.overallRating}</span>
            <span className="text-2xl text-slate-500">/5</span>
            <div className="text-sm text-slate-500 mt-2 font-medium">{data.content.totalReviews.toLocaleString()} REVIEWS</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] rounded-3xl overflow-hidden group"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-slate-900 rounded-[23px] p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-lg ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase">{review.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{review.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-8">"{review.content}"</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-slate-700 group-hover:border-purple-500 transition-colors" />
                  <div>
                    <h5 className="font-bold text-slate-200">{review.name}</h5>
                    {review.verified && <p className="text-[10px] text-pink-500 font-bold uppercase tracking-widest mt-1">Verified</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
