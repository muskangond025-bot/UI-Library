import React from 'react';
import { motion } from 'framer-motion';

const sizes = [
  { size: 'XS', chest: 34, waist: 28 },
  { size: 'S', chest: 36, waist: 30 },
  { size: 'M', chest: 38, waist: 32 },
  { size: 'L', chest: 40, waist: 34 },
  { size: 'XL', chest: 42, waist: 36 }
];

export default function SizeGuide3({ data }: { data: any }) {
  return (
    <section className="py-32 bg-[#f4f4f5] min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/3">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-8"
          >
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </motion.div>
          <h2 className="text-5xl font-black text-black mb-4">Size Chart.</h2>
          <p className="text-neutral-500 text-lg">Use this guide to find your perfect fit. Measurements reflect garment dimensions.</p>
        </div>

        <div className="md:w-2/3 w-full">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-neutral-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Size</th>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Chest (in)</th>
                  <th className="pb-6 text-neutral-400 font-bold uppercase tracking-wider text-sm border-b-2 border-neutral-100">Waist (in)</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row, i) => (
                  <motion.tr 
                    key={row.size}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <td className="py-6 border-b border-neutral-100 text-2xl font-black text-black group-hover:text-blue-600 transition-colors">
                      {row.size}
                    </td>
                    <td className="py-6 border-b border-neutral-100 text-lg text-neutral-600">
                      {row.chest}
                    </td>
                    <td className="py-6 border-b border-neutral-100 text-lg text-neutral-600">
                      {row.waist}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
