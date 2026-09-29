import React from 'react';
import { motion } from 'framer-motion';

export default function SizeGuide7({ data }: { data: any }) {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <section className="py-32 bg-[#e5e5e5] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl w-full px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="md:col-span-2 bg-black rounded-[2rem] p-12 text-white flex flex-col justify-between shadow-xl"
          >
            <div>
              <h2 className="text-6xl font-black tracking-tight mb-4">Fit Guide</h2>
              <p className="text-neutral-400 text-xl max-w-md">Our garments are true to size. If you are between sizes, we recommend sizing up.</p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              {sizes.map((s, i) => (
                <div key={s} className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-xl font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 shadow-xl flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-neutral-400 uppercase tracking-widest mb-6">How to Measure</h3>
            <div className="space-y-6">
              <div>
                <strong className="block text-black text-lg mb-1">Chest</strong>
                <p className="text-neutral-500 text-sm">Measure under your arms, around the fullest part of your chest.</p>
              </div>
              <div>
                <strong className="block text-black text-lg mb-1">Waist</strong>
                <p className="text-neutral-500 text-sm">Measure around your natural waistline, keeping the tape comfortably loose.</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
