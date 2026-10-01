import React, { useState } from 'react';
import { Ticket, X } from 'lucide-react';

export interface CartOffers18Props { data?: { heading?: string; description?: string; offers?: any[]; }; }

export const CartOffers18: React.FC<CartOffers18Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-10 px-4 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-md mx-auto mb-6">
        <h2 className="text-xl font-bold">{data?.heading || "18. Interactive Coupon Drawer Offers"}</h2>
      </div>
      <div className="max-w-md mx-auto bg-white dark:bg-slate-900 border rounded-3xl p-6 shadow-sm">
        <button onClick={() => setOpen(!open)} className="w-full py-4 bg-indigo-600 text-white font-bold text-xs rounded-2xl flex items-center justify-center gap-2 shadow-md">
          <Ticket className="w-4 h-4" /> View All Available Vouchers ({open ? "Close" : "Open"})
        </button>

        {open && (
          <div className="mt-4 pt-4 border-t space-y-2 text-xs">
            <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex justify-between items-center">
              <div><span className="font-bold block">FESTIVE20</span><span className="text-slate-500">20% OFF</span></div>
              <button className="px-3 py-1 bg-indigo-600 text-white font-bold text-[10px] rounded-lg">Apply</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
