import React, { useState } from 'react';

export function AccountNotificationPreferences2() {
  const [matrix, setMatrix] = useState<Record<string, Record<string, boolean>>>({
    orders: { push: true, email: true, sms: true, whatsapp: false },
    promotions: { push: false, email: true, sms: false, whatsapp: false },
    priceDrops: { push: true, email: false, sms: false, whatsapp: false }
  });

  const toggleCell = (topic: string, channel: string) => {
    setMatrix(prev => ({
      ...prev,
      [topic]: { ...prev[topic], [channel]: !prev[topic][channel] }
    }));
  };

  return (
    <section className="w-full min-h-[650px] bg-slate-900 text-white py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Multi-Channel Control</span>
          <h2 className="text-3xl font-extrabold">Notification Channel Matrix</h2>
        </div>

        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 overflow-x-auto shadow-2xl">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-5 gap-4 pb-4 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
              <span className="text-left text-white">Topic</span>
              <span>Push</span>
              <span>Email</span>
              <span>SMS</span>
              <span>WhatsApp</span>
            </div>

            {[
              { id: 'orders', label: 'Order Updates' },
              { id: 'promotions', label: 'Promotions' },
              { id: 'priceDrops', label: 'Price Drops' }
            ].map((row) => (
              <div key={row.id} className="grid grid-cols-5 gap-4 py-4 border-b border-slate-900 items-center text-center">
                <span className="text-left font-bold text-white text-sm">{row.label}</span>
                {['push', 'email', 'sms', 'whatsapp'].map((ch) => (
                  <button
                    key={ch}
                    onClick={() => toggleCell(row.id, ch)}
                    className={'w-6 h-6 mx-auto rounded-lg border transition-all flex items-center justify-center ' + (matrix[row.id][ch] ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'bg-slate-900 border-slate-800')}
                  >
                    {matrix[row.id][ch] && <span className="font-bold text-xs">✓</span>}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountNotificationPreferences2;
