'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import Card3DTilt from '@/components/Card3DTilt';
import { TourPackage } from '@/types/tour';
import { Clock, Star, Check, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function TourDetailClient({ tour }: { tour: TourPackage }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onOpenEnquiry={() => setModalOpen(true)} />
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-12 flex-1">
        {/* Banner with 3D Depth */}
        <div className="relative h-[55vh] rounded-3xl overflow-hidden shadow-2xl border border-stone-200">
          <img src={tour.featuredImage} alt={tour.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/40 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 text-white z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-xs px-3.5 py-1.5 rounded-full font-semibold border border-emerald-500/30 shadow-md mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{tour.destination} · {tour.difficulty}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight">
              {tour.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm mt-4 text-stone-200">
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-4 h-4 text-emerald-400" /> {tour.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-amber-300 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {tour.rating} ({tour.reviewCount} verified reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Overview & Pricing Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card space-y-4">
              <h2 className="text-2xl font-serif font-bold text-stone-900">Trip Overview</h2>
              <p className="text-sm text-stone-600 leading-relaxed font-light">{tour.description}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card space-y-5">
              <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" /> Key Highlights
              </h3>
              <ul className="space-y-3">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-stone-700 font-light">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card space-y-5">
              <h3 className="text-xl font-serif font-bold text-stone-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> What&apos;s Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <Card3DTilt maxTilt={6} scale={1.02} glare={true} className="sticky top-28">
              <div className="bg-white p-8 rounded-3xl border border-stone-200/90 shadow-3d-card space-y-6 preserve-3d">
                <div style={{ transform: 'translateZ(10px)' }}>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Total Price Per Person</span>
                  <div className="flex items-baseline gap-2.5 mt-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif text-stone-950">
                      ₹{tour.discountedPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm text-stone-400 line-through">
                      ₹{tour.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="inline-block mt-2 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    Includes all stay, transit & permits
                  </span>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  style={{ transform: 'translateZ(16px)' }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-emerald-800 hover:to-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-glow-emerald transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Enquire For Upcoming Batches
                </button>

                <div className="pt-2 text-center space-y-2" style={{ transform: 'translateZ(10px)' }}>
                  <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-800 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Lead Trip Captain
                  </div>
                  <p className="text-[11px] text-stone-400 font-light">
                    Zero upfront fees required to receive the full day-by-day briefing dossier.
                  </p>
                </div>
              </div>
            </Card3DTilt>
          </div>
        </div>
      </main>
      <Footer />
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefill={{ destination: tour.title }}
      />
      <WhatsAppButton />
    </>
  );
}

