import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Plus, Check } from 'lucide-react';

export function OrderRecommendedProducts20() {
  const [added, setAdded] = useState<Record<number, boolean>>({});

  const items = [
    { id: 1, title: 'Architectural Desk Lamp', price: '$120.00', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', tag: 'Top Match' },
    { id: 2, title: 'Minimalist Cardholder', price: '$45.00', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=600', tag: 'Popular' },
    { id: 3, title: 'Ceramic Tumbler', price: '$38.00', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600', tag: 'Essential' },
  ];

  const toggle = (id: number) => {
    setAdded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-zinc-950 to-black text-white py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-amber-500/30 my-4 shadow-2xl relative overflow-hidden">
      {/* Glow */}
      <motion.div 
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-800 pb-6"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="p-3 bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-2xl shadow-lg shadow-amber-500/20"
            >
              <Award className="w-6 h-6" />
            </motion.div>
            <div>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-3 h-3" /> Post-Purchase Curation
              </span>
              <h2 className="text-2xl font-serif font-bold text-white">Award Discovery Experience</h2>
            </div>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full">
            Order #849202 Additions
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="bg-zinc-900/60 p-5 rounded-2xl border border-amber-500/20 space-y-4 shadow-xl hover:border-amber-500/50 transition-all group"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-zinc-900">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover" 
                />
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur text-amber-400 text-[10px] font-mono px-2.5 py-1 rounded-full border border-amber-500/20">
                  {item.tag}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-serif text-base text-white">{item.title}</h3>
                  <span className="font-mono text-xs text-amber-400">{item.price}</span>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggle(item.id)}
                  className={`p-2.5 rounded-xl font-bold transition-all shadow-lg ${
                    added[item.id] ? 'bg-emerald-500 text-slate-950' : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                  }`}
                >
                  {added[item.id] ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default OrderRecommendedProducts20;
