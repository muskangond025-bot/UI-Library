import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductGallery9({ data }: { data: any }) {
  const images = data?.settings?.images || [
    'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80'
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden"
            >
              <img src={images[0]} className="w-full h-full object-cover" alt="Main" />
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full aspect-square rounded-[2rem] overflow-hidden"
              >
                <img src={images[1]} className="w-full h-full object-cover" alt="Sub 1" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full aspect-square rounded-[2rem] overflow-hidden"
              >
                <img src={images[2]} className="w-full h-full object-cover" alt="Sub 2" />
              </motion.div>
            </div>
          </div>
          
          <div className="md:col-span-4 flex flex-col justify-between pt-12 pb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Aesthetic Appeal</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every curve, material, and finish has been carefully chosen to create a timeless design that fits perfectly in your life.
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  'Premium Grade Materials',
                  'Precision Engineering',
                  'Sustainable Manufacturing',
                  'Ergonomic Comfort'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-800 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden relative"
            >
              <img src={images[3]} className="w-full h-full object-cover" alt="Sub 3" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}