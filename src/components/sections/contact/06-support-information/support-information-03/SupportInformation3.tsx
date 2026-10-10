import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, Phone, Mail, ArrowUpRight, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const SupportInformation3: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8 bg-yellow-50 text-slate-900 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-black text-yellow-300 font-bold px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-4">
            BRUTALIST TICKET DESK
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
            DIRECT SUPPORT ESCALATION MATRIX
          </h2>
          <p className="text-lg font-bold max-w-xl mx-auto">
            High contrast brutalist ticketing portal with instant response SLA guarantees
          </p>
        </div>

        {/* NEO-BRUTALIST HARD-SHADOW SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* SLA ESCALATION MATRIX */}
          <div className="lg:col-span-5 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase bg-yellow-300 border-2 border-black px-3 py-1 self-start inline-block mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>DIRECT SLA GUARANTEE</span>
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">GUARANTEED RESPONSE SPEEDS</h3>
              
              <div className="space-y-4 font-bold text-sm">
                <div className="p-4 bg-yellow-100 border-2 border-black">
                  <span className="text-xs uppercase font-black text-slate-600 block">Critical P1 Emergency</span>
                  <span className="text-xl font-black text-black">Response in &lt; 15 Mins</span>
                </div>
                <div className="p-4 bg-slate-100 border-2 border-black">
                  <span className="text-xs uppercase font-black text-slate-600 block">Billing & Refunds</span>
                  <span className="text-xl font-black text-black">Response in &lt; 1 Hour</span>
                </div>
                <div className="p-4 bg-slate-100 border-2 border-black">
                  <span className="text-xs uppercase font-black text-slate-600 block">General Inquiries</span>
                  <span className="text-xl font-black text-black">Response in &lt; 4 Hours</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-4 border-black mt-6">
              <a
                href="tel:+18005550199"
                className="w-full py-4 bg-black text-yellow-300 font-black uppercase text-base border-2 border-black flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Hotline Direct</span>
              </a>
            </div>
          </div>

          {/* BRUTALIST ESCALATION TICKET FORM */}
          <div className="lg:col-span-7 bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              <span>DISPATCH HIGH-PRIORITY TICKET</span>
            </h3>

            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} className="space-y-4">
              <div>
                <label className="block text-xs font-black uppercase mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="JOHN DOE"
                  className="w-full p-3 font-bold text-sm bg-slate-100 border-2 border-black focus:outline-none focus:bg-yellow-100"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="JOHN@EXAMPLE.COM"
                  className="w-full p-3 font-bold text-sm bg-slate-100 border-2 border-black focus:outline-none focus:bg-yellow-100"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Issue Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="DESCRIBE YOUR QUERY..."
                  className="w-full p-3 font-bold text-sm bg-slate-100 border-2 border-black focus:outline-none focus:bg-yellow-100"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-yellow-300 text-black font-black uppercase text-base border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-black" />
                    <span>TICKET DISPATCHED!</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT ESCALATION</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
