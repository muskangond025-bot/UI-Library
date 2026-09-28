import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview2Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview2({ data }: CustomerReview2Props) {
  const marqueeReviews = [...data.content.reviews, ...data.content.reviews];

  return (
    <div className="w-full py-24 font-sans bg-[#0f172a] overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {data.content.heading}
        </motion.h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <div className="flex gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-400 text-lg">
            <span className="text-white font-bold mr-2">{data.content.overallRating}/5</span>
            based on {data.content.totalReviews.toLocaleString()} reviews
          </p>
        </div>
      </div>

      <div className="w-full relative before:absolute before:left-0 before:top-0 before:w-32 before:h-full before:bg-gradient-to-r before:from-[#0f172a] before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:w-32 after:h-full after:bg-gradient-to-l after:from-[#0f172a] after:to-transparent after:z-20">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 px-6 items-stretch"
        >
          {marqueeReviews.map((review, idx) => (
            <div key={idx} className="min-w-[350px] md:min-w-[450px] bg-slate-800/50 backdrop-blur-md border border-slate-700/50 p-8 rounded-3xl flex flex-col justify-between hover:bg-slate-800 transition-colors">
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h5 className="text-xl font-bold text-white mb-2">{review.title}</h5>
                <p className="text-slate-400 mb-8 leading-relaxed">"{review.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
