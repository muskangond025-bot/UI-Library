import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

export default function CustomerReviewGallery10({ data }: { data: any }) {
  const customers = data?.customers || [];

  return (
    <section className="py-20 px-4 bg-neutral-900 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">{data?.eyebrow || 'SOCIAL STREAM'}</span>
          <h2 className="text-3xl font-bold mt-1">{data?.heading || 'Live Community Feed'}</h2>
        </div>

        <div className="space-y-8">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1">
                      {item.name}
                      {item.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </h4>
                    <p className="text-[10px] text-neutral-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      {item.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-neutral-500">{item.date}</span>
              </div>

              {/* Post Media */}
              <div className="relative max-h-96 overflow-hidden bg-black">
                <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Post Actions */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4 text-neutral-300">
                    <button className="flex items-center gap-1 hover:text-pink-500 transition-colors text-xs font-semibold">
                      <Heart className="w-4 h-4" /> 248 Likes
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors text-xs">
                      <MessageCircle className="w-4 h-4" /> Comments
                    </button>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  <span className="font-bold text-white mr-1.5">{item.name}</span>
                  {item.reviewText}
                </p>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-medium">Tag: {item.productName}</span>
                  <span className="font-bold text-white">{item.productPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
