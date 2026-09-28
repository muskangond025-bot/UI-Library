import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview10Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview10({ data }: CustomerReview10Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-[#020617] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Cinematic Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-2xl font-bold text-slate-300">{data.content.overallRating} / 5.0</div>
          </div>
          <p className="text-lg text-slate-400 font-light max-w-xl mx-auto">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-[2rem] shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex text-blue-500 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                  ))}
                </div>
                <span className="text-slate-500 text-sm font-medium">{review.date}</span>
              </div>
              
              <h5 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{review.title}</h5>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 font-light">"{review.content}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors" 
                />
                <div>
                  <h4 className="font-bold text-slate-200">{review.name}</h4>
                  {review.verified && <p className="text-blue-400 uppercase tracking-widest text-[10px] font-bold mt-1">Verified Customer</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
