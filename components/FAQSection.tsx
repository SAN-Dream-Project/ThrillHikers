'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '@/data/trips';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-100/60 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-emerald-800">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Clarity First</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-stone-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-light max-w-xl mx-auto">
            Honest answers regarding fitness levels, gear recommendations, cancellations, and solo traveler safety.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${
                  isOpen ? 'border-emerald-500/50 shadow-md ring-1 ring-emerald-500/20' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-semibold text-stone-900 text-sm sm:text-base hover:text-emerald-900 cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-emerald-50 text-emerald-800' : 'bg-stone-50 text-stone-400'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-stone-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

