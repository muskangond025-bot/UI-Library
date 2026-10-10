import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, CheckCircle2, ShieldCheck, Send, Clock, Globe, Sparkles } from 'lucide-react';

export function ContactHero1({ data, section }: { data?: any; section?: any }) {
  const settings = section?.settings || data?.settings || data || {};
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="w-full min-h-[700px] py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50 text-slate-900 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Top Header Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-5 py-2 bg-indigo-100 border-indigo-300 text-indigo-700 flex items-center gap-2.5 text-xs font-mono font-extrabold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            GLASSMORPHIC LIGHT #01 • BRIGHT LIGHT
          </motion.div>
        </div>

        {/* Hero Title & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {settings.title || 'Connect With Our Strategy Team'}
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-wider uppercase opacity-80 font-bold">
                {settings.subtitle || 'GLASSMORPHISM LIGHT EXPERIMENTAL DESIGN'}
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-xl leading-relaxed opacity-90 max-w-xl"
            >
              We respond to every enterprise inquiry within 15 minutes guaranteed. Choose your preferred communication channel below.
            </motion.p>

            {/* Quick Contact Info Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-2"
            >
              <div className="p-4 rounded-2xl bg-white/40 border border-gray-200/80 backdrop-blur-md flex items-center gap-3">
                <Clock className="w-5 h-5 shrink-0" />
                <div>
                  <div className="text-xs font-bold font-mono">15-MIN RESPONSE</div>
                  <div className="text-[11px] opacity-70 font-mono">24/7 SLA Guarantee</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/40 border border-gray-200/80 backdrop-blur-md flex items-center gap-3">
                <Globe className="w-5 h-5 shrink-0" />
                <div>
                  <div className="text-xs font-bold font-mono">GLOBAL HUBS</div>
                  <div className="text-[11px] opacity-70 font-mono">SF • London • Tokyo</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative p-8 sm:p-10 bg-white/70 border-2 border-indigo-200/60 shadow-[0_20px_50px_rgba(99,102,241,0.12)] backdrop-blur-xl rounded-[2.5rem] space-y-6"
          >
            <div className="flex items-center justify-between border-b border-gray-300/40 pb-4">
              <div>
                <h3 className="text-xl font-black">Send Priority Message</h3>
                <p className="text-xs font-mono opacity-70 mt-0.5">Glassmorphism Light Component Architecture</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-500/20 border border-emerald-500 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold font-mono">MESSAGE CONFIRMED</h4>
                <p className="text-xs font-mono">Thank you, {formData.name}! Our team will contact you at {formData.email} within 15 minutes.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-80">Full Name</label>
                  <div className="flex items-center px-4 py-3 bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-within:border-indigo-500 rounded-2xl transition-all">
                    <User className="w-4 h-4 opacity-50 mr-3 shrink-0" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-transparent text-xs focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-80">Work Email</label>
                  <div className="flex items-center px-4 py-3 bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-within:border-indigo-500 rounded-2xl transition-all">
                    <Mail className="w-4 h-4 opacity-50 mr-3 shrink-0" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-transparent text-xs focus:outline-none font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-80">Inquiry Scope</label>
                  <div className="flex items-center px-4 py-3 bg-white/80 border-slate-200 text-slate-900 placeholder:text-slate-400 focus-within:border-indigo-500 rounded-2xl transition-all">
                    <MessageSquare className="w-4 h-4 opacity-50 mr-3 shrink-0 mt-0.5" />
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements..."
                      className="w-full bg-transparent text-xs focus:outline-none font-mono resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold shadow-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Priority Inquiry</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
