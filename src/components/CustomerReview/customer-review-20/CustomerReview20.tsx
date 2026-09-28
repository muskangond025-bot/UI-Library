import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview20Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview20({ data }: CustomerReview20Props) {
  // Multiply reviews for wall effect
  const wallData = [...data.content.reviews, ...data.content.reviews, ...data.content.reviews];

  return (
    <div className="w-full py-24 font-sans bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-20 mb-20 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-400 mb-10"
        >
          {data.content.description}
        </motion.p>
        
        <div className="inline-flex items-center gap-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 py-4 px-8 rounded-full">
          <span className="text-4xl font-black text-white">{data.content.overallRating}</span>
          <div className="w-px h-8 bg-zinc-700" />
          <div className="text-left flex flex-col justify-center">
            <div className="flex gap-1 text-yellow-500 text-sm mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{data.content.totalReviews.toLocaleString()} REVIEWS</span>
          </div>
        </div>
      </div>

      <div className="w-full relative z-10 before:absolute before:left-0 before:top-0 before:w-32 md:before:w-64 before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-32 md:after:w-64 after:h-full after:bg-gradient-to-l after:from-black after:to-transparent after:z-20">
        
        {/* Row 1 */}
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="flex gap-6 mb-6 px-4 items-stretch"
        >
          {wallData.map((review, idx) => (
            <div key={`r1-${idx}`} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] min-w-[350px] md:min-w-[450px] flex flex-col justify-between hover:border-zinc-600 transition-colors cursor-default">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-600">{review.date}</span>
                </div>
                <h5 className="font-bold text-white text-lg mb-2">{review.title}</h5>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-zinc-300">{review.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          animate={{ x: [-2000, 0] }}
          transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
          className="flex gap-6 px-4 items-stretch"
        >
          {wallData.map((review, idx) => (
            <div key={`r2-${idx}`} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] min-w-[350px] md:min-w-[450px] flex flex-col justify-between hover:border-zinc-600 transition-colors cursor-default">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-yellow-500 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-zinc-600">{review.date}</span>
                </div>
                <h5 className="font-bold text-white text-lg mb-2">{review.title}</h5>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-zinc-300">{review.name}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </div>
  );
}
