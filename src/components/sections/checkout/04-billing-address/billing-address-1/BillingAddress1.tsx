import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Receipt, FileText, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

export function BillingAddress1({ data }: { data?: any }) {
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [billingName, setBillingName] = useState('Alex Morgan');
  const [taxId, setTaxId] = useState('TAX-8942-US');
  const [street, setStreet] = useState('742 Evergreen Terrace');
  const [cityZip, setCityZip] = useState('Springfield, OR 97477');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 font-sans">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-10 text-stone-100 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-4 right-6 text-[10px] font-mono text-amber-500/40 hidden sm:block">
          REF: #INV-2026-8942
        </div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold mb-1">
              <Receipt className="w-3.5 h-3.5" /> 03 — FINANCIAL IDENTITY
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-100 tracking-tight">
              Invoice & Billing Address
            </h2>
          </div>
          <button
            onClick={() => setSameAsShipping(!sameAsShipping)}
            className={`px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
              sameAsShipping ? 'bg-amber-400 text-stone-950 font-bold border-amber-400 shadow-md' : 'bg-stone-800 text-stone-300 border-stone-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Same as Shipping Address</span>
          </button>
        </motion.div>

        {!sameAsShipping && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-8 space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Billing Account Name *</label>
                <div className="relative">
                  <input
                    type="text"
                    value={billingName}
                    onChange={(e) => setBillingName(e.target.value)}
                    className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                  />
                  <CreditCard className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">VAT / Tax Identification (Optional)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 pl-11 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                  />
                  <FileText className="w-4 h-4 text-stone-500 absolute left-4 top-3.5" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">Billing Street *</label>
                <input
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone-400 uppercase tracking-wider mb-2">City, State & ZIP *</label>
                <input
                  type="text"
                  value={cityZip}
                  onChange={(e) => setCityZip(e.target.value)}
                  className="w-full bg-stone-950/60 border border-stone-800 rounded-xl px-4 py-3 text-sm text-stone-100 focus:outline-none focus:border-amber-400 transition"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
          <span className="text-xs text-stone-400 font-mono">ENCRYPTED INVOICE VERIFIED</span>
          <button className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition flex items-center gap-2">
            Proceed to Payment <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default BillingAddress1;