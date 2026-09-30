import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation12({ data }: { data: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex items-center justify-center perspective-[2000px]">
      <motion.div 
        className="w-full max-w-sm h-96 relative cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front: Shipping Label */}
        <div className="absolute inset-0 backface-hidden bg-white p-6 rounded-2xl shadow-2xl flex flex-col justify-between border-8 border-yellow-400">
          <div>
            <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-4">
              <span className="font-bold text-3xl font-mono">PRIORITY</span>
              <span className="text-xs font-bold">1 DAY</span>
            </div>
            <div className="font-mono text-sm space-y-1">
              <p>SHIP TO:</p>
              <p className="font-bold text-lg">JANE DOE</p>
              <p>123 MAIN STREET</p>
              <p>ANYTOWN, NY 10001</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="h-16 w-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg')] bg-cover bg-center opacity-80" />
            <p className="text-[10px] mt-1 font-mono">TRACKING: 1Z 999 999 99 9999 9999</p>
            <p className="text-xs font-bold mt-4 text-blue-600">Click to flip for return policy</p>
          </div>
        </div>

        {/* Back: Return Policy */}
        <div 
          className="absolute inset-0 backface-hidden bg-zinc-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center text-white border-8 border-zinc-700"
          style={{ transform: "rotateY(180deg)" }}
        >
          <h3 className="text-2xl font-bold mb-4 text-yellow-400">Easy Returns</h3>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            Not completely satisfied? We offer free returns within 30 days of delivery. Just drop it off at any authorized carrier location.
          </p>
          <button className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-full text-sm">
            Print Return Label
          </button>
        </div>
      </motion.div>
    </div>
  );
}
