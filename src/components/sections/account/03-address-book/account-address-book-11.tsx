import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

export function AccountAddressBook11() {
  const [addresses, setAddresses] = useState([
    { id: '1', title: 'Main Home Address', recipient: 'Alex Morgan', details: '742 Evergreen Terrace, Springfield, IL 62704', isDefault: true },
    { id: '2', title: 'Work Office Address', recipient: 'Alex Morgan', details: '100 Innovation Way, Suite 400, San Francisco, CA 94105', isDefault: false }
  ]);

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  };

  const defaultAddress = addresses.find(a => a.isDefault);

  return (
    <section className="w-full min-h-[600px] bg-slate-950 text-white py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">Primary Location</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1">Default Shipping Address</h2>
        </div>

        {defaultAddress && (
          <motion.div
            layout
            className="p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border-2 border-emerald-500/50 shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase font-bold tracking-widest mb-4">
              <Star className="w-4 h-4 fill-emerald-400" /> Default Shipping Destination
            </div>

            <h3 className="text-2xl font-bold text-white">{defaultAddress.title}</h3>
            <p className="text-base text-slate-200 mt-2 font-medium">{defaultAddress.recipient}</p>
            <p className="text-sm text-slate-400 mt-1">{defaultAddress.details}</p>

            <div className="mt-6 pt-6 border-t border-emerald-500/20 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" /> Active for One-Click Delivery
              </span>
              <button className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold">
                Edit Default Address
              </button>
            </div>
          </motion.div>
        )}

        <div className="space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Other Saved Locations</h4>
          {addresses.filter(a => !a.isDefault).map((item) => (
            <div key={item.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <h5 className="font-bold text-white text-base">{item.title}</h5>
                <p className="text-xs text-slate-400 mt-0.5">{item.details}</p>
              </div>
              <button
                onClick={() => handleSetDefault(item.id)}
                className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white text-xs font-semibold transition-all border border-emerald-500/30"
              >
                Set as Default
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook11;
