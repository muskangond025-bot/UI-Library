import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const mockLedger = {
  account: 'ALEX MORGAN // AUDIT ID #99201',
  balance: 3450,
  cashCredit: 35.00,
  ordersCount: 18,
  rows: [
    { id: 'TX-901', date: '2026-10-04', category: 'ORDER', desc: 'Denim Trench Jacket (#DH-9941)', status: 'IN TRANSIT', amount: '-$240.00' },
    { id: 'TX-902', date: '2026-10-02', category: 'REWARD', desc: 'Loyalty Bonus Points Deposit', status: 'CREDITED', amount: '+500 PTS' },
    { id: 'TX-903', date: '2026-09-28', category: 'REVIEW', desc: 'Verified 5-Star Product Rating', status: 'COMPLETED', amount: '+100 PTS' },
    { id: 'TX-904', date: '2026-09-25', category: 'REFUND', desc: 'Returned Wool Beanie Item', status: 'SETTLED', amount: '+$65.00' },
  ]
};

export const AccountOverview9: React.FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = mockLedger.balance;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounter(end);
        clearInterval(timer);
      } else {
        setCounter(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#080b0e] text-[#4af626] min-h-[750px] p-6 sm:p-10 font-mono border border-[#4af626]/30 rounded-3xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-[#4af626]/30 mb-8 gap-4">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#4af626]/70">DATA LEDGER TERMINAL v3</span>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wider">{mockLedger.account}</h1>
        </div>

        <div className="px-3 py-1.5 bg-[#4af626]/10 border border-[#4af626]/40 text-xs text-[#4af626] rounded-md font-bold">
          STATUS: AUDITED & ACTIVE
        </div>
      </div>

      {/* Counter Stat Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">REWARD POINTS LEDGER</div>
          <div className="text-4xl font-bold text-[#4af626] mt-2 tracking-tight">
            {counter.toLocaleString()} <span className="text-xs text-neutral-400 font-normal">PTS</span>
          </div>
          <div className="text-[11px] text-neutral-400 mt-2">+$35.00 cash credit equivalent</div>
        </div>

        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">TOTAL ORDERS RECORDED</div>
          <div className="text-4xl font-bold text-white mt-2 tracking-tight">
            {mockLedger.ordersCount} <span className="text-xs text-neutral-400 font-normal">ORDERS</span>
          </div>
          <div className="text-[11px] text-emerald-400 mt-2">1 shipment arriving today</div>
        </div>

        <div className="p-6 bg-neutral-950 border border-[#4af626]/30 rounded-2xl">
          <div className="text-xs text-neutral-400">WISHLIST LEDGER VALUE</div>
          <div className="text-4xl font-bold text-amber-300 mt-2 tracking-tight">
            $2,840.00
          </div>
          <div className="text-[11px] text-neutral-400 mt-2">14 saved archive items</div>
        </div>
      </div>

      {/* Structured Ledger Table */}
      <div className="bg-neutral-950 border border-[#4af626]/30 rounded-2xl overflow-hidden">
        <div className="p-4 bg-neutral-900 border-b border-[#4af626]/30 flex justify-between items-center text-xs font-bold text-neutral-300">
          <span>RECENT TRANSACTION AUDIT LOG</span>
          <span>4 RECORDS SHOWN</span>
        </div>

        <div className="divide-y divide-neutral-900">
          {mockLedger.rows.map((row) => (
            <motion.div 
              key={row.id}
              whileHover={{ backgroundColor: 'rgba(74,246,38,0.05)' }}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-3 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-neutral-500 font-bold">{row.id}</span>
                <span className="text-neutral-400">{row.date}</span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded text-[10px]">
                  {row.category}
                </span>
                <span className="text-white font-medium">{row.desc}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="px-2 py-0.5 bg-[#4af626]/10 text-[#4af626] rounded text-[10px]">
                  {row.status}
                </span>
                <span className="font-bold text-white w-24 text-right">{row.amount}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
