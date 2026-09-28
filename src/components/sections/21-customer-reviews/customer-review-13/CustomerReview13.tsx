import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview13Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview13({ data }: CustomerReview13Props) {
  return (
    <div className="w-full py-32 px-6 md:px-12 font-sans bg-white overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      <div className="max-w-7xl mx-auto w-full text-center relative z-20 mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4"
        >
          {data.content.heading}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 max-w-2xl mx-auto"
        >
          {data.content.description}
        </motion.p>
      </div>

      <div className="w-full relative h-[700px] flex items-center justify-center">
        
        {/* Isometric Grid Container */}
        <div 
          className="absolute inset-0 grid grid-cols-2 md:grid-cols-2 gap-8 px-12 md:px-32 py-12"
          style={{ transform: 'rotateX(55deg) rotateZ(-45deg) scale(1.2)', transformOrigin: 'center center' }}
        >
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, z: -100 }}
              whileInView={{ opacity: 1, z: 0 }}
              transition={{ delay: idx * 0.15, type: "spring", bounce: 0.4 }}
              className="bg-white border border-slate-200 shadow-2xl shadow-blue-900/10 rounded-3xl p-8 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-300"
              style={{ transformStyle: 'preserve-3d', height: '350px' }}
            >
              <div style={{ transform: 'translateZ(30px)' }}>
                <div className="flex gap-1 text-yellow-400 mb-6 text-2xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? 'opacity-100' : 'opacity-20'}>★</span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">{review.title}</h4>
                <p className="text-slate-600 text-lg leading-relaxed line-clamp-4">"{review.content}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100" style={{ transform: 'translateZ(20px)' }}>
                <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover shadow-md" />
                <div>
                  <h5 className="font-bold text-slate-900 text-lg">{review.name}</h5>
                  <p className="text-sm text-slate-500">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
