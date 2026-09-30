import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation10({ data }: { data: any }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden group">
      
      {/* Hidden Payment Gateway Behind Portal */}
      <div className="absolute inset-0 bg-white flex flex-col items-center justify-center z-0 p-12 text-center">
         <h2 className="text-4xl font-black text-neutral-900 mb-6 uppercase tracking-tighter">Payment Portal</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
           {['VISA', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((method, i) => (
             <div key={i} className="h-24 border-2 border-neutral-200 rounded-2xl flex items-center justify-center font-bold text-neutral-400 hover:border-neutral-900 hover:text-neutral-900 transition-colors cursor-pointer">
               {method}
             </div>
           ))}
         </div>
         <button 
           className="mt-12 text-neutral-500 hover:text-neutral-900 underline font-bold"
           onClick={() => setIsOpen(false)}
         >
           Close Gateway
         </button>
      </div>

      {/* Top Door */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900 z-10 flex flex-col justify-center items-center pb-8 border-b border-neutral-800 shadow-2xl origin-top"
        initial={false}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="text-white text-5xl font-black uppercase tracking-widest">Secure</div>
      </motion.div>

      {/* Bottom Door */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900 z-10 flex flex-col justify-center items-center pt-8 border-t border-neutral-800 shadow-2xl origin-bottom"
        initial={false}
        animate={{ y: isOpen ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="text-white text-5xl font-black uppercase tracking-widest">Checkout</div>
      </motion.div>

      {/* Center Lock Button */}
      {!isOpen && (
        <motion.button 
          className="absolute z-20 w-24 h-24 bg-white rounded-full text-neutral-900 font-bold shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform flex items-center justify-center uppercase tracking-widest text-sm"
          onClick={() => setIsOpen(true)}
          exit={{ scale: 0, opacity: 0 }}
        >
          Open
        </motion.button>
      )}

    </div>
  );
}
