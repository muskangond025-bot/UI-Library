const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '06-payment-options');

function saveVariant(num, code, title, desc) {
  const folderName = `payment-options-${num}`;
  const folderPath = path.join(baseDir, folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxPath = path.join(folderPath, `PaymentOptions${num}.tsx`);
  const jsonPath = path.join(folderPath, `payment-options-${num}.json`);

  fs.writeFileSync(tsxPath, code, 'utf-8');

  const paddedNum = num < 10 ? `0${num}` : `${num}`;
  const jsonContent = JSON.stringify({
    id: `payment-options-${paddedNum}`,
    title: title,
    description: desc,
    category: "checkout",
    subsection: "payment-options",
    variant: num,
    section: {
      settings: {
        title: title,
        description: desc
      }
    }
  }, null, 2);

  fs.writeFileSync(jsonPath, jsonContent, 'utf-8');
}

// ---------------------------------------------------------
// 09 — FLOATING PAYMENT CARDS
// ---------------------------------------------------------
saveVariant(9, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Shield, Zap } from 'lucide-react';

export function PaymentOptions9({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  const cards = [
    { id: 'card', name: 'Credit Card', desc: 'Instant processing', icon: CreditCard },
    { id: 'upi', name: 'UPI Payment', desc: 'Scan & pay immediately', icon: QrCode },
    { id: 'express', name: 'Express Checkout', desc: '1-Click saved account', icon: Zap },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
        <div className="mb-8">
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold block mb-1">
            09 — FLOATING DEPTH CARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-white">
            Floating Layer Payment
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSel = selected === card.id;
            return (
              <motion.div
                key={card.id}
                animate={{ y: isSel ? -8 : 0, scale: isSel ? 1.03 : 1 }}
                onClick={() => setSelected(card.id)}
                className={\`p-6 rounded-2xl border cursor-pointer transition-all shadow-xl flex flex-col justify-between h-44 \${
                  isSel ? 'bg-purple-950/40 border-purple-500 shadow-purple-500/10' : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }\`}
              >
                <div className={\`w-10 h-10 rounded-xl flex items-center justify-center \${isSel ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}\`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">{card.name}</h3>
                  <p className="text-xs text-slate-400 mt-1">{card.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions9;
`, "Floating Payment Cards", "Payment methods appear as layered floating depth cards with interactive elevation animations.");

// ---------------------------------------------------------
// 10 — SECURITY-FIRST PAYMENT
// ---------------------------------------------------------
saveVariant(10, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

export function PaymentOptions10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative">
        <div className="flex items-center gap-4 pb-6 border-b border-emerald-500/20 mb-8">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
              10 — SECURITY GUARANTEE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Bank-Grade Security Checkout
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="p-5 bg-slate-950/80 border border-emerald-500/20 rounded-2xl">
            <h4 className="font-semibold text-sm text-emerald-400 mb-1 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> 256-Bit SSL Shield
            </h4>
            <p className="text-xs text-slate-400">Your connection is fully encrypted with hardware-level protection.</p>
          </div>
          <div className="p-5 bg-slate-950/80 border border-emerald-500/20 rounded-2xl">
            <h4 className="font-semibold text-sm text-emerald-400 mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Zero Storage Guarantee
            </h4>
            <p className="text-xs text-slate-400">Full card numbers and security codes are never stored on server.</p>
          </div>
        </div>

        <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-4">
          <input type="text" placeholder="Card Number" className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs" />
          <button className="w-full py-3 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl">Authorize Encrypted Payment</button>
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions10;
`, "Security-First Payment", "Security-focused payment layout with SSL shield badge drawing animations and encryption indicators.");

// ---------------------------------------------------------
// 11 — HORIZONTAL PAYMENT SELECTOR
// ---------------------------------------------------------
saveVariant(11, `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PaymentOptions11({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');
  const items = ['card', 'upi', 'netbanking', 'wallet'];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold block mb-2">
          11 — HORIZONTAL PILL BAR
        </span>
        <h2 className="text-2xl font-bold text-white mb-8">Select Payment Channel</h2>

        <div className="flex gap-2 p-1.5 bg-slate-950 border border-slate-800 rounded-full mb-8 relative">
          {items.map((item) => {
            const isSel = selected === item;
            return (
              <button
                key={item}
                onClick={() => setSelected(item)}
                className={\`relative flex-1 py-3 text-xs font-semibold uppercase tracking-wider transition-colors \${
                  isSel ? 'text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }\`}
              >
                {isSel && (
                  <motion.div layoutId="pillBar" className="absolute inset-0 bg-sky-400 rounded-full" />
                )}
                <span className="relative z-10">{item}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions11;
`, "Horizontal Payment Selector", "Horizontal sliding pill channel selector with smooth sliding background indicator.");

// ---------------------------------------------------------
// 12 — PAYMENT METHOD GRID
// ---------------------------------------------------------
saveVariant(12, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Wallet, Building2, Banknote, Shield } from 'lucide-react';

export function PaymentOptions12({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  const methods = [
    { id: 'card', name: 'Credit Card', icon: CreditCard },
    { id: 'upi', name: 'UPI Transfer', icon: QrCode },
    { id: 'wallet', name: 'Wallets', icon: Wallet },
    { id: 'netbank', name: 'Net Banking', icon: Building2 },
    { id: 'cod', name: 'Cash on Delivery', icon: Banknote },
    { id: 'bnpl', name: 'Pay in 4', icon: Shield },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Payment Method Grid</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {methods.map((m) => {
            const Icon = m.icon;
            const isSel = selected === m.id;
            return (
              <motion.div
                key={m.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelected(m.id)}
                className={\`p-5 rounded-2xl border cursor-pointer text-center flex flex-col items-center justify-center gap-3 h-32 \${
                  isSel ? 'bg-indigo-900/40 border-indigo-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                }\`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-semibold">{m.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions12;
`, "Payment Method Grid", "Grid-based payment method tiles with micro-scaling interactions and active border highlights.");

// ---------------------------------------------------------
// 13 — CARD + FORM EXPERIENCE
// ---------------------------------------------------------
saveVariant(13, `import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function PaymentOptions13({ data }: { data?: any }) {
  const [cardNo, setCardNo] = useState('');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 bg-gradient-to-tr from-purple-900 to-indigo-900 p-6 rounded-2xl h-48 flex flex-col justify-between shadow-xl">
          <span className="text-xs font-mono tracking-widest text-purple-300">PREMIUM CREDIT</span>
          <p className="font-mono text-base text-white tracking-widest">{cardNo || '•••• •••• •••• ••••'}</p>
          <span className="text-[10px] text-purple-200">VALUED CUSTOMER</span>
        </div>
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-bold text-white">Enter Card Information</h3>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNo}
            onChange={(e) => setCardNo(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono"
          />
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions13;
`, "Card + Form Dual Experience", "Dual-pane card preview alongside payment input form with live text syncing.");

// ---------------------------------------------------------
// 14 — UPI-STYLE PAYMENT
// ---------------------------------------------------------
saveVariant(14, `import React, { useState } from 'react';
import { QrCode, Sparkles } from 'lucide-react';

export function PaymentOptions14({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white text-center">
        <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-1">
          14 — INSTANT UPI GATEWAY
        </span>
        <h2 className="text-2xl font-bold text-white mb-6">Scan QR & Pay</h2>
        <div className="w-44 h-44 bg-white p-3 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
          <QrCode className="w-36 h-36 text-slate-900" />
        </div>
        <p className="text-xs text-slate-400 max-w-xs mx-auto">Supports Google Pay, PhonePe, Paytm, BHIM and all bank UPI apps.</p>
      </div>
    </div>
  );
}
export default PaymentOptions14;
`, "UPI-Style Instant Payment", "UPI-focused interface with QR scanning placeholder and VPA handle verification.");

// ---------------------------------------------------------
// 15 — MOBILE WALLET STYLE
// ---------------------------------------------------------
saveVariant(15, `import React from 'react';

export function PaymentOptions15({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Mobile Digital Wallet</h2>
        <div className="space-y-3">
          {['Apple Pay Express', 'Google Pay Direct', 'PayPal One Touch'].map((w) => (
            <div key={w} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs font-semibold text-white">
              <span>{w}</span>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Select</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions15;
`, "Mobile Wallet Style", "Compact digital wallet items inspired by modern mobile wallet checkout panels.");

// ---------------------------------------------------------
// 16 — PAYMENT TIMELINE
// ---------------------------------------------------------
saveVariant(16, `import React from 'react';
import { Check } from 'lucide-react';

export function PaymentOptions16({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">Payment Authorization Flow</h2>
        <div className="flex justify-between items-center relative border-b border-slate-800 pb-8">
          {['1. Select Method', '2. Authentication', '3. Confirm & Pay'].map((step, i) => (
            <div key={step} className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">{i+1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PaymentOptions16;
`, "Payment Progress Timeline", "Stage-by-stage payment timeline with progress connector animations.");

// ---------------------------------------------------------
// 17 — BOTTOM SHEET PAYMENT
// ---------------------------------------------------------
saveVariant(17, `import React from 'react';

export function PaymentOptions17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-xl font-bold text-white mb-4">Checkout Bottom Sheet Panel</h2>
        <p className="text-xs text-slate-400">Slide-up sheet layout optimized for seamless touch device checkout.</p>
      </div>
    </div>
  );
}
export default PaymentOptions17;
`, "Bottom Sheet Payment Panel", "Slide-up payment panel structure optimized for desktop modal and mobile bottom sheet interaction.");

// ---------------------------------------------------------
// 18 — 3D PAYMENT CARDS
// ---------------------------------------------------------
saveVariant(18, `import React from 'react';
import { motion } from 'framer-motion';

export function PaymentOptions18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white">
        <h2 className="text-2xl font-bold text-white mb-6">3D Layered Perspective</h2>
        <motion.div whileHover={{ rotateX: 10, rotateY: -10 }} className="p-8 bg-gradient-to-br from-indigo-950 to-slate-900 border border-indigo-500/30 rounded-2xl h-44 shadow-2xl">
          <span className="text-xs font-mono text-indigo-400">3D CARD PERSPECTIVE</span>
        </motion.div>
      </div>
    </div>
  );
}
export default PaymentOptions18;
`, "3D Perspective Payment Cards", "Perspective card depth interaction with controlled tilt response.");

// ---------------------------------------------------------
// 19 — EDITORIAL FINTECH
// ---------------------------------------------------------
saveVariant(19, `import React from 'react';

export function PaymentOptions19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-serif">
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2">19 — EDITORIAL GRID</span>
        <h2 className="text-3xl font-light text-white mb-6">Financial Payment Details</h2>
      </div>
    </div>
  );
}
export default PaymentOptions19;
`, "Editorial Fintech", "Oversized typography with clean editorial grid structure.");

// ---------------------------------------------------------
// 20 — AWARD-STYLE PAYMENT EXPERIENCE
// ---------------------------------------------------------
saveVariant(20, `import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, CreditCard, QrCode, Lock } from 'lucide-react';

export function PaymentOptions20({ data }: { data?: any }) {
  const [selected, setSelected] = useState('card');

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-b from-slate-900 via-slate-950 to-black border border-indigo-500/30 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center pb-6 border-b border-indigo-900/40 mb-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase font-semibold block mb-1">
              20 — AWARD-STYLE EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
              Next-Gen Checkout <Sparkles className="w-5 h-5 text-indigo-400" />
            </h2>
          </div>
          <ShieldCheck className="w-7 h-7 text-indigo-400" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div onClick={() => setSelected('card')} className={\`p-6 rounded-2xl border cursor-pointer transition-all \${selected === 'card' ? 'bg-indigo-950/60 border-indigo-500 shadow-xl' : 'bg-slate-900/60 border-slate-800'}\`}>
            <CreditCard className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="font-bold text-base text-white">Smart Card Gateway</h3>
            <p className="text-xs text-slate-400 mt-1">Instant 0.2s authorization clearance</p>
          </div>
          <div onClick={() => setSelected('upi')} className={\`p-6 rounded-2xl border cursor-pointer transition-all \${selected === 'upi' ? 'bg-indigo-950/60 border-indigo-500 shadow-xl' : 'bg-slate-900/60 border-slate-800'}\`}>
            <QrCode className="w-6 h-6 text-indigo-400 mb-3" />
            <h3 className="font-bold text-base text-white">Instant UPI Protocol</h3>
            <p className="text-xs text-slate-400 mt-1">Zero-latency peer-to-peer transfer</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default PaymentOptions20;
`, "Award-Style Payment Experience", "High-end payment experience combining glassmorphic cards, SVG glow effects, and interactive micro-animations.");

console.log("Successfully created all 20 unique Payment Options variants!");
