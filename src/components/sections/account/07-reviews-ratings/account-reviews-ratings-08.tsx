import React from 'react';

export function AccountReviewsRatings8() {
  const bars = [
    { stars: '5 Stars', count: 8, pct: '67%' },
    { stars: '4 Stars', count: 3, pct: '25%' },
    { stars: '3 Stars', count: 1, pct: '8%' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-16 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-white text-center">Your Rating Distribution</h2>
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
          {bars.map((b) => (
            <div key={b.stars} className="space-y-1">
              <div className="flex justify-between text-xs font-bold">
                <span>{b.stars} ({b.count})</span>
                <span className="text-amber-400">{b.pct}</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: b.pct }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings8;
