const fs = require('fs');
const path = require('path');

const components = [
  {
    name: 'PaymentInformation16',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation16({ data }: { data: any }) {
  const [amount, setAmount] = useState('299.00');

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-900 flex flex-col md:flex-row items-center justify-center relative overflow-hidden gap-12">
      
      <div className="w-full max-w-xs space-y-6">
        <div>
          <label className="block text-neutral-400 text-sm font-bold mb-2 uppercase tracking-widest">Enter Amount</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold">$</span>
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-neutral-800 border-2 border-neutral-700 text-white p-4 pl-8 rounded-xl font-mono text-xl focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
        <p className="text-neutral-500 text-sm">The invoice will automatically update on the right.</p>
      </div>

      <div className="w-full max-w-sm aspect-[3/4] bg-white rounded-xl shadow-2xl p-8 flex flex-col relative overflow-hidden font-mono">
        {/* Glow effect from screen */}
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none" />
        
        <div className="flex justify-between items-center border-b-2 border-neutral-900 pb-4 mb-6">
          <div className="font-black text-2xl">INVOICE</div>
          <div className="text-neutral-400 text-sm">#INV-2024</div>
        </div>
        
        <div className="space-y-4 flex-grow text-sm">
          <div className="flex justify-between"><span className="text-neutral-500">Service</span><span>Web Design</span></div>
          <div className="flex justify-between"><span className="text-neutral-500">Due Date</span><span>Oct 15, 2026</span></div>
        </div>

        <div className="border-t-2 border-neutral-900 pt-4 mt-auto">
          <div className="flex justify-between items-end">
            <span className="text-neutral-500 text-sm">Total Due</span>
            <motion.span 
              key={amount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black text-neutral-900"
            >
              ${"$"}{amount || '0.00'}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation17',
    content: `import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Wallet, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation17({ data }: { data: any }) {
  const [connecting, setConnecting] = useState(false);
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    if (connecting || connected) return;
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 3000);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-[#111] flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Web3 Payments</h2>
        <p className="text-neutral-400">Connect your crypto wallet to checkout.</p>
      </div>

      <div className="flex items-center gap-8 relative z-10">
        
        {/* Store Node */}
        <div className="w-24 h-24 rounded-2xl bg-neutral-800 border-2 border-neutral-700 flex flex-col items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Hexagon size={32} className="mb-2 text-blue-400" />
          <span className="text-xs font-bold">STORE</span>
        </div>

        {/* Connection Line */}
        <div className="w-32 h-1 bg-neutral-800 relative overflow-hidden rounded-full">
          {(connecting || connected) && (
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-blue-500 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: connected ? "100%" : ["0%", "100%", "0%"] }}
              transition={connected ? { duration: 0.5 } : { repeat: Infinity, duration: 1.5 }}
            />
          )}
        </div>

        {/* Wallet Node */}
        <div 
          className={\`w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 \${connected ? 'bg-blue-900 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'}\`}
          onClick={handleConnect}
        >
          {connected ? (
            <CheckCircle2 size={32} className="text-blue-400 mb-2" />
          ) : (
            <Wallet size={32} className="text-neutral-400 mb-2" />
          )}
          <span className={\`text-xs font-bold \${connected ? 'text-white' : 'text-neutral-500'}\`}>
            {connected ? '0x42...4F8' : 'CONNECT'}
          </span>
        </div>

      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation18',
    content: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PaymentInformation18({ data }: { data: any }) {
  const [step, setStep] = useState(0);

  const steps = [
    { date: "Today", amount: "$50.00", status: "Paid" },
    { date: "Oct 15", amount: "$50.00", status: "Upcoming" },
    { date: "Oct 29", amount: "$50.00", status: "Upcoming" },
    { date: "Nov 12", amount: "$50.00", status: "Upcoming" },
  ];

  return (
    <div className="p-8 min-h-[600px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative cursor-pointer" onClick={() => setStep(s => (s + 1) % 5)}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-800">Installment Timeline</h2>
        <p className="text-neutral-500">Click to advance the timeline simulation.</p>
      </div>

      <div className="relative border-l-4 border-neutral-300 py-4 ml-4 space-y-12">
        {steps.map((s, i) => {
          const isActive = i < step;
          const isCurrent = i === step;

          return (
            <div key={i} className="relative pl-8">
              {/* Node */}
              <motion.div 
                className={\`absolute -left-[14px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 \${isActive ? 'bg-emerald-500 border-emerald-200' : isCurrent ? 'bg-blue-500 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white border-neutral-300'}\`}
                animate={{ scale: isCurrent ? 1.2 : 1 }}
              />
              
              <div className={\`transition-colors duration-500 \${isActive ? 'opacity-50' : isCurrent ? 'opacity-100' : 'opacity-40'}\`}>
                <div className="font-bold text-sm text-neutral-400 uppercase tracking-widest">{s.date}</div>
                <div className="text-3xl font-black text-neutral-900">{s.amount}</div>
                <div className={\`text-sm font-bold \${isActive ? 'text-emerald-600' : isCurrent ? 'text-blue-600' : 'text-neutral-500'}\`}>
                  {isActive ? 'Successfully Charged' : isCurrent ? 'Next Payment' : 'Scheduled'}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation19',
    content: `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function PaymentInformation19({ data }: { data: any }) {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setScanning(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-950 flex flex-col items-center justify-center relative overflow-hidden font-mono text-emerald-500">
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 to-transparent" />

      <div className="relative z-10 w-full max-w-md border border-emerald-900 bg-neutral-900/80 backdrop-blur p-8 rounded-2xl flex flex-col items-center shadow-[0_0_50px_rgba(16,185,129,0.1)] cursor-pointer" onClick={() => setScanning(true)}>
        
        <div className="relative w-32 h-32 flex items-center justify-center mb-8">
          <Scan size={64} className="text-emerald-700 absolute" />
          
          {scanning ? (
            <motion.div 
              className="absolute w-full h-full border-2 border-emerald-400 rounded-full border-t-transparent"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          ) : (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
              <CheckCircle2 size={80} className="text-emerald-400" />
            </motion.div>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-center">
          {scanning ? "Analyzing Risk Factors" : "Transaction Approved"}
        </h3>

        <div className="w-full space-y-4">
          <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2">
            <span>IP Geolocation</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'MATCH' : 'SCANNING...'}
            </span>
          </div>
          <div className="flex justify-between items-center border-b border-emerald-900/50 pb-2">
            <span>CVV Code</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'VERIFIED' : 'SCANNING...'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>Address AVS</span>
            <span className={!scanning ? 'text-white' : 'text-emerald-700 animate-pulse'}>
              {!scanning ? 'PASS' : 'SCANNING...'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
`
  },
  {
    name: 'PaymentInformation20',
    content: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Check } from 'lucide-react';

export default function PaymentInformation20({ data }: { data: any }) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = () => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => setState('success'), 2000);
    setTimeout(() => setState('idle'), 4000);
  };

  return (
    <div className="p-8 min-h-[500px] rounded-3xl bg-neutral-100 flex flex-col items-center justify-center relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-neutral-800">Action Morphs</h2>
        <p className="text-neutral-500">A button that morphs into its loading and success states.</p>
      </div>

      <motion.button
        onClick={handleClick}
        className="flex items-center justify-center font-bold text-white shadow-xl overflow-hidden relative"
        animate={{ 
          width: state === 'idle' ? 240 : state === 'loading' ? 64 : 64,
          height: 64,
          borderRadius: state === 'idle' ? 32 : 32,
          backgroundColor: state === 'idle' ? '#171717' : state === 'loading' ? '#2563eb' : '#10b981'
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.span 
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="whitespace-nowrap uppercase tracking-widest text-sm"
            >
              Confirm Payment
            </motion.span>
          )}
          
          {state === 'loading' && (
            <motion.div 
              key="loading"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 size={24} className="animate-spin" />
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div 
              key="success"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check size={32} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
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
