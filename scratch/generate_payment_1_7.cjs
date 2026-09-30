const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'PaymentInformation1',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation1({ data }: { data: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative perspective-[1000px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900">Secure Payments</h2>
        <p className="text-neutral-500">Hover the card to see security details.</p>
      </div>

      <motion.div 
        className="relative w-96 h-56 cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        animate={{ rotateY: isFlipped ? 180 : 0, rotateX: isFlipped ? 0 : 10, rotateZ: isFlipped ? 0 : -5 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of Card */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xl border border-neutral-700"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex justify-between items-center text-white/50">
            <span className="font-mono text-sm tracking-widest">CREDIT CARD</span>
            <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#eb001b" opacity="0.8"/>
              <circle cx="27.5" cy="12.5" r="12.5" fill="#f79e1b" opacity="0.8"/>
            </svg>
          </div>
          <div className="flex gap-2 items-center text-white/80">
            <div className="w-10 h-8 rounded bg-gradient-to-br from-yellow-200 to-yellow-500" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <div className="font-mono text-2xl text-white tracking-widest">
            •••• •••• •••• 4242
          </div>
          <div className="flex justify-between text-white/60 font-mono text-sm uppercase">
            <span>Cardholder Name</span>
            <span>12/28</span>
          </div>
        </div>

        {/* Back of Card */}
        <div 
          className="absolute inset-0 bg-neutral-200 rounded-2xl shadow-2xl flex flex-col pt-6 border border-white"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="w-full h-12 bg-neutral-900 mb-4" />
          <div className="px-6 flex items-center justify-end gap-2">
            <span className="text-xs font-bold text-neutral-400">CVV</span>
            <div className="w-16 h-8 bg-white flex items-center justify-center font-mono font-bold text-neutral-900 italic rounded">
              ***
            </div>
          </div>
          <div className="px-6 mt-auto pb-6 text-xs text-neutral-500 leading-tight">
            256-bit SSL encryption. We never store your full card details. Compliant with PCI-DSS standards.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation2',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet, Bitcoin } from 'lucide-react';

export default function PaymentInformation2({ data }: { data: any }) {
  const methods = [
    { icon: CreditCard, name: "Visa / Mastercard" },
    { icon: Smartphone, name: "Apple Pay" },
    { icon: Wallet, name: "Google Pay" },
    { icon: Bitcoin, name: "Crypto" },
    { icon: CreditCard, name: "Amex" },
    { icon: Wallet, name: "PayPal" },
  ];

  return (
    <div className="p-8 min-h-[400px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950" />
      
      <div className="text-center z-10 mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Pay Your Way</h2>
        <p className="text-neutral-400">We accept all major payment methods.</p>
      </div>

      <div className="w-full relative overflow-hidden flex scale-110 -rotate-3 z-10 py-8 border-y border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
        <motion.div
          className="flex whitespace-nowrap items-center gap-12 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...methods, ...methods].map((method, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-white/10 transition-all shadow-[0_0_30px_rgba(255,255,255,0)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <method.icon size={32} />
              </div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-500 uppercase tracking-widest group-hover:from-white group-hover:to-neutral-300 transition-all">
                {method.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation3',
    content: `import React, { useState } from 'react';
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
`
  },
  {
    name: 'PaymentInformation4',
    content: `import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Fingerprint } from 'lucide-react';

export default function PaymentInformation4({ data }: { data: any }) {
  // Biometric scan simulator
  
  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-900 flex flex-col items-center justify-center relative overflow-hidden group">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Biometric Verification</h2>
        <p className="text-neutral-400">We support Apple Face ID and Touch ID for instant checkout.</p>
      </div>

      <div className="relative w-48 h-48 bg-neutral-800 rounded-full flex items-center justify-center shadow-[inset_0_10px_30px_rgba(0,0,0,0.5)] border border-neutral-700 overflow-hidden">
        
        {/* Fingerprint Icon */}
        <Fingerprint size={80} className="text-neutral-600 group-hover:text-emerald-500 transition-colors duration-1000 z-10" />
        
        {/* Scanning Laser Line */}
        <motion.div 
          className="absolute left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_20px_4px_rgba(52,211,153,0.5)] z-20"
          animate={{ y: ["-100px", "100px", "-100px"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        
        {/* Scanning Glow */}
        <motion.div 
          className="absolute inset-0 bg-emerald-500/10 mix-blend-screen z-0"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </div>

      <div className="flex gap-8 mt-16 text-neutral-400">
        <div className="flex items-center gap-2"><Lock size={18} /> End-to-End Encrypted</div>
        <div className="flex items-center gap-2"><ShieldCheck size={18} /> Zero Fraud Liability</div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation5',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bitcoin, CreditCard, Wallet } from 'lucide-react';

export default function PaymentInformation5({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    { color: "bg-blue-600", icon: CreditCard, title: "Credit Card" },
    { color: "bg-orange-500", icon: Bitcoin, title: "Crypto" },
    { color: "bg-neutral-800", icon: Wallet, title: "Apple Pay" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-[#f3f4f6] flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-800">Your Wallet</h2>
        <p className="text-neutral-500">Hover the stack to pick a payment method.</p>
      </div>

      <motion.div 
        className="relative w-64 h-40 cursor-pointer"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        {cards.map((card, i) => {
          const offset = isOpen ? (i - 1) * 80 : 0;
          const rotate = isOpen ? (i - 1) * 15 : i * 2;
          const scale = isOpen ? 1 : 1 - (2 - i) * 0.05;
          const y = isOpen ? offset : (2 - i) * -10;

          return (
            <motion.div
              key={i}
              className={\`absolute inset-0 \${card.color} rounded-2xl shadow-xl flex flex-col justify-between p-6 border border-white/20 text-white origin-bottom\`}
              animate={{ 
                y, 
                rotate,
                scale,
                zIndex: i
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <card.icon size={28} className="opacity-80" />
              <div className="font-bold text-lg tracking-wider">{card.title}</div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation6',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation6({ data }: { data: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => setSuccess(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setSuccess(false);
    }
  }, [isHovered]);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-emerald-950 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Tap to Pay</h2>
        <p className="text-emerald-300 font-bold">Hover phone over terminal.</p>
      </div>

      <div 
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Terminal */}
        <div className="w-32 h-16 bg-emerald-900 rounded-t-xl border-t border-x border-emerald-700 flex flex-col items-center justify-center relative z-0 mt-32">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-75" />
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse delay-150" />
          </div>
          
          {/* NFC Waves */}
          {isHovered && !success && (
            <motion.div 
              className="absolute -top-16 w-32 h-32 rounded-full border-2 border-emerald-400"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
          )}
        </div>

        {/* Phone */}
        <motion.div
          className="absolute z-10 w-24 h-48 bg-black rounded-3xl border-4 border-neutral-700 shadow-2xl flex items-center justify-center overflow-hidden"
          animate={{ y: isHovered ? 40 : -40, rotateX: isHovered ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          style={{ transformOrigin: "bottom" }}
        >
          <div className="absolute inset-x-2 top-2 bottom-2 bg-neutral-900 rounded-2xl flex items-center justify-center">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div 
                  key="success"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-emerald-500 flex flex-col items-center"
                >
                  <CheckCircle2 size={40} />
                  <span className="text-xs font-bold mt-2">DONE</span>
                </motion.div>
              ) : (
                <motion.div key="ready" className="text-neutral-500">
                  <Smartphone size={32} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation7',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock } from 'lucide-react';

export default function PaymentInformation7({ data }: { data: any }) {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative cursor-pointer" onClick={() => setIsLocked(!isLocked)}>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-800">Bank-Grade Security</h2>
        <p className="text-neutral-500">Click to {isLocked ? 'unlock' : 'lock'} the vault.</p>
      </div>

      <div className="relative">
        <motion.div 
          className={\`w-48 h-48 rounded-full border-8 flex items-center justify-center shadow-2xl transition-colors duration-500 \${isLocked ? 'bg-emerald-50 border-emerald-500' : 'bg-rose-50 border-rose-500'}\`}
          animate={{ scale: isLocked ? 1 : 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            {isLocked ? (
              <motion.div
                key="locked"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-500 flex flex-col items-center"
              >
                <Lock size={64} />
                <span className="font-bold mt-2 uppercase tracking-widest text-sm">Secured</span>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
                className="text-rose-500 flex flex-col items-center"
              >
                <Unlock size={64} />
                <span className="font-bold mt-2 uppercase tracking-widest text-sm">Vulnerable</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Orbiting particles when locked */}
        <AnimatePresence>
          {isLocked && (
            <motion.div 
              className="absolute inset-[-20px] border-2 border-dashed border-emerald-300 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" } }}
            />
          )}
        </AnimatePresence>
      </div>

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
