import React from 'react';
import { Package, Truck, Tag, ArrowRight } from 'lucide-react';

export const EmptyOrderHistory11: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-slate-100 text-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-10 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <Package className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">No Previous Orders</h2>
              <p className="text-slate-600 mb-8 max-w-md">Once you place an order, you can track delivery progress, request returns, and view invoices here.</p>
            </div>
            <button className="w-fit px-6 py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-colors flex items-center gap-2">
              <span>Start Shopping Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-between shadow-xl">
            <div>
              <Truck className="w-10 h-10 mb-4 text-cyan-300" />
              <h3 className="text-2xl font-bold mb-2">Express Shipping</h3>
              <p className="text-blue-100 text-sm">Free 2-day delivery on all first orders.</p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full w-fit mt-6">View Offer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyOrderHistory11;
