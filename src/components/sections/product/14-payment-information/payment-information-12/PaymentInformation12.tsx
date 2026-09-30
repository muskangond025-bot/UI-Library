import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { CreditCard, CheckCircle2, ChevronRight } from 'lucide-react';

export default function PaymentInformation12({ data }: { data: any }) {
  const [success, setSuccess] = useState(false);
  const x = useMotionValue(0);
  const background = useTransform(x, [0, 200], ["#171717", "#065f46"]);
  const glowOpacity = useTransform(x, [0, 200], [0.1, 1]);

  useEffect(() => {
    // Auto-demo the swipe
    let controls;
    if (!success) {
      controls = animate(x, [0, 50, 0], { repeat: Infinity, duration: 2, ease: "easeInOut" });
    }
    return () => controls?.stop();
  }, [success, x]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background glow attached to swipe progress */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 to-transparent pointer-events-none"
        style={{ opacity: glowOpacity }}
      />

      <div className="text-center mb-16 z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">Swipe to Pay</h2>
        <motion.div 
          className="flex items-center justify-center gap-2 mt-4 text-emerald-500"
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase">Drag Card Right</span>
          <ChevronRight size={16} />
        </motion.div>
      </div>

      <motion.div className="w-full max-w-md h-32 rounded-[2rem] relative flex items-center px-4 border border-white/10 shadow-2xl z-10 overflow-hidden" style={{ background }}>
        {/* Scanner Track */}
        <div className="absolute left-8 right-8 h-3 bg-black/80 rounded-full shadow-[inset_0_2px_10px_rgba(0,0,0,1)] border border-white/5 pointer-events-none flex items-center">
           {/* Animated dots on track */}
           <motion.div 
             className="h-1 w-1/4 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent blur-[2px]"
             animate={{ x: ["-100%", "400%"] }}
             transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
           />
        </div>
        
        {!success ? (
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 280 }}
            dragElastic={0}
            dragMomentum={false}
            onDragStart={() => x.stop()} // Stop auto demo when user grabs
            onDrag={(e, info) => {
              if (info.point.x > 250) setSuccess(true);
            }}
            style={{ x }}
            className="w-24 h-20 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-neutral-600 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-2 bg-neutral-700 mb-2 mt-[-10px]" /> {/* Magnetic strip */}
            <CreditCard size={28} className="text-white/80 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ scale: 0, rotate: -180 }} 
            animate={{ scale: 1, rotate: 0 }} 
            className="w-full flex flex-col items-center justify-center text-emerald-400 z-10"
          >
            <CheckCircle2 size={48} className="drop-shadow-[0_0_20px_rgba(52,211,153,0.8)]" />
            <span className="font-bold text-xs uppercase tracking-widest mt-2 text-white">Payment Secured</span>
          </motion.div>
        )}
      </motion.div>

      {success && (
        <motion.button 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          onClick={() => { setSuccess(false); x.set(0); }} 
          className="mt-12 px-6 py-2 rounded-full border border-neutral-700 text-neutral-400 hover:text-white hover:border-white transition-colors text-xs font-bold uppercase tracking-widest z-10"
        >
          Reset Demo
        </motion.button>
      )}
    </div>
  );
}
