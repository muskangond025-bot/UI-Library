import React from 'react';

export function AccountReviewsRatings5() {
  const steps = [
    { date: 'Sept 20, 2026', product: 'Nike Air Max Pulse', review: 'Great cushioning and build quality.' },
    { date: 'Aug 12, 2026', product: 'Leather Chronograph', review: 'Minimal design, very stylish.' }
  ];

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-white text-center">Submission Timeline</h2>
        <div className="pl-6 border-l-2 border-amber-500/30 space-y-8 ml-4">
          {steps.map((s) => (
            <div key={s.date} className="relative p-6 rounded-3xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase">{s.date}</span>
              <h3 className="text-lg font-bold text-white mt-1">{s.product}</h3>
              <p className="text-sm text-slate-300 mt-2">{s.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountReviewsRatings5;
