'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Loader2, Sparkles, ShieldCheck } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: { destination?: string; travelMonth?: string; groupSize?: string };
}

export default function EnquiryModal({ isOpen, onClose, prefill }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travelMonth: 'October 2026',
    groupSize: '1',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({
        ...prev,
        destination: prefill.destination || prev.destination,
        travelMonth: prefill.travelMonth || prev.travelMonth,
        groupSize: prefill.groupSize || prev.groupSize,
      }));
    }
  }, [prefill, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-obsidian-950/75 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        className="bg-white/95 backdrop-blur-2xl w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-white/80 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold font-serif text-stone-900">Enquiry Received!</h3>
            <p className="text-sm text-stone-600 max-w-xs mx-auto font-light leading-relaxed">
              Our wilderness captain will connect via WhatsApp or phone within 30 minutes with available batches, inclusions, and custom adjustments.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-emerald-800 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Advance Commitment</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-950">
                Plan Your Expedition
              </h2>
              <p className="text-xs text-stone-500 font-light mt-1">
                Share your dates and preferences. An experienced trip lead will assist you directly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:outline-none bg-stone-50/50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Phone / WhatsApp *</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:outline-none bg-stone-50/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Destination / Route</label>
              <input
                type="text"
                placeholder="e.g. Spiti Valley, Bali, Kedarnath, Ladakh"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 focus:outline-none bg-stone-50/50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Travel Month</label>
                <select
                  value={formData.travelMonth}
                  onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:border-emerald-700 focus:outline-none bg-stone-50/50 cursor-pointer"
                >
                  <option value="Flexible">Flexible</option>
                  <option value="October 2026">October 2026</option>
                  <option value="November 2026">November 2026</option>
                  <option value="December 2026">December 2026</option>
                  <option value="January 2027">January 2027</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Group Size</label>
                <select
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:border-emerald-700 focus:outline-none bg-stone-50/50 cursor-pointer"
                >
                  <option value="1">1 (Solo Traveller)</option>
                  <option value="2">2 (Couple)</option>
                  <option value="3-5">3–5 (Small Group)</option>
                  <option value="6+">6+ (Custom Batch)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>No spam guarantee. Your contact is only shared with your assigned trip lead.</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all mt-3 cursor-pointer shadow-md hover:shadow-glow-emerald disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Transmitting Details...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Request Route Dossier & Callback
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

