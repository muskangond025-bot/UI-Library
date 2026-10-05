import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountReviewsRatings16() {
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
        <h2 className="text-3xl font-bold text-white mb-8">3D Review Perspective</h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setRotate({ x: 0, y: 0 })}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="p-8 rounded-3xl bg-slate-950 border border-amber-500/30 text-left shadow-2xl cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-white">Nike Air Max Pulse</h3>
          <p className="text-amber-400 font-bold mt-1">5.0 Star Rating</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings16;
