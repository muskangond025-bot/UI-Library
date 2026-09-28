import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview5Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview5({ data }: CustomerReview5Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Background Animated Blobs */}
      <motion.div 
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4 -z-10"
      />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight"
          >
            {data.content.heading}
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium">{data.content.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/40 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-[0_8px_32px_rgba(31,38,135,0.07)] hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">{review.date}</span>
              </div>
              <h5 className="font-bold text-xl text-slate-900 mb-4">{review.title}</h5>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">"{review.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  {review.verified && <span className="text-xs text-blue-500 font-semibold uppercase tracking-widest">Verified Buyer</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
