import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'lucide-react';

export function OrderRecommendedProducts10() {
  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4 perspective-1000">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex items-center gap-2"
        >
          <Box className="w-5 h-5 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">3D Product Showcase</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <motion.div
            initial={{ rotateY: -15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Minimalist Cardholder</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$45.00</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 0, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: 0, rotateX: -8, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Ceramic Tumbler</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$38.00</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotateY: 15, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ rotateY: -10, rotateX: -5, scale: 1.05 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-4 shadow-2xl cursor-pointer hover:border-blue-500/50"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-800">
              <img src="https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600" alt="3D" className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-sm text-white">Wool Beanie</h4>
              <span className="text-xs font-mono text-blue-400 font-bold">$52.00</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts10;
