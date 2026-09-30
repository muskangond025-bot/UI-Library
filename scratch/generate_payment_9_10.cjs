const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'PaymentInformation9',
    content: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation9({ data }: { data: any }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) return 0;
        return p + Math.random() * 15;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const clampedProgress = Math.min(progress, 100);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden font-mono">
      
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-50" />
      
      <div className="relative z-10 w-full max-w-md border border-emerald-900 bg-black p-6 rounded-lg shadow-[0_0_50px_rgba(52,211,153,0.1)]">
        
        <div className="flex justify-between items-center mb-6 border-b border-emerald-900 pb-2">
          <span className="text-emerald-500 text-sm">> SECURE_PAY_TERM</span>
          <span className="text-emerald-500/50 text-xs">v2.4.1</span>
        </div>

        <div className="space-y-2 text-emerald-400 text-sm mb-8">
          <div>> INITIALIZING HANDSHAKE... OK</div>
          <div>> EXCHANGING KEYS... OK</div>
          <div>> ENCRYPTING PAYLOAD...</div>
          {clampedProgress >= 100 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white font-bold bg-emerald-600 inline-block px-2 mt-2">
              > TRANSACTION SECURED
            </motion.div>
          )}
        </div>

        <div className="w-full h-4 border border-emerald-800 p-[2px]">
          <motion.div 
            className="h-full bg-emerald-500"
            animate={{ width: \`\${clampedProgress}%\` }}
            transition={{ ease: "linear", duration: 0.5 }}
          />
        </div>
        
        <div className="mt-2 text-right text-xs text-emerald-600">
          {clampedProgress.toFixed(1)}% / 100%
        </div>

      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation10',
    content: `import React, { useRef } from 'react';
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
        className="absolute top-0 left-0 w-full h-1/2 bg-neutral-900 z-10 flex flex-col justify-end items-center pb-4 border-b border-neutral-800 shadow-2xl origin-top"
        initial={false}
        animate={{ y: isOpen ? "-100%" : "0%" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="text-white text-5xl font-black uppercase tracking-widest relative top-8">Secure</div>
      </motion.div>

      {/* Bottom Door */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-900 z-10 flex flex-col justify-start items-center pt-4 border-t border-neutral-800 shadow-2xl origin-bottom"
        initial={false}
        animate={{ y: isOpen ? "100%" : "0%" }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <div className="text-white text-5xl font-black uppercase tracking-widest relative -top-6">Checkout</div>
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
`
  }
];

components.forEach(comp => {
  const filePath = path.join(__dirname, '..', 'src', 'components', 'sections', 'product', '14-payment-information', 'payment-information-' + comp.name.replace('PaymentInformation', ''), comp.name + '.tsx');
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(filePath, comp.content, 'utf-8');
  console.log('Updated ' + comp.name);
});
