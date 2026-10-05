import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, MapPin, Check, Plus, Edit2, Trash2, Phone, User, Compass } from 'lucide-react';

export function AccountAddressBook4() {
  const [addresses, setAddresses] = useState([
    { id: '1', label: 'Primary Residence', type: 'Home', recipient: 'Alex Morgan', phone: '+1 (555) 234-5678', street: '124 Conch Street', city: 'Bikini Bottom', state: 'CA', zip: '90210', country: 'United States', isDefault: true },
    { id: '2', label: 'Design Studio', type: 'Work', recipient: 'Alex Morgan', phone: '+1 (555) 987-6543', street: '456 Creative Boulevard, Ste 300', city: 'Austin', state: 'TX', zip: '78701', country: 'United States', isDefault: false },
    { id: '3', label: 'Beach Haven', type: 'Other', recipient: 'Alex Morgan', phone: '+1 (555) 456-7890', street: '78 Shoreline Highway', city: 'Malibu', state: 'CA', zip: '90265', country: 'United States', isDefault: false }
  ]);
  const [selectedId, setSelectedId] = useState('1');

  const selectedAddress = addresses.find(a => a.id === selectedId) || addresses[0];

  const handleSetDefault = (id: string) => {
    setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === id })));
  };

  return (
    <section className="w-full min-h-[600px] bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-slate-800 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">Account &rarr; Addresses</span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">Saved Locations</h2>
          </div>
          <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
            <Plus className="w-4 h-4" /> Add Address
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-3">
            {addresses.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ x: 4 }}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                    isSelected 
                      ? 'bg-slate-800/90 border-indigo-500 shadow-xl shadow-indigo-500/10' 
                      : 'bg-slate-800/40 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${
                        item.type === 'Home' ? 'bg-emerald-500/10 text-emerald-400' :
                        item.type === 'Work' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'
                      }`}>
                        {item.type === 'Home' ? <Home className="w-4 h-4" /> : item.type === 'Work' ? <Briefcase className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{item.city}, {item.state}</p>
                      </div>
                    </div>
                    {item.isDefault && (
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        Default
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAddress.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 md:p-8 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {selectedAddress.type}
                      </span>
                      {selectedAddress.isDefault && (
                        <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                          <Check className="w-3.5 h-3.5" /> Primary Address
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-3">{selectedAddress.label}</h3>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-700/50 text-sm">
                  <div className="flex items-center gap-3 text-slate-300">
                    <User className="w-4 h-4 text-indigo-400" />
                    <span className="font-medium">{selectedAddress.recipient}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300">
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span>{selectedAddress.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Compass className="w-4 h-4 text-indigo-400 mt-0.5" />
                    <div>
                      <p>{selectedAddress.street}</p>
                      <p>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zip}</p>
                      <p className="text-slate-400 text-xs mt-1">{selectedAddress.country}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-700/50 flex justify-end">
                  {!selectedAddress.isDefault && (
                    <button
                      onClick={() => handleSetDefault(selectedAddress.id)}
                      className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-indigo-600 text-white text-xs font-semibold transition-all"
                    >
                      Set as Default Address
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountAddressBook4;
