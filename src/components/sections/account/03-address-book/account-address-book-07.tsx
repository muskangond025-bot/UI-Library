import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function AccountAddressBook7() {
  const [addresses, setAddresses] = useState([
    { id: '1', title: 'PRIMARY HOME', recipient: 'Alex Morgan', details: '742 Evergreen Terrace, Springfield, IL 62704', default: true },
    { id: '2', title: 'WORK OFFICE', recipient: 'Alex Morgan', details: '100 Innovation Way, Ste 400, San Francisco, CA 94105', default: false },
    { id: '3', title: 'WAREHOUSE DROP', recipient: 'Alex Morgan', details: '88 Ocean Drive, Miami, FL 33139', default: false }
  ]);

  return (
    <section className="w-full min-h-[600px] bg-white text-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-8 mb-4 border-b border-gray-100">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Account Address Directory</span>
            <h2 className="text-2xl font-light text-gray-900 mt-1 tracking-tight">Saved Addresses</h2>
          </div>
          <button className="px-4 py-2 border border-gray-900 text-xs uppercase tracking-widest font-semibold hover:bg-gray-900 hover:text-white transition-all">
            + New Address
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {addresses.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8 group flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">{item.title}</span>
                  {item.default && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-gray-100 text-gray-700">
                      DEFAULT
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{item.recipient}</h3>
                <p className="text-sm text-gray-500 font-light">{item.details}</p>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold tracking-wider">
                <button className="text-gray-400 hover:text-gray-900 transition-colors uppercase">Edit</button>
                {!item.default && (
                  <button
                    onClick={() => setAddresses(prev => prev.map(a => ({ ...a, default: a.id === item.id })))}
                    className="text-gray-400 hover:text-gray-900 transition-colors uppercase"
                  >
                    Set Default
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook7;
