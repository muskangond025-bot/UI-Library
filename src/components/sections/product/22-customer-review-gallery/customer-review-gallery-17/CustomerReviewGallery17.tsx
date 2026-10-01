import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, CheckCircle2 } from 'lucide-react';

export default function CustomerReviewGallery17({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [playingVideo, setPlayingVideo] = useState<any>(null);

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-red-500 tracking-widest uppercase">{data?.eyebrow || 'VIDEO FIRST'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Video Review Gallery'}</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ y: -6 }}
              onClick={() => setPlayingVideo(item)}
              className="relative aspect-[9/16] max-h-[460px] mx-auto w-full rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-pointer group shadow-2xl"
            >
              <img src={item.media} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 rounded-full bg-red-600 text-white shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-white italic line-clamp-2 mb-3">"{item.reviewText}"</p>
                <div className="flex items-center gap-2">
                  <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                  <span className="text-xs font-bold text-white">{item.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setPlayingVideo(null)}
            >
              <div className="relative max-w-md w-full bg-neutral-900 rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => setPlayingVideo(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white">
                  <X className="w-5 h-5" />
                </button>
                <div className="aspect-[9/16] bg-black">
                  <img src={playingVideo.media} alt={playingVideo.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
