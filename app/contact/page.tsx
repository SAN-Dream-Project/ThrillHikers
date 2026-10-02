'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryModal from '@/components/EnquiryModal';
import Card3DTilt from '@/components/Card3DTilt';
import { Phone, Mail, MapPin, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />
      <main className="max-w-5xl mx-auto px-4 py-20 flex-1 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direct Line</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-stone-950">
            Talk Trips With Us
          </h1>
          <p className="text-sm text-stone-600 font-light leading-relaxed">
            Have questions about an upcoming batch, altitude acclimatization, difficulty ratings, or bespoke private groups? Our trip leads are on call 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card3DTilt maxTilt={6} scale={1.02} glare={true}>
            <a
              href="tel:+919557005400"
              className="block bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card hover:shadow-3d-hover hover:border-emerald-400 text-center space-y-3 transition-all duration-300 preserve-3d"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 mx-auto"
                style={{ transform: 'translateZ(16px)' }}
              >
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 font-serif text-xl" style={{ transform: 'translateZ(12px)' }}>
                Direct Call
              </h3>
              <p className="text-sm font-semibold text-emerald-900">+91 95570 05400</p>
              <span className="text-[11px] text-stone-400 block font-light">Mon–Sun, 9 AM – 9 PM IST</span>
            </a>
          </Card3DTilt>

          <Card3DTilt maxTilt={6} scale={1.02} glare={true}>
            <a
              href="mailto:hello@thrillhikers.com"
              className="block bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card hover:shadow-3d-hover hover:border-emerald-400 text-center space-y-3 transition-all duration-300 preserve-3d"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-800 mx-auto"
                style={{ transform: 'translateZ(16px)' }}
              >
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 font-serif text-xl" style={{ transform: 'translateZ(12px)' }}>
                Email Briefings
              </h3>
              <p className="text-sm font-semibold text-emerald-900">hello@thrillhikers.com</p>
              <span className="text-[11px] text-stone-400 block font-light">Detailed responses within 2 hours</span>
            </a>
          </Card3DTilt>

          <Card3DTilt maxTilt={6} scale={1.02} glare={true}>
            <a
              href="https://wa.me/919557005400"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card hover:shadow-3d-hover hover:border-emerald-400 text-center space-y-3 transition-all duration-300 preserve-3d"
            >
              <div
                className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#25D366] mx-auto"
                style={{ transform: 'translateZ(16px)' }}
              >
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-stone-900 font-serif text-xl" style={{ transform: 'translateZ(12px)' }}>
                WhatsApp Desk
              </h3>
              <p className="text-sm font-semibold text-emerald-900">+91 95570 05400</p>
              <span className="text-[11px] text-stone-400 block font-light">Fastest response channel</span>
            </a>
          </Card3DTilt>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card text-center space-y-2">
          <MapPin className="w-7 h-7 text-emerald-800 mx-auto mb-1" />
          <h4 className="font-bold text-stone-900 font-serif text-lg">Registered Operating Base</h4>
          <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto">
            B9, Orchid Petals, Sector 49, Gurgaon 122018, Haryana, India
          </p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-medium pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Govt. Registered Adventure Tour Operator</span>
          </div>
        </div>
      </main>
      <Footer />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <WhatsAppButton />
    </>
  );
}

