import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check, Plus, ArrowRight } from 'lucide-react';

export function OrderRecommendedProducts1() {
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const items = [
    { id: 1, name: 'Minimalist Leather Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', tag: 'Matches Leather Jacket' },
    { id: 2, name: 'Merino Wool Ribbed Beanie', price: '$52.00', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=600', tag: 'Winter Collection' },
    { id: 3, name: 'Matte Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', tag: 'Daily Essential' },
  ];

  const toggleAdd = (id: number) => {
    setAdded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-slate-950 text-white py-12 px-4 sm:px-6 rounded-2xl border border-slate-800 my-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Purchased Context */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, -10, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-2.5 bg-emerald-500/20 text-emerald-400 rounded-xl"
            >
              <ShoppingBag className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase">JUST ORDERED</span>
              <h4 className="text-sm font-bold text-white">Classic Tailored Wool Blazer</h4>
            </div>
          </div>
          <span className="text-xs text-slate-400 font-mono">ORDER #849202</span>
        </motion.div>

        {/* Section Title */}
        <div className="flex justify-between items-end">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">Styling Recommendation</span>
            <h2 className="text-2xl font-bold text-white">Complete Your Look</h2>
          </div>
          <motion.button 
            whileHover={{ x: 4 }} 
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
          >
            View Styling Guide <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="group bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all flex flex-col justify-between shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-800">
                <motion.img 
                  whileHover={{ scale: 1.08 }} 
                  transition={{ duration: 0.5 }}
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-indigo-400 text-[10px] font-mono px-2.5 py-1 rounded-full border border-slate-800">
                  {item.tag}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-slate-100 text-sm">{item.name}</h3>
                  <span className="font-bold text-indigo-400 text-sm">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleAdd(item.id)}
                  className={`w-full py-2.5 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    added[item.id]
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-slate-800 hover:bg-indigo-600 text-white'
                  }`}
                >
                  {added[item.id] ? (
                    <>
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <Check className="w-4 h-4 stroke-[3]" />
                      </motion.span>
                      Added to Shipment
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" /> Add to Next Shipment
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts1;
