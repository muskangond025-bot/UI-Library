import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountRecentlyViewedProducts11() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotate({ x: -y / 15, y: x / 15 });
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">3D Perspective History</h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="p-8 rounded-3xl bg-slate-950 border border-indigo-500/30 text-left shadow-2xl cursor-pointer"
        >
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="3D" className="aspect-video rounded-2xl object-cover mb-4" />
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-indigo-400 font-bold mt-1">$150</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountRecentlyViewedProducts11;
