import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, X, Maximize2, ShoppingBag } from 'lucide-react';

export default function CustomerReviewGallery12({ data }: { data: any }) {
  const customers = data?.customers || [];
  const [modalItem, setModalItem] = useState<any>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">{data?.eyebrow || 'LIGHTBOX EXPERIENCE'}</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-1">{data?.heading || 'Media Showcase Gallery'}</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {customers.map((item: any, idx: number) => (
            <motion.div
              key={item.id || idx}
              whileHover={{ scale: 1.05 }}
              onClick={() => setModalItem(item)}
              className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-800 cursor-pointer group border border-neutral-700/60"
            >
              <img src={item.media} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {modalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={() => setModalItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[85vh]"
              >
                <button onClick={() => setModalItem(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-950/80 text-white">
                  <X className="w-5 h-5" />
                </button>
                <div className="md:w-3/5 h-80 md:h-auto bg-black">
                  <img src={modalItem.media} alt={modalItem.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/5 p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex text-amber-400 mb-3">
                      {[...Array(modalItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-200 italic mb-6">"{modalItem.reviewText}"</p>
                  </div>
                  <div className="pt-4 border-t border-neutral-800">
                    <div className="flex items-center gap-3 mb-4">
                      <img src={modalItem.avatar} alt={modalItem.name} className="w-9 h-9 rounded-full object-cover" />
                      <div>
                        <h4 className="text-xs font-bold text-white">{modalItem.name}</h4>
                        <p className="text-[10px] text-neutral-400">{modalItem.location}</p>
                      </div>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      Shop {modalItem.productName}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
