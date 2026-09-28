import React from 'react';
import { motion } from 'framer-motion';

interface CustomerReview4Props {
  data: {
    content: { heading: string; description: string; overallRating: number; totalReviews: number; reviews: { name: string; date: string; rating: number; title: string; content: string; avatar: string; verified: boolean; }[] };
    style: { backgroundColor: string; textColor: string; };
  };
}

export default function CustomerReview4({ data }: CustomerReview4Props) {
  return (
    <div className="w-full py-24 px-6 md:px-12 font-mono bg-black overflow-hidden relative" style={{ color: data.style.textColor }}>
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="mb-16 border-l-4 border-[#00ff41] pl-6 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-black uppercase text-[#00ff41] tracking-widest mb-2"
            >
              {data.content.heading}
            </motion.h2>
            <p className="text-gray-400 text-sm tracking-widest">&gt; {data.content.description}_</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black text-[#00ff41]">{data.content.overallRating} / 5.0</div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">SYS_RATING_TOTAL: {data.content.totalReviews}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.content.reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0a0a0a] border border-[#00ff41]/30 p-8 hover:border-[#00ff41] transition-colors relative group"
            >
              <div className="absolute top-0 right-0 p-2 bg-[#00ff41]/10 text-[#00ff41] text-xs font-bold border-l border-b border-[#00ff41]/30 group-hover:border-[#00ff41] transition-colors">
                ID_0{idx + 1}
              </div>
              <div className="flex gap-1 text-[#00ff41] mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xl ${i < review.rating ? 'opacity-100' : 'opacity-20'}`}>★</span>
                ))}
              </div>
              <h5 className="text-white font-bold uppercase tracking-widest mb-4">[{review.title}]</h5>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                &gt; {review.content}_
              </p>
              <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">
                <div className="w-10 h-10 border border-[#00ff41] p-1">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover grayscale opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-[#00ff41] text-xs uppercase tracking-widest">{review.name}</h4>
                  <p className="text-[10px] text-gray-600 uppercase mt-1">LOGGED: {review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
