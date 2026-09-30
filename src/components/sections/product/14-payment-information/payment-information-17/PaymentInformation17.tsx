import React, { useState, useEffect } from 'react';
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
          className={`w-24 h-24 rounded-2xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ${connected ? 'bg-blue-900 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'bg-neutral-800 border-neutral-700 hover:border-neutral-500'}`}
          onClick={handleConnect}
        >
          {connected ? (
            <CheckCircle2 size={32} className="text-blue-400 mb-2" />
          ) : (
            <Wallet size={32} className="text-neutral-400 mb-2" />
          )}
          <span className={`text-xs font-bold ${connected ? 'text-white' : 'text-neutral-500'}`}>
            {connected ? '0x42...4F8' : 'CONNECT'}
          </span>
        </div>

      </div>
    </div>
  );
}
