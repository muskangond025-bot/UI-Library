import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Truck, PackageCheck, ArrowRight, ChevronRight, User, ShoppingBag, MapPin, Heart } from 'lucide-react';

const slideInOrder = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  }
};

export function AccountOverview11() {
  return (
    <div className="w-full bg-slate-950 text-white p-6 md:p-12 min-h-[680px] flex items-center">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-mono text-indigo-400 uppercase">ACCOUNT HOME SNAPSHOT</span>
            <h1 className="text-2xl font-bold text-white mt-0.5">Welcome Back, Alex</h1>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400">Total Account Orders</span>
            <p className="text-lg font-bold text-white">12 Orders Placed</p>
          </div>
        </div>

        {/* Highlighted Order Card as Snapshot */}
        <motion.div
          variants={slideInOrder}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-slate-900 to-indigo-950/30 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
                <Truck className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    IN TRANSIT
                  </span>
                  <span className="text-xs text-slate-400">Placed Oct 02, 2026</span>
                </div>
                <h2 className="text-2xl font-bold text-white mt-1">Order #DH-28491</h2>
                <p className="text-xs text-slate-400 mt-0.5">3 Items • Total: $249.50 • Express Delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2">
                <span>TRACK SHIPMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Other Account Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400">WISHLIST</span>
              <p className="text-xl font-bold text-white mt-1">8 Saved Items</p>
            </div>
            <Heart className="w-6 h-6 text-pink-400" />
          </div>
          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400">ADDRESSES</span>
              <p className="text-xl font-bold text-white mt-1">3 Locations</p>
            </div>
            <MapPin className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400">REWARDS</span>
              <p className="text-xl font-bold text-amber-400 mt-1">1,250 Points</p>
            </div>
            <ShoppingBag className="w-6 h-6 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountOverview11;
