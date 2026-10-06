import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Shield, CheckCircle2 } from 'lucide-react';

const mockData = {
  user: {
    name: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    tier: 'Platinum Elite Member',
    points: 3450,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  orders: [
    { id: '#DH-9941', name: 'Silk Trench & Leather Tote', status: 'In Transit', price: '$420.00', date: 'Oct 4, 2026' },
    { id: '#DH-8812', name: 'Minimalist Wool Blazer', status: 'Delivered', price: '$180.00', date: 'Sep 28, 2026' },
  ],
  saved: [
    { name: 'Italian Calfskin Boots', price: '$260.00', tag: '15% Off' },
    { name: 'Cashmere Knit Beanie', price: '$65.00', tag: 'In Stock' },
  ]
};

export const AccountOverview14: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'saved' | 'security'>('orders');

  return (
    <div className="w-full bg-[#0a0a0d] text-neutral-100 min-h-[750px] p-6 sm:p-10 font-sans border border-neutral-800 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left Column: Fixed Profile Panel (4 cols) */}
      <div className="lg:col-span-4 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-4 pb-6 border-b border-neutral-800">
            <img 
              src={mockData.user.avatar} 
              alt={mockData.user.name} 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/60 shadow-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-white">{mockData.user.name}</h2>
              <p className="text-xs text-neutral-400 font-mono mt-0.5">{mockData.user.email}</p>
            </div>
          </div>

          <div className="py-6 space-y-4">
            <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">TIER PRIVILEGE</span>
              <div className="text-base font-bold text-indigo-300 mt-0.5">{mockData.user.tier}</div>
            </div>

            <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800">
              <span className="text-[10px] font-mono text-neutral-400 uppercase">POINTS ACCUMULATION</span>
              <div className="text-2xl font-bold text-amber-300 font-mono mt-0.5">{mockData.user.points} PTS</div>
            </div>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="space-y-2 pt-6 border-t border-neutral-800">
          <button
            onClick={() => setActiveTab('orders')}
            className={`w-full p-3 text-xs font-mono rounded-xl text-left flex items-center gap-3 transition-colors ${activeTab === 'orders' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            <ShoppingBag className="w-4 h-4" /> Active Orders
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`w-full p-3 text-xs font-mono rounded-xl text-left flex items-center gap-3 transition-colors ${activeTab === 'saved' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            <Heart className="w-4 h-4" /> Saved Items
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`w-full p-3 text-xs font-mono rounded-xl text-left flex items-center gap-3 transition-colors ${activeTab === 'security' ? 'bg-indigo-600 text-white font-bold' : 'bg-neutral-950 text-neutral-400 hover:text-white'}`}
          >
            <Shield className="w-4 h-4" /> Security Settings
          </button>
        </div>
      </div>

      {/* Right Column: Sliding Active Content Panel (8 cols) */}
      <div className="lg:col-span-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'orders' && (
            <motion.div
              key="orders"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Recent Orders</h2>
              <div className="space-y-3">
                {mockData.orders.map((ord) => (
                  <div key={ord.id} className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="font-mono text-neutral-400">{ord.id}</span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{ord.name}</h4>
                      <span className="text-neutral-400">{ord.date}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-indigo-400 font-mono font-bold block">{ord.price}</span>
                      <span className="text-emerald-400 font-mono text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{ord.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'saved' && (
            <motion.div
              key="saved"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Saved Products</h2>
              <div className="space-y-3">
                {mockData.saved.map((item, idx) => (
                  <div key={idx} className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.name}</h4>
                      <span className="text-rose-400 font-mono text-[10px]">{item.tag}</span>
                    </div>
                    <span className="text-white font-mono font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'security' && (
            <motion.div
              key="security"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-white">Security & Passkey</h2>
              <div className="p-5 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-bold">Two-Factor Authentication</span>
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Enabled</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-bold">Passkey Login</span>
                  <span className="text-emerald-400 font-mono font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Active</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
