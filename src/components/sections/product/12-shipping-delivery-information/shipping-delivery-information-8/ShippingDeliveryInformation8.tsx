import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ShippingDeliveryInformation8({ data }: { data: any }) {
  const [zip, setZip] = useState('');
  const [calculating, setCalculating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zip) return;
    
    setCalculating(true);
    setResult(null);
    
    setTimeout(() => {
      setCalculating(false);
      setResult("Arrives by Friday, Oct 24 - Free Shipping");
    }, 1500);
  };

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-emerald-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      <motion.div 
        className="w-full max-w-md bg-emerald-950/50 backdrop-blur-md p-8 rounded-3xl border border-emerald-800/50 shadow-2xl relative z-10"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-2">Estimate Delivery</h2>
        <p className="text-emerald-300/70 mb-6 text-sm">Enter your zip code to see delivery dates and costs.</p>
        
        <form onSubmit={handleCalculate} className="flex gap-2 mb-4">
          <input 
            type="text" 
            placeholder="Zip Code" 
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            className="flex-1 bg-emerald-900/50 border border-emerald-700 rounded-xl px-4 py-3 text-white placeholder-emerald-500 focus:outline-none focus:border-emerald-400 transition-colors"
          />
          <motion.button 
            type="submit"
            className="bg-emerald-500 text-emerald-950 font-bold px-6 py-3 rounded-xl disabled:opacity-50"
            disabled={calculating || !zip}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {calculating ? (
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-5 h-5 border-2 border-emerald-950 border-t-transparent rounded-full"
              />
            ) : "Check"}
          </motion.button>
        </form>
        
        <div className="h-12 flex items-center justify-center">
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-300 font-medium text-sm flex items-center gap-2 bg-emerald-900/50 px-4 py-2 rounded-lg"
            >
              🎉 {result}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
