import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview17Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview17({ data }: CustomerReview17Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#1e1b4b] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 2px, transparent 2px)', backgroundSize: '90px 90px', backgroundPosition: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="w-full lg:w-5/12 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-400 mb-6 leading-tight"
          >
            {data.content.heading}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-indigo-200 text-lg mb-10"
          >
            {data.content.description}
          </motion.p>

          <div className="flex items-center justify-center lg:justify-start gap-8">
            <div className="text-center">
              <span className="text-6xl font-black text-white">{data.content.overallRating}</span>
              <div className="flex gap-1 text-purple-400 mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>
            <div className="h-16 w-px bg-indigo-500/50" />
            <div className="text-left">
              <span className="text-4xl font-bold text-indigo-100">{data.content.totalReviews.toLocaleString()}</span>
              <p className="text-indigo-300 font-medium uppercase tracking-widest text-xs mt-2">Verified Reviews</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-indigo-950/50 backdrop-blur-sm border border-indigo-500/30 p-8 rounded-3xl hover:border-indigo-400/80 hover:bg-indigo-900/50 transition-all duration-300 shadow-[0_0_30px_rgba(79,70,229,0.1)] flex flex-col justify-between ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <div>
                <div className="flex gap-1 text-purple-400 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-30'}>★</span>
                  ))}
                </div>
                <h4 className="text-white font-bold text-xl mb-3">{review.title}</h4>
                <p className="text-indigo-200 text-sm font-light leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-indigo-500/30 pt-6">
                <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-indigo-400" />
                <div>
                  <h4 className="font-bold text-indigo-50 text-sm">{review.name}</h4>
                  <p className="text-xs text-indigo-300">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
