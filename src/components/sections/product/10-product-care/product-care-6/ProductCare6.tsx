import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCare6({ data }) {
  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-gray-50 flex items-center justify-center">
      <div className="relative group cursor-pointer">
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        />
        <div className="relative bg-white p-10 rounded-xl ring-1 ring-gray-900/5 leading-none flex items-top justify-start space-x-6 max-w-lg">
          <div className="space-y-6">
            <h2 className="text-slate-800 font-bold text-2xl">Premium Care</h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Our products are crafted with meticulous attention to detail using premium materials.
              </p>
              <motion.div 
                className="overflow-hidden h-0 group-hover:h-auto"
                initial={false}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="pt-2 text-slate-500"
                >
                  To maintain the pristine condition, we strongly advise against the use of harsh chemicals. Gently wipe the surface with a microfiber cloth dampened with lukewarm water.
                </motion.p>
              </motion.div>
            </div>
            <div className="pt-4 flex items-center space-x-4 text-sm font-semibold text-purple-600">
              <span className="group-hover:translate-x-2 transition-transform duration-300">Read full guide &rarr;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
