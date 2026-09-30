import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PaymentInformation3({ data }: { data: any }) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    if (isPrinting) return;
    setIsPrinting(true);
    setTimeout(() => setIsPrinting(false), 5000);
  };

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#e0e5ec] flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-800">Secure Receipts</h2>
        <p className="text-neutral-500">Click below to generate a secure invoice.</p>
      </div>

      <div className="relative w-full max-w-sm flex flex-col items-center">
        
        {/* Printer Slot */}
        <div className="w-64 h-8 bg-neutral-800 rounded-full shadow-inner z-20 flex items-center justify-center border-4 border-neutral-700">
          <div className="w-48 h-1 bg-black rounded-full" />
        </div>

        {/* Paper Container (Mask) */}
        <div className="w-64 h-[300px] overflow-hidden relative z-10">
          <AnimatePresence>
            {isPrinting && (
              <motion.div 
                className="absolute top-0 w-full bg-white shadow-xl flex flex-col font-mono text-sm border-x border-b border-neutral-200"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ duration: 3, ease: "linear" }}
              >
                {/* Receipt jagged top */}
                <div className="w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PHBhdGggZD0iTTAgMTBMMSA5TDIgMTBMMyA5TDQgMTBMNSA5TDYgMTBMNyA5TDggMTBMOSA5TDEwIDEwVjBIMFYxMFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-repeat-x" />
                
                <div className="p-6">
                  <div className="text-center font-bold text-lg mb-4 border-b pb-2">INVOICE #9942</div>
                  <div className="flex justify-between mb-1"><span>Subtotal</span><span>$120.00</span></div>
                  <div className="flex justify-between mb-1"><span>Tax</span><span>$9.60</span></div>
                  <div className="flex justify-between font-bold border-t pt-2 mt-2"><span>Total</span><span>$129.60</span></div>
                  
                  <div className="mt-6 pt-4 border-t border-dashed text-center text-xs text-neutral-400">
                    <div>Paid via Visa ending in 4242</div>
                    <div>Encrypted & Secured</div>
                    <div className="mt-4">
                      {/* Fake Barcode */}
                      <div className="h-8 w-full bg-[linear-gradient(90deg,black_2px,transparent_2px,transparent_4px,black_4px,black_8px,transparent_8px,transparent_10px,black_10px,black_12px,transparent_12px,transparent_14px,black_14px,black_20px)]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trigger Button */}
        <button 
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handlePrint}
          disabled={isPrinting}
        >
          {isPrinting ? "Printing..." : "Generate Receipt"}
        </button>

      </div>
    </div>
  );
}
