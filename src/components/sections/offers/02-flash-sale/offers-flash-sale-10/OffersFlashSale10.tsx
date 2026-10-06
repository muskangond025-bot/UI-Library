import React from 'react';
import { Terminal, ArrowDownRight } from 'lucide-react';

export function OffersFlashSale10() {
  const ledger = [
    { ticker: 'NVDA-GPU-4090', name: 'NVIDIA RTX 4090 OC 24GB', msrp: '$1,599.00', sale: '$1,199.00', cut: '-25.02%', qty: '05' },
    { ticker: 'APPL-MAC-M3P', name: 'MACBOOK PRO M3 MAX 64GB', msrp: '$3,499.00', sale: '$2,799.00', cut: '-19.99%', qty: '02' },
    { ticker: 'SSNG-OLED-49', name: 'SAMSUNG 49" ODYSSEY OLED', msrp: '$1,799.00', sale: '$1,249.00', cut: '-30.57%', qty: '08' }
  ];

  return (
    <div className="w-full bg-black text-green-400 p-6 sm:p-10 font-mono rounded-none border border-green-500/40 shadow-2xl">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-green-500/30 pb-4 gap-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-400" />
            <h2 className="font-bold text-lg text-white">DIGITAL LEDGER // TERMINAL FLASH SALE</h2>
          </div>
          <div className="text-xs text-green-500 bg-green-950 px-3 py-1 border border-green-500/30">
            EXECUTION ENGINE: ACTIVE [TICK 240ms]
          </div>
        </div>

        {/* Ledger Table */}
        <div className="overflow-x-auto border border-green-500/30 bg-zinc-950">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-green-500/30 bg-green-950/40 text-green-300">
                <th className="p-3">TICKER</th>
                <th className="p-3">ASSET NAME</th>
                <th className="p-3">MSRP</th>
                <th className="p-3">BID / FLASH</th>
                <th className="p-3">DELTA</th>
                <th className="p-3">STOCK</th>
                <th className="p-3 text-right">EXECUTE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-500/20 text-zinc-300">
              {ledger.map((row, idx) => (
                <tr key={idx} className="hover:bg-green-950/30 transition-colors">
                  <td className="p-3 font-bold text-green-400">{row.ticker}</td>
                  <td className="p-3 text-white font-semibold">{row.name}</td>
                  <td className="p-3 line-through text-zinc-500">{row.msrp}</td>
                  <td className="p-3 font-bold text-green-400">{row.sale}</td>
                  <td className="p-3 text-red-400 flex items-center gap-1 font-bold">
                    <ArrowDownRight className="w-3.5 h-3.5" /> {row.cut}
                  </td>
                  <td className="p-3 text-amber-400 font-bold">{row.qty} UNITS</td>
                  <td className="p-3 text-right">
                    <button className="px-3 py-1 bg-green-500 hover:bg-green-400 text-black font-bold uppercase text-[11px] transition-colors">
                      BUY ORDER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default OffersFlashSale10;
