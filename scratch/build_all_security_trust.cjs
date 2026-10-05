const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'src', 'components', 'sections', 'checkout', '10-security-trust');

function createTSX(code) {
  return `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, CheckCircle2, ShieldAlert, Key, FileText, Award, 
  Sparkles, RefreshCw, Zap, Check, Layers, Activity, Fingerprint, 
  ChevronDown, ChevronUp, ArrowRight, Eye, CheckCircle, Server, CreditCard
} from 'lucide-react';

${code}
`;
}

const variantsCode = {};

// 1. Encrypted Shield Badge — Pulse & Radar Ripple
variantsCode[1] = `export function CheckoutSecurityTrust1({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center relative overflow-hidden">
      {/* Pulse Rings */}
      <div className="flex justify-center items-center my-6 relative">
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute w-24 h-24 rounded-full bg-emerald-500/20 border border-emerald-500/40"
        />
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 relative z-10 shadow-lg shadow-emerald-500/20">
          <ShieldCheck className="w-8 h-8" />
        </div>
      </div>

      <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
        256-BIT SSL ENCRYPTION VERIFIED
      </span>
      <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">100% Bank-Grade Safe & Secure</h2>
      <p className="text-xs text-slate-400 max-w-md mx-auto mb-6">
        Your data is encrypted using military-grade AES 256-bit SSL technology. We never store full credit card details.
      </p>

      <div className="flex flex-wrap justify-center gap-3 text-xs">
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <Lock className="w-3.5 h-3.5 text-emerald-400" /> PCI-DSS Level 1
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Money-Back Guarantee
        </span>
        <span className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1.5 font-medium">
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" /> Instant Fraud Guard
        </span>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust1;`;

// 2. 4-Point Trust Grid — Staggered Tile Reveal
variantsCode[2] = `export function CheckoutSecurityTrust2({ data }: { data?: any }) {
  const points = [
    { icon: Lock, title: '256-Bit SSL Encryption', desc: 'Bank-level encrypted payment pipeline' },
    { icon: Award, title: 'Buyer Protection', desc: '100% money-back refund guarantee' },
    { icon: RefreshCw, title: 'Instant Returns', desc: 'Hassle-free 30-day return policy' },
    { icon: Zap, title: 'Fraud Monitoring', desc: 'Real-time AI threat detection' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-6 sm:p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">SECURITY GUARANTEES</span>
        <h2 className="text-2xl font-bold text-white">Why Your Purchase is 100% Safe</h2>
      </div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {points.map((p, idx) => {
          const IconComp = p.icon;
          return (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3">
                <IconComp className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{p.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust2;`;

// 3. Minimal Trust Banner — Sliding Security Ticker
variantsCode[3] = `export function CheckoutSecurityTrust3({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-4 sm:p-6 bg-slate-900 text-slate-100 rounded-2xl border border-slate-800 shadow-xl font-sans">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white font-bold">SECURE CONNECTION ACTIVE</span>
        </div>
        <div className="flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-emerald-400" /> SSL 256-BIT</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> PCI LEVEL 1</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> VERIFIED</span>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust3;`;

// 4. Split Security Guarantee — Opposite Side Slide
variantsCode[4] = `export function CheckoutSecurityTrust4({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-5 p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 rounded-3xl border border-indigo-800/60 text-white flex flex-col justify-between shadow-2xl"
      >
        <div>
          <ShieldCheck className="w-10 h-10 text-emerald-400 mb-4" />
          <span className="text-xs font-mono font-bold text-indigo-300 uppercase tracking-widest block mb-1">CERTIFIED PROTECTION</span>
          <h3 className="text-2xl font-extrabold mb-2">Checkout Protection Guarantee</h3>
          <p className="text-xs text-indigo-200/80 leading-relaxed">Transactions are protected by AES 256-bit encryption and backed by our money-back guarantee.</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:col-span-7 p-8 bg-slate-900 rounded-3xl border border-slate-800 text-slate-100 flex flex-col justify-between shadow-2xl"
      >
        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Our Trust Commitments</h4>
        <div className="space-y-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Full refund if your item does not arrive or is damaged</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>Encrypted zero-knowledge payment transmission</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center gap-3">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>24/7 dedicated customer support response team</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust4;`;

// 5. Interactive Security Accordion — Layout Height Transition
variantsCode[5] = `export function CheckoutSecurityTrust5({ data }: { data?: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto my-6 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center bg-slate-800/60 hover:bg-slate-800 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <div>
            <h3 className="text-sm font-bold text-white">How is your payment secured?</h3>
            <p className="text-xs text-slate-400">Click to inspect our encryption & compliance standards</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="p-6 border-t border-slate-800 space-y-3 text-xs text-slate-300"
          >
            <p><strong>1. AES 256-Bit SSL:</strong> All traffic sent through this checkout form is encrypted using end-to-end socket security protocol.</p>
            <p><strong>2. PCI Level 1 Certified:</strong> We adhere to the highest international payment card industry compliance frameworks.</p>
            <p><strong>3. Zero Storage Policy:</strong> Full credit card numbers are tokenized and never stored on our local web servers.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default CheckoutSecurityTrust5;`;

// 6. Trust Timeline Flow — SVG Connecting Line Draw
variantsCode[6] = `export function CheckoutSecurityTrust6({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans relative">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">PROTECTION PIPELINE</span>
        <h3 className="text-xl font-bold text-white">Security Workflow</h3>
      </div>

      <div className="relative pl-8 space-y-6">
        <svg className="absolute left-3 top-2 bottom-2 w-0.5 h-[80%]" overflow="visible">
          <motion.line 
            x1="0" y1="0" x2="0" y2="100%" 
            stroke="rgb(16, 185, 129)" strokeWidth="2" strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1 }}
          />
        </svg>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center">1</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <span className="font-bold text-white">256-Bit SSL Encryption</span>
            <p className="text-slate-400">Data encrypted prior to transmission</p>
          </div>
        </div>

        <div className="relative">
          <span className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-emerald-500 text-black font-bold text-xs flex items-center justify-center">2</span>
          <div className="p-3 bg-slate-900 rounded-xl border border-emerald-500/40 text-xs">
            <span className="font-bold text-emerald-300">Tokenized Payment Processing</span>
            <p className="text-slate-400">Card details converted to secure token</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust6;`;

// 7. Horizontal Badge Carousel — Snap Selection Motion
variantsCode[7] = `export function CheckoutSecurityTrust7({ data }: { data?: any }) {
  const [selected, setSelected] = useState(0);
  const badges = [
    { title: 'SSL ENCRYPTED', desc: '256-Bit Security' },
    { title: 'BUYER PROTECTION', desc: '100% Refund Guarantee' },
    { title: 'PCI LEVEL 1', desc: 'Certified Gateway' },
    { title: 'FRAUD GUARD AI', desc: 'Real-time Monitoring' }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="mb-6 flex justify-between items-center">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security Badges Carousel
        </h3>
        <span className="text-xs text-slate-400">Tap to inspect</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {badges.map((b, idx) => {
          const isActive = selected === idx;
          return (
            <motion.div
              key={idx}
              onClick={() => setSelected(idx)}
              className={\`flex-shrink-0 w-52 p-4 rounded-2xl border cursor-pointer transition-all bg-slate-800/60 \${isActive ? 'border-emerald-400 bg-slate-800 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400' : 'border-slate-700/60'}\`}
            >
              <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
              <h4 className="text-xs font-extrabold text-white mb-1 font-mono">{b.title}</h4>
              <p className="text-[11px] text-slate-400">{b.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust7;`;

// 8. Premium Dark Vault — Glow Ring Pulse
variantsCode[8] = `export function CheckoutSecurityTrust8({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-neutral-950 text-neutral-100 rounded-3xl border border-emerald-500/30 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">VAULT PROTECTION</span>
          <h3 className="text-xl font-bold text-white">Payment Security Vault</h3>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> FULLY SECURED
        </span>
      </div>

      <motion.div 
        whileHover={{ boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)' }}
        className="p-6 rounded-2xl bg-neutral-900 border border-emerald-500/40 flex justify-between items-center"
      >
        <div className="flex items-center gap-4">
          <Lock className="w-8 h-8 text-emerald-400" />
          <div>
            <h4 className="text-base font-extrabold text-white">End-to-End Encrypted</h4>
            <p className="text-xs text-neutral-400">Zero raw card storage on web servers</p>
          </div>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-neutral-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
          AES-256
        </span>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust8;`;

// 9. 3D Security Certificate — Perspective Rotation Tilt
variantsCode[9] = `export function CheckoutSecurityTrust9({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans perspective-1000">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">3D PERSPECTIVE VAULT</span>
        <h3 className="text-xl font-bold text-white">Security Certificate</h3>
      </div>

      <motion.div 
        whileHover={{ rotateX: -6, rotateY: 5, scale: 1.02 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 border border-emerald-500/40 shadow-2xl flex items-center justify-between cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flex items-center gap-4">
          <ShieldCheck className="w-10 h-10 text-emerald-400" />
          <div>
            <span className="text-xs font-mono font-bold text-emerald-300 block mb-1">CERTIFICATE #SSL-2026</span>
            <h4 className="text-lg font-extrabold text-white">Verified PCI Level 1 Compliant</h4>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-emerald-500 text-black rounded-xl text-xs font-extrabold">Active</span>
      </motion.div>
    </div>
  );
}
export default CheckoutSecurityTrust9;`;

// 10. Live Fraud Monitor — Animated Status Wave
variantsCode[10] = `export function CheckoutSecurityTrust10({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">REAL-TIME MONITORING</span>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" /> Live Fraud Prevention Status
          </h3>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
          99.99% SECURE
        </span>
      </div>

      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
        <div className="space-y-1">
          <p className="font-bold text-white">AI Threat Detection System</p>
          <p className="text-slate-400">Zero active threats detected on this session</p>
        </div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-3 h-3 rounded-full bg-emerald-400"
        />
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust10;`;

// 11. Progress Safety Meter — SVG Ring Fill
variantsCode[11] = `export function CheckoutSecurityTrust11({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-2">SAFETY SCORE METER</span>
      <h3 className="text-xl font-bold text-white mb-6">100% Protection Rating</h3>

      <div className="relative w-32 h-32 mx-auto flex items-center justify-center mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path className="text-slate-800" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <motion.path 
            className="text-emerald-400"
            strokeWidth="3" strokeDasharray="100, 100" strokeLinecap="round" stroke="currentColor" fill="none" 
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            initial={{ strokeDasharray: "0, 100" }}
            animate={{ strokeDasharray: "100, 100" }}
            transition={{ duration: 1 }}
          />
        </svg>
        <span className="absolute text-xl font-extrabold font-mono text-white">100%</span>
      </div>

      <p className="text-xs text-slate-400">All 4 mandatory security checks verified for this checkout session.</p>
    </div>
  );
}
export default CheckoutSecurityTrust11;`;

// 12. Stacked Security Badges — Layer Unstack Motion
variantsCode[12] = `export function CheckoutSecurityTrust12({ data }: { data?: any }) {
  const [unstacked, setUnstacked] = useState(false);
  const badges = [
    { title: 'PCI-DSS LEVEL 1 COMPLIANCE', desc: 'Highest global merchant payment standard' },
    { title: '256-BIT SSL TLS ENCRYPTION', desc: 'End-to-end encrypted web transmission' },
    { title: 'BUYER PROTECTION PROMISE', desc: '100% Money-back refund guarantee' }
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">INTERACTIVE SECURITY STACK</span>
        <h3 className="text-xl font-bold text-white">Security Badges Stack</h3>
        <button onClick={() => setUnstacked(!unstacked)} className="text-xs text-emerald-400 hover:underline mt-1">
          {unstacked ? 'Collapse Badges' : 'Click to Unstack Badges'}
        </button>
      </div>

      <div className="relative min-h-[160px] flex justify-center items-center">
        {badges.map((b, idx) => (
          <motion.div
            key={idx}
            animate={{ 
              y: unstacked ? idx * 60 : idx * 8, 
              rotate: unstacked ? 0 : (idx - 1) * -4,
              opacity: 1 
            }}
            className="absolute w-full max-w-md p-4 rounded-2xl border border-slate-700 bg-slate-900 text-left shadow-xl"
            style={{ zIndex: 10 - idx }}
          >
            <div className="flex items-center gap-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-white">{b.title}</h4>
                <p className="text-[11px] text-slate-400">{b.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust12;`;

// 13. Receipt Security Stamp — Rubber Stamp Drop Reveal
variantsCode[13] = `export function CheckoutSecurityTrust13({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-md mx-auto my-6 p-8 bg-stone-900 text-stone-100 rounded-2xl border border-stone-800 font-mono shadow-2xl relative overflow-hidden">
      <div className="text-center pb-4 border-b border-dashed border-stone-700 mb-6">
        <h4 className="text-sm font-bold text-stone-300">CHECKOUT SECURITY GUARANTEE</h4>
      </div>

      <motion.div 
        initial={{ scale: 1.5, opacity: 0, rotate: -12 }}
        animate={{ scale: 1, opacity: 1, rotate: -6 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="p-4 rounded-xl border-2 border-emerald-500 text-emerald-400 text-center font-bold tracking-widest my-4"
      >
        ✓ 100% SECURE CHECKOUT VERIFIED
      </motion.div>

      <p className="text-[11px] text-stone-400 text-center">Encrypted by AES 256-Bit SSL • Guaranteed Safe Session</p>
    </div>
  );
}
export default CheckoutSecurityTrust13;`;

// 14. Floating Security Banner — Elevated Depth Rise
variantsCode[14] = `export function CheckoutSecurityTrust14({ data }: { data?: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto my-6 p-6 sm:p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-slate-700/60 shadow-2xl backdrop-blur-2xl font-sans"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold text-emerald-400 block mb-0.5">ELEVATED SECURITY BANNER</span>
            <h4 className="text-base font-bold text-white">256-Bit End-to-End Encrypted Session</h4>
          </div>
        </div>
        <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
          ACTIVE
        </span>
      </div>
    </motion.div>
  );
}
export default CheckoutSecurityTrust14;`;

// 15. Icon-Led Security Selector — Icon Morph Response
variantsCode[15] = `export function CheckoutSecurityTrust15({ data }: { data?: any }) {
  const [active, setActive] = useState(0);
  const items = [
    { icon: Lock, label: 'SSL 256-BIT', desc: 'Encrypted socket transmission' },
    { icon: ShieldCheck, label: 'BUYER PROTECT', desc: 'Full refund guarantee' },
    { icon: Award, label: 'PCI LEVEL 1', desc: 'Global compliance rating' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <h3 className="text-lg font-bold text-white mb-6 text-center">Security Category Selector</h3>
      <div className="flex justify-center gap-4 mb-6">
        {items.map((it, idx) => {
          const IconComp = it.icon;
          const isSelected = active === idx;
          return (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={\`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all \${isSelected ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'}\`}
            >
              <IconComp className="w-6 h-6" />
              <span className="text-xs font-bold">{it.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-center text-xs text-slate-300">
        <strong className="text-emerald-400 block mb-1">{items[active].label} SPECIFICATION:</strong>
        {items[active].desc}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust15;`;

// 16. Security Seal Matrix — Sequential Grid Flash
variantsCode[16] = `export function CheckoutSecurityTrust16({ data }: { data?: any }) {
  const seals = ['VISA SECURE', 'MASTERCARD ID', 'AMEX SAFE', 'NORTON VERIFIED', 'SSL 256-BIT', 'PCI CERTIFIED'];

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 sm:p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans">
      <div className="text-center mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">PARTNER VERIFICATION</span>
        <h3 className="text-xl font-bold text-white">Security Seal Matrix</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {seals.map((s, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 text-center text-xs font-mono font-bold text-slate-300 hover:text-emerald-300 transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>{s}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust16;`;

// 17. Buyer Protection Guarantee — Animated SVG Checkmark
variantsCode[17] = `export function CheckoutSecurityTrust17({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-900 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <motion.path 
            d="M5 13l4 4L19 7" 
            strokeLinecap="round" strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.6 }}
          />
        </svg>
      </div>

      <span className="text-xs font-mono text-emerald-400 font-bold block mb-1 uppercase tracking-wider">BUYER PROTECTION ACTIVE</span>
      <h3 className="text-2xl font-extrabold text-white mb-2">100% Satisfaction Guarantee</h3>
      <p className="text-xs text-slate-400 max-w-md mx-auto">
        If your order is damaged, lost in transit, or not as described, you are covered by our full purchase refund guarantee.
      </p>
    </div>
  );
}
export default CheckoutSecurityTrust17;`;

// 18. Biometric Passkey Security — Touch ID Pulse
variantsCode[18] = `export function CheckoutSecurityTrust18({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl font-sans text-center">
      <div className="mb-6">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">BIOMETRIC PASSKEY CONCEPT</span>
        <h3 className="text-xl font-bold text-white">Tokenized Authentication</h3>
      </div>

      <div className="relative w-20 h-20 mx-auto flex items-center justify-center mb-4">
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-emerald-500/30 border border-emerald-500/50"
        />
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-emerald-500/50 flex items-center justify-center text-emerald-400 relative z-10">
          <Fingerprint className="w-8 h-8" />
        </div>
      </div>

      <p className="text-xs font-mono text-emerald-300 font-bold">PASSKEY VERIFIED • TOKEN: #TK-8842-SEC</p>
    </div>
  );
}
export default CheckoutSecurityTrust18;`;

// 19. Editorial Security Section — Dual Motion System
variantsCode[19] = `export function CheckoutSecurityTrust19({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 sm:p-12 bg-neutral-900 text-neutral-100 rounded-3xl border border-neutral-800 font-serif shadow-2xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6 border-b border-neutral-800 pb-4"
      >
        <span className="text-xs font-sans text-emerald-400 uppercase tracking-widest font-bold block mb-1">EDITORIAL TRUST</span>
        <h2 className="text-3xl font-normal italic text-white">Safe & Secure Purchasing</h2>
      </motion.div>

      <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-lg">
        Every transaction processed on our checkout infrastructure undergoes 256-bit encryption and complies with international PCI-DSS Level 1 safety protocols.
      </p>
    </div>
  );
}
export default CheckoutSecurityTrust19;`;

// 20. Award-Style Security Masterpiece — Glassmorphic Ambient Glow
variantsCode[20] = `export function CheckoutSecurityTrust20({ data }: { data?: any }) {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-8 bg-slate-900/90 text-slate-100 rounded-3xl border border-emerald-500/30 shadow-2xl backdrop-blur-2xl relative overflow-hidden font-sans">
      <div className="bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl absolute -top-12 -right-12 w-64 h-64 pointer-events-none" />

      <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">VERIFIED SAFETY SUITE</span>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" /> Award Security Masterpiece
          </h2>
        </div>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold rounded-full flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 100% SECURE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
          <Lock className="w-5 h-5 text-emerald-400 mb-2" />
          <h4 className="text-xs font-bold text-white font-mono">256-Bit SSL</h4>
          <p className="text-[11px] text-slate-400">Encrypted socket stream</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
          <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
          <h4 className="text-xs font-bold text-white font-mono">Buyer Protection</h4>
          <p className="text-[11px] text-slate-400">Full money-back guarantee</p>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-2" />
          <h4 className="text-xs font-bold text-white font-mono">PCI Level 1</h4>
          <p className="text-[11px] text-slate-400">Merchant compliance tier</p>
        </div>
      </div>
    </div>
  );
}
export default CheckoutSecurityTrust20;`;

// Write all 20
for (let i = 1; i <= 20; i++) {
  const folder = path.join(baseDir, `checkout-security-trust-${i}`);
  if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });
  fs.writeFileSync(path.join(folder, `CheckoutSecurityTrust${i}.tsx`), createTSX(variantsCode[i]), 'utf-8');
}
console.log("All 20 Security Trust TSX components written successfully!");
